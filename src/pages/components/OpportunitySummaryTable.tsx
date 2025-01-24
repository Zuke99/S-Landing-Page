import React from 'react';

interface OpportunitySummary {
  serialNo: number;
  date: string;
  salesStage: string;
  numberOfOpportunities: number;
  products: string;
  productCategories: string;
  volumes: number;
  totalPotentialValue: number;
  percentageOfTotalOpportunities: number;
  expectedRevenue: number;
}

interface OpportunitySummaryTableProps {
  data: OpportunitySummary[];
}

export function OpportunitySummaryTable({ data }: OpportunitySummaryTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(2)}%`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-sky-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">S. No</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Today's Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Sales Stage</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Number of Opportunities</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Products</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Product Categories</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Volumes (Units)</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Total Potential Value (₹)</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Percentage of Total Opportunities (%)</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Expected Revenue (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.serialNo} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
              <td className="px-4 py-3 text-sm text-gray-700">{row.serialNo}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.date}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.salesStage}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.numberOfOpportunities}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.products}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.productCategories}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{row.volumes}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{formatCurrency(row.totalPotentialValue)}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{formatPercentage(row.percentageOfTotalOpportunities)}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{formatCurrency(row.expectedRevenue)}</td>
            </tr>
          ))}
          <tr className="bg-sky-100 font-semibold">
            <td colSpan={6} className="px-4 py-3 text-sm text-sky-800">Total</td>
            <td className="px-4 py-3 text-sm text-sky-800 text-right">
              {data.reduce((sum, row) => sum + row.volumes, 0)}
            </td>
            <td className="px-4 py-3 text-sm text-sky-800 text-right">
              {formatCurrency(data.reduce((sum, row) => sum + row.totalPotentialValue, 0))}
            </td>
            <td className="px-4 py-3 text-sm text-sky-800 text-right">100%</td>
            <td className="px-4 py-3 text-sm text-sky-800 text-right">
              {formatCurrency(data.reduce((sum, row) => sum + row.expectedRevenue, 0))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}