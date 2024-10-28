
import Link from "next/link"
import Intro from "./intro/page";
import About from "./about/page";
import Projects from "./projects/page"
import Contact from "./contact/page"



export default function Home() {
  return (
   <div>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
   </div>
  );
}
