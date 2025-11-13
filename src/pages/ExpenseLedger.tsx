import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { mockExpenses, mockCategories } from '../data/mockData';
import { Expense } from '../types';

const categoryColors: Record<string, string> = {
  Food: 'bg-red-100 text-red-700',
  Transport: 'bg-blue-100 text-blue-700',
  Shopping: 'bg-purple-100 text-purple-700',
  Entertainment: 'bg-yellow-100 text-yellow-700',
  Housing: 'bg-green-100 text-green-700',
  Utilities: 'bg-orange-100 text-orange-700',
};

export default function ExpenseLedger() {
  const [expenses] = useState<Expense[]>(mockExpenses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalByCategory = mockCategories.reduce((acc, cat) => {
    acc[cat.name] = expenses
      .filter(e => e.category === cat.name)
      .reduce((sum, e) => sum + e.amount, 0);
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expense Ledger</h1>
          <p className="text-gray-500 mt-1">Track and categorize your daily expenses</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Expense
        </button>
      </div>

      {/* Add Expense Form */}
      {showAddForm && (
        <div className="card bg-primary-50 border-primary-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Expense</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="e.g., Lunch at restaurant"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Food</option>
                  <option>Transport</option>
                  <option>Shopping</option>
                  <option>Entertainment</option>
                  <option>Housing</option>
                  <option>Utilities</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Need</option>
                  <option>Want</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">
                Add Expense
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            💡 AI will automatically categorize and analyze your expenses
          </p>
        </div>
      )}

      {/* Category Summary */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockCategories.map((category) => (
            <div key={category.name} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">{category.icon}</div>
              <p className="text-sm font-medium text-gray-700">{category.name}</p>
              <p className="text-lg font-bold text-gray-900 mt-1">
                ₹{totalByCategory[category.name]?.toLocaleString() || 0}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {mockCategories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Expense List */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Expenses</h2>
        <div className="space-y-3">
          {filteredExpenses.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No expenses found</p>
          ) : (
            filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    categoryColors[expense.category] || 'bg-gray-100 text-gray-700'
                  }`}>
                    {expense.category}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{expense.description}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(expense.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ₹{expense.amount.toLocaleString()}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    expense.type === 'need'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {expense.type}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

