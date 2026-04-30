'use client';
import React from 'react';
import ImList from "@/components/photos";
import VerticalDividers from "@/layout/ui/divider";


export default function Photos() {
    return (    

    <div className = "flex flex-col w-full text-center p-10">
        <h1 className = "text-4xl font-bold ">Photos of AITE</h1>
        <VerticalDividers>CENTER</VerticalDividers>
        <ImList / >
    </div>        
    );
}