import Image from "../../node_modules/next/image"

import Facebook from "../../public/facebook.png";
import Twetter from "../../public/twetter.png";
import Indeed from "../../public/indeed.png";

export default function Footer(){
    return <div className="bg-[#142A54] max-w-[1440px] mx-auto px-[6.25rem] pt-[5rem] pb-[2.5rem] h-[25rem] text-white">
        <div className="flex flex-row">
            <div>
                <p className="font-bold text-[2rem]">BRE<span className="text-bblue">IT</span>S</p>
                <p className="font-semibold text-[0.625rem]">Business Ready IT Solutions</p>
                
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <p className="font-semibold text-[1.25rem]">Our Mission</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Technologies</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-[1.25rem]">Information</p>
                <ul>
                    <li>About Us</li>
                    <li>Terms and Conditions</li>
                    <li>User Guide</li>
                    <li>Support Center</li>
                    <li>Press Info</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-[1.25rem]">Follow Us</p>

                <div className="flex flex-row">
                    <Image src={Facebook} alt="facebook icon"></Image>
                    <Image src={Twetter} alt="twetter icon"></Image>
                    <Image src={Indeed} alt ="indeed icon"></Image>
                </div>
            </div>
        </div>
        <p className="text-[0.9375rem] font-medium">© 2023 BREITS, Inc. All Rights Reserved.</p>
    </div>
}