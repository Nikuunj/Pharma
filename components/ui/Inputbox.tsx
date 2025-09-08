
interface InputboxProps {
   className?: string;
   size: 'sm' | 'md' | 'lg';
   text: string;
   type: string
}

function Inputbox({ className, size, text, type }: InputboxProps) {
   return (
      <input type={type} className={`${className} py-2 px-4 rounded-md outline-0 border-2 border-teal-200`} placeholder={text}/>
   )
}

export default Inputbox