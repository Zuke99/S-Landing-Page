import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ProductLine {
  productName: string;
  productCategory: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface OrderFormData {
  // From (Your Company)
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;

  // To (Other Company)
  clientCompanyName: string;
  clientContactPerson: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;

  // Order Details
  orderId: string;
  orderDate: string;
  orderStatus: string;

  // Product Details
  products: ProductLine[];

  // Totals
  subtotal: number;
  taxes: number;
  discounts: number;
  grandTotal: number;

  // Payment Details
  paymentMethod: 'Credit Card' | 'Bank Transfer' | 'Cash on Delivery' | 'Other';
  otherPaymentMethod: string;

  // Additional Details
  expectedDeliveryDate: string;
  notes: string;
  createdBy: string;
}

interface CreateOrderModalProps {
  order: any;
  onClose: () => void;
  onSubmit: (formData: OrderFormData) => void;
}

export function CreateOrderModal({ order, onClose, onSubmit }: CreateOrderModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    companyName: 'Your Company Name',
    companyAddress: 'Your Company Address',
    companyPhone: 'Your Company Phone',
    companyEmail: 'your@company.com',
    
    clientCompanyName: order.leadName,
    clientContactPerson: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: '',
    
    orderId: `ORD-${Date.now()}`,
    orderDate: new Date().toISOString().split('T')[0],
    orderStatus: 'Pending',
    
    products: [{
      productName: order.product,
      productCategory: order.productCategory,
      quantity: 1,
      unitPrice: 0,
      totalPrice: 0
    }],
    
    subtotal: 0,
    taxes: 0,
    discounts: 0,
    grandTotal: 0,
    
    paymentMethod: 'Bank Transfer',
    otherPaymentMethod: '',
    
    expectedDeliveryDate: '',
    notes: '',
    createdBy: ''
  });

  const handleProductChange = (index: number, field: keyof ProductLine, value: string | number) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value
    };

    // Recalculate total price for the line
    if (field === 'quantity' || field === 'unitPrice') {
      updatedProducts[index].totalPrice = 
        updatedProducts[index].quantity * updatedProducts[index].unitPrice;
    }

    // Recalculate totals
    const subtotal = updatedProducts.reduce((sum, product) => sum + product.totalPrice, 0);
    const taxes = subtotal * 0.18; // Assuming 18% tax
    const grandTotal = subtotal + taxes - formData.discounts;

    setFormData({
      ...formData,
      products: updatedProducts,
      subtotal,
      taxes,
      grandTotal
    });
  };

  const addProductLine = () => {
    setFormData({
      ...formData,
      products: [
        ...formData.products,
        {
          productName: '',
          productCategory: '',
          quantity: 1,
          unitPrice: 0,
          totalPrice: 0
        }
      ]
    });
  };

  const removeProductLine = (index: number) => {
    const updatedProducts = formData.products.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      products: updatedProducts
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-sky-800">Create Order</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* From (Your Company) */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">From (Your Company Details)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  value={formData.companyPhone}
                  onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  value={formData.companyAddress}
                  onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                  rows={2}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.companyEmail}
                  onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
            </div>
          </div>

          {/* To (Other Company) */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">To (Other Company Details)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  value={formData.clientCompanyName}
                  onChange={(e) => setFormData({ ...formData, clientCompanyName: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                <input
                  type="text"
                  value={formData.clientContactPerson}
                  onChange={(e) => setFormData({ ...formData, clientContactPerson: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  value={formData.clientAddress}
                  onChange={(e) => setFormData({ ...formData, clientAddress: e.target.value })}
                  rows={2}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  value={formData.clientPhone}
                  onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Order Details</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Order ID</label>
                <input
                  type="text"
                  value={formData.orderId}
                  readOnly
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="date"
                  value={formData.orderDate}
                  onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Status</label>
                <input
                  type="text"
                  value={formData.orderStatus}
                  onChange={(e) => setFormData({ ...formData, orderStatus: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium text-gray-900">Product Details</h4>
              <button
                type="button"
                onClick={addProductLine}
                className="px-3 py-1 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors"
              >
                Add Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Product Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Quantity</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Unit Price</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Total Price</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.products.map((product, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={product.productName}
                          onChange={(e) => handleProductChange(index, 'productName', e.target.value)}
                          className="w-full rounded-md border border-gray-300 shadow-sm p-2"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={product.productCategory}
                          onChange={(e) => handleProductChange(index, 'productCategory', e.target.value)}
                          className="w-full rounded-md border border-gray-300 shadow-sm p-2"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value))}
                          className="w-full rounded-md border border-gray-300 shadow-sm p-2 text-right"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={product.unitPrice}
                          onChange={(e) => handleProductChange(index, 'unitPrice', parseFloat(e.target.value))}
                          className="w-full rounded-md border border-gray-300 shadow-sm p-2 text-right"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={product.totalPrice}
                          readOnly
                          className="w-full rounded-md border border-gray-300 shadow-sm p-2 bg-gray-50 text-right"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        {formData.products.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeProductLine(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="border-t border-gray-200">
                  <tr>
                    <td colSpan={4} className="px-4 py-2 text-right font-medium">Subtotal:</td>
                    <td className="px-4 py-2 text-right">{formData.subtotal.toFixed(2)}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="px-4 py-2 text-right font-medium">Taxes:</td>
                    <td className="px-4 py-2 text-right">{formData.taxes.toFixed(2)}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="px-4 py-2 text-right font-medium">Discounts:</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={formData.discounts}
                        onChange={(e) => setFormData({
                          ...formData,
                          discounts: parseFloat(e.target.value),
                          grandTotal: formData.subtotal + formData.taxes - parseFloat(e.target.value)
                        })}
                        className="w-full rounded-md border border-gray-300 shadow-sm p-2 text-right"
                      />
                    </td>
                    <td></td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td colSpan={4} className="px-4 py-2 text-right font-medium">Grand Total:</td>
                    <td className="px-4 py-2 text-right font-bold">{formData.grandTotal.toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Payment Details */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Payment Details</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="space-y-2">
                  {['Credit Card', 'Bank Transfer', 'Cash on Delivery', 'Other'].map((method) => (
                    <label key={method} className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                        className="mr-2"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>
              {formData.paymentMethod === 'Other' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Specify Other Method</label>
                  <input
                    type="text"
                    value={formData.otherPaymentMethod}
                    onChange={(e) => setFormData({ ...formData, otherPaymentMethod: e.target.value })}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Additional Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expected Delivery Date</label>
                <input
                  type="date"
                  value={formData.expectedDeliveryDate}
                  onChange={(e) => setFormData({ ...formData, expectedDeliveryDate: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Created By</label>
                <input
                  type="text"
                  value={formData.createdBy}
                  onChange={(e) => setFormData({ ...formData, createdBy: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Notes/Instructions</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700"
            >
              Create Order & Generate Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}