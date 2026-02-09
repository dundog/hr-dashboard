import { notFound } from "next/navigation";
import { getEmployeeById } from "@/lib/getEmployee";

interface Props {
  params: {
    id: string;
  };
}

export default function EmployeeDetailPage({ params }: Props) {
  const employee = getEmployeeById(params.id);

  if (!employee) return notFound();

  return (
    <main className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          {employee.name}
        </h1>
        <p className="text-sm text-gray-500">
          รหัสพนักงาน: {employee.id}
        </p>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-2xl p-6 border grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Info label="ตำแหน่ง" value={employee.position} />
        <Info label="แผนก" value={employee.department} />
        <Info
          label="สถานะ"
          value={
            employee.status === "active"
              ? "ทำงานอยู่"
              : "ออกแล้ว"
          }
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">
          แก้ไขข้อมูล
        </button>
        <button className="px-4 py-2 rounded-lg border text-sm">
          ประวัติการลา
        </button>
      </div>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
