import React, { useState } from 'react';
import { Building2, LogOut, Plus, Import } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LeadsTable } from './components/LeadsTable';
import { ViewModal } from './components/ViewModal';
import { EditModal } from './components/EditModal';
import { DeleteModal } from './components/DeleteModal';
import { CreateLeadModal } from './components/CreateLeadModal';
import { OpportunitySummaryTable } from './components/OpportunitySummaryTable';
import { Lead, initialLeadData } from './types/leads';
import { ClientsInformationTable } from './components/ClientsInformationTable';
import { AddClientModal } from './components/AddClientModal';
import { Client, initialClients } from './components/ClientsInformationTable';
import { ViewClientModal } from './components/ViewClientModal';
import { EditClientModal } from './components/EditClientModal';
import { DeleteClientModal } from './components/DeleteClientModal';
import { ClientsManagementTable, initialClientsManagement } from './components/ClientsManagementTable';
import { ClientsOrderFrequencyTable, initialClientsOrderFrequency } from './components/ClientsOrderFrequencyTable';
import { NewLeadGenerationTable } from './components/NewLeadGenerationTable';
import { ProductWiseTargetsTable } from './components/ProductWiseTargetsTable';
import { ProductWiseForecastTable } from './components/ProductWiseForecastTable';
import { OrderManagementTable, initialOrderData } from './components/OrderManagementTable';
import { CreateOrderModal } from './components/CreateOrderModal';

