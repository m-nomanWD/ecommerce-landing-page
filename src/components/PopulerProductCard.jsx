import { star } from "../assets/icons"
export default function PopulerProductCard({ name, imgURL, price }) {
 return (
  <div className="flex flex-1  flex-col max-sm:w-full max-sm:flex-row max-sm:gap-6  ">
   <div className="relative">
    <img src={imgURL} alt={name} className="max-sm:w-[140px] max-sm:h-[160px] w-[280px] h-[280px] " />
    {/* <span className="absolute right-0 -bottom-0 ">in Cart</span> */}
   </div>
   <div><div className="flex mt-8 justify-start gap-2.5 items-center  ">
    <img src={star} alt="rating-icon" />
    <p className="text-xl leading-normal text-slate-gray font-montserrat">( 4.5 )</p>
   </div>
    <h3 className="text-2xl max-sm:text-xl  font-semibold leading-normal mt-2 font-palanquin">{name}</h3>
    <p className="text-2xl font-montserrat text-coral-red  mt-2">{price}</p></div>
  </div>
 )
}
