import React from 'react'
import Icon from '../Icons'

export default function MobileNavbar() {

    const color = '#858585'

    return (
        <nav className="bg-white w-full absolute bottom-0 h-16 px-6 lg:hidden justify-between flex items-center">
          <ul className='flex justify-between w-full'>
            <li>
              <a href="#" className="text-blue-500">
               <Icon name='dashboard' size={27} active={true} color={color} />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
               <Icon name='calendar' size={24} active={true} color={color} />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
               <Icon name='patients' size={25} active={true} color={color} />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
               <Icon name='finance' size={25} active={true} color={color} />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
               <Icon name='settings' size={25} active={true} color={color} />
              </a>
            </li>
            
          </ul>
        </nav>
    )
}
