import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductForm } from '@/components/products/ProductForm';
import { ProductCard } from '@/components/products/ProductCard';
import type { Product } from '@/types';

export const Products: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'MacBook Pro 16"',
      description: 'Apple M2 Pro chip, 16GB RAM, 512GB SSD',
      price: 2499.99,
      category: 'laptops',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stock: 10
    },
    {
      id: '2',
      name: 'iPhone 15 Pro',
      description: 'A17 Pro chip, 256GB, Titanium',
      price: 1199.99,
      category: 'smartphones',
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stock: 15
    }
  ]);

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
    };
    setProducts(prev => [...prev, newProduct]);
    setShowForm(false);
  };

  const handleEditProduct = (product: Product) => {
    // Implement edit functionality
    console.log('Edit product:', product);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="bg-white shadow-sm rounded-lg p-8 text-center text-gray-500">
          No products available. Add your first product!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      )}

      {showForm && (
        <ProductForm
          onSubmit={handleAddProduct}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};