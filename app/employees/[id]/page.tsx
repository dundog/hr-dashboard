import { getEmployeeById } from "@/lib/employees";

type Props = {
  params: { id: string };
};

export default async function EmployeeDetailPage({ params }: Props) {
  const employee = await getEmployeeById(params.id);

  if (!employee) {
    return <div>ไม่พบข้อมูลพนักงาน</div>;
  }

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>{employee.position}</p>
      <p>{employee.salary.toLocaleString()} บาท</p>
    </div>
  );
}
