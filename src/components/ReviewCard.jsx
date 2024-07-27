import { star } from "../assets/icons"

export default function ReviewCard({ review }) {
 const { customerName, feedback, imgURL, rating } = review
 return (
  <div className="flex justify-center items-center flex-col">
   <div ><img src={imgURL} alt={customerName} width={120} height={120} className="rounded-full" /></div>
   <p className="info-text text-center mt-8 max-w-sm">{feedback}</p>
   <div className="flex items-center justify-center gap-2.5 mt-3"><img src={star} alt="star icon" width={24} height={24} /><span className="info-text ">( {rating} )</span></div>
   <h4 className="text-3xl leading-normal font-palanquin font-bold ">{customerName}</h4>
  </div>
 )
}
