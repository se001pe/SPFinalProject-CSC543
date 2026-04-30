import TurtleRunner from "@/components/turtle";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default async function StudentProjects({ params }) {
  const { pathway } = await params; 

  if (pathway === "computer-science") {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Python Turtle Demo</h1>
      <TurtleRunner />
    </div>
  );
 }
}