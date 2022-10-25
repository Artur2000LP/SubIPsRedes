
interface Props{
  class?: string
  ipNetwork: string,
  broadcast: string,
  firstHost: string,
  lastHost: string,
  index: number | string
}

const TableSubNetworkItem =  (props : Props) => {
  return (
    <div className={`grid grid-cols-9 gap-2 text-gray-300 text-center ${props.class}`}>
      <div className="col-span-1 uppercase border-r border-cyan-500 truncate text-center">{props.index}</div>
      <div className="col-span-2 uppercase border-r border-cyan-500 truncate">{props.ipNetwork}</div>
      <div className="col-span-2 uppercase border-r border-cyan-500 truncate">{props.firstHost}</div>
      <div className="col-span-2 uppercase border-r border-cyan-500 truncate">{props.lastHost}</div>
      <div className="col-span-2 uppercase truncate">{props.broadcast}</div>
    </div>
  )
}

export default TableSubNetworkItem;
