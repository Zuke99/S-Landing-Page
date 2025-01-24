import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

export interface ClientOrderFrequency {
  serialNo: number;
  ulnNo: string;
  clientId: string;
  clientName: string;
  companyName: string;
  totalOrders: number;
  orderFrequency: string;
  lastOrderDate: string;
  daysSinceLastOrder: string;
  notificationStatus: string;
  contactedStatus: string;
  hasRequirement: string;
  moveToSales: string;
  actionRequired: string;
  notes: string;
}

interface ClientsOrderFrequencyTableProps {
  clients: ClientOrderFrequency[];
  onView?: (client: ClientOrderFrequency) => void;
  onEdit?: (client: ClientOrderFrequency) => void;
  onDelete?: (client: ClientOrderFrequency) => void;
}

export function ClientsOrderFrequencyTable({
  clients,
  onView,
  onEdit,
  onDelete
}: ClientsOrderFrequencyTableProps) {
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
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Total Orders</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Order Frequency</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Last Order Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Days Since Last Order</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Notification Status</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Contacted Status</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Has Requirement</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Move to Sales</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Action Required</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Notes</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">Actions</th>
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
              <td className="px-4 py-3 text-sm text-gray-700 text-center">{client.totalOrders}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.orderFrequency}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.lastOrderDate}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.daysSinceLastOrder}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-center">{client.notificationStatus}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-center">{client.contactedStatus}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-center">{client.hasRequirement}</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-center">{client.moveToSales}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.actionRequired}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.notes}</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                <div className="flex gap-2 justify-center">
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

export const initialClientsOrderFrequency: ClientOrderFrequency[] = [
  {
    serialNo: 1,
    ulnNo: 'ULN001',
    clientId: 'C001',
    clientName: 'EduTech Solutions',
    companyName: 'EduTech Pvt Ltd',
    totalOrders: 5,
    orderFrequency: 'Monthly',
    lastOrderDate: '15-01-2025',
    daysSinceLastOrder: '5 Days',
    notificationStatus: 'No',
    contactedStatus: 'No',
    hasRequirement: 'No',
    moveToSales: 'No',
    actionRequired: 'No action required',
    notes: 'Consistently orders monthly'
  },
  {
    serialNo: 2,
    ulnNo: 'ULN002',
    clientId: 'C002',
    clientName: 'Green Energy Systems',
    companyName: 'Green Energy Pvt Ltd',
    totalOrders: 3,
    orderFrequency: 'Quarterly',
    lastOrderDate: '10-01-2025',
    daysSinceLastOrder: '10 Days',
    notificationStatus: 'No',
    contactedStatus: 'Yes',
    hasRequirement: 'No',
    moveToSales: 'No',
    actionRequired: 'No action required',
    notes: 'Quarterly high-value orders'
  },
  {
    serialNo: 3,
    ulnNo: 'ULN003',
    clientId: 'C003',
    clientName: 'Smart Retail Solutions',
    companyName: 'Smart Retail Pvt Ltd',
    totalOrders: 8,
    orderFrequency: 'Weekly',
    lastOrderDate: '18-01-2025',
    daysSinceLastOrder: '2 Days',
    notificationStatus: 'No',
    contactedStatus: 'No',
    hasRequirement: 'No',
    moveToSales: 'No',
    actionRequired: 'No action required',
    notes: 'Prefers small frequent orders'
  },
  {
    serialNo: 4,
    ulnNo: 'ULN004',
    clientId: 'C004',
    clientName: 'Healthcare Innovations',
    companyName: 'Healthcare Pvt Ltd',
    totalOrders: 1,
    orderFrequency: 'Bi-Annually',
    lastOrderDate: '20-07-2024',
    daysSinceLastOrder: '200 Days',
    notificationStatus: 'Yes',
    contactedStatus: 'Yes',
    hasRequirement: 'Yes',
    moveToSales: 'Yes',
    actionRequired: 'Contact client to understand',
    notes: 'Last order placed over 6 months ago'
  },
  {
    serialNo: 5,
    ulnNo: 'ULN005',
    clientId: 'C005',
    clientName: 'Tech Solutions Ltd',
    companyName: 'Tech Solutions Pvt Ltd',
    totalOrders: 12,
    orderFrequency: 'Bi-Monthly',
    lastOrderDate: '20-12-2024',
    daysSinceLastOrder: '30 Days',
    notificationStatus: 'Yes',
    contactedStatus: 'No',
    hasRequirement: 'No',
    moveToSales: 'No',
    actionRequired: 'Contact client to understand',
    notes: 'Likely delay in usual ordering pattern'
  }
];