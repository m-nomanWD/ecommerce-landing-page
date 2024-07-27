

export default function ServiceCard({ service }) {
 const { imgURL, label, subtext } = service
 return <div key={label} className="flex flex-col shadow-3xl py-12 px-6  rounded-xl ">
  <img src={imgURL} alt={label} width={40} height={40} className="bg-coral-red rounded-full p-2 mb-2" />
  <h4 className="text-2xl font-bold font-palanquin  ">{label}</h4>
  <p className="text-lg text-slate-gray break-words leading-normal mt-2">{subtext}</p>
 </div>
}
