type MonthlyPayment = {
  id: number;
  type: string;
  amount: number;
  dayOfMonth: number;
  company?: string;
  reference?: string;
  notes?: string;
};

export const monthlyPayments: MonthlyPayment[] = [
  {
    id: 1,
    type: "Rent",
    amount: 120000,
    dayOfMonth: 1,
    company: "ABC Lettings",
    reference: "RENT12345",
  },
  {
    id: 2,
    type: "Electricity",
    amount: 4500,
    dayOfMonth: 5,
    company: "PowerCo",
    reference: "ELEC98765",
  },
  {
    id: 3,
    type: "Water",
    amount: 3000,
    dayOfMonth: 7,
    company: "AquaFlow",
    reference: "WATER65432",
  },
  {
    id: 4,
    type: "Gas",
    amount: 4000,
    dayOfMonth: 10,
    company: "GasWorks",
    reference: "GAS54321",
  },
  {
    id: 5,
    type: "Internet",
    amount: 3500,
    dayOfMonth: 15,
    company: "FastNet",
    reference: "NET11223",
  },
  {
    id: 6,
    type: "Mobile",
    amount: 2500,
    dayOfMonth: 18,
    company: "TelecomX",
    reference: "MOB99887",
  },
  {
    id: 7,
    type: "Council Tax",
    amount: 12000,
    dayOfMonth: 25,
    company: "City Council",
    reference: "CTAX66554",
  },
  {
    id: 8,
    type: "Car Insurance",
    amount: 22000,
    dayOfMonth: 12,
    company: "SafeDrive Insure",
    reference: "CARINS1221",
  },
  {
    id: 9,
    type: "TV Subscription",
    amount: 899,
    dayOfMonth: 20,
    company: "StreamPlus",
  },
  {
    id: 10,
    type: "Gym Membership",
    amount: 2999,
    dayOfMonth: 14,
    company: "FitClub",
    notes: "Annual contract",
  },
  { id: 11, type: "Spotify", amount: 999, dayOfMonth: 23, company: "Spotify" },
  { id: 12, type: "Netflix", amount: 1099, dayOfMonth: 26, company: "Netflix" },
  {
    id: 13,
    type: "Amazon Prime",
    amount: 799,
    dayOfMonth: 27,
    company: "Amazon",
  },
  {
    id: 14,
    type: "Life Insurance",
    amount: 15000,
    dayOfMonth: 9,
    company: "SecureLife",
    reference: "LIFE5566",
  },
  {
    id: 15,
    type: "Student Loan",
    amount: 45000,
    dayOfMonth: 28,
    reference: "SLC876543",
    notes: "Variable payment based on income",
  },
];
