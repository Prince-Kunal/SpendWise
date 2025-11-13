# Spendwise - Your Personal Finance Coach

Spendwise is an AI-powered personal finance app that acts like your own money coach. It learns how you earn, spend, and save — and gives practical, personalized guidance to improve your financial health.

## 🚀 Features

### Core Features
- **Smart Expense Ledger** - Manually log daily expenses with AI-powered categorization
- **AI Insights & Suggestions** - Get personalized recommendations based on spending patterns
- **Personalized Savings & Investment Awareness** - Learn how your savings can grow over time
- **Financial Education Engine** - Understand the "why" and "how" behind financial decisions
- **Adaptive Planning for Irregular Income** - Perfect for freelancers and gig workers
- **Emergency Buffer Calculator** - Calculate your "Survival Fund" and set realistic goals
- **Goal-Based Savings Jars** - Create and track short-term savings goals
- **What-If Scenario Tester** - Test financial scenarios and see their long-term impact
- **Gamification & Motivation** - Earn badges, maintain streaks, and stay motivated
- **Peer Comparison** - Optional feature to compare savings habits with friends
- **Micro Learning Tips** - Quick, personalized financial education

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Recharts** - Data visualization
- **Lucide React** - Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 📁 Project Structure

```
SpendWise/
├── src/
│   ├── components/      # Reusable components
│   │   └── Layout.tsx   # Main layout with navigation
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── ExpenseLedger.tsx
│   │   ├── Insights.tsx
│   │   ├── SavingsGoals.tsx
│   │   ├── Scenarios.tsx
│   │   ├── Learning.tsx
│   │   └── Profile.tsx
│   ├── data/            # Mock data
│   │   └── mockData.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🎨 Design Philosophy

- **Simple & Intuitive** - Clean UI that doesn't overwhelm users
- **Interactive** - Engaging components with smooth transitions
- **Educational** - Every feature includes explanations and learning opportunities
- **Mobile-First** - Responsive design that works on all devices

## 📝 Note

This prototype uses illustrative mock data to demonstrate Spendwise's capabilities. Full dynamic integration with real-time AI analysis is planned for future development.

## 🎯 Key Features Explained

### Smart Expense Ledger
Users can manually log expenses with categories. The AI studies these entries and groups them intelligently.

### AI Insights
The system analyzes spending patterns and provides actionable suggestions like "Cooking twice a week could save you ₹1,000."

### Investment Awareness
Educational examples show how savings can grow (e.g., "₹500/month SIP could become ₹40,000 in 5 years"). This is educational only - no specific fund recommendations.

### Adaptive Planning
For users with irregular income, Spendwise adjusts savings goals and suggests variable saving plans for lean months.

### Emergency Buffer
Calculates how many months you can survive on current savings and helps set a 3-month safety goal.

### Scenario Testing
Test "what-if" scenarios like reducing outings or rent increases to see their financial impact.

## 📄 License

This project is created for demonstration purposes.

