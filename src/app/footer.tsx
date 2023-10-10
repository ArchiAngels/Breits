import Image from "../../node_modules/next/image"

import Facebook from "../../public/facebook.png";
import Twetter from "../../public/twetter.png";
import Indeed from "../../public/indeed.png";

export default function Footer(){
    return <div className="bg-[#142A54] max-w-[1440px] mx-auto px-[6.25rem] pt-[5rem] pb-[2.5rem] min-h-[25rem] text-white">
        <div className="flex flex-row zero:max-lg:flex-col zero:max-lg:text-center max-w-[1010px] justify-between">
            <div>
                <p className="font-bold text-[2rem] leading-[2rem]">BRE<span className="text-bblue">IT</span>S</p>
                <p className="font-semibold text-[0.625rem]">Business Ready IT Solutions</p>
                
                <p className="font-medium text-[0.9375rem] mt-[1.75rem] zero:max-lg:max-w-none max-w-[15rem]">Morem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <p className="font-semibold text-[1.25rem] zero:max-lg:mt-[1rem]">Our Mission</p>
                <ul className="FooterLiis">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Technologies</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-[1.25rem] zero:max-lg:mt-[1rem]">Information</p>
                <ul className="FooterLiis">
                    <li>About Us</li>
                    <li>Terms and Conditions</li>
                    <li>User Guide</li>
                    <li>Support Center</li>
                    <li>Press Info</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-[1.25rem] zero:max-lg:mt-[1rem]">Follow Us</p>

                <div className="flex flex-row mt-[0.9375rem] zero:max-lg:mx-auto max-w-[6rem] justify-between">
                    <Image src={Facebook} alt="facebook icon" className="FooterIcons"></Image>
                    <Image src={Twetter} alt="twetter icon" className="FooterIcons"></Image>
                    <Image src={Indeed} alt ="indeed icon" className="FooterIcons"></Image>
                </div>
            </div>
        </div>
        <p className="text-[0.9375rem] font-medium mt-[4.375rem]">© 2023 BREITS, Inc. All Rights Reserved.</p>
    </div>
}