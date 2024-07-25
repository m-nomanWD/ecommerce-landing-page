import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constents'
export default function Navbar() {
 return (
  <header className='padding-x py-8 absolute z-10 w-full'>
   <nav className='flex justify-between items-center max-container'>
    <a href='/'>
     <img width={130} height={29} src={headerLogo} alt="logo" />
    </a>
    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
     {
      navLinks.map((link) => {
       return <a key={link.label} className='leading-normal font-montserrat text-slate-gray text-lg' href={link.href}>{link.label}</a>
      })
     }
    </ul>
    <div className='lg:hidden'>
     <img width={25} height={25} src={hamburger} alt="hamburger" />
    </div>
   </nav>
  </header>
 )
}
