
import Image from "../../node_modules/next/image"

import Plan from '../../public/plan.png';
import List from '../../public/list.png';
import Talk from '../../public/talk.png';

export default function ContactUs(){
    return <div className="zero:max-lg:px-10 lg:px-24 bg-[#F5F8FF] py-[5.625rem]">
        <div className="flex flex-row flex-wrap">
            <div className="w-full mb-[3.125rem]">
                <h3 className="uppercase font-bold text-4r">Contact <span className="text-bblue">us</span></h3>
            </div>
            <div className="flex zero:max-lg:flex-col flex-row w-full">
                
                <div>
                    <form method="post" className="flex flex-col">
                        <div>
                            <label htmlFor="name" className="labels">Name</label>
                            <input type="text" name="Name" id="name" className="zero:max-lg:w-full inputs" required/>
                        </div>
                        <div>
                            <label htmlFor="email" className="labels">Email</label>
                            <input type="email" name="Email" id="email" className="zero:max-lg:w-full inputs" required/>
                        </div>
                        <div>
                            <label htmlFor="details" className="labels">Tell us about your project</label>
                            <textarea  name="Details_about_project" className="inputs min-h-[12.5rem] zero:max-lg:w-full" id="details" required></textarea>
                        </div>
                        
                        <div className="flex flex-row">
                        <input type="checkbox" id="news"/>
                            <label htmlFor="news" className="font-regular text-[0.9375rem] ml-[0.625rem]">I want to receive news and updates</label>
                        </div>
                        <div className="flex flex-row mb-[4.375rem]">
                            <input type="checkbox" id="accept_laws" required/>
                            <label htmlFor="accept_laws" className="accept_links font-regular text-[0.9375rem] ml-[0.625rem]">By checking this box, I agree to the <a>Privacy Policy</a> and <a>Terms of Use</a></label>
                        </div>
                        <input type="submit" value={'CONTACT US'} className="formButton zero:max-lg:w-full" disabled title="disabled"/>

                    </form>
                </div>
                <div className="zero:max-lg:mt-[5rem] zero:max-lg:text-center lg:ml-[9.375rem]">
                    <p className="font-semibold text-[1.25rem]">What will happen next?</p>

                    <ol className="list-decimal list-outside ml-[1rem] ContactUsOl">
                        <Image src={Plan} alt='planing' className="contactUsIcons zero:max-lg:mx-auto"></Image>
                        <li className="lg:max-w-[18.75rem]">Send us your request and we will respond within the next 24 hours.</li>
                        
                        <Image src={List} alt="your project information" className="contactUsIcons zero:max-lg:mx-auto"></Image>
                        <li className="lg:max-w-[25rem]">We can sign an MNDA so you can feel comfortable sharing information about your project.</li>

                        <Image src={Talk} alt="final talking about your project" className="contactUsIcons zero:max-lg:mx-auto"></Image>
                        <li className="lg:max-w-[28.5rem]">We will set up a meeting to discuss your needs in real-time and see how BREITS’s team can help your project.</li>
                    </ol>
                </div>
                

            </div>
        </div>
    </div>
}