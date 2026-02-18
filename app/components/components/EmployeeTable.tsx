type Employee = {
  id: number
  name: string
  department: string
}

type Props = {
  employees: Employee[]
}

export default function EmployeeTable({ employees }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Department
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm text-gray-800">
                {emp.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {emp.department}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
