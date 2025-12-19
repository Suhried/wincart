
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Navbar from './components/feature/Navbar';
import Footer from './components/feature/Footer';
import ShoppingCart from './components/feature/ShoppingCart';
import FloatingChatButtons from './components/feature/FloatingChatButtons';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
            </div>
          }
        >
          <main className="flex-1">
            <AppRoutes />
          </main>
        </Suspense>
        <ShoppingCart />
        <FloatingChatButtons 
          messengerLink="https://m.me/yourpage"
          whatsappNumber="1234567890"
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
