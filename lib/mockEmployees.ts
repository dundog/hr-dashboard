export type Employee = {
  id: string;
  name: string;
  position: string;
  salary: number;
};

export const mockEmployees: Employee[] = [
  { id: "1", name: "Somchai", position: "Developer", salary: 45000 },
  { id: "2", name: "Somsri", position: "HR", salary: 38000 },
  { id: "3", name: "Anan", position: "Designer", salary: 42000 },
];
