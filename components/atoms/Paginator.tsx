import { ChangeEventHandler, Dispatch, MouseEventHandler, SetStateAction, useCallback, useState } from "react";
import ButtonApp from "./ButtonApp";
import InputField from "./InputField";

interface Props{
  dispatch: Dispatch<SetStateAction<number>>
  pagination: number,
  max: number,
}

const Paginator = ({dispatch, pagination, max} : Props) => {
  const [nroSubNet,setNroSubNet] = useState(1);

  const onInputPagination : ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.value == "") dispatch(0)
    const page = Number(e.target.value);
    if(page >= max) return dispatch(max)
    if(page && page > 0){
      dispatch(page);
    } else dispatch(prevPage => prevPage)
  }

  const onForward : MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch((prevPagination) => {
      if(prevPagination === max) return max;
      return prevPagination + 1;
    })
  },[pagination])

  const onBackward : MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch((prevPagination) => {
      if(prevPagination === 1) return 1;
      return prevPagination - 1;
    })
  },[pagination])

  const onFirst : MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(1)
  },[pagination])

  const onLast : MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(max)
  },[pagination,max])

  const onInputNroSubNet : ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if(e.target.value === "") return setNroSubNet(0)
    const nro = Number(e.target.value);
    if(nro){
      const page = Math.ceil(nro / 8);
      if(page > max){
        setNroSubNet(max * 8)// 8 por el numero de elementos 
        return dispatch(max)
      }  
      setNroSubNet(nro)
      dispatch(page)
    }
  },[pagination,nroSubNet])

  return (
    <div className="flex justify-between md:items-baseline flex-col md:flex-row truncate items-center gap-2">
      <ButtonApp onClick={onFirst} text="Primero"/> 
      <ButtonApp onClick={onBackward} icon="/img/backward.svg" classButton="hidden md:block"/> 
      <div className="flex gap-4 items-baseline justify-cente">
        <p className="text-violet-400 font-bold truncate hidden md:block">Pagina:</p>
        <InputField type={"text"} value={pagination.toString()} onChange={onInputPagination}/>
        <p className="text-violet-400 font-bold truncate hidden md:block">Nro:</p>
        <InputField type={"text"} value={nroSubNet.toString()} onChange={onInputNroSubNet}/>
      </div>
      <ButtonApp onClick={onForward} icon="/img/forward.svg" classButton="hidden md:block"/> 
      <ButtonApp onClick={onLast} text="Ultimo" /> 
    </div>
  )
}

export default Paginator;
