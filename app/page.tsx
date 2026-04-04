'use client';
import React from 'react';
import HomeHeader from "@/components/homeheader";
import { HiComputerDesktop } from "react-icons/hi2";
import { FcEngineering } from "react-icons/fc";
import { TiMediaPlay } from "react-icons/ti";
import { IoMdMedical } from "react-icons/io";

const Home: React.FC = () => {
return (
    <div>
        <div className = "flex flex-row w-full text-center">
            <HomeHeader />
        </div>
        <div className="flex flex-row w-full">
            <IoMdMedical size={250} />
            <HiComputerDesktop size={250} />
            <FcEngineering size={250} />
            <TiMediaPlay size={250} />
        </div>
    </div>
    );
};
export default Home;