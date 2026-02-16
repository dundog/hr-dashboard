export type Employee = {
  id: string;
  name: string;
  position: string;
  salary: number;
};

// mock data
const employees: Employee[] = [
  { id: "1", name: "Somchai", position: "Developer", salary: 45000 },
  { id: "2", name: "Somsri", position: "HR", salary: 38000 },
  { id: "3", name: "Anan", position: "Designer", salary: 42000 },
];

// 👉 functions = data layer
export async function getEmployees() {
  return employees;
}

export async function getEmployeeById(id: string) {
  return employees.find((e) => e.id === id) ?? null;
}

export async function createEmployee(data: Omit<Employee, "id">) {
  const newEmployee: Employee = {
    id: Date.now().toString(),
    ...data,
  };

  employees.push(newEmployee);
  return newEmployee;
}
//update
export async function updateEmployee(
  id: string,
  data: Partial<Omit<Employee, "id">>
) {
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) return null;

  employees[index] = { ...employees[index], ...data };
  return employees[index];
}

//delette
export async function deleteEmployee(id: string) {
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) return false;

  employees.splice(index, 1);
  return true;
}