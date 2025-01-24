export interface Lead {
  date: string;
  ulnNo: string;
  source: string;
  leadName: string;
  leadType: string;
  products: string;
  productCategories: string;
  mailId: string;
  phoneNumber: string;
  location: string;
  connected: string;
  medium: string;
  response: string;
  reason: string;
  handledBy: string;
  moveToSales: string;
  reminder: string;
}

export interface CreateLeadForm {
  date: string;
  ulnNo: string;
  source: string;
  leadName: string;
  leadType: string;
  products: string;
  productCategories: string;
  mailId: string;
  phoneNumber: string;
  location: string;
  handledBy: string;
}

export const sourceOptions = ['Indiamart', 'Just Dial', 'Trade India', 'Website', 'Reference', 'Other'];
export const leadTypeOptions = ['B2B', 'B2C', 'B2G'];

export const initialLeadData: Lead[] = [
  {
    date: '01-12-2024',
    ulnNo: 'ULN 01',
    source: 'Indiamart',
    leadName: 'Name 1',
    leadType: 'B2B',
    products: 'Product A',
    productCategories: 'Category 1',
    mailId: 'zzz@gmail.com',
    phoneNumber: '12345678',
    location: 'Hyderabad',
    connected: 'Yes',
    medium: 'In Person Meeting',
    response: 'Not Interested',
    reason: 'Blaaaaa',
    handledBy: 'Name 1',
    moveToSales: 'Suspect',
    reminder: 'Yes'
  },
  {
    date: '02-12-2024',
    ulnNo: 'ULN 02',
    source: 'Just Dail',
    leadName: 'Name 2',
    leadType: 'B2C',
    products: 'Product B',
    productCategories: 'Category 2',
    mailId: 'zzz@yahoo.com',
    phoneNumber: '12345678',
    location: 'Benguluru',
    connected: 'No',
    medium: 'Call',
    response: 'Interested',
    reason: 'Blaa ..',
    handledBy: 'Name 2',
    moveToSales: 'Prospect',
    reminder: 'NO'
  },
  {
    date: '03-12-2024',
    ulnNo: 'ULN 03',
    source: 'Trade India',
    leadName: 'Name 3',
    leadType: 'B2G',
    products: 'Product C',
    productCategories: 'Category 1',
    mailId: 'zzz@outlook.com',
    phoneNumber: '12345678',
    location: 'Delhi',
    connected: '',
    medium: 'Mail',
    response: '',
    reason: 'Blaa blaa',
    handledBy: 'Name 3',
    moveToSales: 'Approach',
    reminder: ''
  },
  // Adding 5 new untouched leads
  {
    date: '15-03-2024',
    ulnNo: 'ULN 04',
    source: 'Website',
    leadName: 'Tech Solutions Ltd',
    leadType: 'B2B',
    products: 'Enterprise Software',
    productCategories: 'Software Solutions',
    mailId: 'contact@techsolutions.com',
    phoneNumber: '9876543210',
    location: 'Mumbai',
    connected: '', // Untouched
    medium: '', // Untouched
    response: '', // Untouched
    reason: '',
    handledBy: 'Rahul Kumar',
    moveToSales: '',
    reminder: ''
  },
  {
    date: '15-03-2024',
    ulnNo: 'ULN 05',
    source: 'Reference',
    leadName: 'Green Energy Systems',
    leadType: 'B2G',
    products: 'Solar Panels',
    productCategories: 'Renewable Energy',
    mailId: 'info@greenenergy.com',
    phoneNumber: '8765432109',
    location: 'Chennai',
    connected: '', // Untouched
    medium: '', // Untouched
    response: '', // Untouched
    reason: '',
    handledBy: 'Priya Singh',
    moveToSales: '',
    reminder: ''
  },
  {
    date: '15-03-2024',
    ulnNo: 'ULN 06',
    source: 'Indiamart',
    leadName: 'Smart Retail Solutions',
    leadType: 'B2B',
    products: 'POS System',
    productCategories: 'Retail Technology',
    mailId: 'purchase@smartretail.com',
    phoneNumber: '7654321098',
    location: 'Pune',
    connected: '', // Untouched
    medium: '', // Untouched
    response: '', // Untouched
    reason: '',
    handledBy: 'Amit Patel',
    moveToSales: '',
    reminder: ''
  },
  {
    date: '15-03-2024',
    ulnNo: 'ULN 07',
    source: 'Trade India',
    leadName: 'Healthcare Innovations',
    leadType: 'B2B',
    products: 'Medical Equipment',
    productCategories: 'Healthcare',
    mailId: 'procurement@healthcare-inn.com',
    phoneNumber: '6543210987',
    location: 'Kolkata',
    connected: '', // Untouched
    medium: '', // Untouched
    response: '', // Untouched
    reason: '',
    handledBy: 'Sneha Reddy',
    moveToSales: '',
    reminder: ''
  },
  {
    date: '15-03-2024',
    ulnNo: 'ULN 08',
    source: 'Just Dial',
    leadName: 'EduTech Solutions',
    leadType: 'B2C',
    products: 'Learning Management System',
    productCategories: 'Education Technology',
    mailId: 'info@edutech.com',
    phoneNumber: '5432109876',
    location: 'Bangalore',
    connected: '', // Untouched
    medium: '', // Untouched
    response: '', // Untouched
    reason: '',
    handledBy: 'Vikram Sharma',
    moveToSales: '',
    reminder: ''
  }
];