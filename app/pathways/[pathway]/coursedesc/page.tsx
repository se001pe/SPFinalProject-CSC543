import ReactFC from 'react';
import AccordionUI from "@/layout/ui/accordion";
import Link from "next/link";

export default async function CourseDescriptions( {params } ) {
    const {pathway} = await params;

    if (pathway === "computer-science") {
        return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className = "text-center">
                <div className = "text-center text-xl p-6">
                    Computer Science Pathway Courses
                </div>
            </div>
            <div>
                <AccordionUI 
                    title="Introduction to Computer Science/CS Essentials"
                    content = "Introduction to Computer Science/CS Essentials is an introductory-level course for students brand new to programming and computer science. In this course, you will learn problem-solving strategies, software design, and the foundations of computer science. You'll do so using the Project STEM programming environment and Project Lead the Way CS Essentials curriculum. There are no prerequisites for this course, although you should have basic familiarity with how to operate a computer and use applications. It's also recommended that you have familiarity with basic algebra principles before starting this course."/>
                <AccordionUI
                    title="AP Computer Science Principles"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
                <AccordionUI
                    title="AP Computer Science A"
                    content="AP Computer Science A is an introductory college-level computer science course. Students cultivate their understanding of coding through analyzing, writing, and testing code as they explore concepts like modularity, variables, and control structures." />
                <AccordionUI
                    title="PLTW Cybersecurity"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
            </div>
        </div>
        );
    };

    if (pathway === "biomed") {
        return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className = "text-center">
                <div className = "text-center text-xl p-6">
                    Biomedical Science Pathway Courses
                </div>
            </div>
            <div>
                <AccordionUI 
                    title="Human Body Systems PLTW"
                    content = "Introduction to Computer Science/CS Essentials is an introductory-level course for students brand new to programming and computer science. In this course, you will learn problem-solving strategies, software design, and the foundations of computer science. You'll do so using the Project STEM programming environment and Project Lead the Way CS Essentials curriculum. There are no prerequisites for this course, although you should have basic familiarity with how to operate a computer and use applications. It's also recommended that you have familiarity with basic algebra principles before starting this course."/>
                <AccordionUI
                    title="Prinicples of Biomedical Science PLTW"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
                <AccordionUI
                    title="Medical Interventions PLTW"
                    content="AP Computer Science A is an introductory college-level computer science course. Students cultivate their understanding of coding through analyzing, writing, and testing code as they explore concepts like modularity, variables, and control structures." />
                <AccordionUI
                    title="PLTW Capstone"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
            </div>
        </div>
        );
    };

    if (pathway === "engineering") {
        return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className = "text-center">
                <div className = "text-center text-xl p-6">
                    Engineering Pathway Courses
                </div>
            </div>
            <div>
                <AccordionUI 
                    title="PLTW Engineering Essentials"
                    content = "Introduction to Computer Science/CS Essentials is an introductory-level course for students brand new to programming and computer science. In this course, you will learn problem-solving strategies, software design, and the foundations of computer science. You'll do so using the Project STEM programming environment and Project Lead the Way CS Essentials curriculum. There are no prerequisites for this course, although you should have basic familiarity with how to operate a computer and use applications. It's also recommended that you have familiarity with basic algebra principles before starting this course."/>
                <AccordionUI
                    title="PLTW Principles of Engineering"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
                <AccordionUI
                    title="PLTW Civil Engineering & Architecture"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
                <AccordionUI
                    title="PLTW Digital Electronics"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
                <AccordionUI
                    title="PLTW Capstone"
                    content="In Computer Science Principles, students develop the in-demand computer science skills critical to thrive in any of today's and tomorrows careers. The course promotes computational thinking and coding fundamentals and introduces computational tools that foster creativity. It aims to build students' awareness of the tremendous demand for computer scientists and those who have computational thinking skills, and engages students to consider issues raised by the impact of computing on society. Each unit also focuses on one or more computer science-specific career paths. Computer Science Principles provides students with a broad exposure to the many aspects of computer science while encouraging creativity, socially responsible choices, and ethical behavior. It inspires algorithmic and computational thinking, helping students see themselves in a career path they might not have initially chosen." />
            </div>
    

        </div>
        );
    };
    
};