export default function Sales() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState('Lead Management');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<Lead | null>(null);
  const [leadData, setLeadData] = useState<Lead[]>(initialLeadData);
  const [activeTab, setActiveTab] = useState('New Leads');
  const [opportunityTab, setOpportunityTab] = useState('View OPPS');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('Today');
  const [clientManagementTab, setClientManagementTab] = useState('ClientsInformation');
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isViewClientModalOpen, setIsViewClientModalOpen] = useState(false);
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [isDeleteClientModalOpen, setIsDeleteClientModalOpen] = useState(false);
  const [forecastingTab, setForecastingTab] = useState('New Lead Generation');
  const [orderManagementTab, setOrderManagementTab] = useState('Pending Orders');
  const [isCreateOrderModalOpen, setIsCreateOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const handleLogout = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleView = (ulnNo: string) => {
    const lead = leadData.find(l => l.ulnNo === ulnNo);
    if (lead) {
      setSelectedLead(lead);
      setIsViewModalOpen(true);
    }
  };

  const handleEdit = (ulnNo: string) => {
    const lead = leadData.find(l => l.ulnNo === ulnNo);
    if (lead) {
      setSelectedLead(lead);
      setEditFormData(lead);
      setIsEditModalOpen(true);
    }
  };

  const handleDelete = (ulnNo: string) => {
    const lead = leadData.find(l => l.ulnNo === ulnNo);
    if (lead) {
      setSelectedLead(lead);
      setIsDeleteModalOpen(true);
    }
  };

  const handleEditSubmit = (editedLead: Lead) => {
    const updatedData = leadData.map(lead => 
      lead.ulnNo === editedLead.ulnNo ? editedLead : lead
    );
    setLeadData(updatedData);
    setIsEditModalOpen(false);
    setEditFormData(null);
  };

  const handleDeleteConfirm = () => {
    if (selectedLead) {
      const updatedData = leadData.filter(lead => lead.ulnNo !== selectedLead.ulnNo);
      setLeadData(updatedData);
      setIsDeleteModalOpen(false);
      setSelectedLead(null);
    }
  };

  const handleCreateLead = (newLead: Lead) => {
    setLeadData([...leadData, newLead]);
    setIsCreateModalOpen(false);
  };

  const handleUpdateReminder = (ulnNo: string, value: string) => {
    const updatedData = leadData.map(lead =>
      lead.ulnNo === ulnNo ? { ...lead, reminder: value } : lead
    );
    setLeadData(updatedData);
  };

  const handleUpdateMoveToSales = (ulnNo: string, value: string) => {
    const updatedData = leadData.map(lead =>
      lead.ulnNo === ulnNo ? { ...lead, moveToSales: value } : lead
    );
    setLeadData(updatedData);
  };

  const handleAddClient = (newClientData: Omit<Client, 'serialNo'>) => {
    const newClient: Client = {
      ...newClientData,
      serialNo: clients.length + 1
    };
    setClients([...clients, newClient]);
    setIsAddClientModalOpen(false);
  };

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
    setIsViewClientModalOpen(true);
  };

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setIsEditClientModalOpen(true);
  };

  const handleDeleteClient = (client: Client) => {
    setSelectedClient(client);
    setIsDeleteClientModalOpen(true);
  };

  const handleEditClientSubmit = (editedClient: Client) => {
    const updatedClients = clients.map(client =>
      client.ulnNo === editedClient.ulnNo ? editedClient : client
    );
    setClients(updatedClients);
    setIsEditClientModalOpen(false);
    setSelectedClient(null);
  };

  const handleDeleteClientConfirm = () => {
    if (selectedClient) {
      const updatedClients = clients.filter(client => client.ulnNo !== selectedClient.ulnNo);
      setClients(updatedClients);
      setIsDeleteClientModalOpen(false);
      setSelectedClient(null);
    }
  };

  const handleCreateOrder = (order: any) => {
    setSelectedOrder(order);
    setIsCreateOrderModalOpen(true);
  };

  const handleOrderSubmit = (formData: any) => {
    // Handle order submission here
    console.log('Order submitted:', formData);
    setIsCreateOrderModalOpen(false);
    setSelectedOrder(null);
  };

  const renderOrderManagement = () => {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-sky-800">Order Management</h2>
        </div>

        <div className="mb-4 flex gap-4 overflow-x-auto">
          {[
            'Pending Orders',
            'Confirmed Orders',
            'Completed Orders',
            'Cancelled Orders'
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setOrderManagementTab(tab)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                orderManagementTab === tab ? 'bg-sky-100 text-sky-800' : 'bg-white text-sky-800 hover:bg-sky-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {orderManagementTab === 'Pending Orders' && (
          <OrderManagementTable
            data={initialOrderData}
            onCreateOrder={handleCreateOrder}
            type="pending"
          />
        )}

        {orderManagementTab === 'Confirmed Orders' && (
          <OrderManagementTable
            data={initialOrderData}
            onCreateOrder={handleCreateOrder}
            type="confirmed"
          />
        )}
      </div>
    );
  };

  const renderSetMilestones = () => {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-sky-800">Set Milestones</h2>
        </div>

        <div className="mb-4 flex gap-4 overflow-x-auto">
          {[
            'New Lead Generation',
            'Product Wise Targets',
            'Product Wise Forecast'
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setForecastingTab(tab)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                forecastingTab === tab ? 'bg-sky-100 text-sky-800' : 'bg-white text-sky-800 hover:bg-sky-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {forecastingTab === 'New Lead Generation' && (
          <div>
            <h3 className="text-lg font-medium text-sky-800 mb-4">New Lead Generation Forecast</h3>
            <NewLeadGenerationTable 
              data={[
                {
                  selectMonth: 'January',
                  monthTarget: 700,
                  salesExecutive: 'Executive A',
                  salesManager: 'Manager A',
                  todayTarget: 5,
                  weekTarget: 25,
                  firstFNTTarget: 50,
                  secondFNTTarget: 50,
                  monthTarget: 100
                },
                {
                  selectMonth: 'January',
                  monthTarget: 700,
                  salesExecutive: 'Executive A',
                  salesManager: 'Manager A',
                  todayTarget: 7,
                  weekTarget: 35,
                  firstFNTTarget: 75,
                  secondFNTTarget: 75,
                  monthTarget: 150
                },
                {
                  selectMonth: 'January',
                  monthTarget: 700,
                  salesExecutive: 'Executive A',
                  salesManager: 'Manager A',
                  todayTarget: 10,
                  weekTarget: 50,
                  firstFNTTarget: 100,
                  secondFNTTarget: 100,
                  monthTarget: 200
                },
                {
                  selectMonth: 'January',
                  monthTarget: 700,
                  salesExecutive: 'Executive A',
                  salesManager: 'Manager A',
                  todayTarget: 5,
                  weekTarget: 25,
                  firstFNTTarget: 50,
                  secondFNTTarget: 50,
                  monthTarget: 100
                },
                {
                  selectMonth: 'January',
                  monthTarget: 700,
                  salesExecutive: 'Executive A',
                  salesManager: 'Manager A',
                  todayTarget: 7,
                  weekTarget: 35,
                  firstFNTTarget: 75,
                  secondFNTTarget: 75,
                  monthTarget: 150
                }
              ]}
            />
          </div>
        )}

        {forecastingTab === 'Product Wise Targets' && (
          <div>
            <h3 className="text-lg font-medium text-sky-800 mb-4">Product Wise Targets</h3>
            <ProductWiseTargetsTable 
              data={[
                // Add your product wise targets data here
              ]}
            />
          </div>
        )}

        {forecastingTab === 'Product Wise Forecast' && (
          <div>
            <h3 className="text-lg font-medium text-sky-800 mb-4">Product Wise Forecast</h3>
            <ProductWiseForecastTable 
              data={[
                // Add your product wise forecast data here
              ]}
            />
          </div>
        )}
      </div>
    );
  };

  const renderLeadManagement = () => {
    const filteredLeads = getFilteredLeads();

    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-sky-800">
            {getTabTitle()}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-1 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
            >
              <Plus className="w-4 h-4" /> Create Leads
            </button>
            <button className="flex items-center gap-1 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
              <Import className="w-4 h-4" /> Import
            </button>
          </div>
        </div>

        <div className="mb-4 flex gap-4 overflow-x-auto">
          {['New Leads', 'Existing Leads', 'Create Leads', 'Untouched Leads', 'Reminders', 'My Leads', 'Un Use Leads'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === tab ? 'bg-sky-100 text-sky-800' : 'bg-white text-sky-800 hover:bg-sky-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-4 flex gap-4">
          {['Today', 'Week Wise', '15 days', '30 days'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedTimeFilter(filter)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTimeFilter === filter ? 'bg-sky-100 text-sky-800' : 'bg-white text-sky-800 hover:bg-sky-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredLeads.length > 0 ? (
          <LeadsTable
            leadData={filteredLeads}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onUpdateReminder={handleUpdateReminder}
            onUpdateMoveToSales={handleUpdateMoveToSales}
          />
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No {activeTab.toLowerCase()} found.</p>
          </div>
        )}
      </div>
    );
  };

  const renderOpportunityManagement = () => {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-sky-800">
            Opportunity Management
          </h2>
        </div>

        <div className="mb-4 flex gap-4 overflow-x-auto">
          {[
            'View OPPS',
            'Approaches',
            'Suspects',
            'Prospects',
            'Objection Handling',
            'Negotiation',
            'Create Orders'
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setOpportunityTab(tab)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                opportunityTab === tab ? 'bg-sky-100 text-sky-800' : 'bg-white text-sky-800 hover:bg-sky-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {opportunityTab === 'View OPPS' && (
          <>
            <div className="mb-4 flex gap-4">
              {['Today', 'Week Wise', '15 days', '30 days'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedTimeFilter(filter)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedTimeFilter === filter ? 'bg-sky-100 text-sky-800' : 'bg-white text-sky-800 hover:bg-sky-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {selectedTimeFilter === 'Week Wise' && (
              <OpportunitySummaryTable data={[
                {
                  serialNo: 1,
                  date: '2024-03-15',
                  salesStage: 'Suspect',
                  numberOfOpportunities: 15,
                  products: 'Product A, Product B',
                  productCategories: 'Category 1',
                  volumes: 150,
                  totalPotentialValue: 750000,
                  percentageOfTotalOpportunities: 0.25,
                  expectedRevenue: 187500
                },
                {
                  serialNo: 2,
                  date: '2024-03-15',
                  salesStage: 'Prospect',
                  numberOfOpportunities: 12,
                  products: 'Product C',
                  productCategories: 'Category 2',
                  volumes: 120,
                  totalPotentialValue: 600000,
                  percentageOfTotalOpportunities: 0.20,
                  expectedRevenue: 180000
                }
              ]} />
            )}
          </>
        )}
      </div>
    );
  };

  const renderClientsManagement = () => {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-sky-800">
            Client's Management
          </h2>
        </div>

        <div className="mb-6 flex gap-4 overflow-x-auto bg-white p-2 rounded-lg shadow-sm">
          {[
            { id: 'ClientsInformation', label: 'Clients Information' },
            { id: 'ClientsManagement', label: 'Clients Management' },
            { id: 'ClientsOrderFrequency', label: 'Clients Order Frequency' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setClientManagementTab(tab.id)}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap font-medium ${
                clientManagementTab === tab.id
                  ? 'bg-sky-100 text-sky-800 shadow-sm'
                  : 'text-gray-600 hover:bg-sky-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {clientManagementTab === 'ClientsInformation' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-sky-800">Clients Information</h3>
                <button 
                  onClick={() => setIsAddClientModalOpen(true)}
                  className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add New Client
                </button>
              </div>
              <ClientsInformationTable 
                clients={clients}
                onView={handleViewClient}
                onEdit={handleEditClient}
                onDelete={handleDeleteClient}
              />
            </div>
          )}

          {clientManagementTab === 'ClientsManagement' && (
            <div>
              <h3 className="text-lg font-medium text-sky-800 mb-4">Clients Management</h3>
              <ClientsManagementTable 
                clients={initialClientsManagement}
                onView={handleViewClient}
                onEdit={handleEditClient}
                onDelete={handleDeleteClient}
              />
            </div>
          )}

          {clientManagementTab === 'ClientsOrderFrequency' && (
            <div>
              <h3 className="text-lg font-medium text-sky-800 mb-4">Clients Order Frequency</h3>
              <ClientsOrderFrequencyTable 
                clients={initialClientsOrderFrequency}
                onView={handleViewClient}
                onEdit={handleEditClient}
                onDelete={handleDeleteClient}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const getFilteredLeads = () => {
    let filteredLeads = leadData;

    switch (activeTab) {
      case 'Existing Leads':
        filteredLeads = leadData.filter(lead => 
          lead.connected === 'Yes' || lead.medium !== '' || lead.response !== ''
        );
        break;
      case 'Untouched Leads':
        filteredLeads = leadData.filter(lead => 
          lead.connected === '' || lead.medium === '' || lead.response === ''
        );
        break;
      default:
        break;
    }

    return filteredLeads;
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'New Leads':
        return 'New Leads Management';
      case 'Existing Leads':
        return 'Existing Leads Management';
      case 'Untouched Leads':
        return 'Untouched Leads Management';
      default:
        return `${activeTab} Management`;
    }
  };

  const features = [
    'Lead Management',
    'Opportunity Management',
    "Client's Management",
    'Set Milestones',
    'Order Management',
    'Sales Pipeline Visualization',
    'Customer Segmentation',
    'Customer Relationship Management (CRM)',
    'Sales Reporting & Analytics',
    'Incentive and Commission Tracking',
    'Customer Feedback Management',
    'Market Trend Analysis',
    'Customer Loyalty Management'
  ];

  return (
    <div className="min-h-screen bg-sky-50 flex">
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-sky-800 mb-4">Features</h2>
          <nav className="space-y-2">
            {features.map((feature) => (
              <button
                key={feature}
                onClick={() => setSelectedFeature(feature)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedFeature === feature
                    ? 'bg-sky-100 text-sky-800'
                    : 'text-gray-600 hover:bg-sky-50'
                }`}
              >
                {feature}
              </button>
            ))}
          </nav>
        </div>
      </div>

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
          {selectedFeature === 'Lead Management' && renderLeadManagement()}
          {selectedFeature === 'Opportunity Management' && renderOpportunityManagement()}
          {selectedFeature === "Client's Management" && renderClientsManagement()}
          {selectedFeature === 'Set Milestones' && renderSetMilestones()}
          {selectedFeature === 'Order Management' && renderOrderManagement()}
        </main>
      </div>

      {isViewModalOpen && selectedLead && (
        <ViewModal
          lead={selectedLead}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}

      {isEditModalOpen && editFormData && (
        <EditModal
          lead={editFormData}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}

      {isDeleteModalOpen && selectedLead && (
        <DeleteModal
          lead={selectedLead}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}

      {isCreateModalOpen && (
        <CreateLeadModal
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreateLead}
          leadCount={leadData.length}
        />
      )}

      {isAddClientModalOpen && (
        <AddClientModal
          onClose={() => setIsAddClientModalOpen(false)}
          onSubmit={handleAddClient}
          clientCount={clients.length}
        />
      )}

      {isViewClientModalOpen && selectedClient && (
        <ViewClientModal
          client={selectedClient}
          onClose={() => {
            setIsViewClientModalOpen(false);
            setSelectedClient(null);
          }}
        />
      )}

      {isEditClientModalOpen && selectedClient && (
        <EditClientModal
          client={selectedClient}
          onClose={() => {
            setIsEditClientModalOpen(false);
            setSelectedClient(null);
          }}
          onSubmit={handleEditClientSubmit}
        />
      )}

      {isDeleteClientModalOpen && selectedClient && (
        <DeleteClientModal
          client={selectedClient}
          onClose={() => {
            setIsDeleteClientModalOpen(false);
            setSelectedClient(null);
          }}
          onConfirm={handleDeleteClientConfirm}
        />
      )}

      {isCreateOrderModalOpen && selectedOrder && (
        <CreateOrderModal
          order={selectedOrder}
          onClose={() => {
            setIsCreateOrderModalOpen(false);
            setSelectedOrder(null);
          }}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  );
}