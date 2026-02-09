export type EmployeeStatus = "active" | "inactive";

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  status: EmployeeStatus;
}
