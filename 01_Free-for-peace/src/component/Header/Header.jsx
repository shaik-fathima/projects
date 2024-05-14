import React from 'react'
import{Link, NavLink } from 'react-router-dom'

export default function Header() {
  return ( 
    <header className=' sticky z-50 top-0 shadow-slate-800 shadow-lg'>
      <nav className='bg-slate-300 border-gray-400 px-4 py-2.5'>
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen'>
    
{/* logo */}
       <Link to='/' className='flex  items-center '> 
      <img src="https://png.pngtree.com/png-clipart/20230411/original/pngtree-peace-dove-flying-cartoon-white-background-transparent-png-image_9047236.png" alt="logo" 
      className='mb-0 h-12 ' />
       <p className=' text-slate-500  font-metal text-4xl underline m-2' >Welfare</p>
       </Link>
{/* navbar */}
      <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2" >
            <ul className="flex flex-col  mb-0 mr-20 font-medium  text-2xl lg:flex-row lg:space-x-8 lg:mt-0  list-none  ">
                           
            <li>
                            <NavLink
                                to='/'
                                    className={({ isActive, isPending ,isTransitioning}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-900 no-underline   
                                    ${isActive ?" text-slate-900 font-metal" : "text-slate-600 "}
                               
                                    lg:hover:bg-slate-900 lg:border-0 lg:hover:text-white  lg:p-2 rounded-lg`}  >
                                  What
                                </NavLink>
                            </li>
                            
                            <li>
                            <NavLink
                                to='/Why'
                                    className={({ isActive, isPending }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-900 no-underline  
                                    ${isActive ?" text-slate-900 font-metal" : " text-slate-600 "}
                                
                                    lg:hover:bg-slate-900 lg:border-0 lg:hover:text-white  lg:p-2 rounded-lg`}  >
                                 Why
                                </NavLink>
                            </li>
                          
                            <li>
                            <NavLink
                                to='/When'
                                    className={({ isActive, isPending }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-900 no-underline    
                                    ${isActive ?" text-slate-900 font-metal" : "text-slate-600"}
                                    lg:hover:bg-slate-900 lg:border-0 lg:hover:text-white  lg:p-2 rounded-lg`}  >
                                  When
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to='/Contact'
                                    className={({ isActive, isPending }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-900 no-underline    
                                    ${isActive ?" text-slate-900 font-metal" : "text-slate-600"}
                                    lg:hover:bg-slate-900 lg:border-0 lg:hover:text-white  lg:p-2 rounded-lg`}  >
                                  Contact
                                </NavLink>
                            </li>

                            {/* 20/03/2024 */}
                            <li>
                            <NavLink
                                to='/User'
                                    className={({ isActive, isPending }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-900 no-underline    
                                    ${isActive ?" text-slate-900 font-metal" : "text-slate-600"}
                                    lg:hover:bg-slate-900 lg:border-0 lg:hover:text-white  lg:p-2 rounded-lg`}  >
                                User
                                </NavLink>
                            </li>


                            <li>
                            <NavLink
                                to='/GitHub'
                                    className={({ isActive, isPending }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-900 no-underline    
                                    ${isActive ?" text-slate-900 font-metal" : "text-slate-600"}
                                    lg:hover:bg-slate-900 lg:border-0 lg:hover:text-white  lg:p-2 rounded-lg`}  >
                                  GitHub
                                </NavLink>
                            </li>

                                             
                        </ul>
                    </div>

       </div>
      </nav>


    

    </header>
  )
}
