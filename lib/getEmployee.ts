import { employees } from "@/lib/employees";

export function getEmployeeById(id: string) {
  return employees.find((emp) => emp.id === id);
}
