import formidable from "formidable";
import nodemailer from "nodemailer";
import process from "process";

export const config = {
  api: {
    // Desativa o processamento padrão do corpo da requisição (pedido)
    bodyParser: false, 
  },
};

export default async function handler(req, res) {
    
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    // Função auxiliar para obter o valor de um campo (não depende dados assincronos)
    const getFieldValue = (f) => Array.isArray(f) ? f[0] : f;

    const form = formidable({ multiples: false, keepExtensions: true });

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
        const nomeCompleto = getFieldValue(fields.nomeCompleto);
        const email = getFieldValue(fields.email);
        const message = getFieldValue(fields.message);
        const funcao = getFieldValue(fields.funcao);

        // Verifica se o todo os campos obrigatórios foram preenchidos
        if (!nomeCompleto || !email  || !message ) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
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

        // Configuração do e-mail
        const mailOptions = {
            from: '"Lodex Studio" <noreply@lodexstudio.com>',
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Nova mensagem de: ${nomeCompleto || " " }`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Está a pedir informações de serviço para: ${funcao || "-"}</h2>
                <p><strong>Nome:</strong> ${nomeCompleto}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong><br>${message}</p>
                <hr/>
                <p style="font-size: 12px; color: #888;">
                    Recebido via <a href="https://www.lodexstudio.com/servicos">Lodex Studio – ${funcao || "-"}</a>
                </p>
            </div>`,
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
            return res.status(500).json({ error: "Erro ao enviar a mensagem" });
        }
    } catch (err) {
        console.log("Erro ao processar o formulário:", err);
        return res.status(400).json({ error: "Erro ao processar o formulário" });
    }
}