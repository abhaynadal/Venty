import Head from "next/head";
import Link from "next/link";
import { AiFillHeart } from 'react-icons/ai'

// import image
import cat  from '../img/cat.jpg'
import Image from "next/image";

export default function Home() {
    return (
        <div className="md:px-5 w-full max-w-3xl mx-auto pt-20">
            <Head>
            <title>Venty</title>
            </Head>            
            <div>
                <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">Unburden your soul - Confess and find solace.</h1>
            </div>  

            <div className="py-4 px-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg my-10 hover:shadow-xl duration-1000">
            <div className="flex items-center pb-3">
                <Image src={cat} alt="image" className="w-10 h-10 rounded-full object-cover cursor-pointer mr-2" />
                <div>
                    <h1 className="font-semibold text-xl text-gray-900">10 mins ago</h1>    
                    <p className='text-xs text-gray-500'>Made with ❤️ by Nikhil</p>
                </div>            
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                <div className="mt-1">
                    <h2 className="font-semibold text-xl text-gray-700">About Venty</h2>                    
                </div>
                </div>                
            </div>
            
            <div className="py-4"  >
                <p className="text-gray-700 text-sm whitespace-pre-line break-words">
                Enter a sanctuary of anonymity, where confessions bloom without fear of judgment. This online haven invites you to unburden your heart, 
                sharing your deepest secrets with a supportive and understanding community. Engage in meaningful interactions, offering comfort and empathy, 
                as each confession becomes a stepping stone towards healing and growth. Together, we create a refuge of compassion, where the power of shared vulnerability 
                strengthens bonds and nurtures souls.
                </p>
            </div>
            
           
            </div> 

            <div>
                <p className="mt-6 text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto">Welcome to our supportive community. Venty enables you to release negative emotions and live life to the fullest.</p>
            </div>               
            <Link href='/auth/Login' legacyBehavior>
            <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black">
                <p>Get Started</p>
                <AiFillHeart className="fill-current w-4 h-4 mr-2" />              
            </button>            
          </Link>   
        </div>
    );
}