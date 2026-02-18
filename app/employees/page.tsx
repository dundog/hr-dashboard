import { getEmployees } from "@/lib/db"
import EmployeeTable from "../components/components/EmployeeTable"

export default async function EmployeesPage() {
  const employees = await getEmployees()

  return (
   <div className="max-w-4xl mx-auto p-8">
  <h1 className="text-2xl font-bold mb-6">Employees</h1>
  <EmployeeTable employees={employees} />
</div>
  )
}
