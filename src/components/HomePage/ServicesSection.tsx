import { TransitionLink } from '../../contexts/PageLoaderContext';
import AnimatedText from '../common/AnimatedText';

function MyComponent()
{
    const cardClass = "border-2 p-4 h-36 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";
    const cardClass2 = "border-2 p-4 h-12 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";

    return(
        <>
            <div className="h-128 bg-gradient-to-t from-primary to-accent grid items-center justify-center">
            <h1 className='text-xl sm:text-5xl lg:text-8xl font-extrabold mt-1 overflow-clip'>
                <AnimatedText refresh text='MY SERVICES'/>
            </h1>       
        </div>
        <div className="relative py-36">
            <div className="absolute right-0 top-0 h-full w-full lg:w-4/5 -z-10 flex items-center overflow-y-clip">
                <div className="h-[300%]">
                    <img alt='' src="https://i.vimeocdn.com/video/626610457-503991c15fbd9d9221390f50d174c67dfd65d52037a79560b4a454916e21784a-d?mw=1300&mh=731" className="w-full top-0 sticky h-screen object-cover"/>
                </div>
                <div className="bg-gradient-to-r from-background to-transparent top-0 left-0 absolute w-1/2 h-full"/>
            </div>
            <div className='mx-auto container h-full flex flex-col justify-center p-4 md:p-8 lg:p-8'>
                <h1 className='text-lg lg:text-2xl opacity-50'>MY SERVICES</h1>
                <h1 className='text-4xl lg:text-8xl font-extrabold mt-1'>WEB <span className='gradient-text'>DEVELOPMENT</span></h1>
                <div className="max-w-2xl flex flex-col flex-wrap gap-4 mt-16">
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass} w-48 grow`}>
                            <div className='font-bold text-center'>
                                <span className="text-xl">Looking for</span> <span className='text-xl'>Frontend Projects</span>
                            </div>
                            <div className='text-sm opacity-70'>
                                for freelance
                            </div>
                        </div>
                        <div className={`${cardClass} w-72 grow text-sm px-8`}>
                            <span className='opacity-70'>Creative Frontend Web Developer specializing in captivating design elements to enhance user experience. Experienced in blending aesthetic appeal with functional interfaces to bring visions to life.</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            ReactJS
                        </div></div>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            NextJS
                        </div></div>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            Tailwind CSS
                        </div></div>
                        <div className={`${cardClass2} w-24 grow`}><div>
                            GSAP
                        </div></div>
                    </div>
                    <div className={`cursor-pointer border-2 p-4 h-36 border-white/10 rounded-lg fill-hover-absolute relative z-0 bg-background/20 backdrop-blur-xl grow group before:duration-500`}>
                        <TransitionLink to={'/projects'} className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center duration-300'>
                            <h1 className='text-lg md:text-2xl'>VIEW ALL</h1>
                            <h1 className='text-xl md:text-3xl font-bold'>PROJECTS</h1>
                        </TransitionLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyComponent;
