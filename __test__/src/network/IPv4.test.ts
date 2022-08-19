import { exec } from "child_process";
import IPv4 from "src/network/IPv4"

describe("IPv4 class" , () => {
	it("build with correct ip", () => {
		const ipStr = "123.34.23.34";
		const ip = new IPv4(ipStr);
		expect(ipStr).toBe(ip.ipStr);
	})

	it("build with incorrect ip", () => {
		const arrayOfIpInvalid = ["123.34.23.343","a.b.23.d","111.2.2","_.34.23.34"];
		arrayOfIpInvalid.forEach(ipInvalid => {
			expect(() => new IPv4(ipInvalid)).toThrow();
		});
	})

});