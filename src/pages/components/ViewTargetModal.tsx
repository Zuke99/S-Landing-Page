import React from 'react';
import { X } from 'lucide-react';
import { ProductWiseTarget } from './ProductWiseTargetsTable';

interface ViewTargetModalProps {
  target: ProductWiseTarget;
  onClose: () => void;
}

export function ViewTargetModal({ target, onClose }: ViewTargetModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-sky-800">Target Details</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Serial No</label>
              <p className="mt-1 text-sm text-gray-900">{target.serialNo}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Product ID</label>
              <p className="mt-1 text-sm text-gray-900">{target.productId}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Product Category ID</label>
              <p className="mt-1 text-sm text-gray-900">{target.productCategoryId}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Product</label>
              <p className="mt-1 text-sm text-gray-900">{target.product}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <p className="mt-1 text-sm text-gray-900">{target.category}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Sales Executive</label>
              <p className="mt-1 text-sm text-gray-900">{target.salesExecutive}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Sales Manager</label>
              <p className="mt-1 text-sm text-gray-900">{target.salesManager}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Total Target</label>
              <p className="mt-1 text-sm text-gray-900">{target.totalTarget.toLocaleString()}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <p className="mt-1 text-sm text-gray-900">{target.quantity.toLocaleString()}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Today Target</label>
              <p className="mt-1 text-sm text-gray-900">{target.todayTarget.toLocaleString()}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Week Target</label>
              <p className="mt-1 text-sm text-gray-900">{target.weekTarget.toLocaleString()}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">1st FNT Target</label>
              <p className="mt-1 text-sm text-gray-900">{target.firstFNTTarget.toLocaleString()}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">2nd FNT Target</label>
              <p className="mt-1 text-sm text-gray-900">{target.secondFNTTarget.toLocaleString()}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}