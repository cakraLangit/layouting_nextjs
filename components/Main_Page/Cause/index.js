import Image from "next/image"
import Content from "./Content"
const data=[
  {
    img:'/circle_1.svg',
    text:'Play your favorites.',
    center:true,
    title:'Listen to the songs you love, and discover new music and podcasts.'
  },
  {
    img:'/circle_2.svg',
    text:'Playlists made easy.',
    center:true,
    title:"We'll help you make playlists. Or enjoy playlists made by music experts"
  },
  {
    img:'/circle_3.svg',
    text:'Make it yours.',
    center:true,
    title:"Tell us what you like, and we'll recommend music for you."
  },
  {
    img:'/circle_4.svg',
    text:'Save mobile data.',
    center:true,
    title:'To use less data when you play music, turn on Data Saver in Settings.'
  }
]
export default function index() {
  return (
    <div className="bg-white">  
    <div className="container mx-auto px-12 md:px-7 h-min ">
      <div className="flex justify-center items-center -mt-5">
      <Image
      src='/arrow.svg'
      width={53}
      height={53}
      alt="arrow-button"
      />
      </div>
      <h1 className="-mb-20 py-10 text-center text-black   lg:text-6xl md:text-7xl sm:text-5xl text-3xl font-black leading-tight">
        Why Spotify?
      </h1>
      <div className="grid  jusfity-center items-center lg:grid-rows-1 md:grid-rows-2 grid-rows-4  grid-flow-col  gap-x-4  py-20">
        {data.map(({img,text,title,center})=>(
          <Content
          key={text}
          img={img}
          text={text}
          title={title}
          center={center}
          />
        ) )}        
      </div>
    </div>
    </div>
  )
}
