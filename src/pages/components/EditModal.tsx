import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Lead } from '../types/leads';

interface EditModalProps {
  lead: Lead | null;
  onClose: () => void;
  onSubmit: (lead: Lead) => void;
}

export function EditModal({ lead, onClose, onSubmit }: EditModalProps) {
  const [editFormData, setEditFormData] = useState<Lead | null>(lead);

  if (!editFormData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editFormData) {
      onSubmit(editFormData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-sky-800">Edit Lead</h3>
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(editFormData).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setEditFormData({
                    ...editFormData,
                    [key]: e.target.value
                  })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-2"
                />
              </div>
            ))}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}