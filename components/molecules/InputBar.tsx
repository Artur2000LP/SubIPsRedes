import InputField from "components/atoms/InputField";
import { ChangeEventHandler } from "react";
interface Props{
  valueIp: string,
  valueSubNet: string,
  onInputIp?: ChangeEventHandler<HTMLInputElement>
  onInputSubNet?: ChangeEventHandler<HTMLInputElement>
}

const InputBar = (props : Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-8">
      <InputField value={props.valueIp} type={"text"} onChange={props.onInputIp} placeholder="ingresa el ip"/>
      <InputField value={props.valueSubNet} type={"text"} onChange={props.onInputSubNet} placeholder="numero de subredes"/>
    </div>
  ) 
}

export default InputBar;
