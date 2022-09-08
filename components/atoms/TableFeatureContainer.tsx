import { ReactNode } from "react";

interface Props{
  children: ReactNode
}

const TableFeatureContainer = ({children} : Props) => {
  return (
    <div className="flex flex-col bg-transparent border border-cyan-500 rounded-lg gap-2 p-2 w-full ">
      {children}
    </div>
  )
}

export default TableFeatureContainer;
