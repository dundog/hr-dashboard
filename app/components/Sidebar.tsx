import Link from "next/link";
import { LayoutDashboard, Users } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h1 className="text-xl font-semibold mb-6">
        HR Pulse
      </h1>

      <nav className="space-y-2 text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/employees"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <Users size={18} />
          พนักงาน
        </Link>
      </nav>
    </aside>
  );
}
