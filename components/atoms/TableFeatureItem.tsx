interface Props{
  feature: string,
  value: string;
}

const TableFeatureItem = ({feature, value} : Props) => {
  return (
    <div className="grid grid-cols-2 bg-transparent font-poppips truncate capitalize">
      <div className="col-span-1 text-left text-violet-400 text-[1.1em] font-bold">{feature}</div> 
      <div className="col-span-1 text-right text-orange-400">{value}</div> 
    </div>
  )
}

export default TableFeatureItem;
