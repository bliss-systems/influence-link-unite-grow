import { Header } from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-20 max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Protected content visible only to authenticated users.</p>
      </div>
    </div>
  );
};

export default Dashboard;
