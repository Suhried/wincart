import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProducts } from '../../mocks/products';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.family.toLowerCase().includes(lowerQuery) ||
        product.notes.some((note) => note.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-serif font-bold mb-2">
              Search Results for "{query}"
            </h1>
            <p className="text-gray-600">
              {results.length} {results.length === 1 ? 'product' : 'products'} found
            </p>
          </motion.div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-product-shop>
              {results.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs uppercase tracking-wider rounded-full mb-3">
                        {product.family}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
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
                        <span className="ml-2 text-xs text-gray-500">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg mb-4">No products found for "{query}"</p>
              <Link
                to="/shop/all"
                className="text-rose-gold hover:underline whitespace-nowrap"
              >
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}