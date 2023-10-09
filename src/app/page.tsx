// `app/page.tsx` is the UI for the `/` URL
import WeAreBreits from "./weAreBreits"
import WhoWeAre from "./whoWeAre"
import WeUseThisTechnologies from "./weUseThisTechnologies"
import ContactUs from "./contactUs"


export default function Page() {
  return <div className="pt-20 max-w-[1440px] mx-auto">
    <WeAreBreits></WeAreBreits>
    <WhoWeAre></WhoWeAre>
    <WeUseThisTechnologies></WeUseThisTechnologies>
    <ContactUs></ContactUs>
  </div>
}