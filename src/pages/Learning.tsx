import { BookOpen, TrendingUp, PiggyBank, Target, Lightbulb } from 'lucide-react';
import { mockInvestmentAwareness, mockLearningTips } from '../data/mockData';
import { useState } from 'react';

export default function Learning() {
  const [selectedTip, setSelectedTip] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Financial Learning</h1>
        <p className="text-gray-500 mt-1">
          Build your financial knowledge with personalized tips and insights
        </p>
      </div>

      {/* Investment Awareness */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary-600" />
          <h2 className="text-xl font-bold text-gray-900">Investment Awareness</h2>
        </div>
        <p className="text-gray-600 mb-4">
          See how your savings can grow over time with systematic investments. 
          These are educational examples to help you understand the power of compounding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockInvestmentAwareness.map((investment) => (
            <div key={investment.amount} className="p-5 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg border border-primary-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-600">Monthly SIP</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{investment.amount.toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{investment.duration} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Potential Value:</span>
                  <span className="font-bold text-primary-600">
                    ₹{investment.potential.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-white/50 rounded-lg">
                <p className="text-xs text-gray-700">{investment.explanation}</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                * Assumes 12% annual returns. Actual returns may vary.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Micro Learning Tips */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          <h2 className="text-xl font-bold text-gray-900">Quick Learning Tips</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockLearningTips.map((tip) => {
            const isExpanded = selectedTip === tip.id;
            return (
              <div
                key={tip.id}
                className={`p-5 rounded-lg border-2 transition-all cursor-pointer ${
                  isExpanded
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setSelectedTip(isExpanded ? null : tip.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded">
                        {tip.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    {isExpanded && (
                      <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                        {tip.content}
                      </p>
                    )}
                  </div>
                  {!isExpanded && (
                    <BookOpen className="h-5 w-5 text-gray-400 ml-2" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Financial Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Needs vs Wants */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-green-600" />
            <h2 className="text-lg font-bold text-gray-900">Needs vs Wants</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-semibold text-sm text-gray-900 mb-1">✓ Needs</p>
              <p className="text-xs text-gray-600">
                Essentials for survival: rent, groceries, utilities, transportation to work, 
                basic healthcare. These are non-negotiable expenses.
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="font-semibold text-sm text-gray-900 mb-1">○ Wants</p>
              <p className="text-xs text-gray-600">
                Things you desire but can live without: dining out, entertainment, 
                luxury items, premium subscriptions. These can be reduced or eliminated.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-700">
                <strong>Tip:</strong> Use the 24-hour rule for wants. Wait a day before 
                purchasing non-essential items. You'll often find you don't need them.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Fund */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="h-5 w-5 text-yellow-600" />
            <h2 className="text-lg font-bold text-gray-900">Emergency Fund</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-sm text-gray-900 mb-2">Why It Matters</p>
              <p className="text-xs text-gray-700 mb-3">
                An emergency fund protects you from unexpected expenses without derailing 
                your financial goals or forcing you into debt.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Recommended Amount:</span>
                  <span className="font-semibold">3-6 months of expenses</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Where to Keep:</span>
                  <span className="font-semibold">Savings account or liquid FD</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-700">
                <strong>Example:</strong> If your monthly expenses are ₹20,000, 
                aim for ₹60,000-₹1,20,000 in your emergency fund.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SIP Explanation */}
      <div className="card bg-gradient-to-r from-blue-50 to-primary-50 border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Understanding SIPs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What is a SIP?</h3>
            <p className="text-gray-700 text-sm">
              Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly 
              (usually monthly) in mutual funds. It's like a recurring deposit, but for investments.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Why SIPs Work</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low 
                and fewer when prices are high, averaging out market volatility.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Compounding:</strong> Your returns generate more returns over time, 
                accelerating wealth creation.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Discipline:</strong> Regular investing builds a habit and removes 
                emotional decision-making from investing.</span>
              </li>
            </ul>
          </div>
          <div className="p-3 bg-white/50 rounded-lg">
            <p className="text-xs text-gray-600 italic">
              <strong>Note:</strong> Spendwise provides educational information only. 
              Always consult with a financial advisor before making investment decisions. 
              Past performance does not guarantee future returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

