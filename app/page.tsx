import { Users, UserCheck, UserX, Calendar } from "lucide-react";
import { StatCard } from "./components/StatCard";

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">HR Dashboard</h1>
        <p className="text-sm text-gray-500">
          ภาพรวมพนักงานวันนี้
        </p>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="พนักงานทั้งหมด"
          value={128}
          icon={Users}
        />
        <StatCard
          title="เข้างานวันนี้"
          value={104}
          icon={UserCheck}
        />
        <StatCard
          title="ลางาน"
          value={12}
          icon={Calendar}
        />
        <StatCard
          title="ขาดงาน"
          value={3}
          icon={UserX}
        />
      </section>

      {/* Placeholder sections */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl bg-white p-5 border">
          <h2 className="font-semibold mb-2">Attendance (7 วันล่าสุด)</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">
            📊 chart coming soon
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 border">
          <h2 className="font-semibold mb-2">คำขอลาล่าสุด</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>สมชาย ลาป่วย</span>
              <span className="text-yellow-600">รออนุมัติ</span>
            </li>
            <li className="flex justify-between">
              <span>สุดา ลาพักร้อน</span>
              <span className="text-green-600">อนุมัติแล้ว</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
