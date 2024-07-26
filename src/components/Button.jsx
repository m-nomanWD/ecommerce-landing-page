export default function Button({ label, imageUrl }) {
 return (
  <button className="flex justify-center items-center px-7 py-3 bg-coral-red leading-none rounded-full text-white font-montserrat text-lg gap-2 border border-coral-red">{label}
   {imageUrl && <img height={20} width={20} className="ml-2 rounded-full" src={imageUrl} alt="arrow left icon" />}
  </button>

 )
}
