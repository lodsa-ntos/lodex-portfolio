import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useLocation } from "react-router-dom";

function Whatsapp() {
  const location = useLocation();
  const allowedPaths = ["/", "/case-studies"];

  if (!allowedPaths.includes(location.pathname)) return null;

  return (
    <div className="hidden md:flex 2xl:flex">
      <FloatingWhatsApp
        phoneNumber="+351935895551"
        accountName="LodeX Studio"
        avatar="/about-photo.jpg"
        statusMessage="Atendimento direto comigo"
        chatMessage={`Boas! 👋 \nSou o Lod, da Lodex Studio. \nPrecisas de ajuda com o teu site ou queres começar um?`}
        placeholder="Escreve aqui uma dúvida..."
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default Whatsapp;
