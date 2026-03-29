import Image from "next/image";
import Link from 'next/link';
import AccordionUI from "@/layout/ui/accordion";
import CS from "@/components/CSPathway";
import Biomed from "@/components/Biomed";
import EngPathway from "@/components/EngPathway";

export default function Home() {
  return (   
  <div>
    <div className = "text-center"> </div>
      <Biomed />
      <CS / >
      <EngPathway / >
  </div>
  )   
};