import InputField from "components/atoms/InputField"
import Paginator from "components/atoms/Paginator"
import Features from "components/molecules/Features"
import InputBar from "components/molecules/InputBar"
import TableSubNetwork from "components/molecules/TableSubNetwork"
import { ChangeEventHandler, useEffect, useMemo, useState } from "react"
import IPv4 from "src/network/IPv4"
import Subnetting from "src/subnetting"

const AppIpInfo = () => { 
  const [ip,setIp] = useState("")
  const [numberSubNet,setNumberSubNet] = useState<number>();
  const [pagination,setPagination] = useState(1);

  const onInputIP : ChangeEventHandler<HTMLInputElement> = (e) => {
    setIp(e.target.value) 
  }
 
  const onInputSubNet : ChangeEventHandler<HTMLInputElement> = (e) => {
    const subNetInput = Number(e.target.value);
    if(subNetInput) setNumberSubNet(subNetInput) 
    else if(e.target.value === "") setNumberSubNet(0)
  }


  const ipObject = useMemo(() => {
    try{
      return new IPv4(ip)
    }catch(e : any){
      return undefined; 
    }
  },[ip])

  const subnetting = useMemo(() => {
    try{
      if(!numberSubNet) return undefined
      return new Subnetting(ip,numberSubNet);
    }catch{
      setPagination(1)
      return undefined;
    }
  },[ip,numberSubNet,pagination])

  useEffect(() => {
    setPagination(1)
  },[ip,numberSubNet])

  return (
  <div className="flex flex-col gap-4 p-4 md:p-2">
      <InputBar valueIp={ip} valueSubNet={numberSubNet ? numberSubNet.toString(): ""} onInputIp={onInputIP} onInputSubNet={onInputSubNet}/>
      <Features ipObject={ipObject} subnetting={subnetting} />
      {subnetting ? <Paginator dispatch={setPagination} pagination={pagination} max={Math.floor(subnetting.numberOfSubNet / 8)}/>:""}
      {subnetting ? <TableSubNetwork pagination={pagination}subnetting={subnetting}/> : ""}
    </div>
  )
}

export default AppIpInfo
