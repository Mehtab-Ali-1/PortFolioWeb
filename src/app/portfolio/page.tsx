import Header from "../header/page";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../footer/page";


export default function Portfolio () {
    return (
        <main className="max-w-screen-2xl justify-self-center w-screen ">
            {/* hero section */}
            <div className="md:h-72 w-full max-md:w-screen  bg-orange-100">
                <Header />
                <div className="md:text-4xl pt-20 font-bold  font-serif flex justify-center items-center">
                    <ul className="flex space-x-3 max-md:pb-10 md:pt-16 text-lg items-center">
                        <li><Link href="/home">Home</Link></li>
                        <li><IoIosArrowForward />
                        </li>
                        <li className="text-orange-600">Portfolio</li>
                    </ul>
                </div>
            </div>
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {/* heading */}
            <div className="text-3xl md:text-4xl font-serif text-blue-950 flex text-center justify-center pt-10 px-5">
                <h1>Showcasing My Journey in Web Development</h1>
            </div>

            <div className="md:flex justify-evenly items-center mt-12">
            {/* pic1  */}
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8">
                    <Image className="imageSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " src="/cv.png" alt="CV" height={300} width={300}/>
                        <p className="text-xl font-semibold pt-6">My Resume</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://my-resume-w35x.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
            {/* pic2  */}
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8">
                    <Image className="imageSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src="/resumeBuilder.png" alt="CV" height={300} width={300}/>
                        <p className="text-xl font-semibold pt-6">Dynamic Resume Generator</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://resume-builder-qymw.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
            {/* pic3 */}
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8">
                    <Image className="imageSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src="/paymentForm.png" alt="CV" height={300} width={300}/>
                        <p className="text-xl font-semibold pt-6">Payment Form</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://payment-form-h34s.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
            </div>
            {/* ***************** */}
        <div className="md:flex justify-center items-center space-x-5 px-7">
            {/* second web project */}
            <div>
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8  md:pt-16 px-5">
                    <Image className="webSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src="/figmaWebTravel.png" alt="CV" height={300} width={400}/>
                        <p className=" relative text-center text-xl font-semibold pt-6">Travel Agency Website</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://trave-agency-web-vdp4.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
            </div>
            {/* Countdown Timer  */}
            <div>
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8  md:pt-16 px-5">
                    <Image className="portfolioSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src="/countDownTimer.png" alt="CV" height={300} width={400}/>
                        <p className=" relative text-center text-xl font-semibold pt-6">Countdown Timer</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://count-down-timer-proj-c21z.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
            </div>
        </div>
        {/* calculator */}
        <div className="md:flex justify-center items-center" >
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8  md:pt-16 px-5">
                    <Image className="portfolioSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src="/calculator.png" alt="CV" height={300} width={400}/>
                        <p className=" relative text-center text-xl font-semibold pt-6">Calculator</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://calculator-with-next-js.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
                {/* tic toc toe game */}
                <div className=" flex flex-col items-center justify-center space-y-4 max-md:mb-8  md:pt-16 px-5">
                    <Image className="portfolioSize rounded-t-xl shadow-slate-800 shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src="/tictactoe.png" alt="ticTacToe" height={300} width={400}/>
                        <p className=" relative text-center text-xl font-semibold pt-6">Tic Tac Toe Game</p>
                        <Link className=" text-lg bg-orange-500 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-orange-400" href="https://tic-toc-toe-game-next-js.vercel.app/">View</Link>
                    <div className="flex-auto">
                    </div>
                </div>
            </div>
            <div className="mt-32"></div>
            <Footer/>
  

            
        </main>
    )
}
