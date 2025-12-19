import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for payment processing
    alert('Order placed successfully! This is a demo checkout.');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4"></i>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <button
            onClick={() => navigate('/shop/all')}
            className="text-rose-gold hover:underline whitespace-nowrap"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
            >
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    className="md:col-span-2 w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State / Province"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="ZIP / Postal code"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 transition-colors"
                  />
                </div>
              </div>

              {/* Payment (Placeholder) */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Payment Method</h2>
                <div className="p-6 bg-gray-50 rounded-lg text-center">
                  <i className="ri-bank-card-line text-4xl text-gray-400 mb-3"></i>
                  <p className="text-gray-600">Payment processing will be integrated here</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg whitespace-nowrap"
              >
                Place Order
              </button>
            </motion.form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-24"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">{item.size}</p>
                      <p className="text-sm">
                        <span className="text-gray-600">Qty: {item.quantity}</span>
                        <span className="ml-3 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}