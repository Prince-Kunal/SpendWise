import { Expense, Category, Insight, SavingsGoal, Badge, UserStats, InvestmentAwareness } from '../types';

export const mockExpenses: Expense[] = [
  { id: '1', amount: 250, description: 'Lunch at restaurant', category: 'Food', date: '2024-01-15', type: 'want' },
  { id: '2', amount: 500, description: 'Grocery shopping', category: 'Food', date: '2024-01-14', type: 'need' },
  { id: '3', amount: 1200, description: 'Uber rides', category: 'Transport', date: '2024-01-13', type: 'need' },
  { id: '4', amount: 1500, description: 'Online shopping', category: 'Shopping', date: '2024-01-12', type: 'want' },
  { id: '5', amount: 300, description: 'Coffee & snacks', category: 'Food', date: '2024-01-11', type: 'want' },
  { id: '6', amount: 800, description: 'Movie tickets', category: 'Entertainment', date: '2024-01-10', type: 'want' },
  { id: '7', amount: 2000, description: 'Rent', category: 'Housing', date: '2024-01-01', type: 'need' },
  { id: '8', amount: 400, description: 'Electricity bill', category: 'Utilities', date: '2024-01-05', type: 'need' },
];

export const mockCategories: Category[] = [
  { name: 'Food', total: 2500, color: '#ef4444', icon: '🍔' },
  { name: 'Transport', total: 1200, color: '#3b82f6', icon: '🚗' },
  { name: 'Shopping', total: 1500, color: '#8b5cf6', icon: '🛍️' },
  { name: 'Entertainment', total: 800, color: '#f59e0b', icon: '🎬' },
  { name: 'Housing', total: 2000, color: '#10b981', icon: '🏠' },
  { name: 'Utilities', total: 400, color: '#f97316', icon: '⚡' },
];

export const mockInsights: Insight[] = [
  {
    id: '1',
    type: 'savings',
    title: 'Food Delivery Savings',
    message: 'You spent ₹2,500 on food delivery last month',
    impact: 'Cooking twice a week could save you ₹1,000',
    action: 'Try meal prepping on weekends'
  },
  {
    id: '2',
    type: 'warning',
    title: 'High Entertainment Spending',
    message: 'Your entertainment expenses increased by 30% this month',
    impact: 'Consider free alternatives like parks or home activities',
    action: 'Set a monthly entertainment budget'
  },
  {
    id: '3',
    type: 'tip',
    title: 'Transport Optimization',
    message: 'You can save ₹300/month by using public transport twice a week',
    impact: 'That\'s ₹3,600 saved annually',
    action: 'Plan your weekly commute'
  }
];

export const mockSavingsGoals: SavingsGoal[] = [
  { id: '1', name: 'Laptop Repair', targetAmount: 5000, currentAmount: 2500, deadline: '2024-02-15', dailySavings: 100 },
  { id: '2', name: 'Emergency Fund', targetAmount: 30000, currentAmount: 15000, deadline: '2024-06-01', dailySavings: 200 },
  { id: '3', name: 'Vacation', targetAmount: 20000, currentAmount: 5000, deadline: '2024-05-01', dailySavings: 150 },
];

export const mockBadges: Badge[] = [
  { id: '1', name: 'First Step', description: 'Logged your first expense', icon: '🎯', earned: true, earnedDate: '2024-01-01' },
  { id: '2', name: 'Week Warrior', description: '7-day expense tracking streak', icon: '🔥', earned: true, earnedDate: '2024-01-08' },
  { id: '3', name: 'Savings Star', description: 'Saved ₹5,000 in a month', icon: '⭐', earned: true, earnedDate: '2024-01-10' },
  { id: '4', name: 'Goal Getter', description: 'Completed your first savings goal', icon: '🏆', earned: false },
  { id: '5', name: 'Month Master', description: '30-day tracking streak', icon: '💪', earned: false },
];

export const mockUserStats: UserStats = {
  totalExpenses: 8400,
  totalIncome: 50000,
  savings: 41600,
  streak: 12,
  level: 3,
  emergencyMonths: 2.5,
};

export const mockInvestmentAwareness: InvestmentAwareness[] = [
  {
    amount: 500,
    duration: 5,
    potential: 40000,
    explanation: 'If you invest ₹500/month as SIP with 12% annual returns, it could become ₹40,000 in 5 years. The power of compound interest helps your money grow over time.'
  },
  {
    amount: 1000,
    duration: 10,
    potential: 230000,
    explanation: 'A monthly SIP of ₹1,000 for 10 years at 12% returns can grow to ₹2.3 lakhs. Starting early gives your investments more time to compound.'
  },
  {
    amount: 2000,
    duration: 15,
    potential: 1000000,
    explanation: 'Investing ₹2,000/month for 15 years can potentially reach ₹10 lakhs. Consistency and time are your best friends in wealth building.'
  }
];

export const mockScenarios = [
  {
    id: '1',
    name: 'Reduce Outings',
    changes: [{ type: 'expense', category: 'Entertainment', amount: -400 }],
    result: { monthlySavings: 400, investmentPotential: 24000 }
  },
  {
    id: '2',
    name: 'Rent Increase',
    changes: [{ type: 'expense', category: 'Housing', amount: 500 }],
    result: { monthlySavings: -500, investmentPotential: -30000 }
  },
  {
    id: '3',
    name: 'Cook More at Home',
    changes: [{ type: 'expense', category: 'Food', amount: -1000 }],
    result: { monthlySavings: 1000, investmentPotential: 60000 }
  }
];

export const mockLearningTips = [
  {
    id: '1',
    title: 'Needs vs Wants',
    content: 'Needs are essentials for survival (rent, food, utilities). Wants are things you desire but can live without. Try the 24-hour rule: wait a day before buying wants.',
    category: 'Basics'
  },
  {
    id: '2',
    title: 'How SIPs Work',
    content: 'Systematic Investment Plans let you invest small amounts regularly. This averages out market fluctuations and builds wealth through compounding over time.',
    category: 'Investing'
  },
  {
    id: '3',
    title: 'Emergency Fund Rule',
    content: 'Aim to save 3-6 months of expenses as an emergency fund. This protects you from unexpected situations without derailing your financial goals.',
    category: 'Savings'
  },
  {
    id: '4',
    title: 'The 50/30/20 Rule',
    content: 'Allocate 50% to needs, 30% to wants, and 20% to savings. Adjust based on your income and goals, but always prioritize saving.',
    category: 'Planning'
  }
];

