import Link from "next/link";
import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "../header/page";
import Footer from "../footer/page";



export default function HomeA () {
    return (
        <main className="max-w-screen-2xl justify-self-center">
            <div>
                <Header/>
            </div>
            {/* icons */}
            <div className="md:flex mt-20 justify-center items-center md:px-6 lg:px-12">
                <div className="hidden md:flex flex-col space-y-4 ">
                <Link  href="https://www.linkedin.com/in/mehtab-ali-561651301/"><Linkedin className=" text-blue-800 hover:text-orange-600 "/></Link>
                <Link  href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F"><Instagram className="text-pink-600 hover:text-orange-600"/></Link>
                <Link  href="#"><Twitter className="text-black hover:text-orange-600"/></Link>
                <Link  href="https://www.facebook.com/profile.php?id=100024441846165"><Facebook className="text-blue-600 hover:text-orange-300"/></Link>
                <Link  href="https://github.com/Mehtab-Ali-1"><Github  className="text-black hover:text-orange-300"/></Link>
                </div>
                <div className="md:flex-1 text-center md:text-start space-y-5 lg:space-y-7 pt-12 px-5">
                    <h1 className="text-4xl lg:text-6xl text-blue-950 font-semibold font-serif">Mehtab Ali</h1>
                    <h1 className="text-4xl lg:text-6xl text-blue-950 font-semibold font-serif">I am Web Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Asperiores pariatur nesciunt quidem ducimus aut ratione quo <br /> fugit vero doloremque neque?</p>
                    <p className="pt-5">
                    <Link className="bg-orange-600 text-white py-3 px-4 rounded-md text-xl hover:bg-slate-800 hover:text-orange-400 border-black " href="/">Learn More</Link></p>
                </div>
                <div className="flex pt-16 max-md:p-20 max-sm:px-6">
                    <Image className="w-full h-auto border-b-4 border-l-8 border-orange-600 rounded-2xl" src="/mehtab.jpg" alt="ProfileImage" height={500} width={300}/>
                </div>
            </div>
        {/* ******************************************************* */}
                {/* about me */}
        {/* **************************************************************************** */}
                <div className=" text-center space-y-4 max-lg:pt-20  px-2 lg:pt-32">
                    <h1 className="font-serif text-3xl text-blue-950 font-semibold">About Me</h1>
                    <p className="">Lorem ipsum dolor sit amet elit. Quaerat, facilis?</p>
                </div>
                {/* &&&&&&&&&&&&&&&&&&&&&&&&&& */}
        <div className="lg:flex lg:items-center pt-12 lg:space-x-8 md:px-10 max-md:px-8">
            <div className=" px- leading-7 font-medium text-left">
                <div className="space-y-5">
                    <h1 className="max-md:text-3xl text-4xl  font-serif font-semibold text-blue-950 py-4">Developing with a Passion While Exploring The World</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, placeat repellat? Aut eos harum maiores non nihil magnam delectus illum, tempora molestias laudantium, provident explicabo corporis placeat nesciunt soluta voluptatum accusantium eaque?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="py-8">
                    <Link className="bg-orange-600 text-white py-2 px-4 text-lg rounded-lg space-y-4 hover:bg-slate-800 hover:text-orange-400" href="#">Contact Me</Link>
                </div>
            </div>
            <div className=" leading-7 font-medium text-left md:flex max-md:px-2">
                <div className="space-y-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur facere ullam porro, aperiam nihil! Omnis molestias nisi, itaque ut necessitatibus accusantium qui vel nam.
                    </p>
                    <p className="pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ut.</p>
                </div>
                
                <div className="" >
                    <Image className="w-screen h-auto lg:h-80 max-md:px-20 max-sm:px-6 pl-5 rou" src="/laptopImage.jpg" alt="webImage" width={300} height={200}/>
                </div>
            </div>
        </div>
        {/* footer  */}
        <div className="mt-32"></div>
        <Footer/>
        
    
        </main>
    )
}
