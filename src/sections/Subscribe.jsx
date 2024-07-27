import Button from "../components/Button";

export default function Subscribe() {
 return (
  <section id="contact-us" className="max-container flex max-lg:flex-col gap-10 items-center justify-center ">
   <h3 className="text-4xl font-palanquin font-bold ">
    Sign Up for
    <span className='text-coral-red'> Updates </span>& Newsletter
   </h3>
   <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
    <input type="text" placeholder="subscribe@nike.com" className="input" />
    <div className="max-sm:w-full">
     <Button label="signup " fullWidth />
    </div>

   </div>
  </section>
 )
}
