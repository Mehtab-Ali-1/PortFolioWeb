import { IoIosArrowForward } from "react-icons/io";
import Header from "../header/page";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Footer from "../footer/page";




export default function Contact () {
    return (
        <main className="max-w-screen-2xl justify-self-center w-screen">
            <div className="md:h-72 w-full max-md:w-screen bg-orange-100 ">
                <Header />
                <div className="md:text-4xl pt-20 font-bold  font-serif flex justify-center items-center">
                    <h1 className="max-md:pb-10 md:pt-16 max-md:text-2xl">Contact Me</h1>
                </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {/* contact cards */}
            <div className="md:flex max-md:space-y-10 lg:justify-evenly md:justify-evenly mt-10 justify-center items-center max-md:mx-10 ">
                <div className="flex flex-col bg-white shadow-2xl space-y-4 lg:py-6 lg:px-12 max-lg:py-4 max-lg:px-7 text-center items-center ">
                    <MdPhoneAndroid className="text-orange-600 max-md:text-3xl text-5xl" />
                    <p className="md:text-lg">+92-310-2243748</p>
                    <p className="md:text-lg">Monday-Friday / 7AM-5PM</p>
                </div>
                <div className="flex flex-col bg-white shadow-2xl space-y-4 lg:py-6 lg:px-12 max-lg:py-4 max-lg:px-7 text-center items-center ">
                    <p><MdOutlineMapsHomeWork className="text-orange-600 max-md:text-3xl text-5xl" /></p>
                    <p className="md:text-lg">London United Kingdom</p>
                    <p className="md:text-lg">Rosemaed, UK 91117</p>
                </div>
                <div className="flex flex-col bg-white shadow-2xl space-y-4 lg:py-6 lg:px-12 max-lg:py-4 max-lg:px-7 text-center items-center ">
                    <p><MdOutgoingMail className="text-orange-600 max-md:text-3xl text-5xl" /></p>
                    <p className="md:text-lg">ma8317076@gmail.com</p>
                    <p className="md:text-lg">Contact me everytime</p>
                </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                {/* form & message */}
            <div className="md:flex mt-14">
                {/* form  */}
                <div className="flex flex-col justify-center text-center max-md:mx-8 shadow-2xl bg-slate-200 space-y-7 md:w-3/5 md:mx-16 rounded-xl max-md:py-10 py-9 max-md:mt-20">
                    <h1 className="max-md:text-3xl md:text-4xl font-serif text-blue-950">Get In Touch</h1>
                    <input className="pl-5 mx-10 bg-white py-2" type="text" placeholder="Enter your name" />
                    <input className="pl-5 mx-10 bg-white py-2" type="email" placeholder="Enter email address" />
                    <input className="pl-5 mx-10 bg-white py-2 pb-20" type="message" placeholder="Enter your Message" />
                    <button className="pl-5 py-2 mx-10 bg-orange-600 hover:bg-slate-800 hover:text-orange-400"  type="button">Send Message</button>
                </div>
                {/* message  */}
                
                <div className="md:w-2/5 px-12 max-md:mt-12 ">
                    <h1 className="text-4xl text-blue-950 font-serif">Message Me</h1>
                    <p className="pt-12 leading-10 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, error atque. Soluta ipsum ab quas amet architecto optio dolorum fuga? Mollitia distinctio autem laboriosam a aliquid nulla debitis molestias magnam!</p>
                    <div className="flex justify-center items-center space-x-7 pt-10">
                    <Link  href="https://github.com/Mehtab-Ali-1"><Github  className="text-black hover:text-orange-600"/></Link>
                    <Link  href="https://www.linkedin.com/in/mehtab-ali-561651301/"><Linkedin className=" text-blue-800 hover:text-orange-600 "/></Link>
                    <Link  href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F"><Instagram className="text-pink-600 hover:text-orange-600"/></Link>
                    <Link  href="#"><Twitter className="text-black hover:text-orange-600"/></Link>
                    <Link  href="https://www.facebook.com/profile.php?id=100024441846165"><Facebook className="text-blue-600 hover:text-orange-600"/></Link>
                    </div>
                </div>
                
            </div>
            <div className="mt-32"></div>
        <Footer/>



        </main>

    )
}