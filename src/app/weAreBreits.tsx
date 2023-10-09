import Image from 'next/image'
import Picture from '../../public/weAreBreits.jpg'

export default function WhoWeAre(){
    return <div className='flex flex-row pl-24'>
        
        <div className='grow'>
            <h1 className='font-bold text-100 mt-238 mb-10'>WE ARE BRE<span className='text-bblue'>IT</span>S</h1>
            <p className='text-4xl font-medium mb-216'>Your reliable partner in <br/>
                <span className='text-bblue '>development, adaptation, <br/>integration </span>
                of business solutions
            </p>
            
           <div className='cursor-pointer p-20 -ml-20 -mt-40 hover:translate-y-6 duration-300 w-100%'>
            <div className='h-100 w-1 border-2 border-black'>
                    <div className='w-5 h-5
                        border-b-4 border-r-4 border-black rotate-45 -translate-x-10.1 translate-y-80 '>
                            
                    </div>
                </div>
           </div>
        </div>
        <div className='mr-0 -mt-28'>
            <Image
                src = {Picture}
                alt="image of points"

            />
        </div>
    </div>
}