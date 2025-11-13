export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  type: 'need' | 'want';
}

export interface Category {
  name: string;
  total: number;
  color: string;
  icon: string;
}

export interface Insight {
  id: string;
  type: 'savings' | 'warning' | 'tip' | 'achievement';
  title: string;
  message: string;
  impact?: string;
  action?: string;
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  dailySavings: number;
}

export interface Scenario {
  id: string;
  name: string;
  changes: {
    type: 'expense' | 'income';
    category?: string;
    amount: number;
  }[];
  result: {
    monthlySavings: number;
    investmentPotential: number;
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface UserStats {
  totalExpenses: number;
  totalIncome: number;
  savings: number;
  streak: number;
  level: number;
  emergencyMonths: number;
}

export interface InvestmentAwareness {
  amount: number;
  duration: number;
  potential: number;
  explanation: string;
}

