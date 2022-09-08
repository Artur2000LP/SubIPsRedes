import IPv4 from "src/network/IPv4";

export interface SubNetwork {
  ipNetwork: string,
  firstHost: string,
  lastHost: string,
  broadcast: string
}

class Subnetting {
  private readonly ip: IPv4;
  private readonly numberSubNetForUser: number;
  private readonly _numberOfSubNet: number;
  private readonly _numberOfHost: number;

  constructor(ip: string, numberSubNet: number) {
    this.ip = new IPv4(ip);
    this.numberSubNetForUser = numberSubNet;
    const bitsBorrowed = this.numberBitsBorrowed;
    if (bitsBorrowed >= (this.ip.bitsHost - 2)){
      throw new Error(`la ip ${ip}, no puede abastecer a ${numberSubNet} sub redes`);
    } 
    this._numberOfSubNet = Math.pow(2, bitsBorrowed)
    this._numberOfHost = Math.pow(2, this.ip.bitsHost - bitsBorrowed)
  }

  public get numberBitsBorrowed(): number {
    let numberBits = 2;
    while (this.numberSubNetForUser > Math.pow(2, numberBits) - 2) {
      ++numberBits;
    }
    return numberBits;
  }

  public get numberOfSubNet(){
    return this._numberOfSubNet;
  }

  public get numberOfHost(){
    return this._numberOfHost;
  }

  public get numberBitsHost(): number{
    return this.ip.bitsHost;
  }

  public get newMask(): string{
    const newMask = this.ip.mask.replaceAll("255","11111111")
    let arrayMask = newMask.replaceAll("0","00000000").split("")
    let count = 0;
    for(let i = 0 ; i < arrayMask.length ; ++i){
      if(arrayMask[i] === "1" || arrayMask[i] === ".") continue;
      if(count < this.numberBitsBorrowed){
        arrayMask[i] = "1"
        ++count;
      } else break;
    } 
    const group = arrayMask.join("").split(".");
    for(let i = 0 ; i < group.length ; ++i){
      group[i] = parseInt(group[i],2).toString()
    }

    return group.join(".");
  }

  public getSubNetworks(pagination: number, elements: number): SubNetwork[] {
    const array: SubNetwork[] = []
    const displayItems = pagination *  elements;
    if(displayItems > this._numberOfSubNet) elements -= displayItems - this._numberOfSubNet;
    let last = pagination * elements;
    const start = last - elements;
    if(start < 0 ) return array;
    for (let i = start; i < last; ++i) {
      const currentIp = fordwardIp(this.ip.ipNetwork, this._numberOfHost * i)
      array.push({
        ipNetwork: currentIp, firstHost: fordwardIp(currentIp),
        lastHost: fordwardIp(currentIp, this._numberOfHost - 2),
        broadcast: fordwardIp(currentIp, this._numberOfHost - 1)
      })
    }
    return array;
  }
}

const fordwardIp = (ip: string, fordward: number = 1) => {
  const split = ip.split(".")
  const group = [Number(split[0]), Number(split[1]), Number(split[2]), Number(split[3])];
  fordward += group[3];
  for (let i = 3; i >= 0; --i) {
    if (fordward >= 256) {
      group[i] = Math.floor(fordward % 256);
      fordward = Math.floor(fordward / 256) + group[i - 1];
    } else {
      group[i] = fordward;
      break;
    }
  }
  return group.join(".")
}

export default Subnetting;
