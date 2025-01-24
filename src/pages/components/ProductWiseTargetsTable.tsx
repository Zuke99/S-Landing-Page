import React, { useState } from 'react';
import { Eye, Download, Filter } from 'lucide-react';
import { ViewTargetModal } from './ViewTargetModal';

export interface ProductWiseTarget {
  serialNo: number;
  productId: string;
  productCategoryId: string;
  product: string;
  category: string;
  salesExecutive: string;
  salesManager: string;
  totalTarget: number;
  quantity: number;
  todayTarget: number;
  weekTarget: number;
  firstFNTTarget: number;
  secondFNTTarget: number;
}

interface ProductWiseTargetsTableProps {
  data: ProductWiseTarget[];
  onView?: (target: ProductWiseTarget) => void;
  onDownload?: (target: ProductWiseTarget) => void;
}

export function ProductWiseTargetsTable({ 
  data,
  onView,
  onDownload 
}: ProductWiseTargetsTableProps) {
  const [filters, setFilters] = useState<Partial<Record<keyof ProductWiseTarget, string>>>({});
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<ProductWiseTarget | null>(null);

  const getUniqueValues = (key: keyof ProductWiseTarget) => {
    return Array.from(new Set(data.map(item => item[key])));
  };

  const filteredData = data.filter(row => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return row[key as keyof ProductWiseTarget].toString() === value;
    });
  });

  const handleFilterClick = (column: string) => {
    setActiveFilter(activeFilter === column ? null : column);
  };

  const handleFilterSelect = (column: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [column]: value === 'All' ? '' : value
    }));
    setActiveFilter(null);
  };

  const handleView = (target: ProductWiseTarget) => {
    setSelectedTarget(target);
    if (onView) {
      onView(target);
    }
  };

  const handleDownload = (target: ProductWiseTarget) => {
    if (onDownload) {
      onDownload(target);
    }

    // Create CSV content
    const headers = Object.keys(target).join(',');
    const values = Object.values(target).join(',');
    const csvContent = `${headers}\n${values}`;

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `target_${target.productId}_${target.serialNo}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const renderFilterDropdown = (column: keyof ProductWiseTarget) => {
    if (activeFilter !== column) return null;

    const uniqueValues = getUniqueValues(column);

    return (
      <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg z-50 min-w-[160px]">
        <button
          className="w-full px-4 py-2 text-left hover:bg-sky-50 text-sm"
          onClick={() => handleFilterSelect(column, 'All')}
        >
          All
        </button>
        {uniqueValues.map((value) => (
          <button
            key={value}
            className="w-full px-4 py-2 text-left hover:bg-sky-50 text-sm"
            onClick={() => handleFilterSelect(column, value.toString())}
          >
            {value}
          </button>
        ))}
      </div>
    );
  };

  const renderColumnHeader = (column: keyof ProductWiseTarget, label: string, align: 'left' | 'right' = 'left') => (
    <th className={`px-4 py-3 text-${align} text-sm font-semibold text-sky-800`}>
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <div className="relative">
          <button
            onClick={() => handleFilterClick(column)}
            className={`p-1 rounded-full hover:bg-sky-100 ${
              filters[column] ? 'text-sky-600' : 'text-gray-400'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>
          {renderFilterDropdown(column)}
        </div>
      </div>
    </th>
  );

  return (
    <>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-sky-50">
            <tr>
              {renderColumnHeader('serialNo', 'S.No')}
              {renderColumnHeader('productId', 'Product ID')}
              {renderColumnHeader('productCategoryId', 'Product Category ID')}
              {renderColumnHeader('product', 'Product')}
              {renderColumnHeader('category', 'Category')}
              {renderColumnHeader('salesExecutive', 'Sales Executive')}
              {renderColumnHeader('salesManager', 'Sales Manager')}
              {renderColumnHeader('totalTarget', 'Total Target', 'right')}
              {renderColumnHeader('quantity', 'Quantity', 'right')}
              {renderColumnHeader('todayTarget', 'Today Target', 'right')}
              {renderColumnHeader('weekTarget', 'Week Target', 'right')}
              {renderColumnHeader('firstFNTTarget', '1st FNT Target', 'right')}
              {renderColumnHeader('secondFNTTarget', '2nd FNT Target', 'right')}
              <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.serialNo} className={row.serialNo % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
                <td className="px-4 py-3 text-sm text-gray-700">{row.serialNo}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.productId}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.productCategoryId}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.product}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.category}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.salesExecutive}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.salesManager}</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.totalTarget.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.quantity.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.todayTarget.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.weekTarget.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.firstFNTTarget.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.secondFNTTarget.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleView(row)}
                      className="p-1 text-sky-600 hover:text-sky-800"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDownload(row)}
                      className="p-1 text-sky-600 hover:text-sky-800"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTarget && (
        <ViewTargetModal
          target={selectedTarget}
          onClose={() => setSelectedTarget(null)}
        />
      )}
    </>
  );
}