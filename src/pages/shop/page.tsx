import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menProducts, womenProducts, unisexProducts, allProducts } from '../../mocks/products';

export default function ShopPage() {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [filterFamily, setFilterFamily] = useState('all');

  const products = useMemo(() => {
    let filtered = allProducts;
    
    if (category === 'men') filtered = menProducts;
    else if (category === 'women') filtered = womenProducts;
    else if (category === 'unisex') filtered = unisexProducts;

    if (filterFamily !== 'all') {
      filtered = filtered.filter(p => p.family === filterFamily);
    }

    const sorted = [...filtered];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);

    return sorted;
  }, [category, sortBy, filterFamily]);

  const families = ['all', 'Woody', 'Fresh', 'Floral', 'Oriental', 'Spicy', 'Citrus', 'Aromatic', 'Fruity', 'Gourmand'];

  const categoryTitle = category === 'men' ? 'Men' : category === 'women' ? 'Women' : category === 'unisex' ? 'Unisex' : 'All Fragrances';

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            {categoryTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-200"
          >
            Discover our curated collection of luxury fragrances
          </motion.p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {families.map((family) => (
                <button
                  key={family}
                  onClick={() => setFilterFamily(family)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    filterFamily === family
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {family === 'all' ? 'All' : family}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-gray-900"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8" data-product-shop>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="block bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-6">
                    <div className="inline-block px-1.5 md:px-3 py-0.5 md:py-1 bg-primary-100 text-primary-700 text-[10px] md:text-xs uppercase tracking-wider rounded-full mb-1.5 md:mb-3">
                      {product.family}
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-1.5 md:mb-3">
                      <div className="flex items-center text-yellow-400 text-[10px] md:text-sm">
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
                      <span className="ml-1 md:ml-2 text-[10px] md:text-xs text-gray-500">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg md:text-2xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-1 md:ml-2 text-[10px] md:text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="mt-2 md:mt-4 w-full py-2 md:py-3 bg-gray-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs md:text-base font-medium whitespace-nowrap">
                      Quick View
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}