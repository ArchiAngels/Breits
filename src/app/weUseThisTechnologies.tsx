import TechnologiesUI from "./technologiesUI"

export default function weUseThisTechnologies(){
    return <div className="zero:max-lg:px-10 lg:px-24 py-200">
        <h3 className="font-bold lg:text-4r zero:max-tablet:text-[2rem] tablet:max-lg:text-[3rem]">WE USE THESE <span className="text-bblue">TECHNOLOGIES</span></h3>
        <div>
            <TechnologiesUI></TechnologiesUI>
        </div>
    </div>
}
