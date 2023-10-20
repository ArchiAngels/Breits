"use client"
import Link from 'next/link'
import { usePathname } from '../../node_modules/next/navigation';



export default function Header() {
    let linkToForm = "/contact";
    let linkToMainPage = "/";
    let toForm = "Contact Us";
    let toMainPage = "Home"
    const pathname = usePathname()
    console.log(pathname)
    return  <div className="zero:max-lg:px-10 lg:px-24 py-6 w-screen bg-white h-20 fixed drop-shadow z-50 max-w-[1440px] lg:left-[50%] lg:-translate-x-[50%]">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="font-bold text-2r">BRE<span className="text-bblue">IT</span>S</p>
                    <p className="font-semibold text-10">Business Ready IT Solutions</p>
                </div>
                <div className="flex flex-row h-9">

                    <div className="flex flex-row items-center mr-8">
                        <div className="flex flex-row text-black75 items-center 
                                cursor-pointer" >
                            <p className="uppercase font-semibold text-xs ">eng</p>
                            <div className="
                                w-2.5
                                h-2.5
                                border-b border-r border-black
                                rotate-45 -translate-y-0.75
                                ml-2.5
                            "></div>
                        </div>
                        
                    </div>
                    <div className="w-40 h-9 bg-bblue text-white rounded text-center hover:cursor-pointer active:translate-y-3 ease-out duration-150">
                        <Link href={pathname === '/'? linkToForm: linkToMainPage}>
                            <p className="leading-9 uppercase text-xs font-semibold">{pathname === '/'? toForm: toMainPage}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    
  }