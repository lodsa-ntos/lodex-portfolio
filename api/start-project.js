import formidable from "formidable";
import nodemailer from "nodemailer";
import process from "process";

export const config = {
  api: {
    // Desativa o processamento padrão do corpo da requisição (pedido)
    // Impede o bodyParser interno de processar multipart/form-data
    bodyParser: false, 
  },
};

export default async function handlerProject(req, res) {
    
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    const form = formidable({ multiples: false, keepExtensions: true });

    // Função auxiliar para obter o valor de um campo (não depende dados assincronos)
    const getFieldValue = (f) => (Array.isArray(f) ? f[0] : f || "");

    try {
        const formParse = () =>
            new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                else resolve([fields, files]);
            });
        });

        const [fields] = await formParse();

        // Obtém os valores dos campos, garantindo que são strings
        const nome = getFieldValue(fields.nome).trim(); 
        const email = getFieldValue(fields.email).trim();
        const mensagem = getFieldValue(fields.message).trim();
        const tipoProjeto = getFieldValue(fields.tipoProjeto).trim();
        const prazoIdeal = getFieldValue(fields.prazoIdeal).trim();
        const orcamentoEstimado = getFieldValue(fields.orcamentoEstimado).trim();
        const referencia = getFieldValue(fields.referencia).trim();

        // Validação dos campos obrigatórios
        const name = `${nome}`;
        if (!name || !email  || !mensagem || !tipoProjeto ) {
            return res.status(400).json({ error: "Nome, email, tipo projeto e mensagem são obrigatórios." });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: "Email inválido." });
        }

        console.log("Fields recebidos:", fields);

        // Configuração do transporte de e-mail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Construção do e-mail
        const mailOptions = {
            from: `"${name} via LodeX Studio" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Estruturação de projeto – ${tipoProjeto || "sem tipo definido" }`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Pedido de Estruturação de Projeto</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong><br>${mensagem}</p>
                <hr />
                <p><strong>Tipo de projeto:</strong> ${tipoProjeto || "-"}</p>
                <p><strong>Prazo ideal:</strong> ${prazoIdeal || "-"}</p>
                <p><strong>Orçamento estimado:</strong> ${orcamentoEstimado || "-"}</p>
                <p><strong>Link de referência:</strong> ${referencia || "-"}</p>
                <p style="font-size: 12px; color: #999;">Recebido via formulário de estruturação em lodexstudio.com/conversar</p>
            </div>
            `,
        };

        // Envia o e-mail
        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ 
                success: true, 
                message: "Mensagem enviada com sucesso!" 
            });
        } catch (error) {
            console.error("Erro ao enviar o e-mail:", error);
            return res.status(500).json({ error: "Erro ao enviar a messagem" });
        }
    } catch (err) {
        console.log("Erro ao processar o formulário:", err);
        return res.status(400).json({ error: "Erro ao processar o formulário" });
    }
}