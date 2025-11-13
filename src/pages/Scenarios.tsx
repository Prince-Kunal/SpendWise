import { useState } from 'react';
import { TrendingUp, TrendingDown, Calculator, Lightbulb } from 'lucide-react';
import { mockScenarios, mockUserStats } from '../data/mockData';

export default function Scenarios() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [customScenario, setCustomScenario] = useState({
    name: '',
    expenseChange: 0,
    category: 'Food',
  });

  const handleCustomScenario = () => {
    // Calculate impact
    const monthlySavings = -customScenario.expenseChange;
    const investmentPotential = monthlySavings * 60; // 5 years

    return {
      monthlySavings,
      investmentPotential,
    };
  };

  const customResult = handleCustomScenario();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">What-If Scenarios</h1>
        <p className="text-gray-500 mt-1">
          Test different financial scenarios and see their impact
        </p>
      </div>

      {/* Pre-built Scenarios */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Try These Scenarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockScenarios.map((scenario) => {
            const isSelected = selectedScenario === scenario.id;
            const isPositive = scenario.result.monthlySavings > 0;

            return (
              <div
                key={scenario.id}
                onClick={() => setSelectedScenario(isSelected ? null : scenario.id)}
                className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{scenario.name}</h3>
                  {isPositive ? (
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  )}
                </div>
                {isSelected && (
                  <div className="mt-4 space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly Savings:</span>
                      <span className={`font-bold ${
                        isPositive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ₹{scenario.result.monthlySavings > 0 ? '+' : ''}
                        {scenario.result.monthlySavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">5-Year Potential:</span>
                      <span className={`font-bold ${
                        isPositive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ₹{scenario.result.investmentPotential > 0 ? '+' : ''}
                        {Math.abs(scenario.result.investmentPotential).toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600">
                      💡 {scenario.name === 'Reduce Outings' 
                        ? 'Small lifestyle changes can add up significantly over time'
                        : scenario.name === 'Rent Increase'
                        ? 'Plan ahead for fixed cost increases to maintain savings'
                        : 'Cooking at home is both healthier and more economical'}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Scenario Builder */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="h-5 w-5 text-primary-600" />
          <h2 className="text-xl font-bold text-gray-900">Build Your Own Scenario</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scenario Name
            </label>
            <input
              type="text"
              placeholder="e.g., Reduce coffee shop visits"
              value={customScenario.name}
              onChange={(e) => setCustomScenario({ ...customScenario, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={customScenario.category}
                onChange={(e) => setCustomScenario({ ...customScenario, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
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
                Monthly Change (₹)
              </label>
              <input
                type="number"
                placeholder="e.g., -500 for reduction, +500 for increase"
                value={customScenario.expenseChange || ''}
                onChange={(e) => setCustomScenario({ 
                  ...customScenario, 
                  expenseChange: parseInt(e.target.value) || 0 
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use negative for reductions, positive for increases
              </p>
            </div>
          </div>

          {customScenario.expenseChange !== 0 && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Impact Analysis</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Savings Change:</span>
                  <span className={`font-bold ${
                    customResult.monthlySavings > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ₹{customResult.monthlySavings > 0 ? '+' : ''}
                    {customResult.monthlySavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Impact:</span>
                  <span className={`font-bold ${
                    customResult.monthlySavings > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ₹{customResult.monthlySavings > 0 ? '+' : ''}
                    {(customResult.monthlySavings * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">5-Year Investment Potential:</span>
                  <span className={`font-bold ${
                    customResult.investmentPotential > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ₹{customResult.investmentPotential > 0 ? '+' : ''}
                    {Math.abs(customResult.investmentPotential).toLocaleString()}
                  </span>
                </div>
                {customResult.monthlySavings > 0 && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      💡 If you invest this ₹{customResult.monthlySavings.toLocaleString()}/month 
                      as SIP with 12% returns, it could grow to approximately 
                      ₹{Math.abs(customResult.investmentPotential).toLocaleString()} in 5 years!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          <h2 className="text-xl font-bold text-gray-900">Understanding Scenarios</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Why test scenarios?</strong> Planning ahead helps you make informed decisions. 
            By seeing the long-term impact of small changes, you can prioritize what matters most.
          </p>
          <p>
            <strong>How to use this:</strong> Try different scenarios to understand trade-offs. 
            Reducing discretionary spending by ₹500/month might seem small, but over 5 years, 
            that's ₹30,000 that could grow to ₹40,000+ with smart investments.
          </p>
          <p>
            <strong>Remember:</strong> These calculations are illustrative. Actual investment 
            returns vary based on market conditions and your chosen investment vehicles.
          </p>
        </div>
      </div>
    </div>
  );
}

