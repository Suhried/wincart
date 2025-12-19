
import { motion } from 'framer-motion';

interface FloatingChatButtonsProps {
  messengerLink?: string;
  whatsappNumber?: string;
}

export default function FloatingChatButtons({
  messengerLink = 'https://m.me/yourpage',
  whatsappNumber = '1234567890'
}: FloatingChatButtonsProps) {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        title="Chat on WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </motion.a>

      {/* Messenger Button */}
      <motion.a
        href={messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        title="Chat on Messenger"
      >
        <i className="ri-messenger-line text-2xl"></i>
      </motion.a>
    </div>
  );
}
