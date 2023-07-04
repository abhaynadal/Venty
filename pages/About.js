import Head from "next/head";


// React icons
import { FaLightbulb, FaUserSecret, FaAngry } from 'react-icons/fa'
import { RiEmotionUnhappyFill } from 'react-icons/ri'
import { GiMedicines } from 'react-icons/gi'

const About = () => {
    return (
        <div className="md:p-5 w-full max-w-3xl mx-auto pt-20">
        <Head>
            <title>Venty</title>
        </Head>
        <div>
            <h2 className="font-semibold text-3xl text-black hover:cursor-pointer">Guidelines for Usage:</h2>
        </div>
        
        <div className="pt-10 pb-20">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
              <FaLightbulb className="w-5 h-5" />
              </div>
            </div>
            <div className="ml-4">
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Respect and Empathy</h3>
            <p className="mt-2 text-base text-gray-500">eat every user with kindness, empathy, and respect. Remember that behind each confession is a person seeking understanding and support.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                <FaUserSecret className="w-5 h-5" />
                </div>
            </div>
            <div className="ml-4">
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Confidentiality</h3>
            <p className="mt-2 text-base text-gray-500">Maintain the confidentiality of the shared confessions. Refrain from sharing or discussing specific details or identifying information outside of the platform.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                <FaAngry className="w-5 h-5" />
                </div> 
            </div>
            <div className="ml-4">
            <h3 className='text-lg leading-6 font-medium text-gray-900'>No abusive language </h3>
            <p className="mt-2 text-base text-gray-500">Be respectful always.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                <RiEmotionUnhappyFill className="w-5 h-5" />
                </div> 
            </div>
            <div className="ml-4">
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Avoid controversial topics.</h3>
            <p className="mt-2 text-base text-gray-500"> Political posts, religious views, racial discrimination, abuse, hate speech go against community guidelines</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                    <GiMedicines className="w-5 h-5" />
                </div>  
            </div>
            <div className="ml-4">
            <h3 className='text-lg leading-6 font-medium'>Seek Professional Help</h3>
            <p className="mt-2 text-base text-gray-500">While the community provides support, it is important to remember that confessions are not a substitute for professional advice or therapy. If someone expresses a need for professional help, encourage them to seek it.</p>
            </div>
          </div>          
          </div>
          </div>

        
        </div>
    );
}
 
export default About;
