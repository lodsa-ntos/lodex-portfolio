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
            host: "smtp.zoho.eu",
            port: 465, // SSL
            secure: true,
            auth: {
                user: "noreply@lodexstudio.com",
                pass: process.env.ZOHO_PASS,
            },
        });

        // Configuração do e-mail
        const mailOptions = {
            from: '"Lodex Studio" <noreply@lodexstudio.com>',
            to: process.env.EMAIL_TO,
            replyTo: `${nomeCompleto} <${email}>`,
            subject: `Novo pedido de informação – ${funcao || "Serviço"}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
                <h2 style="margin-bottom: 0.5rem;">Pedido de informação para: ${funcao || "-"}</h2>

                <p><strong>Nome:</strong> ${nomeCompleto}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">${message}</p>

                <hr style="margin: 2rem 0;" />

                <div style="font-size: 14px; color: #555;">
                <p style="margin: 0;">Com os melhores cumprimentos,</p>
                <p style="margin: 0.2rem 0;"><strong>Lodney Santos</strong></p>
                <p style="margin: 0.2rem 0;">Frontend Developer & UI Designer</p>
                <p style="margin: 0.2rem 0;">
                    <a href="https://www.lodexstudio.com" target="_blank" style="color: #1a73e8; text-decoration: none;">www.lodexstudio.com</a>
                </p>
                <p style="margin: 0.2rem 0;">
                    <a href="mailto:noreply@lodexstudio.com" style="color: #1a73e8; text-decoration: none;">noreply@lodexstudio.com</a>
                </p>
                <img src="https://lodexstudio.com/lodexstudio-logo.svg" alt="Lodex Studio Logo" width="120" style="margin-top: 12px;" />
                </div>

                <hr style="margin: 2rem 0;" />

                <p style="font-size: 12px; color: #888;">
                Este e-mail foi enviado automaticamente através do formulário da página de serviços da 
                <a href="https://www.lodexstudio.com/servicos" target="_blank" style="color: #888;">Lodex Studio</a>.
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