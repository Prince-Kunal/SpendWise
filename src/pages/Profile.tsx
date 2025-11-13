import { Award, TrendingUp, Calendar, Target, Users, Settings } from 'lucide-react';
import { mockBadges, mockUserStats } from '../data/mockData';
import { useState } from 'react';

export default function Profile() {
  const [showPeerComparison, setShowPeerComparison] = useState(false);
  const [incomeType, setIncomeType] = useState<'regular' | 'irregular'>('regular');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500 mt-1">Your financial journey and achievements</p>
      </div>

      {/* User Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Level</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {mockUserStats.level}
              </p>
              <p className="text-xs text-gray-500 mt-1">Keep tracking to level up!</p>
            </div>
            <div className="p-3 bg-primary-100 rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Current Streak</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {mockUserStats.streak} 🔥
              </p>
              <p className="text-xs text-gray-500 mt-1">days of tracking</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Savings</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                ₹{mockUserStats.savings.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">Great progress!</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Badges & Achievements */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Badges & Achievements</h2>
          </div>
          <span className="text-sm text-gray-500">
            {mockBadges.filter(b => b.earned).length} / {mockBadges.length} earned
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockBadges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-lg border-2 text-center transition-all ${
                badge.earned
                  ? 'border-yellow-300 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <div className="text-4xl mb-2 filter grayscale" style={badge.earned ? { filter: 'none' } : {}}>
                {badge.icon}
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">{badge.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
              {badge.earned && badge.earnedDate && (
                <p className="text-xs text-gray-500">
                  Earned: {new Date(badge.earnedDate).toLocaleDateString('en-IN', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              )}
              {!badge.earned && (
                <p className="text-xs text-gray-400 italic">Locked</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Adaptive Planning for Irregular Income */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Income Type Settings</h2>
          <Settings className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you have regular or irregular income?
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setIncomeType('regular')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                  incomeType === 'regular'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                Regular Income
              </button>
              <button
                onClick={() => setIncomeType('irregular')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                  incomeType === 'irregular'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                Irregular Income
              </button>
            </div>
          </div>

          {incomeType === 'irregular' && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Adaptive Planning Activated</h3>
              <p className="text-sm text-gray-700 mb-3">
                Spendwise will adjust your savings goals based on your income changes. 
                During slow months, we'll suggest a "variable saving" plan to help you 
                maintain financial stability.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span className="text-gray-700">
                    Savings goals automatically adjust based on monthly income
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span className="text-gray-700">
                    Variable saving suggestions for lean months
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span className="text-gray-700">
                    Priority-based expense recommendations
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Peer Comparison (Optional) */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Peer Comparison</h2>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPeerComparison}
              onChange={(e) => setShowPeerComparison(e.target.checked)}
              className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
            />
            <span className="text-sm text-gray-600">Enable (Optional)</span>
          </label>
        </div>

        {showPeerComparison ? (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-3">
                Compare your savings habits with friends (anonymously). This feature helps 
                build discipline through friendly competition.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Your Savings Rate</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary-600">83%</p>
                    <p className="text-xs text-gray-500">Above average!</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Average in Your Group</p>
                    <p className="text-xs text-gray-500">5 friends</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-600">72%</p>
                    <p className="text-xs text-gray-500">Good job! 🎉</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-secondary w-full">
              Invite Friends to Compare
            </button>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-gray-600">
              Enable peer comparison to see how your savings habits compare with friends. 
              All data is anonymized and privacy-focused.
            </p>
          </div>
        )}
      </div>

      {/* Financial Summary */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Financial Summary</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-600">Monthly Income</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              ₹{mockUserStats.totalIncome.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-600">Monthly Expenses</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              ₹{mockUserStats.totalExpenses.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-600">Savings Rate</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {((1 - mockUserStats.totalExpenses / mockUserStats.totalIncome) * 100).toFixed(0)}%
            </p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-gray-600">Emergency Buffer</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {mockUserStats.emergencyMonths} months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

