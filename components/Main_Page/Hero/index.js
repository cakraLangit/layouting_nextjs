import HeroSection from './HeroSection'

// const Background=styled.div`
// background: radial-gradient(97.37% 190.31% at 3.09% -3.62%, #FF00B8 31.9%, rgba(233, 0, 253, 0) 68.75%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(173, 0, 255, 0.95);
// height:300px;

// @media (min-width: 640px) {
//   height:310px
// } 
// @media (min-width: 768px) { 
//   height:650px
// }
// `
 function Hero() {
  return (
      <>
    <div className='bg-gradient-to-b from-secondary to-primary  md:h-max h-[22rem]'>
    <div className="container mx-auto flex flex-row items-center px-5 md:px-1 lg:px-10 hero-content  mt-10 sm:mt-0 md:py-32 lg:py-20">
      <HeroSection
       img ='/handPhone.jpg'
       text1 ='Play millions of'
       text2 = 'songs and podcast,'
       text3  = 'for free.'
       button='GET SPOTIFY FOR FREE'
      />
    </div>  
    </div>  
    
      </> 
  )
}
export default Hero
