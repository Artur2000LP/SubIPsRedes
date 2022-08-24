import expect from "expect";
import IPv4, { ClassIp, Mask } from "src/network/IPv4";

expect.extend({
	toBeValidIp(strIp){
		try {
			new IPv4(strIp);	
			return {
				message: () => `it is expected that ${strIp} was not a valid IP`,
				pass: true
			}
		} catch (error) {
			return {
				message : () => `${strIp} is expected to be a valid IP`,
				pass: false
			}
		}
	},

	toBeClassIp(received: string,expected: ClassIp){
		const ip = new IPv4(received);
		if(ip.classIp == expected)
			return {
				message: () => `it is expected that ${received} is not a ${expected}`,
				pass: true
			}
		return {
			message: () => `${received} is expected to be a ${expected}`,
			pass: false 
		}
	},

  toBeMask(received: string, expected: Mask){
    const ip = new IPv4(received);
    if(ip.mask == expected)
      return {
        message: () => `it is expected that ${received} is not a Mask ${expected}`,
        pass: true
      }
    else return {
        message: () => `${received} is expected to be a ${expected}`,
        pass: false
    }
  }

});
