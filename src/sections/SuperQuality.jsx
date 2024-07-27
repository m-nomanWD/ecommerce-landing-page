import Button from '../components/Button'
import { shoe8 } from '../assets/images'
export default function SuperQuality() {
 return (
  <section className="flex max-container justify-between items-center w-full gap-10 max-lg:flex-col">
   <div className='flex flex-1 justify-center flex-col' >
    <h2 className="max-lg:w-lg text-4xl font-bold font-palanquin ">
     We Provide You
     <span className='text-coral-red'> Super </span>
     <span className='text-coral-red'>Quality </span> Shoe
    </h2>
    <p className="max-lg:w-lg info-text mt-4 font-montserrat  ">
     Ensuring premium comfort and style, our meticulously crafted footwear
     is designed to elevate your experience, providing you with unmatched
     quality, innovation, and a touch of elegance.
    </p>
    <p className="max-lg:w-lg info-text mt-4  ">
     Our dedication to detail and excellence ensures your satisfaction
    </p>
    <div className='mt-8'>
     <Button label='View Details' />
    </div>
   </div>
   <div className='flex-1 justify-center items-center'>
    <img className='object-contain' src={shoe8} alt="shoe img" width={560} height={522} />
   </div>
  </section>
 )
}
