import teamPhoto from '../../public/ourTeam.jpg'
import Image from 'next/image'

export default function WhoWeAre(){

    return <div className="px-24 bg-weAre pt-200 pb-[6.75rem] relative z-[1]">
        <h2 className='font-bold text-4r mb-20.1'>WHO <span className="text-bblue">WE</span> ARE</h2>
        <div className='flex flex-row zero:max-lg:flex-col justify-between'>
            <div>                

                <p className='text-20 max-w-screen-sm leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                </p>
                <br></br>
                <p className='text-20 max-w-screen-sm leading-6'>
                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
                <br></br>
                <p className='text-20 max-w-screen-sm leading-6'>
                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <br></br>
                <p className='text-20 max-w-screen-sm leading-6'>
                    <span className='font-medium'>Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.</span>
                </p>
                    
            </div>
            <div className='relative zero:max-lg:mt-[4rem]'>
                <div className='absolute lg:w-full h-full bg-bblue top-6 left-6 z-0'></div>
                <Image className='z-10 relative h-full'  src={teamPhoto} alt ='team breits photo'/>
            </div>
            
        </div>

        <div className='flex lg:flex-row zero:max-lg:flex-col pt-28'>
            <div className='flex items-center'>
                <div className='flex lg:mr-16 zero:max-lg:mx-auto'>
                    <div><span className='text-bblue font-bold text-6r'>3</span></div>
                    <div className='font-semibold text-20 ml-2.5 leading-[3.56rem]'>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
            <div className='lg:border-x-2 zero:max-lg:border-y-2 lg:mx-16 lg:px-16 zero:max-lg:my-16 zero:max-lg:py-16'>
                <div className='flex mb-12 zero:max-lg:justify-center'>
                    <div><span className='text-black font-bold text-4r'>+12</span></div>
                    <div className='ml-5 font-semibold text-20 leading-[2.5rem]'>
                        <p>lorem ipsum</p>
                    </div>
                </div>
                <div className='flex zero:max-lg:justify-center'>
                    <div><span className='text-black font-bold text-4r'>{'>'}53</span></div>
                    <div className='ml-5 font-semibold text-20 leading-[2.5rem]'>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='flex mb-12 zero:max-lg:justify-center'>
                    <div><span className='text-black font-bold text-4r'>{'>'}4</span></div>
                    <div className='ml-5 font-semibold text-20 leading-[2.5rem]'>
                        <p>lorem ipsum</p>
                    </div>
                </div>
                <div className='flex zero:max-lg:justify-center'>
                    <div><span className='text-black font-bold text-4r'>{'>'}8</span></div>
                    <div className='ml-5 font-semibold text-20 leading-[2.5rem]'>
                        <p>lorem ipsum</p>
                    </div>
                </div>           
            </div>
        </div>
        
      

    </div>

}