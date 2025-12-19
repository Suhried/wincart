import { useState, useRef, useEffect } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastScrollLeftRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);
  const bgColor = theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-primary-50 to-primary-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  
  // Duplicate products for seamless infinite scroll on mobile
  const duplicatedProducts = [...products, ...products];
  const cardWidth = 200;
  const gap = 16;
  const totalWidth = (cardWidth + gap) * products.length;

  // Auto-scroll with native scrolling
  useEffect(() => {
    if (!scrollRef.current || isPaused || isTouching) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const container = scrollRef.current;
    let startTime: number | null = null;
    const duration = 20000; // 20 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      const scrollPosition = progress * totalWidth;
      isProgrammaticScrollRef.current = true;
      container.scrollLeft = scrollPosition;
      // Reset flag after a brief moment
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 50);

      if (!isPaused && !isTouching) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isTouching, totalWidth]);

  // Detect manual scrolling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Ignore programmatic scrolling
      if (isProgrammaticScrollRef.current) {
        lastScrollLeftRef.current = container.scrollLeft;
        return;
      }
      
      // User is manually scrolling
      if (!isTouching && !isPaused) {
        setIsPaused(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsPaused(false);
        }, 3000);
      }
      
      lastScrollLeftRef.current = container.scrollLeft;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isTouching, isPaused]);

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

        {/* Mobile Auto-scrolling Carousel with Touch Scroll */}
        <div className="md:hidden mb-12 relative">
          <style>{`
            .product-scroll-wrapper::-webkit-scrollbar {
              display: none;
            }
            .product-scroll-wrapper {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div 
            ref={scrollRef}
            className="product-scroll-wrapper overflow-x-auto snap-x snap-mandatory"
            style={{ 
              WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={() => {
              setIsTouching(true);
              setIsPaused(true);
            }}
            onTouchEnd={() => {
              setIsTouching(false);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-4"
              style={{ width: 'max-content' }}
            >
              {duplicatedProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[200px] snap-start group">
                  <Link to={`/product/${product.id}`} className={`block ${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          SALE
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="inline-block px-1.5 py-0.5 bg-primary-100 text-primary-700 text-[10px] uppercase tracking-wider rounded-full mb-1.5">
                        {product.family}
                      </div>
                      <h3 className={`text-sm font-semibold mb-1.5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-1.5">
                        <div className="flex items-center text-yellow-400 text-[10px]">
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
                        <span className={`ml-1 text-[10px] ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {product.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="ml-1 text-[10px] text-gray-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Products Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12" data-product-shop>
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