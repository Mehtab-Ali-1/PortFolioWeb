import Link from "next/link";
import Header from "../header/page";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"
import Footer from "../footer/page";



export default function About () {
    return (
        <main className="max-w-screen-2xl justify-self-center">
                {/* hero section */}
            <div className="md:h-72 w-full max-md:w-screen bg-orange-100">
                <Header />
                <div className="md:text-4xl font-bold pt-20 font-serif flex justify-center items-center">
                    <h1 className="max-md:pb-10 md:pt-16 max-md:text-2xl">About Me</h1>
                </div>
            </div>
            {/* ********************* */}
            {/* ********************************************************************* */}
            
            
        <div className=" lg:flex max-md:px-6 px-16 lg:space-x-10 items-start lg:pt-40 max-lg:pt-36 max-md:pt-12">
            {/* one */}
            <div className="md:flex space-x-10 items-center">
                <div className="max-md:px-20 max-sm:px-6" >
                
                    <Image className="w-screen h-auto rounded-xl lg:h-80 border-orange-600 border-r-8 border-t-4 border-b-4" src="/mehtab.jpg" alt="ProfileImage" height={300} width={200}/>
                
                </div>
            {/* two */}
            <div className="md:flex">
                <div className="md:flex-1">
                    <h1 className="md:text-4xl max-md:text-3xl text-blue-950  font-semibold font-serif pt-9 ">Designing With Passion While Exploring The World</h1>
                    <p className="py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam rem deleniti ipsa reiciendis! Mollitia minus consequuntur est, animi voluptatibus asperiores saepe accusantium ratione exercitationem praesentium corporis, quas fuga? Voluptate, praesentium molestiae pariatur quidem ducimus veniam!</p>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem odit, quibusdam culpa est consectetur expedita repudiandae iusto maiores porro.</p>
                    <p className="pt-8">Let`s talk with me.</p>
                    <Link className="text-blue-900 font-bold text-lg py-10" href="#">ma8317076@gmail.com</Link>
                </div>
            </div>
            </div>
            {/* three */}
            <div className="lg:flex lg:px-5 px-8">
                <div className=" pt-16">
                    <h1 className="md:text-4xl max-md:text-3xl text-blue-950  font-semibold font-serif  ">I Create Products Not Just Arts</h1>
                    <p className="py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem praesentium corporis, quas fuga? Voluptate, praesentium molestiae pariatur quidem ducimus veniam!</p>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem odit, quibusdam culpa est consectetur expedita repudiandae iusto maiores porro.</p>
                </div>
            </div>
        </div>
        {/* experiecne lining*/}
        <div className="md:flex max-md:px-11 px-16 items-center space-x-6">
            <div className="text-start space-y-7 md:pt-12 max-md:pt-7 md:flex-1 ">
                <h1 className="text-blue-950 md:text-4xl max-md:text-3xl font-serif font-semibold">Frontend and Beckend Developer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptas labore reprehenderit dignissimos pariatur numquam consectetur beatae recusandae, officiis, non eveniet sapiente iste tempore, delectus maxime. Eaque ullam iure id? Totam maxime eaque quia! Explicabo et ut quisquam dignissimos, quod mollitia eos omnis expedita molestias? Hic voluptate saepe blanditiis rerum?</p>
                <p><Link className="bg-orange-600 text-white px-3 py-2 text-lg" href="#">Download CV</Link></p>
            </div>
            
            <div className=" space-y-5 md:pt-10 pt-7 md:flex-1 ">
            <div className="text-blue-950 font-bold">HTML
            <Progress className="h-4 " value={80} /></div>
            <div className="text-blue-950 font-bold">CSS
            <Progress className="h-4" value={53} /></div>
            <div className="text-blue-950 font-bold">TypeScript
            <Progress className="h-4" value={60} /></div>
            <div className="text-blue-950 font-bold">NextJS
            <Progress className="h-4" value={55} /></div>
            <div className="text-blue-950 font-bold">Tailwind CSS
            <Progress className="h-4" value={80} /></div>
            </div>
        </div>
        <footer></footer>
        <div className="mt-32"></div>
        <Footer/>
        </main>
    )
}
