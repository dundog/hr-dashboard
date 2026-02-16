import { NextResponse } from "next/server";
import {
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "@/lib/employees";

type Props = {
  params: { id: string };
};

export async function GET(_: Request, { params }: Props) {
  const employee = await getEmployeeById(params.id);

  if (!employee) {
    return NextResponse.json(
      { message: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(employee);
}

export async function PUT(req: Request, { params }: Props) {
  const body = await req.json();
  const updated = await updateEmployee(params.id, body);

  if (!updated) {
    return NextResponse.json(
      { message: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Props) {
  const success = await deleteEmployee(params.id);

  if (!success) {
    return NextResponse.json(
      { message: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
