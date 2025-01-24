import React, { useState } from 'react';
import { Building2, LogOut, Filter, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface JournalEntry {
  date: string;
  journalNo: string;
  description: string;
  account: string;
  debit: number;
  credit: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export default function Finance() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Journal Entries');
  const [selectedFilter, setSelectedFilter] = useState('All Entries');

  const handleLogout = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const renderJournalEntries = () => {
    return (
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Journal Entries' ? 'bg-sky-100 text-sky-800' : 'text-gray-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <span>Journal Entries</span>
            </div>
          </button>

          <button
            className="px-4 py-2 text-gray-600 hover:bg-sky-50 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Manual Journal Entry</span>
          </button>

          <button
            className="px-4 py-2 text-gray-600 hover:bg-sky-50 rounded-lg transition-colors"
          >
            Charts of Accounts (COA)
          </button>

          <button
            className="px-4 py-2 text-gray-600 hover:bg-sky-50 rounded-lg transition-colors"
          >
            Trial Balance
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-sky-800">Journal Entries</h2>
            <button className="p-1 rounded hover:bg-sky-100">
              <Filter className="w-4 h-4 text-sky-600" />
            </button>
          </div>

          <div className="relative">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
            >
              <option>All Entries</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-sky-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Journal #</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Account</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Debit</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Credit</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Add sample data rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-sky-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-sky-800 mb-4">Finance</h2>
          <nav className="space-y-1">
            {[
              'General Ledger Management',
              'Accounts Payable (AP)',
              'Accounts Receivable (AR)',
              'Cash Flow Management',
              'Bank Reconciliation',
              'Financial Reporting',
              'Tax Management',
              'GST Claims & Returns',
              'Payroll Management',
              'Settings'
            ].map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-2 rounded-lg transition-colors hover:bg-sky-50 text-gray-600"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white p-4 flex justify-between items-center shadow-sm">
          <button
            onClick={handleBack}
            className="text-sky-600 hover:text-sky-800"
          >
            ← Back to Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sky-600 hover:text-sky-800"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </header>

        <main className="p-6">
          {renderJournalEntries()}
        </main>
      </div>
    </div>
  );
}