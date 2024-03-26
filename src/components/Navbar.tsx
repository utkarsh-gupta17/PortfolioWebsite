import TextButton from './common/TextButton';
import { TransitionLink } from '../contexts/PageLoaderContext';
import { useLocation } from 'react-router';
import { useLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';

function Navbar(props: { className?: string, margin?: boolean }) {
  const location = useLocation();
  const lenis = useLenis();

  const [hasScrolledUp, setHasScrolledUp] = useState(true);
  const [isOnTop, setisOnTop] = useState(true);

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", (e) => {
      setisOnTop(lenis.targetScroll == 0);
      if (e.direction == 1)
        setHasScrolledUp(false);
      if (e.direction == -1)
        setHasScrolledUp(true);
    })
    return () => {
      //cleanup how?? TODO
      // lenis.destroy();
    }
  }, [lenis])

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return (
    <>
      {props.margin && <div className="md:h-28"></div>}
      
      {/* bg-background/50 backdrop-blur-md p-4 border-text/10 */}
      <header className={`hidden bg-white/20 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg md:block fixed top-0 lg:top-0 left-0 w-full z-30 ${hasScrolledUp ? "" : "-translate-y-full"} ${isOnTop ? "border-text/0" : "bg-white/50 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg"} border-b-2 duration-300 px-16`}>
        <div className={`container mx-auto flex justify-between items-center ${isOnTop ? "p-4 lg:p-3" : ""}`}>
          <div className='w-full flex justify-evenly'>
            <TransitionLink to='/'>
              <TextButton defaultActive={location.pathname == '/'}>HOME</TextButton>
            </TransitionLink>
            <TransitionLink to='/about'>
              <TextButton defaultActive={location.pathname == '/about'}>ABOUT ME</TextButton>
            </TransitionLink>
          </div>
          {/* width="50" height="43" */}
          <div>
              <img src="/128.png" alt="Main Logo" />
          </div>
          <div className='w-full flex justify-evenly'>
            <TransitionLink to='/projects'>
              <TextButton defaultActive={location.pathname == '/projects'}>PROJECTS</TextButton>
            </TransitionLink>
            <TransitionLink to='/contact'>
              <TextButton defaultActive={location.pathname == '/contact'}>CONTACT</TextButton>
            </TransitionLink>
          </div>
        </div>
      </header>
      <header className='md:hidden fixed z-30 p-2 border-t-2 border-text/10 rounded-t-xl bottom-0 w-full bg-background flex justify-center gap-4'>
        <TransitionLink to='/'>
          <TextButton defaultActive={location.pathname == '/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z" fill="currentColor" />
            </svg>
          </TextButton>
        </TransitionLink>
        <TransitionLink to='/about'>
          <TextButton defaultActive={location.pathname == '/about'}>
            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" width="24" height="24" fill="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <path d="M19.536 9.146c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.505h2.35v1.15c.4-.463 1.302-1.26 2.71-1.26 1.247 0 2.096.526 2.477 1.59.524-.761 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.963v6.24h-2.353l.005-.007z"></path></g></svg>
          </TextButton>
        </TransitionLink>
        <TransitionLink to='/projects'>
          <TextButton defaultActive={location.pathname == '/projects'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
              <path d="M3.45067 10.9082L10.4033 17.4395C10.6428 17.6644 10.7625 17.7769 10.9037 17.8046C10.9673 17.8171 11.0327 17.8171 11.0963 17.8046C11.2375 17.7769 11.3572 17.6644 11.5967 17.4395L18.5493 10.9082C20.5055 9.07059 20.743 6.0466 19.0978 3.92607L18.7885 3.52734C16.8203 0.99058 12.8696 1.41601 11.4867 4.31365C11.2913 4.72296 10.7087 4.72296 10.5133 4.31365C9.13037 1.41601 5.17972 0.990584 3.21154 3.52735L2.90219 3.92607C1.25695 6.0466 1.4945 9.07059 3.45067 10.9082Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            </svg>
          </TextButton>
        </TransitionLink>
        <TransitionLink to='/contact'>
          <TextButton defaultActive={location.pathname == '/contact'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.5936 17.6577C16.5314 18.2177 16.4102 18.7695 16.232 19.304L16 20" stroke="currentColor" strokeWidth="2" />
              <path d="M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            </svg>
          </TextButton>
        </TransitionLink>
        <TextButton onClick={()=>{
          toggleFullScreen()
        }} defaultActive={!!document.fullscreenElement}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </TextButton>
      </header>
    </>
  )
}

export default Navbar;