import Navbar from '../components/Navbar';
import Button from '../components/common/Button';
import AboutMe from '../components/HomePage/AboutMe';
import { useEffect, useRef } from 'react';
import { TransitionLink } from '../contexts/PageLoaderContext';
import ParallaxBG from '../components/HomePage/ParallaxBG';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from '../components/common/AnimatedText';
import Footer from '../components/Footer';
import WorkExperience from '../components/HomePage/WorkExperience';
import ServicesSection from '../components/HomePage/ServicesSection';
import { SkillsSection } from '../components/HomePage/SkillsSection';
gsap.registerPlugin(ScrollTrigger);

function HomePage()
{
    const heroTextRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            
            heroTextRef.forEach((ref,index)=>{
                if(!ref.current)return;
                gsap.from(ref.current,
                    {
                        y:-200,
                        opacity:0,
                        ease: "power4.out",
                        duration:4,
                        delay:.5 + index*.25
                    },
                )
            })
        },);
    

        return () => ctx.revert(); // cleanup! 
    
    }, []);

    // const lenis = useLenis();
    const aboutMeRef = useRef<HTMLDivElement>(null);

    return (
    <>
        <Navbar />
        <ParallaxBG>
            <div className='flex flex-col justify-center items-center'>
                <div ref={heroTextRef[2]} className='overflow-y-clip'><h1 className='text-xl md:text-4xl opacity-75'>Hey, I am</h1></div>
                <div ref={heroTextRef[1]} className='overflow-y-clip'><h1 className='text-3xl md:text-5xl font-extrabold'><AnimatedText delay={200} text='UtkarshGupta'/></h1></div>
                
                <div ref={heroTextRef[0]} className='bg-red flex gap-5 mt-4'>

                    <a href='https://drive.google.com/file/d/1l2QvOM5uZRBPo6GSOMxyEJWCNbxs3-EI/view?usp=sharing' target='_blank'>
                        <Button color='primary' className='md:w-48'>RESUME</Button>
                    </a>
                    <TransitionLink to='/projects'>
                        <Button color='secondary' className='md:w-48'>PROJECTS</Button>
                    </TransitionLink>
                </div>
            </div>
        </ParallaxBG>
        <AboutMe sectionRef={aboutMeRef}/>
        <WorkExperience />
        <SkillsSection />
        <ServicesSection />
        <Footer />
    </>
  )
}

export default HomePage;