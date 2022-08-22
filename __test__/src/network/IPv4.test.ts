import IPv4, { ClassIp } from "src/network/IPv4";

describe("Instances of IPv4", () => {
  it("they are valid ips", () => {
    const arrayValidIp = ["123.34.23.34", "255.255.255.255", "1.0.0.0","20.0.3.2."];
    arrayValidIp.forEach((ip) => expect(ip).toBeValidIp());
  });

  it("they are not valid ips", () => {
    const arrayInvalidIp = ["123.040.01.03","123.000.000.000", "255.255.255.256", "0.0.0.0"];
    arrayInvalidIp.forEach((invalidIp) => expect(invalidIp).not.toBeValidIp());
  });

  it("they are class A", () => {
		const arrayClassAIP = ["20.23.30.20","127.255.255.255","1.0.0.0"];	
		arrayClassAIP.forEach( ip => expect(ip).toBeClassIp(ClassIp.A));
	});

  it("they are class B", () => {
		const arrayClassAIP = ["128.0.0.0","145.0.23.0","191.255.255.255"];	
		arrayClassAIP.forEach( ip => expect(ip).toBeClassIp(ClassIp.B));
	});
});
