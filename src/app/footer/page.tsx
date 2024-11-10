import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer () {
    return (
        <footer className="flex flex-col justify-center space-y-6 items-center px-6 bg-slate-300 h-60 w-full ">
            <div className="flex justify-center  min-[300px]:flex-col pt-10">
                {/* logo  */}
                <div>
                <h1 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-lg">MA</h1>
            </div>
                
            </div>
                {/* icons */}
            <div className=" items-center">
                <ul className="flex justify-center gap-6 items-center">
                    <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F"><Instagram className="text-pink-600" /></Link></li>
                    <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://www.facebook.com/profile.php?id=100024441846165"><Facebook className="text-blue-600" /></Link></li>
                    <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="http://twitter.com/"><Twitter /></Link></li>
                    <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://www.linkedin.com/in/mehtab-ali-561651301/"><Linkedin className="text-blue-800" /></Link></li>
                    <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://github.com/Mehtab-Ali-1"><Github /></Link></li>
                </ul>
            </div>
                {/* email */}
            <div>
                <h1 className="text-2xl font-bold ">ma8317076@gmail.com</h1>
            </div>
            <hr className="h-1 text-white" />
            <div className="pt-7"></div>
        </footer>
    )
}