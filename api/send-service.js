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

    const form = formidable({ multiples: false, keepExtensions: true });

    try {
        const formParse = () =>
            new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                    else resolve([fields, files]);
            });
        });

        const [fields, files] = await formParse();

        // Função auxiliar para obter o valor do campo, considerando que pode ser um array
        // ou um único valor
        const getFieldValue = (f) => Array.isArray(f) ? f[0] : f;

        // Obtém os valores dos campos, garantindo que são strings
        const nomeCompleto = getFieldValue(fields.nomeCompleto);
        const email = getFieldValue(fields.email);
        const message = getFieldValue(fields.message);
        const funcao = getFieldValue(fields.funcao);

        // Verifica se o todo os campos obrigatórios foram preenchidos
        const name = `${nomeCompleto}`;
        if (!name || !email  || !message ) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        console.log("Fields recebidos:", fields);
        console.log("Files recebidos:", files);

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
            from: `"${name} via Lodex Studio" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Nova mensagem de: ${name || " " }`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>Está a candidatar-se para: ${funcao}</h2
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong><br>${message}</p>
                <hr/>
                
                <p style="font-size: 12px; color: #888;">
                    Recebido via <a href="https://www.lodexstudio.com/servicos"> LodeX Studio - ${funcao}</a>
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