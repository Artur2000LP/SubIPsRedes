export enum ClassIp {
  A = "A",
  B = "B",
  C = "C",
}
export enum Mask {
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
    return ClassIp.C;
  }

  public get className(): string {
    return this.classIp;
  }

  public get mask(): string {
    if (this.classIp == ClassIp.A) return Mask.A;
    if (this.classIp == ClassIp.B) return Mask.B;
    return Mask.C;
  }

  public get idNetwork(): string {
    if (this.classIp == ClassIp.A) return String(this._groups[0]);
    if (this.classIp == ClassIp.B) return this._groups.slice(0, 2).join(".");
    return this._groups.slice(0, 3).join(".");
  }

  public get idHost(): string {
    if (this.classIp == ClassIp.A) return this._groups.slice(1).join(".");
    if (this.classIp == ClassIp.B) return this._groups.slice(2).join(".");
    return String(this._groups[3]);
  }

  public get ipNetwork(): string {
    const idNetwork = this.idNetwork.split('.');
    return [...idNetwork, ...zeros(4 - idNetwork.length)].join(".");
  }

  public get ipHost(): string {
    return this._groups.join(".");
  }

  public get numberOfNetworks(): number {
    if (this.classIp === ClassIp.A) return 127;
    if (this.classIp === ClassIp.B) return 64 * 256;
    return 32 * 256 * 256;
  }

  public get numberOfIps(): number {
    if (this.classIp === ClassIp.A) return 256 * 256 * 256;
    if (this.classIp === ClassIp.B) return 256 * 256;
    return 256;
  }

  public get numberOfConfigurbleIps(): number {
    return this.numberOfIps - 2;
  }

  public get broadcast(): string {
    const idNetwork = this.idNetwork;
    if (this.classIp === ClassIp.A) return `${idNetwork}.255.255.255`;
    if (this.classIp === ClassIp.B) return `${idNetwork}.255.255`;
    return `${idNetwork}.255`;
  }

  public get bitsHost(): number {
    if (this.classIp === ClassIp.A) return 24;
    if (this.classIp === ClassIp.B) return 16;
    return 8;
  }

}

//helpers functions
function zeros(count: Number) {
  const arrayZeros = [];
  for (let i = 0; i < count; ++i) arrayZeros.push(0)
  return arrayZeros;
}

export default IPv4;

