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

function gerarAssuntoEmail({nome, tipoProjeto, prazoIdeal, orcamentoEstimadoRaw, orcamentoEstimado}) {

    const nomeFinal = nome || "Nome não especificado";
    const tipo = tipoProjeto ? tipoProjeto.charAt(0).toUpperCase() + tipoProjeto.slice(1) : "Tipo indefinido";
    const prazo = prazoIdeal || "Prazo não especificado";
    const orcamento =  orcamentoEstimado || "Orçamento não informado";

    // Define prioridade com base no orçamento bruto e prazo
    let prefixo = "📌"; // padrão

    const urgente = prazo.toLowerCase().includes("1 semana") || prazo.toLowerCase().includes("urgente");

    const altoValor = orcamentoEstimadoRaw === "mais800";

    if (altoValor && urgente) {
        prefixo = "🔥🚀"; // Muito relevante
    } else if (altoValor) {
        prefixo = "🚀"; // Alta prioridade por valor
    } else if (urgente) {
        prefixo = "⏰"; // Prioridade por prazo
    }

    return `${prefixo} Novo projeto: ${tipo} – ${nomeFinal} (${prazo}, ${orcamento})`;
}

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

        const tipoProjetoMap = {
            landing: "Landing pages sob medida",
            website: "Website completo",
            portfolio: "Portfólio",
            redesign: "Redesign",
            outro: "Outro / Ainda não sei"
        };

        const orcamentoMap = {
            ate300: "Até 300€",
            entre300e500: "300€ – 500€",
            entre500e800: "500€ – 800€",
            mais800: "800€ ou mais",
            aindaNaoSei: "Ainda não sei"
        };

        const prazoIdealMap = {
            naoTenhoPressa: "Não tenho pressa.",
            duasSemanas: "Dentro de 2 semanas.",
            umMes: "Dentro de 1 mês.",
            urgencia: "Tenho urgência."
        }

        // Obtém os valores dos campos, garantindo que são strings
        const nomeCompleto = getFieldValue(fields.nomeCompleto).trim(); 
        const email = getFieldValue(fields.email).trim();
        const mensagem = getFieldValue(fields.messagem).trim();
        const referencia = getFieldValue(fields.referencia).trim();
        const tipoProjetoRaw = getFieldValue(fields.tipoProjeto).trim();
        const prazoIdealRaw = getFieldValue(fields.prazoIdeal).trim();
        const orcamentoEstimadoRaw = getFieldValue(fields.orcamentoEstimado).trim();
        const tipoProjeto = tipoProjetoMap[tipoProjetoRaw] || "-";
        const orcamentoEstimado = orcamentoMap[orcamentoEstimadoRaw] || "-";
        const prazoIdeal = prazoIdealMap[prazoIdealRaw] || "-";

        // Validação dos campos obrigatórios
        if (!nomeCompleto || !email  || !mensagem || !tipoProjeto ) {
            return res.status(400).json({ error: "Nome, email, tipo projeto e mensagem são obrigatórios." });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: "Email inválido." });
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

        const assunto = gerarAssuntoEmail({
            nome: nomeCompleto,
            tipoProjeto,
            prazoIdeal,
            orcamentoEstimadoRaw,
            orcamentoEstimado,
        });

        // Construção do e-mail
        const mailOptions = {
            from: '"Lodex Studio" <noreply@lodexstudio.com>',
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: assunto,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>${assunto}</h2>
                <p><strong>Nome:</strong> ${nomeCompleto}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Tipo de projeto:</strong> ${tipoProjeto || "-"}</p>
                <p><strong>Prazo ideal:</strong> ${prazoIdeal || "-"}</p>
                <p><strong>Orçamento estimado:</strong> ${orcamentoEstimado}</p>
                <p><strong>Link de referência:</strong> ${referencia || "-"}</p>
                <hr />
                 <p><strong>Mensagem:</strong><br>${mensagem}</p>
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