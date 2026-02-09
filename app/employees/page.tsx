import { EmployeeTable } from "../components/EmployeeTable";
import { employees } from "@/lib/employees";

export default function EmployeesPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">พนักงาน</h1>
        <p className="text-sm text-gray-500">
          จัดการข้อมูลพนักงานทั้งหมด
        </p>
      </div>

      <EmployeeTable data={employees} />
    </main>
  );
}
