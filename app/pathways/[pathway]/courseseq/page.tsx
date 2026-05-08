import Image from "next/image";
import Link from "next/link";

export default async function CourseSeqPage ( { params } ) {
    const {pathway} = await params;

    if (pathway === "computer-science") {
        return (
        <div className = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">    
            <div className = "w-full text-center">
                <Image
                src = "/courseseqcs.png"
                alt = "CS Course Sequence"
                width = {1300}
                height = {2000}
            />
            </div>
        </div>
        );
    };

  if (pathway === "biomed") {
        return (
        <div className= "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className = "w-full text-center">
                <Image
                src = "/courseseqbs.png"
                alt = "Biomedical Course Sequence"
                width = {1300}
                height = {2000}
                />
            </div>
        </div> 
      );
    };

    if (pathway === "engineering") {
        return (
         <div className = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className = "w-full text-center">
                <Image
                src = "/courseseqeng.png"
                alt = "Engineering Course Sequence"
                width = {1300}
                height = {2000}
            />
          </div>
         </div>
        );
    };    
};