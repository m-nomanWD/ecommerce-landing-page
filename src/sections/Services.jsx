import { services } from "../constents"
import ServiceCard from "../components/ServiceCard"
export default function Services() {
 return (
  <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 max-container">
   {
    services.map((service) => {

     return <ServiceCard key={service.label} service={service} />
    })
   }
  </section>
 )
}
