import React from 'react';

interface OrderData {
  serialNo: number;
  date: string;
  orderId: string;
  customerName: string;
  product: string;
  paymentStatus: string;
  paymentType: string;
  moveTo: string;
}

interface OrderManagementTableProps {
  data: OrderData[];
  onCreateOrder: (order: OrderData) => void;
  type: 'pending' | 'confirmed';
}

export function OrderManagementTable({
  data,
  onCreateOrder,
  type
}: OrderManagementTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-sky-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">S.no</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Order ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Customer Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Product</th>
            {type === 'confirmed' && (
              <>
                <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Payment Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Payment Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-sky-800">Move To</th>
              </>
            )}
            <th className="px-4 py-3 text-center text-sm font-semibold text-sky-800">
              {type === 'pending' ? 'Create Order' : 'Generate Invoice'}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.orderId} className={order.serialNo % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
              <td className="px-4 py-3 text-sm text-gray-700">{order.serialNo}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{order.date}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{order.orderId}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{order.customerName}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{order.product}</td>
              {type === 'confirmed' && (
                <>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.paymentStatus}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.paymentType}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.moveTo}</td>
                </>
              )}
              <td className="px-4 py-3 text-sm text-center">
                <button
                  onClick={() => onCreateOrder(order)}
                  className="px-3 py-1 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors"
                >
                  {type === 'pending' ? 'Create' : 'Generate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const initialOrderData: OrderData[] = [
  {
    serialNo: 1,
    date: '01-01-2025',
    orderId: 'O001',
    customerName: 'Customer A',
    product: 'Product A',
    paymentStatus: 'Advance Received',
    paymentType: 'Online Transfer',
    moveTo: 'Production'
  },
  {
    serialNo: 2,
    date: '02-01-2025',
    orderId: 'O002',
    customerName: 'Customer B',
    product: 'Product B',
    paymentStatus: 'Partial Amount Received',
    paymentType: 'Cheque',
    moveTo: 'Dispatch'
  },
  {
    serialNo: 3,
    date: '03-01-2025',
    orderId: 'O003',
    customerName: 'Customer C',
    product: 'Product C',
    paymentStatus: 'Full Payment Received',
    paymentType: 'Cash',
    moveTo: 'Logistics'
  },
  {
    serialNo: 4,
    date: '04-01-2025',
    orderId: 'O004',
    customerName: 'Customer D',
    product: 'Product A',
    paymentStatus: 'Advance Received',
    paymentType: 'Online Transfer',
    moveTo: 'Production'
  },
  {
    serialNo: 5,
    date: '05-01-2025',
    orderId: 'O005',
    customerName: 'Customer E',
    product: 'Product B',
    paymentStatus: 'Partial Amount Received',
    paymentType: 'Cheque',
    moveTo: 'Dispatch'
  }
];