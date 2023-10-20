// `app/page.tsx` is the UI for the `/` URL
import WeAreBreits from "./weAreBreits"
import WhoWeAre from "./whoWeAre"
import WeUseThisTechnologies from "./weUseThisTechnologies"


export default function Page() {
  return <div>
    <WeAreBreits></WeAreBreits>
    <WhoWeAre></WhoWeAre>
    <WeUseThisTechnologies></WeUseThisTechnologies>
  </div>
}