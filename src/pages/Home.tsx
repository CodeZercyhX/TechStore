import React from 'react';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Your One-Stop Electronics Shop
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the latest in technology with our curated selection of premium electronics.
          From laptops to smartphones, we've got everything you need.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/products">
            <Button size="lg">
              Browse Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Star className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            We only stock products from trusted brands with proven track records.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Zap className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Quick and reliable shipping to get your tech to you as soon as possible.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Shield className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Warranty Included</h3>
          <p className="text-gray-600">
            All products come with manufacturer warranty and our satisfaction guarantee.
          </p>
        </div>
      </section>
    </div>
  );
};