import React, { useState } from 'react'

const NavItems = ()=>{
  return(
    <ul className='nav-ul'>
      {["Home", 'About', 'Projects', 'Contact'].map((item, index)=>(
        <li key={index} className='nav-li'>
          <a href='/' className='nav-li_a' onClick={()=>{}}>{item}</a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto px-5 sm:px-10'>
          <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
          Rohan
          </a>
          <button onClick={()=>setIsOpen(!isOpen)} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
            <img src={isOpen?"assets/menu.svg":"assets/close.svg"} className='w-6 h-6'/>
          </button>
          <nav className='sm:flex hidden'>
            <NavItems/>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems/>
        </nav>
      </div>
    </header>
  )
}

export default Navbar