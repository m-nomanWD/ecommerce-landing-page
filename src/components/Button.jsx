export default function Button({ label, imageUrl, bgColor, textColor, borderColor, fullWidth }) {
 return (
  <button className={`flex justify-center items-center px-7 py-3 font-montserrat text-lg gap-2 border leading-none rounded-full 
   ${bgColor ? `${bgColor} ${borderColor} ${textColor}` : "bg-coral-red  text-white border-coral-red "}
  ${fullWidth && 'w-full'}
   `}>{label}
   {imageUrl && <img height={20} width={20} className="ml-2 rounded-full" src={imageUrl} alt="arrow left icon" />}
  </button>

 )
}
