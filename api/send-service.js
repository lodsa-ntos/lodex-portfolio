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
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Está a pedir informações de serviço para: ${funcao || "-"}</h2>
                <p><strong>Nome:</strong> ${nomeCompleto}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong><br>${message}</p>
                <hr />
                <p style="font-size: 12px; color: #888;">
                Recebido via <a href="https://www.lodexstudio.com/servicos">Lodex Studio – ${funcao || "-"}</a>
                </p>
                <br />
                <table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
                <tr>
                    <td style="padding-bottom: 8px;">
                    <strong style="font-size: 16px; color: #000;">Lodney Santos</strong><br />
                    Frontend Developer & UI Designer<br />
                    <span style="color: #666;">LodeX Studio — Websites, Landings, Portfólios e Redesign</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding-bottom: 10px;">
                    <img src="https://www.lodexstudio.com/lodexstudio-logo.svg" alt="Lodex Studio Logo" width="120" style="border: none;" />
                    </td>
                </tr>
                <tr>
                    <td>
                    📩 <a href="mailto:noreply@lodexstudio.com" style="color: #1a73e8;">noreply@lodexstudio.com</a><br />
                    🌐 <a href="https://www.lodexstudio.com" style="color: #1a73e8;">www.lodexstudio.com</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top: 10px;">
                    <span style="color: #666; font-size: 12px;">
                        Feedbacks espontâneos são sempre bem-vindos. Obrigado por confiar.
                    </span>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top: 12px;">
                    <a href="https://wa.me/351912345678" style="margin-right: 8px;">
                        <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" width="24" />
                    </a>
                    <a href="https://instagram.com/lodex.studio" style="margin-right: 8px;">
                        <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" width="24" />
                    </a>
                    <a href="https://github.com/lodexstudio" style="margin-right: 8px;">
                        <img src="https://cdn-icons-png.flaticon.com/24/733/733553.png" alt="GitHub" width="24" />
                    </a>
                    <a href="https://linkedin.com/in/lodneysantos">
                        <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" width="24" />
                    </a>
                    </td>
                </tr>
                </table>
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
            return res.status(500).json({ error: "Erro ao enviar a mensagem" });
        }
    } catch (err) {
        console.log("Erro ao processar o formulário:", err);
        return res.status(400).json({ error: "Erro ao processar o formulário" });
    }
}