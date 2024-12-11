import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CustomerForm } from '@/components/customers/CustomerForm';
import { CustomerList } from '@/components/customers/CustomerList';
import type { Customer } from '@/types';

export const Customers: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '456 Park Ave, Los Angeles, CA 90001',
      phone: '+1 (555) 987-6543'
    }
  ]);

  const handleAddCustomer = (customerData: Omit<Customer, 'id'>) => {
    const newCustomer: Customer = {
      ...customerData,
      id: Date.now().toString(),
    };
    setCustomers(prev => [...prev, newCustomer]);
    setShowForm(false);
  };

  const handleEditCustomer = (customer: Customer) => {
    // Implement edit functionality
    console.log('Edit customer:', customer);
  };

  const handleDeleteCustomer = (id: string) => {
    setCustomers(prev => prev.filter(customer => customer.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <Button onClick={() => setShowForm(true)}>
          <UserPlus className="w-5 h-5 mr-2" />
          Add Customer
        </Button>
      </div>

      {customers.length === 0 ? (
        <div className="bg-white shadow-sm rounded-lg p-8 text-center text-gray-500">
          No customers available. Add your first customer!
        </div>
      ) : (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <CustomerList
            customers={customers}
            onEdit={handleEditCustomer}
            onDelete={handleDeleteCustomer}
          />
        </div>
      )}

      {showForm && (
        <CustomerForm
          onSubmit={handleAddCustomer}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};