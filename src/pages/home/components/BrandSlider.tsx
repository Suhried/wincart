import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const brands = [
  {
    id: 1,
    name: 'Chanel',
    logo: 'https://readdy.ai/api/search-image?query=elegant%20chanel%20perfume%20brand%20logo%20on%20pure%20white%20background%20minimalist%20luxury%20fashion%20brand%20identity%20sophisticated%20typography%20premium%20cosmetics%20branding%20clean%20simple%20design&width=300&height=200&seq=brand1logo&orientation=landscape',
  },
  {
    id: 2,
    name: 'Dior',
    logo: 'https://readdy.ai/api/search-image?query=sophisticated%20dior%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20fashion%20house%20branding%20elegant%20typography%20premium%20beauty%20brand%20identity%20clean%20minimalist%20design&width=300&height=200&seq=brand2logo&orientation=landscape',
  },
  {
    id: 3,
    name: 'Tom Ford',
    logo: 'https://readdy.ai/api/search-image?query=modern%20tom%20ford%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20designer%20branding%20bold%20typography%20premium%20fragrance%20brand%20identity%20sleek%20minimalist%20design&width=300&height=200&seq=brand3logo&orientation=landscape',
  },
  {
    id: 4,
    name: 'Gucci',
    logo: 'https://readdy.ai/api/search-image?query=iconic%20gucci%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20italian%20fashion%20branding%20elegant%20typography%20premium%20beauty%20brand%20identity%20clean%20sophisticated%20design&width=300&height=200&seq=brand4logo&orientation=landscape',
  },
  {
    id: 5,
    name: 'Versace',
    logo: 'https://readdy.ai/api/search-image?query=distinctive%20versace%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20italian%20fashion%20house%20branding%20bold%20typography%20premium%20fragrance%20brand%20identity%20elegant%20design&width=300&height=200&seq=brand5logo&orientation=landscape',
  },
  {
    id: 6,
    name: 'Armani',
    logo: 'https://readdy.ai/api/search-image?query=refined%20armani%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20italian%20designer%20branding%20sophisticated%20typography%20premium%20beauty%20brand%20identity%20minimalist%20elegant%20design&width=300&height=200&seq=brand6logo&orientation=landscape',
  },
  {
    id: 7,
    name: 'Burberry',
    logo: 'https://readdy.ai/api/search-image?query=classic%20burberry%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20british%20fashion%20branding%20elegant%20typography%20premium%20fragrance%20brand%20identity%20clean%20sophisticated%20design&width=300&height=200&seq=brand7logo&orientation=landscape',
  },
  {
    id: 8,
    name: 'Prada',
    logo: 'https://readdy.ai/api/search-image?query=sleek%20prada%20perfume%20brand%20logo%20on%20pure%20white%20background%20luxury%20italian%20fashion%20house%20branding%20minimalist%20typography%20premium%20beauty%20brand%20identity%20modern%20clean%20design&width=300&height=200&seq=brand8logo&orientation=landscape',
  },
];

export default function BrandSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the brands for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fragrances from the world's most prestigious perfume houses
          </p>
        </motion.div>

        <div className="relative">
          {/* Infinite Scrolling Container */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * brands.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 5,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 w-64"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 h-48 flex items-center justify-center border border-gray-100 hover:border-rose-gold hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="md:hidden text-center mt-6 text-sm text-gray-500"
        >
          <i className="ri-drag-move-line mr-2"></i>
          Hover to pause
        </motion.div>
      </div>
    </section>
  );
}
