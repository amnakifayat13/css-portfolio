import Link from "next/link"
import { Linkedin } from "lucide-react"
import { PhoneIncoming } from "lucide-react"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

function Navbar(){
    return(
        <div>
            <div className="main-navbar">

           <div className="sheet">
            <Sheet >
            <SheetTrigger> <Menu /></SheetTrigger>
            <SheetContent>
                <div>
                <ul className="menu-options">
                        <li> <Link href="/">Home</Link></li>
                        <li> <Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

            </SheetContent>
            </Sheet>
           </div>
            
            <ul className=" options">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    <div>
               
                </div>
                
                <div>
                    <ul className="icons">
                        <li><a href=" https://www.linkedin.com/in/amna-aftab-kifayat-81a5822b7/" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                        </a></li>
                        <li><a href="https://wa.me/+923162391694" target="_blank" rel="noopener noreferrer">
                            <PhoneIncoming /></a></li>
                    </ul>
                    
                </div>
               
            </div>

        </div>
    )
}

export default Navbar