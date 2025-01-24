import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Filter } from 'lucide-react';
import { Lead } from '../types/leads';

interface LeadsTableProps {
  leadData: Lead[];
  onView: (ulnNo: string) => void;
  onEdit: (ulnNo: string) => void;
  onDelete: (ulnNo: string) => void;
  onUpdateReminder?: (ulnNo: string, value: string) => void;
  onUpdateMoveToSales?: (ulnNo: string, value: string) => void;
}

export function LeadsTable({ 
  leadData, 
  onView, 
  onEdit, 
  onDelete, 
  onUpdateReminder,
  onUpdateMoveToSales 
}: LeadsTableProps) {
  const [filterColumn, setFilterColumn] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const moveToSalesOptions = [
    'Suspect',
    'Prospect',
    'Approach',
    'Negotation',
    'Objection Handling',
    'Create Order',
    'Un use Lead'
  ];

  const handleFilter = (column: string, value: string) => {
    if (value === 'All') {
      const newFilters = { ...filters };
      delete newFilters[column];
      setFilters(newFilters);
    } else {
      setFilters({ ...filters, [column]: value });
    }
    setFilterColumn(null);
  };

  const getFilteredData = () => {
    return leadData.filter(lead => {
      return Object.entries(filters).every(([column, value]) => {
        return lead[column as keyof Lead]?.toString().toLowerCase() === value.toLowerCase();
      });
    });
  };

  const getUniqueValues = (column: keyof Lead) => {
    return Array.from(new Set(leadData.map(lead => lead[column]))).filter(Boolean);
  };

  const filteredData = getFilteredData();

  const renderCellContent = (column: string, value: string, lead: Lead) => {
    if (column === 'reminder') {
      return (
        <select
          value={value}
          onChange={(e) => onUpdateReminder?.(lead.ulnNo, e.target.value)}
          className="w-full p-1 rounded border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      );
    }
    
    if (column === 'moveToSales') {
      return (
        <select
          value={value}
          onChange={(e) => onUpdateMoveToSales?.(lead.ulnNo, e.target.value)}
          className="w-full p-1 rounded border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        >
          <option value="">Select</option>
          {moveToSalesOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }

    return value;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-sky-50">
          <tr>
            {Object.keys(leadData[0] || {}).map((column) => (
              <th key={column} className="px-4 py-3 text-left text-sm font-semibold text-sky-800">
                <div className="flex items-center justify-between">
                  <span>{column.charAt(0).toUpperCase() + column.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                  <div className="relative">
                    <button
                      onClick={() => setFilterColumn(filterColumn === column ? null : column)}
                      className={`p-1 rounded-full hover:bg-sky-100 ${
                        filters[column] ? 'text-sky-600' : 'text-gray-400'
                      }`}
                    >
                      <Filter className="w-4 h-4" />
                    </button>
                    {filterColumn === column && (
                      <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg z-50 min-w-[160px]">
                        <button
                          className="w-full px-4 py-2 text-left hover:bg-sky-50 text-sm"
                          onClick={() => handleFilter(column, 'All')}
                        >
                          All
                        </button>
                        {getUniqueValues(column as keyof Lead).map((value) => (
                          <button
                            key={value}
                            className="w-full px-4 py-2 text-left hover:bg-sky-50 text-sm"
                            onClick={() => handleFilter(column, value)}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </th>
            ))}
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((lead, index) => (
            <tr key={lead.ulnNo} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
              {Object.entries(lead).map(([column, value], i) => (
                <td key={i} className="px-4 py-3 text-sm text-gray-700">
                  {renderCellContent(column, value, lead)}
                </td>
              ))}
              <td className="px-4 py-3 text-sm text-gray-700">
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(lead.ulnNo)}
                    className="p-1 text-sky-600 hover:text-sky-800"
                    title="View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onEdit(lead.ulnNo)}
                    className="p-1 text-sky-600 hover:text-sky-800"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(lead.ulnNo)}
                    className="p-1 text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}