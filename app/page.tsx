'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HomeHeader from "@/components/homeheader";
import WildcardKeyframes from "@/components/motion";
import HTMLContent from '@/components/count';
import { MotionConfig } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
import Background from "@/layout/ui/background";

const labels = {
    biomed: "Biomedical Science",
    "computer-science": "Computer Science",
    "digital-media": "Digital Media",
    engineering: "Engineering",
};

const Home: React.FC = () => {

return (
    
    <div>
        <div className = "flex flex-row w-full pb-70">
            <HomeHeader />
        </div>
        <div className = "flex flex-row w-full align-center pl-70 gap-x-20">
            <Link href="pathways/biomed">
                <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18, fontWeight:700, lineHeight: "1.6", fontFamily: "Times New Roman", textAlign:"center"}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels.biomed}
                    </motion.p>
                    <Image 
                        src = "/biomedicon.png"
                        alt = "PLTW Biomedical"
                        width = {100}
                        height={100}
                    />
                </WildcardKeyframes>
            </Link>
                <Link href="pathways/computer-science">
                    <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels["computer-science"]}
                    </motion.p>
                    <Image 
                        src = "/csicon.png"
                        alt = "PLTW Biomedical"
                        width = {100}
                        height={100}
                    />
                </WildcardKeyframes>
             </Link>
                <Link href="pathways/digital-media">
                    <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18,textAlign:"center"}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels["digital-media"]}
                    </motion.p>
                </WildcardKeyframes>
            </Link>
            <Link href = "pathways/engineering">
                <WildcardKeyframes>
                    <motion.p
                        style={{ color: "gold",fontSize: 18,textAlign:"center"}}
                        whileHover={{y: [-5, 0, -5]}}
                        transition={{duration: 0.6, repeat:Infinity}}
                    >
                        {labels.engineering}
                    </motion.p>
                    <Image 
                        src = "/engicon.png"
                        alt = "PLTW Engineering"
                        width = {100}
                        height={100}
                    />
                 </WildcardKeyframes>
                </Link>
             </div>
            <div className = "flex flex-col p=10">
                <HTMLContent />        
            </div>
     </div>
    );
};
export default Home;