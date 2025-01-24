import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface ProductWiseForecast {
  date: string;
  month: string;
  firstFNTDays: number;
  secondFNTDays: number;
  totalDays: number;
}

interface ProductWiseForecastTableProps {
  data: ProductWiseForecast[];
}

export function ProductWiseForecastTable({ data }: ProductWiseForecastTableProps) {
  const [filters, setFilters] = useState({
    date: '',
    month: '',
    firstFNTDays: '',
    secondFNTDays: '',
    totalDays: ''
  });
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const getUniqueValues = (key: keyof ProductWiseForecast) => {
    return Array.from(new Set(data.map(item => item[key])));
  };

  const filteredData = data.filter(row => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return row[key as keyof ProductWiseForecast].toString() === value;
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

  const renderFilterDropdown = (column: keyof ProductWiseForecast) => {
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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-sky-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">
              <div className="flex items-center justify-between">
                <span>Date</span>
                <div className="relative">
                  <button
                    onClick={() => handleFilterClick('date')}
                    className={`p-1 rounded-full hover:bg-sky-100 ${
                      filters.date ? 'text-sky-600' : 'text-gray-400'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                  {renderFilterDropdown('date')}
                </div>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">
              <div className="flex items-center justify-between">
                <span>Month</span>
                <div className="relative">
                  <button
                    onClick={() => handleFilterClick('month')}
                    className={`p-1 rounded-full hover:bg-sky-100 ${
                      filters.month ? 'text-sky-600' : 'text-gray-400'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                  {renderFilterDropdown('month')}
                </div>
              </div>
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">
              <div className="flex items-center justify-between">
                <span>1st FNT Days</span>
                <div className="relative">
                  <button
                    onClick={() => handleFilterClick('firstFNTDays')}
                    className={`p-1 rounded-full hover:bg-sky-100 ${
                      filters.firstFNTDays ? 'text-sky-600' : 'text-gray-400'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                  {renderFilterDropdown('firstFNTDays')}
                </div>
              </div>
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">
              <div className="flex items-center justify-between">
                <span>2nd FNT Days</span>
                <div className="relative">
                  <button
                    onClick={() => handleFilterClick('secondFNTDays')}
                    className={`p-1 rounded-full hover:bg-sky-100 ${
                      filters.secondFNTDays ? 'text-sky-600' : 'text-gray-400'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                  {renderFilterDropdown('secondFNTDays')}
                </div>
              </div>
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">
              <div className="flex items-center justify-between">
                <span>Total Days</span>
                <div className="relative">
                  <button
                    onClick={() => handleFilterClick('totalDays')}
                    className={`p-1 rounded-full hover:bg-sky-100 ${
                      filters.totalDays ? 'text-sky-600' : 'text-gray-400'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                  {renderFilterDropdown('totalDays')}
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
              <td className="px-4 py-3 text-sm text-gray-700">{row.date}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.month}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.firstFNTDays}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.secondFNTDays}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.totalDays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}