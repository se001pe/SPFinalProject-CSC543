import Image from "next/image";

export default function Home() {
  return (   
  <div>
      <h1 className ="w-full text-center text-4xl font-bold">Page Title</h1>       
      <h3 className = "w-full text-center text-2xl font-bold">Pathway Name</h3>
    
    <div className = "flex">
      <div className = "w-14 flex-none border-t">01</div>
      <div className = "w-14 flex-none border-t">02</div>
      <div className = "w-14 flex-none border-t">03</div>
    </div>
  </div>
  );
}