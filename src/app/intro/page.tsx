import Navbar from "@/components/Navbar"
import Image from "next/image"

function Intro(){
    return(
        <div>
            <main className="main ">
                <Navbar/>
                <div  className="hero-section">
                <div className="subsection"> 
                    <h1 className="name"> Amna Aftab Kifayat</h1>
                    <p className="para1">I’m a passionate web developer with a focus on building<br/> responsive
                     user-friendly, and efficient websites and web<br/> applications. My expertise 
                     spans across modern<br/> JavaScript frameworks like React and Next.js,<br/> along with  
                     solid experience in backend<br/> development with Node.js and databases.</p>
                     <button className="hire-btn">
                     <a
            href={"https://my-resume-83xg.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white font-bold py-2 px-4 rounded "
    
          >Hire me</a></button>
                </div>
                <div className="img-section">
                    <Image className="img1" src="/img1.jpeg" alt="" width={250} height={250}/></div>
                
                </div>

                <div>
                    <h2 >Worked with</h2>
                    <div className="spans">
                        <span className="span ">HTML</span>
                        <span  className="span">CSS</span>
                        <span  className="span">Tailwind CSS</span>
                        <span  className="span">JavaScript</span>
                        <span  className="span">TypeScript</span>
                        <span  className="span">Next.Js</span>
                        <span  className="span">MongoDB</span>
                    </div>
                    </div>

            </main>

        </div>
    )
}


export default Intro