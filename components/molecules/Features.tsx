import IPv4 from "src/network/IPv4";
import Subnetting from "src/subnetting";
import TableIPFeatures from "./TableIPFeatures";
import TableSubNetFeatures from "./TableSubNetFeatures";

interface Props{
  ipObject : IPv4 | undefined,
  subnetting: Subnetting | undefined
}

const Features = (props : Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-transparent">
      {props.ipObject ? <TableIPFeatures ipObject={props.ipObject} />: ""}
      {props.subnetting ? <TableSubNetFeatures subnetting={props.subnetting} /> : ""}
    </div>
  )
}

export default Features;
