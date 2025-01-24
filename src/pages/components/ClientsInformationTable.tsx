import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

export interface Client {
  serialNo: number;
  ulnNo: string;
  clientId: string;
  clientName: string;
  companyName: string;
  industry: string;
  emailId: string;
  phoneNumber: string;
  location: string;
  contactPerson: string;
  designation: string;
  websiteURL: string;
  productsInterestedIn: string;
  productCategories: string;
  notes: string;
}

interface ClientsInformationTableProps {
  clients: Client[];
  onView?: (client: Client) => void;
  onEdit?: (client: Client) => void;
  onDelete?: (client: Client) => void;
}

export function ClientsInformationTable({ 
  clients,
  onView,
  onEdit,
  onDelete
}: ClientsInformationTableProps) {
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
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Industry</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Email ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Phone Number</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Location</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Contact Person</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Designation</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Website URL</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Products Interested In</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Product Categories</th>
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
              <td className="px-4 py-3 text-sm text-gray-700">{client.industry}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.emailId}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.phoneNumber}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.location}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.contactPerson}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.designation}</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                <a href={`https://${client.websiteURL}`} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
                  {client.websiteURL}
                </a>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.productsInterestedIn}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{client.productCategories}</td>
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

export const initialClients: Client[] = [
  {
    serialNo: 1,
    ulnNo: 'ULN001',
    clientId: 'C001',
    clientName: 'EduTech Solutions',
    companyName: 'EduTech Pvt Ltd',
    industry: 'Education Technology',
    emailId: 'info@edutech.com',
    phoneNumber: '9843210987',
    location: 'Bangalore',
    contactPerson: 'Vikram Sharma',
    designation: 'CEO',
    websiteURL: 'www.edutech.com',
    productsInterestedIn: 'Learning Management System',
    productCategories: 'Education Technology',
    notes: 'Looking for a scalable solution'
  },
  {
    serialNo: 2,
    ulnNo: 'ULN002',
    clientId: 'C002',
    clientName: 'Green Energy Systems',
    companyName: 'Green Energy Pvt Ltd',
    industry: 'Renewable Energy',
    emailId: 'info@greenenergy.com',
    phoneNumber: '8765432109',
    location: 'Chennai',
    contactPerson: 'Priya Kapoor',
    designation: 'Project Manager',
    websiteURL: 'www.greenenergy.com',
    productsInterestedIn: 'Solar Panels',
    productCategories: 'Renewable Energy',
    notes: 'Interested in bulk orders'
  },
  {
    serialNo: 3,
    ulnNo: 'ULN003',
    clientId: 'C003',
    clientName: 'Smart Retail Solutions',
    companyName: 'Smart Retail Pvt Ltd',
    industry: 'Retail Technology',
    emailId: 'amit@smartretail.com',
    phoneNumber: '7654321098',
    location: 'Pune',
    contactPerson: 'Amit Patel',
    designation: 'COO',
    websiteURL: 'www.smartretail.com',
    productsInterestedIn: 'POS System',
    productCategories: 'Retail Technology',
    notes: 'Needs pricing customization'
  },
  {
    serialNo: 4,
    ulnNo: 'ULN004',
    clientId: 'C004',
    clientName: 'Healthcare Innovations',
    companyName: 'Healthcare Pvt Ltd',
    industry: 'Healthcare',
    emailId: 'sneha@healthcare.com',
    phoneNumber: '6543210987',
    location: 'Kolkata',
    contactPerson: 'Sneha Nair',
    designation: 'Operations Head',
    websiteURL: 'www.healthcare.com',
    productsInterestedIn: 'Medical Equipment',
    productCategories: 'Healthcare',
    notes: 'Exploring automation solutions'
  },
  {
    serialNo: 5,
    ulnNo: 'ULN005',
    clientId: 'C005',
    clientName: 'Tech Solutions Ltd',
    companyName: 'Tech Solutions Pvt Ltd',
    industry: 'Software Solutions',
    emailId: 'contact@techsol.com',
    phoneNumber: '9876543210',
    location: 'Mumbai',
    contactPerson: 'Rahul Verma',
    designation: 'CTO',
    websiteURL: 'www.techsolutions.com',
    productsInterestedIn: 'Enterprise Software',
    productCategories: 'Software Solutions',
    notes: 'Requires demo for ERP'
  }
];