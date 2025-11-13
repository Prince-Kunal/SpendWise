import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ExpenseLedger from './pages/ExpenseLedger';
import Insights from './pages/Insights';
import SavingsGoals from './pages/SavingsGoals';
import Scenarios from './pages/Scenarios';
import Learning from './pages/Learning';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpenseLedger />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/goals" element={<SavingsGoals />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

