import React from 'react';
import type { Product } from '@/types';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-lg font-bold text-blue-600">${product.price}</p>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" onClick={() => onEdit(product)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="sm" onClick={() => onDelete(product.id)}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};