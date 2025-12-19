import HeroCarousel from './components/HeroCarousel';
import BrandSlider from './components/BrandSlider';
import FeaturedCollections from './components/FeaturedCollections';
import ProductShowcase from './components/ProductShowcase';
import Newsletter from './components/Newsletter';
import { menProducts, womenProducts, featuredProducts, bestSellers, newArrivals } from '../../mocks/products';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <BrandSlider />
      <FeaturedCollections />
      <ProductShowcase 
        title="For Him"
        subtitle="Discover our curated collection of sophisticated fragrances for men"
        products={menProducts.slice(0, 4)}
        category="men"
        theme="dark"
      />
      <ProductShowcase 
        title="For Her"
        subtitle="Explore elegant and captivating perfumes for women"
        products={womenProducts.slice(0, 4)}
        category="women"
        theme="light"
      />
      <Newsletter />
    </div>
  );
}
