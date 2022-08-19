class IPv4 {
  private _groups: number[] = []; //notacion decimal
  public static readonly REGEXP = /^([1-9]{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

  constructor(ipStr: string) {
		this.ipStr = ipStr;
  }

	public set ipStr(str : string){
		const groups = str.match(IPv4.REGEXP);
		if( !groups ) throw new Error("Invalid IP");
		const [_, ...captures] = groups;
		const groupsMatch = captures.map(capture => Number(capture));
		if(groupsMatch.every(group => (group >= 0 && group <= 255)))
			this._groups = groupsMatch;
		else throw new Error("Invalid IP");
	}

	public get ipStr(){
		return this._groups.join(".");
	}
}

export default IPv4;
