'use client';
import React from 'react';
import Link from "next/link";
import VerticalDividers from "@/layout/ui/divider";

export default function Apply() {
    return (
    <div className = "flex flex-col w-full">
        <div className = "flex flex-col w-full">
            <h1 className = "text-xl text-center text-strong">Lottery Information</h1>
        </div>
        <VerticalDividers>CENTER</VerticalDividers>
        <div className = "flex flex-col w-full text-base">
            <ul className = "true">
               <li>Magnet school admission is offered through a controlled lottery as outlined in BOE Policy 5117.2 and 5117.2R. 
                The lottery is controlled to balance enrollment to achieve the integration set forth by the Board of Education.
                In a controlled lottery, the number of students accepted annually at each school and from each waitlist are 
                dependent upon overall SPS enrollment. Enrollment numbers are reviewed continuously throughout the lottery process, 
                in order to maintain balance and meet the SPS integration standard. AITE is an “Inter District-wide Magnet School.” 
                There are no assigned attendance areas for Scofield or AITE. All students are admitted via lottery. 
                Per BOE policy, applications open on September 15, applications are due on January 15, and the lottery drawing is 
                on February 15 unless those dates fall on a Saturday, Sunday or school holiday, in which case they will move to the 
                next business day. </li>
                <VerticalDividers>CENTER</VerticalDividers>
                <li>Applications Due:  Thursday, January 15, 2026 at 4 pm</li>
                <VerticalDividers>CENTER </VerticalDividers>
                <li>Lottery Drawing:  Tuesday, February 17, 2026</li>
                <VerticalDividers>CENTER</VerticalDividers>
                <li>Acceptances Due:  Tuesday, March 10, 2026 </li>
                <VerticalDividers>CENTER</VerticalDividers>
                <li><Link href = "https://www.stamfordpublicschools.org/departments/teaching-and-learning/magnet-school-information/magnet-school-applications" className="hover:text-blue-700 transition">Click here to visit the SPS Magnet School Lottery Page</Link></li>

            </ul>
        </div>
    </div>
    )    
}