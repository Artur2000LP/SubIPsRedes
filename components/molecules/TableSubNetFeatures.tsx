import TableFeatureContainer from "components/atoms/TableFeatureContainer";
import TableFeatureItem from "components/atoms/TableFeatureItem";
import Subnetting from "src/subnetting";

interface Props{
  subnetting : Subnetting
}

const TableSubNetFeatures = ({subnetting} : Props) => {
  return (
    <TableFeatureContainer>
      <TableFeatureItem feature="nueva mascara" value={subnetting.newMask} />
      <TableFeatureItem feature="Nro. de subredes" value={subnetting.numberOfSubNet.toString()} />
      <TableFeatureItem feature="subredes configurables" value={(subnetting.numberOfSubNet - 2).toString()} />
      <TableFeatureItem feature="numero de host" value={subnetting.numberOfHost.toString()} />
      <TableFeatureItem feature="host configurables" value={(subnetting.numberOfHost - 2).toString()} />
      <TableFeatureItem feature="Bits prestados" value={subnetting.numberBitsBorrowed.toString()} />
      <TableFeatureItem feature="Bits host restantes" 
                        value={(subnetting.numberBitsHost - subnetting.numberBitsBorrowed).toString()} />
      <TableFeatureItem feature="Bits de red asignados" 
                        value={(32 - subnetting.numberBitsHost + subnetting.numberBitsBorrowed).toString()} />
    </TableFeatureContainer>
  )
}

export default TableSubNetFeatures;
