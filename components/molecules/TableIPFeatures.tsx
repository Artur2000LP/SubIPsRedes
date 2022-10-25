import TableFeatureContainer from "components/atoms/TableFeatureContainer";
import TableFeatureItem from "components/atoms/TableFeatureItem";
import IPv4 from "src/network/IPv4";

interface Props{
  ipObject: IPv4
}


const TableIPFeatures = ({ipObject} : Props) => {
  return (
    <TableFeatureContainer>
      <TableFeatureItem feature="Clase" value={ipObject.className}/> 
      <TableFeatureItem feature="Mascara" value={ipObject.mask}/> 
      <TableFeatureItem feature="Id de host" value={ipObject.idHost}/> 
      <TableFeatureItem feature="id de red" value={ipObject.idNetwork}/> 
      <TableFeatureItem feature="ip de host" value={ipObject.ipHost}/> 
      <TableFeatureItem feature="ip de red" value={ipObject.ipNetwork}/> 
      <TableFeatureItem feature="broadcast" value={ipObject.broadcast}/> 
      <TableFeatureItem feature="numero de redes" value={ipObject.numberOfNetworks.toString()}/> 
      <TableFeatureItem feature="numero de ips" value={ipObject.numberOfIps.toString()}/> 
      <TableFeatureItem feature="ips configurables" value={ipObject.numberOfConfigurbleIps.toString()}/> 
    </TableFeatureContainer>  
  )
}

export default TableIPFeatures;
