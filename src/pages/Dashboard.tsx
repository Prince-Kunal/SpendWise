import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, PiggyBank, AlertCircle, Target, Zap } from 'lucide-react';
import { mockUserStats, mockInsights, mockCategories, mockSavingsGoals } from '../data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#ef4444', '#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#f97316'];

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month'>('month');

  const chartData = mockCategories.map(cat => ({
    name: cat.name,
    value: cat.total,
    icon: cat.icon
  }));

  const totalExpenses = mockCategories.reduce((sum, cat) => sum + cat.total, 0);
  const savings = mockUserStats.totalIncome - totalExpenses;
  const savingsPercentage = ((savings / mockUserStats.totalIncome) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's your financial overview</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPeriod('week')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedPeriod === 'week'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedPeriod === 'month'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Income</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ₹{mockUserStats.totalIncome.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ₹{totalExpenses.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Savings</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ₹{savings.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 mt-1">{savingsPercentage}% of income</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <PiggyBank className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Streak</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {mockUserStats.streak} days 🔥
              </p>
              <p className="text-sm text-gray-500 mt-1">Keep it up!</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Zap className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Fund Alert */}
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Emergency Buffer</h3>
            <p className="text-sm text-gray-600 mt-1">
              You can survive <span className="font-bold">{mockUserStats.emergencyMonths} months</span> on your current savings.
              Aim for 3 months for better financial security.
            </p>
            <Link to="/goals" className="text-primary-600 text-sm font-medium mt-2 inline-block hover:underline">
              Set Emergency Fund Goal →
            </Link>
          </div>
        </div>
      </div>

      {/* Expense Categories Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Expense Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Insights */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">AI Insights</h2>
            <Link to="/insights" className="text-primary-600 text-sm font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {mockInsights.slice(0, 2).map((insight) => (
              <div key={insight.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg mr-3 ${
                    insight.type === 'savings' ? 'bg-green-100' :
                    insight.type === 'warning' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {insight.type === 'savings' ? '💰' : insight.type === 'warning' ? '⚠️' : '💡'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{insight.message}</p>
                    {insight.impact && (
                      <p className="text-sm text-primary-600 font-medium mt-1">{insight.impact}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Goals */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Active Savings Goals</h2>
          <Link to="/goals" className="text-primary-600 text-sm font-medium hover:underline">
            Manage Goals →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockSavingsGoals.slice(0, 3).map((goal) => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            return (
              <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{goal.name}</h3>
                  <Target className="h-5 w-5 text-primary-600" />
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">₹{goal.currentAmount.toLocaleString()}</span>
                    <span className="text-gray-600">₹{goal.targetAmount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Save ₹{goal.dailySavings}/day to reach goal
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

