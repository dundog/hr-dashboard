type Employee = {
  id: number
  name: string
  department: string
}

const employees: Employee[] = [
  { id: 1, name: "John Doe", department: "IT" },
  { id: 2, name: "Jane Smith", department: "HR" },
  { id: 3, name: "Mike Brown", department: "Finance" },
]

// จำลองว่า query database
export async function getEmployees(): Promise<Employee[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // delay 1 วิ
  return employees
}
