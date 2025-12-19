import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  family: string;
  image: string;
  rating: number;
}

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  products: Product[];
  category: string;
  theme: 'light' | 'dark';
}

export default function ProductShowcase({ title, subtitle, products, category, theme }: ProductShowcaseProps) {
  const bgColor = theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-primary-50 to-primary-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <i className={`ri-sparkling-2-line text-4xl ${theme === 'dark' ? 'text-rose-gold' : 'text-primary-600'}`}></i>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${textColor}`}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${subtitleColor} max-w-2xl mx-auto`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" data-product-shop>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className={`block ${cardBg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs uppercase tracking-wider rounded-full mb-3">
                    {product.family}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'ri-star-fill'
                              : 'ri-star-line'
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className={`ml-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="mt-4 w-full py-3 bg-gray-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap">
                    Quick View
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to={`/shop/${category}`}
            className={`inline-block px-8 py-4 border-2 ${
              theme === 'dark'
                ? 'border-white text-white hover:bg-white hover:text-gray-900'
                : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
            } rounded-full transition-colors font-medium whitespace-nowrap`}
          >
            View All {title}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}