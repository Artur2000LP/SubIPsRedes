export enum ClassIp {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E"
}

export enum Mask{
  A = "255.0.0.0",
  B = "255.255.0.0",
  C = "255.255.255.0"
}


class IPv4 {
  private _groups: number[] = []; //notacion decimal
  public static readonly IPV4_REGEX =
    /^([1-9][0-9]{0,2})\.(0|[1-9][0-9]{0,2})\.(0|[1-9][0-9]{0,2})\.(0|[1-9][0-9]{0,2})$/;


  constructor(ipStr: string) {
    this.ipStr = ipStr;
    //establecer la mascara
  }

  public set ipStr(str: string) {
    const groups = str.match(IPv4.IPV4_REGEX);
    if (!groups) throw new Error(`"${str} " is an Invalid IP`);
    const [_, ...captures] = groups;
    const groupsMatch = captures.map((capture) => Number(capture));
    if (groupsMatch.every((group) => group >= 0 && group <= 255))
      this._groups = groupsMatch;
    else throw new Error(str.concat(" out of range"));
  }

  public get ipStr() {
    return this._groups.join(".");
  }

  public get classIp(): ClassIp {
    const groupOne = this._groups[0];
    if (groupOne <= 127) return ClassIp.A;
    if (groupOne <= 191) return ClassIp.B
    if (groupOne <= 223) return ClassIp.C;
    if (groupOne <= 239) return ClassIp.D;
    return ClassIp.E;
  }

  public get className(): string {
    return this.classIp;
  }

  public get mask(): string{
    if(this.classIp == ClassIp.A) return Mask.A; 
    if(this.classIp == ClassIp.B) return Mask.B; 
    if(this.classIp == ClassIp.C) return Mask.C;
    return "Desconocido";
  } 

}

export default IPv4;

