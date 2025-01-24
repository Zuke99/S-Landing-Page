import React from 'react';
import { X } from 'lucide-react';
import { Lead } from '../types/leads';

interface ViewModalProps {
  lead: Lead | null;
  onClose: () => void;
}

export function ViewModal({ lead, onClose }: ViewModalProps) {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-sky-800">Lead Details</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(lead).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <p className="mt-1 text-sm text-gray-900">{value || '-'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}