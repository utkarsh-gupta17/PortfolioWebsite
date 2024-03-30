import { useEffect, useRef, useState } from 'react';
import Button from '../common/Button'
import Xcrypto from '../../assets/xcrypto.mp4';
import ScrollIndicator from '../common/ScrollIndicator';

export default function FeaturedSection()
{
    const [phaseIndex,setPhaseIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null)
    const phases = ['SynthAi','GoChat','nextToDo',"Xcrypt"];

    useEffect(()=>{
        deltaPhase(0);
        resetTimer();
    },[])

    const isTransitioning = useRef(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const intervalId = useRef<any>(0);

    function resetTimer()
    {
        clearInterval(intervalId.current);
        intervalId.current = setInterval(()=>{
            deltaPhase(1)
        },5000)   
    }

    function deltaPhase(delta:number)
    {
        if(isTransitioning.current)return;
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, (500));
        setPhaseIndex(prev=>{
            prev += delta;
            prev %= phases.length;
            if(prev < 0)prev = phases.length - 1;
            return prev;
        })
    }
    function setPhase(val:number)
    {
        if(isTransitioning.current)return;
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, (500));
        setPhaseIndex(prev=>{
            prev = val;
            prev %= phases.length;
            if(prev < 0)prev = phases.length - 1;
            return prev;
        })
    }

  return (
    <>
        <section className="h-screen flex flex-col items-center justify-between p-4 sm:pt-36 pb-16">
            <h1 className='z-20 font-bold opacity-70'>FEATURED PROJECTS</h1>
            <div className="container mx-auto flex justify-evenly md:justify-between items-end md:items-center z-20 h-128 pointer-events-none">
                <svg onClick={()=>{deltaPhase(-1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M30 12L19.4142 22.5858C18.6332 23.3668 18.6332 24.6332 19.4142 25.4142L30 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg onClick={()=>{deltaPhase(1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M18 12L28.5858 22.5858C29.3668 23.3668 29.3668 24.6332 28.5858 25.4142L18 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {/* <div className="w-full absolute origin-left h-1 bg-primary scale-x-50 bottom-0"/> */}
            <div className="flex z-20 gap-4">
                {
                    phases.map((value,index)=>
                    {
                        // if(phaseIndex == 0)
                        // {
                        //     return <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-[#000000]":"bg-[#ff3030]/50"}`} key={value}></div>
                        // }
                        return(
                            <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-primary":"bg-primary/50"}`} key={value}>
                            </div>                                
                        )
                    })
                }
            </div>
            <div className="absolute top-0 left-0 h-full w-full overflow-clip z-10">
                <div style={{translate:`-${(phaseIndex)}00vw 0`}} className="w-[500vw] h-full flex transition-all duration-500">
                    <div className="w-[100vw] h-full relative flex flex-col justify-center items-center">
                        <div className="absolute top-0 left-0 h-3/4 w-full bg-gradient-to-b from-background to-transparent -z-10"/>
                        <img src="/Synthai.png" className="absolute top-0 left-0 -z-20 w-full h-full object-cover"/>
                        <div className='bg-white/50 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg flex flex-col items-center justify-center p-10'>
                            <h1 className='text-4xl lg:text-6xl font-bold tracking-tighter text-center accent-gradient background-clip-text'>SynthAi</h1>
                            <h1 className='text-3xl lg:text-3xl font-bold opacity-70 tracking-tighter py-2 text-center'>SaaS AI Platform.</h1>
                            <a href="https://synth-aii.vercel.app/" target='_blank'>
                                <Button color='primary' className='mt-8 w-48'>Checkout SynthAi</Button>
                            </a>
                        </div>
                    </div>
                    <div className="w-[100vw] h-full relative flex flex-col justify-center items-center">
                        <div className="absolute top-0 left-0 h-3/4 w-full bg-gradient-to-b from-background to-transparent -z-10"/>
                        <img src="/gochat.png" className="absolute top-0 left-0 -z-20 w-full h-full object-cover"/>
                        <div className='bg-white/50 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg flex flex-col items-center justify-center p-10'>
                            <h1 className='text-4xl lg:text-6xl font-bold tracking-tighter text-center accent-gradient background-clip-text'>GoChat</h1>
                            <h1 className='text-3xl lg:text-3xl font-bold opacity-70 tracking-tighter py-2 text-center'></h1>
                            <a href="https://github.com/utkarsh-gupta17/GoChat-backend" target='_blank'>
                                <Button color='primary' className='mt-8 w-60'>Checkout GoChat's Repository</Button>
                            </a>
                        </div>
                    </div>
                    <div className="w-[100vw] h-full relative flex flex-col md:flex-row sm:justify-center items-center p-4 lg:px-32 xl:px-64">
                        <div className='h-40 md:w-0 md:h-96' ref={ref}>
                        </div> 
                        <video src={Xcrypto} className="absolute top-0 left-0 -z-20 w-full h-full object-cover" autoPlay muted loop/>
                        <div className='bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg p-10'>
                            <div className="w-full flex flex-col justify-center items-center">
                                {/* accent-gradient background-clip-text */}
                                <h1 className='animate left font-black text-4xl md:text-6xl leading-tight accent-gradient background-clip-text'>Xcrypto.</h1>
                                <h1 className='animate left delay-1 font-extrabold text-3xl md:text-3xl leading-tight mt-4'>For All your <span className='mt-4'>Crypto needs.</span></h1>
                                {/* <p className='animate left delay-2 font-light opacity-70 text-sm md:text-base mt-2'>A crypto app made using react which shows all exchanges and coins using coingecko API</p> */}
                                <div className="flex gap-4 mt-4">
                                    <a href='https://utxcryptoapp.netlify.app/' target='_blank' className='bg-primary w-64 rounded-xl px-4 py-2.5 md:py-4 md:px-6 hover:scale-105 transition-transform active:scale-95 text-xs md:text-base grid place-content-center'>Visit Xcrypto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100vw] h-full relative flex flex-col justify-center items-center">
                        <div className="absolute top-0 left-0 h-3/4 w-full bg-gradient-to-b from-background to-transparent -z-10"/>
                        <img src="/todo.png" className="absolute top-0 left-0 -z-20 w-full h-full object-cover"/>
                        <div className='bg-white/50 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg flex flex-col items-center justify-center p-12'>
                            <h1 className='text-4xl lg:text-6xl font-bold tracking-tighter text-center accent-gradient background-clip-text'>nextToDo</h1>
                            <h1 className='text-3xl lg:text-3xl font-bold opacity-70 tracking-tighter'>Get Stuff Done.</h1>
                            <a target='_blank' href="https://nexttodooo.vercel.app/">
                                <Button color='primary' className='mt-8 w-48'>Visit nextTodo</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <ScrollIndicator>
                    <h1 className="text-xs text-blue-700">Explore More</h1>
                </ScrollIndicator>
            </div>
        </section>
    </>
  )
}