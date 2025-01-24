import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

export interface ClientManagement {
  serialNo: number;
  ulnNo: string;
  clientId: string;
  clientName: string;
  companyName: string;
  contactPerson: string;
  emailId: string;
  phoneNumber: string;
  location: string;
  productsInterested: string;
  productCategories: string;
  totalValue: number;
  lastInteractionDate: string;
  nextInteractionDate: string;
  interactionStatus: string;
  actionTaken: string;
  newRequirements: string;
  requirementCategories: string;
  requirementDue: string;
  upcomingPlan: string;
  moveToSales: string;
  notes: string;
}

interface ClientsManagementTableProps {
  clients: ClientManagement[];
  onView?: (client: ClientManagement) => void;
  onEdit?: (client: ClientManagement) => void;
  onDelete?: (client: ClientManagement) => void;
}

export function ClientsManagementTable({
  clients,
  onView,
  onEdit,
  onDelete
}: ClientsManagementTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-sky-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">S. No</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">ULN No</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Client ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Client Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Company Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Contact Person</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Email ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Phone Number</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Location</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Products Purchased</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Product Categories</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-sky-800">Total Value (₹)</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Last Interaction Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Next Interaction Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Interaction Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Action Taken</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">New Requirements</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Requirement Categories</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Requirement Due</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Upcoming Plan</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Move to Sales</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Notes</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client.ulnNo} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
              <td className="px-4 py-3 text-sm text-gray-700">{client.serialNo}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.ulnNo}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.clientId}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.clientName}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.companyName}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.contactPerson}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.emailId}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.phoneNumber}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.location}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.productsInterested}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.productCategories}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">{formatCurrency(client.totalValue)}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.lastInteractionDate}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.nextInteractionDate}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.interactionStatus}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.actionTaken}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.newRequirements}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.requirementCategories}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.requirementDue}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.upcomingPlan}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.moveToSales}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.notes}</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                <div className="flex gap-2">
                  <button 
                    onClick={() => onView?.(client)}
                    className="p-1 text-sky-600 hover:text-sky-800" 
                    title="View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onEdit?.(client)}
                    className="p-1 text-sky-600 hover:text-sky-800" 
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onDelete?.(client)}
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

export const initialClientsManagement: ClientManagement[] = [
  {
    serialNo: 1,
    ulnNo: 'ULN001',
    clientId: 'C001',
    clientName: 'EduTech Solutions',
    companyName: 'EduTech Pvt Ltd',
    contactPerson: 'Vikram Sharma',
    emailId: 'info@edutech.com',
    phoneNumber: '9432109876',
    location: 'Bangalore',
    productsInterested: 'Learning Management System',
    productCategories: 'Education Technology',
    totalValue: 500000,
    lastInteractionDate: '2025-01-20',
    nextInteractionDate: '2025-02-01',
    interactionStatus: 'On Track',
    actionTaken: 'Scheduled training demo',
    newRequirements: 'Advanced LMS Features',
    requirementCategories: 'Education Technology',
    requirementDue: '2025-01-30',
    upcomingPlan: '2025-02-15',
    moveToSales: 'Yes',
    notes: 'High satisfaction reported'
  },
  {
    serialNo: 2,
    ulnNo: 'ULN002',
    clientId: 'C002',
    clientName: 'Green Energy Systems',
    companyName: 'Green Energy Pvt Ltd',
    contactPerson: 'Priya Kapoor',
    emailId: 'info@greenenergy.com',
    phoneNumber: '8765432109',
    location: 'Chennai',
    productsInterested: 'Solar Panels',
    productCategories: 'Renewable Energy',
    totalValue: 300000,
    lastInteractionDate: '2025-01-18',
    nextInteractionDate: '2025-02-14',
    interactionStatus: 'On Track',
    actionTaken: 'Follow-up call scheduled',
    newRequirements: 'Proposal sent for upgrade',
    requirementCategories: 'Renewable Energy',
    requirementDue: '2025-01-31',
    upcomingPlan: '2025-02-28',
    moveToSales: 'Yes',
    notes: 'Budget constraints raised'
  },
  {
    serialNo: 3,
    ulnNo: 'ULN003',
    clientId: 'C003',
    clientName: 'Smart Retail Solutions',
    companyName: 'Smart Retail Pvt Ltd',
    contactPerson: 'Amit Patel',
    emailId: 'amit@smartretail.com',
    phoneNumber: '7654321098',
    location: 'Pune',
    productsInterested: 'POS System',
    productCategories: 'Retail Technology',
    totalValue: 200000,
    lastInteractionDate: '2025-01-15',
    nextInteractionDate: '2025-02-10',
    interactionStatus: 'Overdue',
    actionTaken: 'Touch-Screen POS System',
    newRequirements: 'Retail Tech Features',
    requirementCategories: 'Retail Technology',
    requirementDue: '2025-01-28',
    upcomingPlan: '2025-02-20',
    moveToSales: 'Yes',
    notes: 'Budget constraints raised'
  },
  {
    serialNo: 4,
    ulnNo: 'ULN004',
    clientId: 'C004',
    clientName: 'Healthcare Innovations',
    companyName: 'Healthcare Pvt Ltd',
    contactPerson: 'Sneha Nair',
    emailId: 'sneha@healthcare.com',
    phoneNumber: '6543210987',
    location: 'Kolkata',
    productsInterested: 'Medical Equipment',
    productCategories: 'Healthcare',
    totalValue: 400000,
    lastInteractionDate: '2025-01-31',
    nextInteractionDate: '2025-02-15',
    interactionStatus: 'Overdue',
    actionTaken: 'Automation System',
    newRequirements: 'Healthcare Features',
    requirementCategories: 'Healthcare',
    requirementDue: '2025-01-25',
    upcomingPlan: '2025-02-10',
    moveToSales: 'No',
    notes: 'No interaction yet'
  },
  {
    serialNo: 5,
    ulnNo: 'ULN005',
    clientId: 'C005',
    clientName: 'Tech Solutions Ltd',
    companyName: 'Tech Solutions Pvt Ltd',
    contactPerson: 'Rahul Verma',
    emailId: 'contact@techsol.com',
    phoneNumber: '9876543210',
    location: 'Mumbai',
    productsInterested: 'Enterprise Software',
    productCategories: 'Software Solutions',
    totalValue: 350000,
    lastInteractionDate: '2025-01-10',
    nextInteractionDate: '2025-02-09',
    interactionStatus: 'On Track',
    actionTaken: 'Renewal proposal sent',
    newRequirements: 'ERP Upgrade Module',
    requirementCategories: 'Software Solutions',
    requirementDue: '2025-01-20',
    upcomingPlan: '2025-02-15',
    moveToSales: 'Yes',
    notes: 'Renewal due in March 2025'
  }
];