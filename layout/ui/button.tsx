'use client';
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import Button from "@mui/material/Button"

const ButtonUI: React.FC = () => {
    return (
        <div>
            <Button variant = "outlined">CS Pathway<FaAngleRight /></Button>
        </div>
    )
}
export default ButtonUI;