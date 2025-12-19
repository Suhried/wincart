import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary-100 via-primary-50 to-sage-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://readdy.ai/api/search-image?query=elegant%20luxury%20perfume%20ingredients%20composition%20with%20flowers%20spices%20vanilla%20pods%20and%20fragrance%20bottles%20on%20warm%20cream%20background%20artistic%20flat%20lay%20photography%20with%20soft%20grain%20texture%20sophisticated%20beauty%20still%20life&width=1200&height=600&seq=newsletter1&orientation=landscape"
            alt="Fragrance Ingredients"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-relaxed mb-2">
            Join our <span className="font-semibold italic text-gray-900">exclusive</span> fragrance club
          </h2>
          <p className="text-4xl md:text-5xl font-light text-gray-700 leading-relaxed mb-2">
            and discover your <span className="font-semibold italic text-gray-900">signature</span> scent
          </p>
          <p className="text-4xl md:text-5xl font-light text-gray-700 leading-relaxed">
            with personalized recommendations
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button className="px-12 py-5 bg-black text-white rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
            Join Our Fragrance Club
          </button>
        </motion.div>
      </div>
    </section>
  );
}