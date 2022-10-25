import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props{
  icon?: string,
  text?: string,
  classButton?: string
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

const ButtonApp = ({icon, text, onClick,classButton } : Props) => {
  return (
    <button onClick={onClick} className={`bg-transparent opacity-50 border border-cyan-500 uppercase text-cyan-300 
                                          hover:opacity-70 active:opacity-90 rounded-lg px-2 py-[1px] m-auto ${classButton}`}>
      {icon ? <Image src={icon} width={25} height={25} layout="fixed"/>: text}
    </button>
  )
}

export default ButtonApp;
