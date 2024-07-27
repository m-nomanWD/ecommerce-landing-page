import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constents";

export default function Footer() {
 return (
  <footer className="max-container " >
   <div className="flex max-lg:flex-col items-start justify-between gap-20">
    <div className="flex justify-start items-start flex-col">
     <img src={footerLogo} alt="footer logo" height={40} width={120} />
     <p className="sm:max-w-sm text-white-400 font-montserrat mt-6 leading-">Get shoes ready for the new term at your nearest Nike store. Find
      Your perfect Size In Store. Get Rewards</p>
     <div className="flex justify-center items-center gap-6">
      {
       socialMedia.map((icon) => {
        return <div key={icon.alt} className="w-12 h-12 flex items-center justify-center bg-white rounded-full mt-8">
         <img width={24} height={24} src={icon.src} alt={icon.alt} />
        </div>
       })
      }
     </div>
    </div>
    <div className="flex justify-between items-start flex-1 flex-wrap gap-20">
     {footerLinks.map((section) => {
      return <div className="flex flex-col " key={section.title}>
       <h4 className="text-2xl mb-4 font-montserrat font-medium text-white-400 leading-5 ">{section.title}</h4>
       <ul>
        {

         section.links.map((link, index) => {

          return <a key={index} href={link.link}>
           <li className="text-white-400 text-base font-montserrat mt-3 cursor-pointer hover:text-slate-gray">{link.name}</li>
          </a>
         })
        }
       </ul>
      </div>
     })}
    </div></div>

   <div className="flex flex-1 justify-between items-center max-sm:flex-col max-sm:justify-center  w-full  mt-12 ">
    <div className="flex items-center justify-start gap-2 font-montserrat text-white-400 text-base ">
     <img src={copyrightSign} alt="copy write sign "
      height={20} width={20}
      className="cursor-pointer" />
     <p>Copyright. All rights reserved.</p>
    </div>
    <p className="font-montserrat text-white-400 text-base">Terms & Conditions</p>
   </div>

  </footer>
 )
}
