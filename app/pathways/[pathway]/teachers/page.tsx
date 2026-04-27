import Image from "next/image";
import VerticalDividers from "@/layout/ui/divider";

export default async function TeachersPage ( { params }) {
const { pathway } = await params;

if (pathway === "biomed") {
    return (
    <div className = "flex flex-col w-fullp-5">
        <h1 className = "text-xl text-center"> Biomedical Teachers</h1>
         <ul className = "text-base p-5">
          <VerticalDividers>CENTER</VerticalDividers>
            <p className = "font-bold"><li>Mrs. Danielle Weber - Pathway Lead</li></p>
            <li>Courses Taught: Human Body Systems, Medical Interventions, PLTW Capstone</li>
            <VerticalDividers>CENTER</VerticalDividers>
            <p className = "font-bold"><li>Mr. Patrick Scollan</li></p>
            <li>Courses Taught: Principles of Biomedical Science</li>
            <VerticalDividers>CENTER</VerticalDividers>
            <p className = "font-bold"><li>Ms. Lauren Welch</li></p>
            <li>Student Teacher</li>
        </ul>
    </div>
    );
  };

if (pathway === "computer-science") {
    return (
    <div className = "flex flex-col w-full p-5">
      <div className = "text-center text-xl">Computer Science Teachers</div>
         <ul className = "text-base p-5">
          <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Mr. Sean Peterson - Pathway Lead</li></p>
            <li>Courses Taught: Introduction to Computer Science, Digtial Electronics, AP Computer Science A</li>
            <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Ms. Florina Merturi</li></p>
            <li>Courses Taught: Intro to Game Design/Game Design & Development, PLTW Cybersecurity</li>
            <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Mr. Darin Tomaszewski</li></p>
            <li>Courses Taught: Robotics</li>
        </ul>
    </div>
    );
  };

  if (pathway === "engineering") {
    return (
    <div className = "flex flex-col w-full p-5">
      <div className = "text-center text-xl">Engineering Teachers</div>
         <ul className = "text-base p-5">
          <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Ms. Paige Ridley - Pathway Lead</li></p>
            <li>Courses Taught: Engineering Essentials, PLTW Civil Engineering & Architecture, PLTW Capstone</li>
            <Image
              src = "/ridleysnowmobile.png"
              alt = "Ridley"
              width = {300}
              height = {300}
            />
            <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Ms. Pradnya Nandanwar</li></p>
            <li>Courses Taught: PLTW Principles of Engineering</li>
            <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Mr. Sean Peterson</li></p>
            <li>Courses Taught: PLTW Introduction to Engineering Design, Digital Electronics</li>
            <VerticalDividers>CENTER</VerticalDividers>
            <p className="font-bold"><li>Mr. Vin Urbanowski</li></p>
            <li>Courses Taught: Aerospace Engineering, Tango Flight</li>
        </ul>
    </div>
    );
  };
};