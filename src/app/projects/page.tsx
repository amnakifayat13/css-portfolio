
import Navbar from "@/components/Navbar"
import Image from "next/image"
function Projects (){
    return(
        <div>
        <main className="main h-screen">
            <Navbar/>
          
        <div className="projects ">
        <div> <Image src="/img2.png"
        width={300}
        height={300}
        alt=""/>
       <div className='mt-6 mb-6'>
       <a
            href={"https://mudassir-offer-list.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGreen text-white font-bold py-2 px-4 mx-1 md:mx-16 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       </div>
       <div> <Image src="/img3.png"
        width={300}
        height={300}
        alt=""/>
       <div className='mt-6 mb-6'>
       <a
            href={"https://portfolio-by-next-js-u86u.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGreen text-white font-bold py-2 px-4 mx-1 md:mx-16 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       
       </div>
       <div> <Image src="/img4.png"
        width={300}
        height={300}
        alt=""/>
       <div className='mt-6 mb-6'>
       <a
            href={"https://funforkids.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGreen text-white font-bold py-2 px-4 mx-1 md:mx-20 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       
       </div>
       <div> <Image src="/img5.png"
        width={300}
        height={300}
        alt=""/>
       <div className='mt-6 mb-6'>
       <a
            href={"https://planto-website.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGreen text-white font-bold py-2 px-4 mx-1 md:mx-20 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       
       </div>
       <div> <Image src="/img6.png"
        width={300}
        height={300}
        alt=""/>
       <div className='mt-6 mb-6'>
       <a
            href={"https://fashionwebsite-ybzk.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGreen text-white font-bold py-2 px-4 mx-1 md:mx-20 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       
       </div>

        </div>
        </main>

    </div>
    )
}

export default Projects