import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface NewLeadGeneration {
  selectMonth: string;
  monthTarget: number;
  salesExecutive: string;
  salesManager: string;
  todayTarget: number;
  weekTarget: number;
  firstFNTTarget: number;
  secondFNTTarget: number;
  monthTarget: number;
}

interface NewLeadGenerationTableProps {
  data: NewLeadGeneration[];
}

export function NewLeadGenerationTable({ data }: NewLeadGenerationTableProps) {
  const [filters, setFilters] = useState<Partial<Record<keyof NewLeadGeneration, string>>>({});
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [monthTargetValue, setMonthTargetValue] = useState('700');

  const getUniqueValues = (key: keyof NewLeadGeneration) => {
    return Array.from(new Set(data.map(item => item[key])));
  };

  const filteredData = data.filter(row => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return row[key as keyof NewLeadGeneration].toString() === value;
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

  const renderFilterDropdown = (column: keyof NewLeadGeneration) => {
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

  const renderColumnHeader = (column: keyof NewLeadGeneration, label: string, align: 'left' | 'right' = 'left') => (
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
    <div className="overflow-x-auto">
      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <label htmlFor="monthTarget" className="text-sm font-medium text-gray-700">
            Month Target:
          </label>
          <input
            id="monthTarget"
            type="text"
            value={monthTargetValue}
            onChange={(e) => setMonthTargetValue(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 w-32"
          />
        </div>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-sky-50">
          <tr>
            {renderColumnHeader('selectMonth', 'Select Month')}
            {renderColumnHeader('salesExecutive', 'Sales Executive')}
            {renderColumnHeader('salesManager', 'Sales Manager')}
            {renderColumnHeader('todayTarget', 'Today Target', 'right')}
            {renderColumnHeader('weekTarget', 'Week Target', 'right')}
            {renderColumnHeader('firstFNTTarget', '1st FNT Target', 'right')}
            {renderColumnHeader('secondFNTTarget', '2nd FNT Target', 'right')}
            {renderColumnHeader('monthTarget', 'Month Target', 'right')}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
              <td className="px-4 py-3 text-sm text-gray-700">{row.selectMonth}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.salesExecutive}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.salesManager}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.todayTarget}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.weekTarget}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.firstFNTTarget}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.secondFNTTarget}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.monthTarget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}