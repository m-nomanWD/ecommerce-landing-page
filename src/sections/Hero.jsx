import React from "react"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { arrowRight } from '../assets/icons'
import { statistics, shoes } from '../constents'
import { bigShoe1 } from '../assets/images'
import { useState } from "react"


export default function Hero() {
 const [bigImg, setBigImg] = React.useState(bigShoe1)
 return (
  <section id="home" className="w-full min-h-screen flex flex-col xl:flex-row justify-center max-container gap-10 ">
   <div className="xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
    <p className="text-xl text-coral-red font-montserrat">Our Summer Collection</p>
    <h1 className="text-8xl max-sm:text-[62px] font-palanquin max-sm:leading-[82px] mt-10 font-bold">
     <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-10"> The New Arrival</span>
     <br />
     <span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
    <p className="text-lg text-slate-gray leading-8 sm:max-w-sm mt-6 mb-14">Discover stylish Nike arrivals. Quality comfort and inovation for your active life</p>
    <Button label="Shop Now" imageUrl={arrowRight} />
    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
     {
      statistics.map((st, index) => {
       return <div key={index}>
        <p className="font-montserrat text-4xl font-bold">{st.value}</p>
        <p className="leading-8 font-montserrat text-slate-gray text-lg">{st.label}</p>
       </div>
      })
     }
    </div>
   </div>
   <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-center bg-hero bg-cover">
    <img width={610} height={500} src={bigImg} alt="shoes img" className="object-contain relative z-10" />
    <div className="absolute flex sm:gap-6 gap-4 -bottom-[5%]  max-sm:px-6">
     {
      shoes.map((shoe) => {
       return <ShoeCard imgUrl={shoe} bigShoeImg={bigImg} toggleFun={(img) => {
        setBigImg(img)

       }} />

      })
     }
    </div>
   </div>
  </section>
 )
}
