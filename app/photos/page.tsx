'use client';
import React from 'react';
import ImList from "@/components/photos";


export default function Photos() {
    return (    

    <div className = "flex flex-col w-full text-center p-10">
        <h1 className = "text-xl ">Photos of AITE</h1>
        <ImList / >
    </div>        
    );
}