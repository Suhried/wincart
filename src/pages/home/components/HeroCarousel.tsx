
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroCarousel() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=luxurious%20elegant%20perfume%20bottles%20arranged%20on%20pristine%20white%20marble%20surface%20with%20soft%20golden%20lighting%20premium%20fragrance%20collection%20sophisticated%20beauty%20photography%20clean%20minimalist%20composition%20warm%20ambient%20glow%20refined%20product%20display%20high-end%20cosmetics%20aesthetic&width=1920&height=1080&seq=heromain2025&orientation=landscape"
          alt="Wincart Perfumes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-serif mb-4 tracking-wide"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome to
            </motion.h2>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Wincart
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-4xl font-serif text-amber-200 mb-4 drop-shadow-lg"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Your Destination for Signature Scents
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Discover our exquisite collection of luxury fragrances crafted for those who appreciate the art of perfumery
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/shop/all"
              className="inline-block px-12 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-lg rounded-full hover:scale-105 transition-transform font-medium whitespace-nowrap shadow-2xl"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2 tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="ri-arrow-down-line text-2xl"></i>
        </motion.div>
      </motion.div>
    </section>
  );
}
