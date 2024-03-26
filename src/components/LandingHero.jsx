import TypewriterComponent from "typewriter-effect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '../components/common/Button';
import { TransitionLink } from '../contexts/PageLoaderContext';
gsap.registerPlugin(ScrollTrigger);


function LandingHero () {

  return (
    <div className="flex flex-col px-4">
      <div className="text-white font-bold py-36 text-center space-y-5 md:mt-10">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>I'm interested in</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
            <TypewriterComponent
              options={{
                strings: [
                  "Programming.",
                  "Web Development.",
                  "Graphic Designing.",
                  "Machine Learning.",
                  "Philosophy.",
                ],
                autoStart: true,
                loop: true,
              }}
              />
          </div>
        </div>
      </div>
      <div className='bg-red flex gap-5 md:mt-4 justify-center item-center'>
        <a href='https://drive.google.com/drive/u/1/folders/1NbVYxVtpDthB_DWbHj9HfxA6o9hoJgXW' target='_blank'>
          <Button color='primary' className='md:w-48'>RESUME</Button>
        </a>
        <TransitionLink to='/projects'>
          <Button color='secondary' className='md:w-48'>PROJECTS</Button>
        </TransitionLink>
      </div>
        {/* <div className="mt-10">
          <img
            className="w-32 mx-auto shadow-xl rounded-full"
            src="/profile.png"
            alt="Profile face"
          />
        </div> */}
    </div>
  );
}
export default LandingHero;