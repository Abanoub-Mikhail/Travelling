'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {

    const [isVisible , setisVisible] = useState(false)


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
            <Image src='/hilink-logo.svg' alt="logo" width={74} height={29}/>
        </Link>
        <ul className={` h-full gap-12 lg:flex ${isVisible?'appear' : ''} `}>
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className=" regular-16 text-gray-50 transition-all flexCenter cursor-pointer pb-1.5 hover:font-bold">
                    {link.label}
                </Link>
            ))}
            </ul>
            <div className=" lg:flexCenter hidden">
                <Button  
                    type='button'
                    title ='Login'
                    icon = '/user.svg'
                    variant = 'btn_dark_green'
                />
            </div>

            <Image src='menu.svg' alt="menu" width={32} height={32}
            className=" inline-block cursor-pointer lg:hidden"
            onClick={()=>{!isVisible?setisVisible(true) :setisVisible(false)}}
            />
        
    </nav>
  )
}

export default Navbar
