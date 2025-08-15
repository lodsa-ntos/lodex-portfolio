import formidable from "formidable";
import nodemailer from "nodemailer";
import process from "process";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse form data
    const form = formidable({});
    const [fields] = await form.parse(req);
    
    const getFieldValue = (field) => {
      return Array.isArray(field) ? field[0] : field || "";
    };

    const email = getFieldValue(fields.email).trim();

    // Validate email
    if (!email) {
      return res.status(400).json({ error: "Email é obrigatório" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    console.log("Fields recebidos:", fields);

    // Configure email transporter
    const transporter = nodemailer.createTransporter({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@lodexstudio.com",
        pass: process.env.ZOHO_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: '"LodeX Studio Newsletter" <noreply@lodexstudio.com>',
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nova subscrição newsletter - ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nova subscrição na newsletter</h2>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">
            Recebido via <a href="https://www.lodexstudio.com/blog">LodeX Studio - Newsletter</a>
          </p>
        </div>
      `,
    };

    // Send confirmation email to subscriber
    const confirmationEmail = {
      from: '"LodeX Studio" <noreply@lodexstudio.com>',
      to: email,
      subject: "Bem-vindo à Newsletter LodeX Studio! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Obrigado por subscrever! 🎉</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
              Olá! 👋
            </p>
            
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
              Bem-vindo à newsletter da <strong>LodeX Studio</strong>! Agora vais receber:
            </p>
            
            <ul style="font-size: 16px; color: #555; line-height: 1.8; padding-left: 20px;">
              <li>🚀 Tutoriais práticos de desenvolvimento web</li>
              <li>💡 Tips de UI/UX Design</li>
              <li>📱 Novidades sobre projetos e tecnologias</li>
              <li>🎨 Bastidores dos projetos da LodeX Studio</li>
            </ul>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Prometemos:</strong> Apenas conteúdo útil, sem spam. 
                Podes cancelar a subscrição a qualquer momento.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://lodexstudio.com" style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                Visitar LodeX Studio
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
            <p>
              LodeX Studio | Sacavém, Lisboa, Portugal<br>
              <a href="https://lodexstudio.com" style="color: #667eea;">www.lodexstudio.com</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationEmail);

    return res.status(200).json({ 
      success: true, 
      message: "Subscrição realizada com sucesso! Verifica o teu email." 
    });

  } catch (error) {
    console.error("Newsletter signup error:", error);
    return res.status(500).json({ error: "Erro ao processar subscrição" });
  }
}
