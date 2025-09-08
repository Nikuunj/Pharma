import Button from "../ui/Button"
import Inputbox from "../ui/Inputbox"

function Signin() {
   return (
      <div className={"bg-cyan-50 px-5 py-7 rounded-xl drop-shadow-[15px_15px_35px] drop-shadow-cyan-200/75 flex flex-col items-center space-y-5"}>
         <Inputbox size="sm" text="Email" type="text" />
         <Button text="Button" variate="outline" size="md" />
      </div>
   )
}

export default Signin