import { getEmployees } from "@/lib/db"
import EmployeeTable from "../components/components/EmployeeTable"

export default async function EmployeesPage() {
  const employees = await getEmployees()

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employees (Async DB Mock)</h1>

      <EmployeeTable employees={employees} />
    </div>
  )
}
