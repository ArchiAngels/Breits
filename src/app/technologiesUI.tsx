"use client"
import { useState } from "react"
import Image from 'next/image'
import ArrowRight from '../../public/arrowRight.png'
import ReactImage from '../../public/react.png'
import VueImage from '../../public/vue.png'
import JSImage from '../../public/js.png'
import { StaticImageData } from "../../node_modules/next/image"

export default function TechnologiesUI(){
    let [CurrentTech,setCurrentTech] = useState(0);
    let SelectedCategory = arrayTechnologie[CurrentTech].f;
    return <div className="flex flex-col zero:max-lg:flex-row">
        <div className="flex flex-row zero:max-lg:flex-col pt-[1.875rem] justify-between max-w-[1000px] mb-[3.125rem]">
            {arrayTechnologie.map(((v,idx)=>{
                return <ButtonUi setState={setCurrentTech} text={v.name.toUpperCase()} idx={idx} key={idx} selected={idx === CurrentTech}></ButtonUi>
            }))}
        </div>
        <div className="zero:max-lg:overflow-y-scroll">
            {SelectedCategory !== undefined? <SelectedCategory></SelectedCategory> : <Frontend></Frontend>}
        </div>
    </div>
}

function Cloud(){
    return <h4>Cloud</h4>
}
function Frontend(){
    return <div className="flex zero:max-lg:overflow-x-scroll">
        <CardUi 
            imgSource={ReactImage}
            text="React is a free and open-source front-end JavaScript library for building user interfaces based on components."
            linkToMore="#"
        ></CardUi>

        <CardUi 
            imgSource={VueImage}
            text="Vue.js is an open-source model–view–viewmodel frontend JavaScript library for building user interfaces and single-page applications."
            linkToMore="#"
        ></CardUi>

        <CardUi 
            imgSource={JSImage}
            text="JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
            linkToMore="#"
        ></CardUi>
    </div>
}
function Backend(){
    return <h4>Backend</h4>
}
function Mobile(){
    return <h4>Mobile</h4>
}
function Databases(){
    return <h4>Databases</h4>
}

let arrayTechnologie = [
    {name:"Frontend",f:Frontend},
    {name:"Backend",f:Backend},
    {name:"Mobile",f:Mobile},
    {name:"Databases",f:Databases},
    {name:"Cloud",f:Cloud},
];

function ButtonUi(
    {setState,text,idx,selected}:{
        setState:Function,
        text:String,
        idx:Number,
        selected:Boolean
    }){
        let styling = {
            active:"bg-bblue text-white font-semibold text-[0.75rem] leading-[2.25rem] cursor-pointer rounded-[3.125rem] w-[10rem] h-[2.25rem] text-center",
            inactive:"bg-white text-bblue font-semibold text-[0.75rem] leading-[2.25rem] cursor-pointer rounded-[3.125rem] w-[10rem] h-[2.25rem] text-center"
        }
    return <>
        <div className={selected? styling.active : styling.inactive} onClick={()=>{setState(idx)}}>
            <p>{text}</p>
        </div>
    </>
}
function CardUi(
    {imgSource,text,linkToMore}:{
        imgSource:StaticImageData,
        text:string,
        linkToMore:string
    }
){
    return <>
        <div className="w-[16.875rem] h-[23.75rem] p-[1rem] mr-[1.25rem]
        shadow-[0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.0625)]
        shrink-0
        ">
            <div>
                <Image className='mx-auto h-[12.5rem] object-none' src={imgSource} alt={text}></Image>
                <div className="flex flex-col justify-between h-[9.25rem]">
                    <p className="font-medium text-[0.9375rem]">{text}</p>
                    <a className="font-semibold text-[0.75rem] block w-full text-right " href={linkToMore !== undefined ? linkToMore : "#"} >
                        SEE MORE <Image className="inline" src={ArrowRight} alt='arrow to right'></Image>
                    </a>
                </div>
            </div>
        </div>
    </>
}