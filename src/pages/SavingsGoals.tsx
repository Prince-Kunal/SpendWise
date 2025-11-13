import { useState } from 'react';
import { Plus, Target, TrendingUp, Calendar, PiggyBank } from 'lucide-react';
import { mockSavingsGoals, mockUserStats } from '../data/mockData';
import { SavingsGoal } from '../types';

export default function SavingsGoals() {
  const [goals] = useState<SavingsGoal[]>(mockSavingsGoals);
  const [showAddForm, setShowAddForm] = useState(false);

  const calculateDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Savings Goals</h1>
          <p className="text-gray-500 mt-1">Set and track your financial goals</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          New Goal
        </button>
      </div>

      {/* Emergency Fund Calculator */}
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-start">
          <PiggyBank className="h-6 w-6 text-yellow-600 mt-1 mr-3" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Emergency Buffer Calculator</h2>
            <p className="text-gray-700 mb-4">
              Your current savings can cover <span className="font-bold text-lg">
                {mockUserStats.emergencyMonths} months
              </span> of expenses.
            </p>
            <div className="bg-white/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Current Status</span>
                <span className="text-sm font-semibold">
                  {((mockUserStats.emergencyMonths / 3) * 100).toFixed(0)}% of 3-month target
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-600 h-3 rounded-full transition-all"
                  style={{ width: `${Math.min((mockUserStats.emergencyMonths / 3) * 100, 100)}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              💡 Aim for 3-6 months of expenses as an emergency fund. This protects you from 
              unexpected situations without derailing your financial goals.
            </p>
          </div>
        </div>
      </div>

      {/* Add Goal Form */}
      {showAddForm && (
        <div className="card bg-primary-50 border-primary-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Savings Goal</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal Name
              </label>
              <input
                type="text"
                placeholder="e.g., Laptop Repair, Vacation"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="5000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">
                Create Goal
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
            💡 AI will suggest daily savings amounts based on your goal and timeline
          </p>
        </div>
      )}

      {/* Active Goals */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Active Goals</h2>
        {goals.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No active goals. Create one to get started!</p>
        ) : (
          <div className="space-y-4">
            {goals.map((goal) => {
              const progress = (goal.currentAmount / goal.targetAmount) * 100;
              const daysRemaining = calculateDaysRemaining(goal.deadline);
              const requiredDaily = daysRemaining > 0 
                ? Math.ceil((goal.targetAmount - goal.currentAmount) / daysRemaining)
                : 0;

              return (
                <div key={goal.id} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Target className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{goal.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{daysRemaining} days left</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <TrendingUp className="h-4 w-4" />
                            <span>₹{goal.dailySavings}/day</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Progress</p>
                      <p className="text-xl font-bold text-gray-900">
                        {progress.toFixed(0)}%
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">
                        ₹{goal.currentAmount.toLocaleString()}
                      </span>
                      <span className="text-gray-600">
                        ₹{goal.targetAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary-600 h-3 rounded-full transition-all"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">AI Suggestion:</p>
                    <p className="text-sm font-medium text-gray-900">
                      {requiredDaily > 0 ? (
                        <>Save ₹{requiredDaily.toLocaleString()} daily to reach your goal on time</>
                      ) : (
                        <>You're on track! Keep saving ₹{goal.dailySavings.toLocaleString()} daily</>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Goal Tips */}
      <div className="card bg-blue-50 border-blue-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">💡 Goal Setting Tips</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Set specific, measurable goals with clear deadlines</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Break large goals into smaller milestones</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Review and adjust your goals regularly</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Celebrate small wins to stay motivated</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

