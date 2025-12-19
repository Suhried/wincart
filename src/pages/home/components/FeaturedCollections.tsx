import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: "Women's Collection",
    subtitle: 'Elegant & Feminine',
    image: 'https://readdy.ai/api/search-image?query=elegant%20feminine%20lifestyle%20scene%20with%20soft%20pink%20roses%20and%20silk%20fabric%20on%20blush%20gradient%20background%20luxury%20beauty%20aesthetic%20delicate%20floral%20arrangement%20sophisticated%20feminine%20composition%20dreamy%20romantic%20lighting%20premium%20fashion%20photography&width=600&height=900&seq=coll1new&orientation=portrait',
    link: '/shop/women',
    tall: true,
  },
  {
    id: 2,
    title: "Men's Collection",
    subtitle: 'Bold & Sophisticated',
    image: 'https://readdy.ai/api/search-image?query=masculine%20luxury%20scene%20with%20dark%20leather%20texture%20and%20wood%20grain%20on%20charcoal%20gradient%20background%20sophisticated%20mens%20aesthetic%20premium%20materials%20composition%20moody%20dramatic%20lighting%20elegant%20masculine%20style%20refined%20product%20photography&width=600&height=400&seq=coll2new&orientation=landscape',
    link: '/shop/men',
  },
  {
    id: 3,
    title: 'Unisex Fragrances',
    subtitle: 'Modern & Versatile',
    image: 'https://readdy.ai/api/search-image?query=minimalist%20modern%20composition%20with%20geometric%20shapes%20on%20soft%20beige%20and%20white%20gradient%20background%20clean%20contemporary%20aesthetic%20simple%20elegant%20design%20premium%20unisex%20style%20sophisticated%20minimalism%20neutral%20tones%20refined%20product%20photography&width=600&height=400&seq=coll3new&orientation=landscape',
    link: '/shop/unisex',
  },
  {
    id: 4,
    title: 'Best Sellers',
    subtitle: 'Customer Favorites',
    image: 'https://readdy.ai/api/search-image?query=curated%20luxury%20flat%20lay%20with%20elegant%20perfume%20bottles%20on%20warm%20cream%20gradient%20background%20sophisticated%20product%20arrangement%20premium%20beauty%20photography%20refined%20composition%20soft%20natural%20lighting%20elegant%20still%20life%20aesthetic&width=600&height=400&seq=coll4new&orientation=landscape',
    link: '/shop/all',
  },
  {
    id: 5,
    title: 'New Arrivals',
    subtitle: 'Latest Additions',
    image: 'https://readdy.ai/api/search-image?query=hero%20perfume%20bottle%20with%20dramatic%20golden%20backlighting%20on%20champagne%20gradient%20background%20luxury%20fragrance%20photography%20premium%20product%20shot%20elegant%20lighting%20sophisticated%20beauty%20aesthetic%20warm%20atmospheric%20glow%20refined%20composition&width=600&height=400&seq=coll5new&orientation=landscape',
    link: '/shop/all',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Women's Collection - Row 1, Col 1 on mobile, Tall Card on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2"
          >
            <Link to={collections[0].link} className="group block relative h-48 md:h-full md:min-h-[600px] rounded-2xl overflow-hidden">
              <img
                src={collections[0].image}
                alt={collections[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Women
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                <h3 className="text-lg md:text-3xl font-serif font-bold mb-1 md:mb-2">{collections[0].title}</h3>
                <p className="text-xs md:text-sm mb-2 md:mb-4 text-gray-200 hidden md:block">{collections[0].subtitle}</p>
                <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
                  <span className="whitespace-nowrap">Shop Women</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Men's Collection - Row 1, Col 2 on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to={collections[1].link} className="group block relative h-48 md:h-72 rounded-2xl overflow-hidden">
              <img
                src={collections[1].image}
                alt={collections[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Men
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-2xl font-serif font-bold mb-1">{collections[1].title}</h3>
                <p className="text-xs mb-2 md:mb-3 text-gray-200 hidden md:block">{collections[1].subtitle}</p>
                <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
                  <span className="whitespace-nowrap">Shop Men</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Unisex Fragrances - Row 2, Col 1 on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to={collections[2].link} className="group block relative h-48 md:h-72 rounded-2xl overflow-hidden">
              <img
                src={collections[2].image}
                alt={collections[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Unisex
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-2xl font-serif font-bold mb-1">{collections[2].title}</h3>
                <p className="text-xs mb-2 md:mb-3 text-gray-200 hidden md:block">{collections[2].subtitle}</p>
                <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
                  <span className="whitespace-nowrap">Shop Unisex</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Best Sellers - Row 2, Col 2 on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to={collections[3].link} className="group block relative h-48 md:h-72 rounded-2xl overflow-hidden">
              <img
                src={collections[3].image}
                alt={collections[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Popular
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-2xl font-serif font-bold mb-1">{collections[3].title}</h3>
                <p className="text-xs mb-2 md:mb-3 text-gray-200 hidden md:block">{collections[3].subtitle}</p>
                <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
                  <span className="whitespace-nowrap">View All</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* New Arrivals - Row 3, spans full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 md:col-span-1"
          >
            <Link to={collections[4].link} className="group block relative h-48 md:h-72 rounded-2xl overflow-hidden">
              <img
                src={collections[4].image}
                alt={collections[4].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  New
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-2xl font-serif font-bold mb-1">{collections[4].title}</h3>
                <p className="text-xs mb-2 md:mb-3 text-gray-200 hidden md:block">{collections[4].subtitle}</p>
                <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
                  <span className="whitespace-nowrap">Explore New</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}