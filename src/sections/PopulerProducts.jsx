import { products } from "../constents"
import PopulerProductCard from "../components/PopulerProductCard"
export default function PopulerProducts() {
 return (
  <section
   id='products' className="max-container max-sm:mt-12">
   <div className="flex flex-col justify-start gap-2">
    <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> products</h2>
    <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
   </div>
   <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-12">
    {
     products.map((product) => {
      return <PopulerProductCard key={product.name} {...product} />
     })
    }
   </div>
  </section>
 )
}
