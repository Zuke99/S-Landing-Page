import React from 'react';
import { Building2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleDepartmentClick = (dept: string) => {
    switch (dept.toLowerCase()) {
      case 'sales':
        navigate('/sales');
        break;
      case 'finance':
        navigate('/finance');
        break;
      case 'logistics':
        //navigate to https://temp-vqsb.onrender.com/
        window.location.href = 'https://temp-vqsb.onrender.com/';
        break;
      case 'inventory':
        window.location.href = 'https://fl-siva-inventory.onrender.com/';
        break;
      case 'human resources':
        window.location.href = 'https://s-hrms.onrender.com/';
        break;
      default:
        console.log(`Selected ${dept}`);
    }
  };

  const departments = [
    'Finance',
    'Production',
    'Marketing',
    'Sales',
    'Human Resources',
    'Operations',
    'Inventory',
    'Logistics',
    'Customer Support',
    'Admin'
  ];

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      {/* Header */}
      <header className="bg-sky-100 p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-sky-600" />
          <span style={{ 
            fontFamily: 'Calibri Light, system-ui, -apple-system, sans-serif',
            fontSize: '24px'
          }} className="font-semibold text-sky-800">EFS</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sky-600 hover:bg-sky-200 transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl text-center mb-16 text-sky-800" style={{ 
          fontFamily: 'Calibri Light, system-ui, -apple-system, sans-serif'
        }}>
          Select Your Department
        </h1>
        
        <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto">
          {departments.map((dept) => (
            <div key={dept} className="flex flex-col items-center gap-2">
              <button 
                className="w-28 h-28 border-2 border-sky-300 rounded-lg bg-white hover:bg-sky-50 transition-colors duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
                onClick={() => handleDepartmentClick(dept)}
              >
                <span className="text-3xl text-sky-400">⊞</span>
              </button>
              <span className="text-lg text-sky-700" style={{ 
                fontFamily: 'Calibri Light, system-ui, -apple-system, sans-serif'
              }}>
                {dept}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}