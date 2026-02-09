import { ProjectsTable } from "@/components/projects/project-table"

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ProjectsTable />
    </div>
  )
}
