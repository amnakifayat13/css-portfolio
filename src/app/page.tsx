
import Link from "next/link"
import Intro from "./intro/page";
import About from "./about/page";



export default function Home() {
  return (
   <div>
    <Intro/>
    <About/>
   </div>
  );
}
