import DashboardLayout from "../components/DashboardLayout";

export default function HomePage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Welcome, Admin 👋</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow">Users: 120</div>
        <div className="bg-white p-6 rounded-xl shadow">Projects: 8</div>
        <div className="bg-white p-6 rounded-xl shadow">Revenue: ₱45,000</div>
      </div>
    </DashboardLayout>
  );
}
