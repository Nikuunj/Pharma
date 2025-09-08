
interface ButtonProps {
    className?: string
    text: string
    size: 'sm' | 'md' | 'lg'
    variate: 'outline'  
}

function Button({ className, text, size, variate }: ButtonProps) {

    const style = {
        outline : 'border-2 border-teal-200',
    }

    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-5 py-1.5 text-normal',
        lg: 'px-7 py-2 text-xl'
    }
    return (
        <button className={`max-w-max rounded-md ${style[variate]} ${className} ${sizes[size]}`}>{text}</button>
    )
}

export default Button