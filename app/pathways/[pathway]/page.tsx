import Link from "next/link";
import VerticalDividers from "@/layout/ui/divider";

export default async function OverviewPage( { params } ) {
  const { pathway } = await params;

  if (pathway === "computer-science") {
    return (
      <div className = "flex flex-col w-full">        
        <div className = "flex flex-row w-full text-xl text-center">Overview</div>
        <VerticalDividers>CENTER</VerticalDividers>
          <div className = "text-base">The Computer Science pathway blends hands-on problem-solving with real coding experience. Through Project Lead The Way, Runestone, and Project STEM/AFE courses, students learn how software works, why it matters, and how to build meaningful projects of their own. Each course emphasizes creativity, collaboration, and the practical skills needed to succeed in college‑level CS or enter a growing tech field with confidence.</div>        
      </div>
    )
  };

  if (pathway === "engineering") {
    return (
      <div className = "flex flex-col w-full">
        <div className = "flex flex-row w-full text-xl text-center">Overview</div>
        <VerticalDividers>CENTER</VerticalDividers>
          <div className = "text-base">The PLTW Engineering Pathway gives students a hands-on, project-driven introduction to the world of engineering. Through nationally recognized Project Lead The Way courses, students learn how engineers think, design, test, and solve real problems. Each course challenges students to apply math, science, creativity, and teamwork as they explore fields such as mechanical engineering, civil engineering, aerospace, robotics, and product design. Students work with industry-standard tools like Autodesk Inventor/Fusion, 3D printers and digital electronics kits. They learn how to sketch, model, prototype, and refine solutions while building strong problem-solving and communication skills. By the end of the pathway, students are prepared for advanced STEM coursework and college engineering programs.</div>
    </div>
    )
  };

  if (pathway === "biomed") {
    return (
      <div className = "flex flex-col w-full">
        <div className = "flex flex-row w-full text-xl text-center">Overview</div>
          <VerticalDividers>CENTER</VerticalDividers>
          <div className = "text-base">The PLTW Biomedical Science Pathway immerses students in the world of modern medicine, research, and health science through hands‑on, real‑world problem solving. Students explore how the human body works, what causes illness, and how medical professionals diagnose and treat disease. Each course challenges students to think like biomedical scientists as they investigate cases, analyze data, and design solutions that improve human health. Using industry-standard tools and techniques—such as micropipettes, gel electrophoresis, DNA analysis, medical imaging, and laboratory diagnostics—students gain practical experience that mirrors real biomedical careers. They learn to collect and interpret data, collaborate on research, and communicate scientific findings clearly and professionally. By the end of the pathway, students are prepared for advanced study in fields such as medicine, nursing, forensics, genetics, biotechnology, public health, and biomedical engineering. Whether they dream of becoming doctors, lab researchers, EMTs, or medical innovators, this pathway gives them a strong foundation and a meaningful head start.</div>
     </div>
    )
  }

  if (pathway === "digital-media") {
    return (
      <div className = "flex flex-col w-full">
          <div className = "flex flex-row w-full text-xl text-center">Overview</div>
            <div className = "text-base">The Digital Media and Design Pathway exists.</div>
      </div>
    )
  }  
};