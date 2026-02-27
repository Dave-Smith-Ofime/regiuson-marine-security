import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/2348169703636?text=${encodeURIComponent("Hello, I would like to inquire about your maritime services.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
