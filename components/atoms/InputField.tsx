import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props{
  type: HTMLInputTypeAttribute  
  value: string 
  class?: string
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
  placeholder?: string
}

const InputField  = (props : Props) => {
  return (
    <input 
      className={`py-[1.5px] text-center text-xl text-gray-300 font-poppins
                  rounded-lg  border-[1.5px] border-cyan-500 
                  bg-transparent outline outline-transparent px-2 
                 ${props.class}`}
      required
      {...props}
    />
  )
}

export default InputField;

