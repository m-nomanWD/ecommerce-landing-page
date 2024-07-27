import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
export default function SpecialOffer() {
 return (
  <section className="flex max-container justify-wrap items-center max-lg:flex-col-reverse gap-10">
   <div className="flex-1 ">
    <img width={773} height={683} src={offer} alt="offer" className="object-contain w-full " />
   </div>

   <div className='flex flex-1 justify-center flex-col' >
    <h2 className="max-lg:w-lg text-4xl font-bold font-palanquin ">

     <span className='text-coral-red'> Special </span>  Offer
    </h2>
    <p className='mt-4 info-text'>
     Embark on a shopping journey that redefines your experience with
     unbeatable deals. From premier selections to incredible savings, we
     offer unparalleled value that sets us apart.
    </p>
    <p className='mt-6 info-text border-slate-gray'>
     Navigate a realm of possibilities designed to fulfill your unique
     desires, surpassing the loftiest expectations. Your journey with us is
     nothing short of exceptional.
    </p>

    <div className='mt-8 flex gap-4'>
     <Button label='Shop now' imageUrl={arrowRight} />
     <Button label='Learn more' bgColor="bg-white" borderColor='border-slate-gray'
      textColor="text-state-gray" />
    </div>
   </div>
  </section>
 )
}
