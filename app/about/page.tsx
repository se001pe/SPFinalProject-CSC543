'use client';
import React from 'react';
import Image from 'next/image';
import VerticalDividers from "@/layout/ui/divider";

const About: React.FC = () => {
return (
    <div className = "flex flex-col w-full p-6 text-cente">
        <div className = "flex flex-col w-full text-center">
            
            <h1 className = "text-4xl font-bold">About AITE</h1>
            <VerticalDividers>CENTER</VerticalDividers>
        </div>
        <div className = "flex flex-col p-6 text-center">
            <h4 className = "text-base">AITE is an interdistrict magnet high school located in Stamford, CT. AITE puts a focus on
            preparing students with 21st century skills through exposure to a technology-rich curriculum. AITE has recently transitioned 
            to a pathway model. The school's four pathways are: biomedical, computer science, digital media and engineering. Each student 
            will pick a pathway to follow at the end of their sophomore year.</h4>
        </div>
        <div className = "columns-3">
            <h1 className = "text-xl font-bold">Ms. Tina Rivera, Principal</h1>
            <h1 className = "text-xl font-bold">Mr. Joe Cozza, Assistant Principal</h1>
            <h1 className = "text-xl font-bold">Ms. Jessica Prince, Assistant Principal</h1>
        </div>
        <div className = "columns-3">
        <Image
        src = "/principal.jpeg"
        alt = "Principal"
        width = {300}
        height = {500}
        />
        <Image
        src = "/p.jpeg"
        alt = "Principal"
        width = {300}
        height = {500}
        />
        <Image
        src = "/jess.jpeg"
        alt = "Assistant Principal Prince"
        width = {300}
        height = {500}
        />
        </div>
       
    </div>
    );
};
export default About;