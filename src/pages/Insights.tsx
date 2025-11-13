import { Lightbulb, TrendingUp, AlertTriangle, Award } from 'lucide-react';
import { mockInsights, mockCategories } from '../data/mockData';

const insightIcons = {
  savings: TrendingUp,
  warning: AlertTriangle,
  tip: Lightbulb,
  achievement: Award,
};

const insightColors = {
  savings: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  tip: 'bg-blue-50 border-blue-200 text-blue-800',
  achievement: 'bg-purple-50 border-purple-200 text-purple-800',
};

export default function Insights() {
  const topCategory = mockCategories.reduce((max, cat) => 
    cat.total > max.total ? cat : max
  , mockCategories[0]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Insights</h1>
        <p className="text-gray-500 mt-1">
          Personalized recommendations based on your spending patterns
        </p>
      </div>

      {/* Key Insight Highlight */}
      <div className={`card border-2 ${insightColors[mockInsights[0].type]}`}>
        <div className="flex items-start">
          {(() => {
            const Icon = insightIcons[mockInsights[0].type];
            return <Icon className="h-6 w-6 mr-3 mt-1" />;
          })()}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Top Recommendation</h2>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                {mockInsights[0].type.charAt(0).toUpperCase() + mockInsights[0].type.slice(1)}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{mockInsights[0].title}</h3>
            <p className="text-gray-700 mb-3">{mockInsights[0].message}</p>
            {mockInsights[0].impact && (
              <div className="bg-white/50 rounded-lg p-3 mb-3">
                <p className="font-semibold">Potential Impact:</p>
                <p className="text-gray-700">{mockInsights[0].impact}</p>
              </div>
            )}
            {mockInsights[0].action && (
              <button className="btn-primary">
                {mockInsights[0].action}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* All Insights */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">All Insights</h2>
        <div className="space-y-4">
          {mockInsights.map((insight) => {
            const Icon = insightIcons[insight.type];
            return (
              <div
                key={insight.id}
                className={`p-5 rounded-lg border-2 ${insightColors[insight.type]}`}
              >
                <div className="flex items-start">
                  <Icon className="h-6 w-6 mr-3 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{insight.title}</h3>
                      <span className="px-2 py-1 bg-white rounded text-xs font-medium">
                        {insight.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{insight.message}</p>
                    {insight.impact && (
                      <div className="mt-3 p-3 bg-white/50 rounded-lg">
                        <p className="text-sm font-medium mb-1">💡 Impact:</p>
                        <p className="text-sm text-gray-700">{insight.impact}</p>
                      </div>
                    )}
                    {insight.action && (
                      <button className="mt-3 text-sm font-medium underline hover:no-underline">
                        {insight.action} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spending Pattern Analysis */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Spending Pattern Analysis</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Top Spending Category</h3>
            <p className="text-gray-700">
              You spend the most on <span className="font-bold">{topCategory.name}</span> ({topCategory.icon}),
              totaling ₹{topCategory.total.toLocaleString()} this month.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Consider reviewing if all expenses in this category are necessary.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Needs vs Wants Ratio</h3>
            <p className="text-gray-700">
              Based on your expense categorization, you're maintaining a healthy balance.
              Keep tracking to ensure needs don't exceed 50% of your income.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Savings Potential</h3>
            <p className="text-gray-700">
              By implementing the suggestions above, you could potentially save an additional
              <span className="font-bold"> ₹1,500-2,000 per month</span>, which could grow to
              <span className="font-bold"> ₹1.2-1.6 lakhs</span> in 5 years with smart investments.
            </p>
          </div>
        </div>
      </div>

      {/* Financial Education */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Why This Matters</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Small changes in your spending habits can have a significant impact over time. 
            The ₹1,000 you save monthly by cooking more at home could become ₹60,000+ in 
            5 years if invested wisely.
          </p>
          <p>
            Understanding where your money goes is the first step to financial freedom. 
            By tracking and analyzing your expenses, you're building awareness that leads 
            to better financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

