import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CreateLeadForm, Lead, sourceOptions, leadTypeOptions } from '../types/leads';

interface CreateLeadModalProps {
  onClose: () => void;
  onSubmit: (lead: Lead) => void;
  leadCount: number;
}

const initialCreateFormData: CreateLeadForm = {
  date: new Date().toISOString().split('T')[0],
  ulnNo: '',
  source: '',
  leadName: '',
  leadType: '',
  products: '',
  productCategories: '',
  mailId: '',
  phoneNumber: '',
  location: '',
  handledBy: ''
};

export function CreateLeadModal({ onClose, onSubmit, leadCount }: CreateLeadModalProps) {
  const [createFormData, setCreateFormData] = useState<CreateLeadForm>(initialCreateFormData);
  const [createFormErrors, setCreateFormErrors] = useState<Partial<CreateLeadForm>>({});

  const validateCreateForm = (): boolean => {
    const errors: Partial<CreateLeadForm> = {};
    let isValid = true;

    if (!createFormData.leadName.trim()) {
      errors.leadName = 'Lead Name is required';
      isValid = false;
    }

    if (!createFormData.source) {
      errors.source = 'Source is required';
      isValid = false;
    }

    if (!createFormData.leadType) {
      errors.leadType = 'Lead Type is required';
      isValid = false;
    }

    if (!createFormData.mailId.trim()) {
      errors.mailId = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(createFormData.mailId)) {
      errors.mailId = 'Invalid email format';
      isValid = false;
    }

    if (!createFormData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
      isValid = false;
    }

    setCreateFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCreateForm()) {
      return;
    }

    const newUlnNo = `ULN ${(leadCount + 1).toString().padStart(2, '0')}`;

    const newLead: Lead = {
      ...createFormData,
      ulnNo: newUlnNo,
      connected: '',
      medium: '',
      response: '',
      reason: '',
      moveToSales: '',
      reminder: ''
    };

    onSubmit(newLead);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-sky-800">Create New Lead</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={createFormData.date}
                onChange={(e) => setCreateFormData({ ...createFormData, date: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Source *
              </label>
              <select
                value={createFormData.source}
                onChange={(e) => setCreateFormData({ ...createFormData, source: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="">Select Source</option>
                {sourceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {createFormErrors.source && (
                <p className="mt-1 text-sm text-red-600">{createFormErrors.source}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lead Name *
              </label>
              <input
                type="text"
                value={createFormData.leadName}
                onChange={(e) => setCreateFormData({ ...createFormData, leadName: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter lead name"
              />
              {createFormErrors.leadName && (
                <p className="mt-1 text-sm text-red-600">{createFormErrors.leadName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lead Type *
              </label>
              <select
                value={createFormData.leadType}
                onChange={(e) => setCreateFormData({ ...createFormData, leadType: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="">Select Lead Type</option>
                {leadTypeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {createFormErrors.leadType && (
                <p className="mt-1 text-sm text-red-600">{createFormErrors.leadType}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Products
              </label>
              <input
                type="text"
                value={createFormData.products}
                onChange={(e) => setCreateFormData({ ...createFormData, products: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter products"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Categories
              </label>
              <input
                type="text"
                value={createFormData.productCategories}
                onChange={(e) => setCreateFormData({ ...createFormData, productCategories: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter product categories"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mail ID *
              </label>
              <input
                type="email"
                value={createFormData.mailId}
                onChange={(e) => setCreateFormData({ ...createFormData, mailId: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter email address"
              />
              {createFormErrors.mailId && (
                <p className="mt-1 text-sm text-red-600">{createFormErrors.mailId}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={createFormData.phoneNumber}
                onChange={(e) => setCreateFormData({ ...createFormData, phoneNumber: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter phone number"
              />
              {createFormErrors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{createFormErrors.phoneNumber}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={createFormData.location}
                onChange={(e) => setCreateFormData({ ...createFormData, location: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter location"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Handled By
              </label>
              <input
                type="text"
                value={createFormData.handledBy}
                onChange={(e) => setCreateFormData({ ...createFormData, handledBy: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter handler name"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700"
            >
              Create Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}