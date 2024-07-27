import { reviews } from "../constents";
import ReviewCard from "../components/ReviewCard";
export default function CustomerReviews() {
 return (
  <section className="max-container flex flex-col items-center ">
   <h2 className="text-4xl font-palanquin font-bold max-lg:w text-center">
    What Our
    <span className='text-coral-red'> Customers </span>
    Say?
   </h2>
   <p className="info-text text-center max-w-lg mt-4">
    Hear genuine stories from our satisfied customers about their
    exceptional experiences with us.
   </p>
   <div className="flex justify-evenly items-center max-lg:flex-col gap-14 mt-24 ">
    {
     reviews.map((review) => {

      return <ReviewCard key={review.customerName} review={review} />
     })
    }
   </div>
  </section>
 )
}
