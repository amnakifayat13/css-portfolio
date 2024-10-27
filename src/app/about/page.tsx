import Navbar from "@/components/Navbar"
import Image from "next/image"

function About(){
    return(
        <div>
            <main className="main ">
                <Navbar/>
                <div className="about-section">
                    <div className="image-section-a">
                        <Image src="/img1.jpeg" alt="" width={200} height={200}/> 
                        <div>
                        <p className="edu">Education</p>
                        <p className="edu-para">- MBA (Finance) from DadaBhoy Institute of Higher Education</p>
                        <p className="edu-para">- Enrolled in GIAIC Initiative AI Metaverse Web-03 Program</p>
                        </div>
                    </div>
                    <div>

                        <p className="get">Get to know me!</p>
                        <p className="about-para"> I'm a passionate web developer dedicated to crafting<br/>
                             high-quality, engaging digital experiences. With a <br/>
                             strong foundation in front-end and back-end technologies,<br/>
                              I enjoy building responsive and interactive websites that<br/>
                               blend creativity with functionality. From user-friendly<br/>
                               interfaces to robust server-side applications, I focus<br/>
                                on delivering solutions that not only meet user needs <br/>
                                but also enhance business goals. I’m constantly learning<br/>
                                 and experimenting with the latest web technologies,<br/> 
                                 ensuring my skills stay at the cutting edge. Let’s<br/>
                                  work together to bring your vision to life on the web!</p>
                    </div>
                </div>

            </main>

        </div>
    )
}


export default About