import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";


export default async function PathwayLayout({ children, params }: any) {
  const resolvedParams = await params;
  const pathway = resolvedParams?.pathway ?? "unknown";


  return (
    <div>
      <div>
        <Breadcrumb pathway = {params.pathway} />
      </div>
    <div className="flex min-h-screen">

      {/* Pathway Aside */}
      <aside className="w-64 bg-gray-100 p-6 border-r">
        <h2 className="text-xl font-semibold mb-4 capitalize">
          {pathway === "unknown" ? "Pathway" : pathway.replace("-", " ")}
        </h2>

        <nav className="space-y-2">
          <Link className="block" href={`/pathways/${pathway}`}>Overview</Link>
          <Link className="block" href={`/pathways/${pathway}/courseseq`}>Course Sequence</Link>
          <Link className="block" href={`/pathways/${pathway}/coursedesc`}>Course Descriptions</Link>
          <Link className="block" href={`/pathways/${pathway}/teachers`}>Teachers</Link>
          <Link className="block" href={`/pathways/${pathway}/projects`}>Student Projects</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>

       </div>
    </div>
  );
}