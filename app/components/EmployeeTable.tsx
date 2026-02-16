"use client";
import Link from "next/link";
import { useState } from "react";
import { Employee } from "@/types/employee";
import { EmployeeTable } from "@/components/EmployeeTable";
interface Props {
  data: Employee[];
}

export function EmployeeTable({ data }: Props) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");

  const filtered = data.filter((emp) => {
    const matchSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.position.toLowerCase().includes(search.toLowerCase());

    const matchDept =
      department === "all" || emp.department === department;

    return matchSearch && matchDept;
  });

  return (
    <div className="bg-white rounded-2xl p-5 border space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          placeholder="ค้นหาชื่อ / ตำแหน่ง"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-full sm:w-64"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-full sm:w-40"
        >
          <option value="all">ทุกแผนก</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">รหัส</th>
              <th>ชื่อ</th>
              <th>ตำแหน่ง</th>
              <th>แผนก</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((emp) => (
              <tr
                key={emp.id}
                className="border-b last:border-0"
              >
                <td className="py-3">{emp.id}</td>
                <td className="font-medium">
  <Link
    href={`/employees/${emp.id}`}
    className="text-blue-600 hover:underline"
  >
    {emp.name}
  </Link>
</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      emp.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {emp.status === "active"
                      ? "ทำงานอยู่"
                      : "ออกแล้ว"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-6">
            ไม่พบพนักงาน
          </p>
        )}
      </div>
    </div>
  );
}
