'use client';
import ReactFC from 'react';
import AccordionUI from "@/layout/ui/accordion";

const CS: React.FC = () => {
return (
    <div className = "text-center">
        <div className = "text-center text-xl p-6">
            Computer Science Pathway
        </div>
        <div>
            <AccordionUI 
            title="Description"
            content = "The Computer Science Pathway at AITE consists of four courses that teach students how to code from the ground up. The pathway consists of a blend of Project Lead the Way. Runestone and Amazon Future Engineer/Project Stem courses. Primary programming languages used are Python and Java. Students will also have the opportunity to take electives courses which will expose them to C++ and Roblox."/>
        </div>
    </div>
    )
};
export default CS;