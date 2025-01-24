import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Client } from './ClientsInformationTable';

interface AddClientModalProps {
  onClose: () => void;
  onSubmit: (client: Omit<Client, 'serialNo'>) => void;
  clientCount: number;
}

export function AddClientModal({ onClose, onSubmit, clientCount }: AddClientModalProps) {
  const [formData, setFormData] = useState({
    ulnNo: `ULN${(clientCount + 1).toString().padStart(3, '0')}`,
    clientId: `C${(clientCount + 1).toString().padStart(3, '0')}`,
    clientName: '',
    companyName: '',
    industry: '',
    emailId: '',
    phoneNumber: '',
    location: '',
    contactPerson: '',
    designation: '',
    websiteURL: '',
    productsInterestedIn: '',
    productCategories: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-sky-800">Add New Client</h3>
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
                ULN No
              </label>
              <input
                type="text"
                value={formData.ulnNo}
                disabled
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 bg-gray-50"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client ID
              </label>
              <input
                type="text"
                value={formData.clientId}
                disabled
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 bg-gray-50"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Name *
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry *
              </label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email ID *
              </label>
              <input
                type="email"
                value={formData.emailId}
                onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person *
              </label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Designation *
              </label>
              <input
                type="text"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                type="text"
                value={formData.websiteURL}
                onChange={(e) => setFormData({ ...formData, websiteURL: e.target.value })}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Products Interested In *
              </label>
              <input
                type="text"
                value={formData.productsInterestedIn}
                onChange={(e) => setFormData({ ...formData, productsInterestedIn: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Categories *
              </label>
              <input
                type="text"
                value={formData.productCategories}
                onChange={(e) => setFormData({ ...formData, productCategories: e.target.value })}
                required
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-sky-500 focus:border-sky-500"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}