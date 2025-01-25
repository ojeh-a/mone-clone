import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='header px-0 py-5 bg-transparent fixed top-0 left-0 w-full'>
        <div className='header-wrapper flex px-5 py-0 justify-between items-center'>
            <div>
                <Link href=""><h2 className='font-bold text-2xl'>Genie</h2></Link>
            </div>
            <nav className='flex gap-5'>
                <button className="py-2 px-5 rounded-full bg-gray-800 ...">LET'S TALK</button>
                <button className="py-2 px-5 rounded-full bg-white text-black ...">MENU</button>
            </nav>
        </div>    
    </header>
//     {/* <div className="header">
//   <div className="container-fluid">
//     <div className="header-wrapper flex justify-between items-center py-4">
//       {/* Header Logo */}
//       <div className="header-logo">
//         <h2 className="text-2xl font-bold">Genie</h2>
//       </div>
//       {/* Header Nav */}
//       <div className="header-nav flex items-center">
//         <a className="button button-sm button-dot me-2 lg:me-3" href="#contact">
//           <span data-text="Let's Talk">Let's Talk</span>
//         </a>
//         {/* Nav Menu Toggle */}
//         <button id="nav-toggle" className="button button-sm button-dot button-white ml-2">
//           <span data-text="Menu">Menu</span>
//         </button>
//         {/* Nav Menu Box */}
//         <div className="nav-box hidden lg:flex ml-4">
//           <ul className="nav flex space-x-4">
//             <li className="nav-item">
//               <a className="nav-link active flex items-center" href="#about">
//                 <i className="bi bi-arrow-right mr-2"></i>About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link flex items-center" href="#services">
//                 <i className="bi bi-arrow-right mr-2"></i>Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link flex items-center" href="#portfolio">
//                 <i className="bi bi-arrow-right mr-2"></i>Portfolio
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link flex items-center" href="#awards">
//                 <i className="bi bi-arrow-right mr-2"></i>Awards
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link flex items-center" href="#testimonial">
//                 <i className="bi bi-arrow-right mr-2"></i>Testimonial
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link flex items-center" href="#blog">
//                 <i className="bi bi-arrow-right mr-2"></i>Blog
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link flex items-center" href="#contact">
//                 <i className="bi bi-arrow-right mr-2"></i>Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* end header-nav */}
//     </div>
//     {/* end header-wrapper */}
//   </div>
//   {/* end container */}
// </div> */}
  );
}
