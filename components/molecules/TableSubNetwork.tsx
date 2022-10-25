import TableSubNetworkItem from "components/atoms/TableSubNetworkItem";
import Subnetting from "src/subnetting";

interface Props {
  subnetting: Subnetting,
  pagination: number,
}

const TableSubNetwork = ({ subnetting,pagination }: Props) => {
  return (
    <div className="border border-cyan-500 place-self-stretch flex flex-col px-2 py-4 rounded-lg">
      <TableSubNetworkItem ipNetwork={"ip de subred"}
        index={"Nro."}
        firstHost="Primer Host" lastHost="Ultimo host" broadcast="broadcast" class="text-yellow-400 font-bold text-md text-center" />
      {subnetting.getSubNetworks(pagination, 8).map((subNetwork, i) => {
        return <TableSubNetworkItem {...subNetwork} key={subNetwork.ipNetwork} index={i + (8 * (pagination -1)) + 1}/>
      })}
    </div>
  )
}

export default TableSubNetwork;
