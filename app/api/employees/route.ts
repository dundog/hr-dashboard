import { NextResponse } from "next/server";
import { getEmployees, createEmployee } from "@/lib/employees";

export async function GET() {
  const employees = await getEmployees();
  return NextResponse.json(employees);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.position || !body.salary) {
    return NextResponse.json(
      { message: "Invalid data" },
      { status: 400 }
    );
  }

  const employee = await createEmployee(body);
  return NextResponse.json(employee, { status: 201 });
}
