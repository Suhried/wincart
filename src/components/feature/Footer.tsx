import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary-100">WINCART</h3>
            <p className="text-sm text-primary-200 leading-relaxed mb-4">
              Discover the art of luxury fragrances. We curate the finest perfumes from around the world to bring elegance and sophistication to your collection.
            </p>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-primary-300 mb-4 font-semibold">
              STAY CONNECTED
            </h4>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-primary-400 py-2 pr-10 text-sm text-white placeholder-primary-400 outline-none focus:border-rose-gold transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-rose-gold hover:text-primary-200 transition-colors whitespace-nowrap"
                >
                  <i className="ri-arrow-right-line text-lg"></i>
                </button>
              </div>
              <p className="text-xs text-primary-400">
                Subscribe for exclusive offers. Read our{' '}
                <a href="#" className="underline text-rose-gold whitespace-nowrap">
                  privacy policy
                </a>
              </p>
            </form>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-primary-300 mb-4 font-semibold">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shop/all"
                  className="text-sm text-primary-100 hover:text-rose-gold transition-colors whitespace-nowrap"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-100 hover:text-rose-gold transition-colors whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-100 hover:text-rose-gold transition-colors whitespace-nowrap"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-primary-300 mb-4 font-semibold">
              FOLLOW US
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-primary-100 hover:text-rose-gold transition-colors whitespace-nowrap"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-primary-100 hover:text-rose-gold transition-colors whitespace-nowrap"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-primary-100 hover:text-rose-gold transition-colors whitespace-nowrap"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Typography */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-7xl md:text-9xl font-bold text-primary-200/20 tracking-tight font-serif">
              WINCART
            </h2>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-300">
            &copy; 2025 Wincart. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-sm text-primary-300 hover:text-rose-gold transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-300 hover:text-rose-gold transition-colors whitespace-nowrap">
              Terms of Service
            </Link>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-300 hover:text-rose-gold transition-colors whitespace-nowrap"
            >
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}