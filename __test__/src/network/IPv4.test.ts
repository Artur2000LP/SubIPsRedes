import IPv4, { ClassIp, Mask } from "src/network/IPv4";

describe("Class IPv4", () => {

  describe("Instances of IPv4", () => {
    it("they are valid ips", () => {
      const arrayValidIp = ["123.34.23.34", "255.255.255.255", "1.0.0.0", "20.0.3.2"];
      arrayValidIp.forEach((ip) => expect(ip).toBeValidIp());
    });

    it("they are not valid ips", () => {
      const arrayInvalidIp = ["123.040.01.03", "123.000.000.000", "255.255.255.256", "0.0.0.0"];
      arrayInvalidIp.forEach((invalidIp) => expect(invalidIp).not.toBeValidIp());
    })
  })

  describe("Given the ips verify that they are Class", () => {
    it("A", () => {
      const arrayClassAIP = ["20.23.30.20", "127.255.255.255", "1.0.0.0"];
      arrayClassAIP.forEach(ip => expect(ip).toBeClassIp(ClassIp.A));
    });

    it("B", () => {
      const arrayClassBIP = ["128.0.0.0", "145.0.23.0", "191.255.255.255"];
      arrayClassBIP.forEach(ip => expect(ip).toBeClassIp(ClassIp.B));
    });

    it("C", () => {
      const arrayClassCIP = ["192.23.34.50", "223.255.255.255", "192.0.0.0", "200.255.255.255"];
      arrayClassCIP.forEach(ip => expect(ip).toBeClassIp(ClassIp.C))
    })
  })

  describe("Given the ips verify that they have the Mask", () => {
    it("A", () => {
      const arrayIp = ["24.104.34.254", "89.20.30.21", "127.255.255.255", "12.34.10.0"];
      arrayIp.forEach(ip => expect(ip).toBeMask(Mask.A))
    })

    it("B", () => {
      const arrayIp = ["129.104.34.254", "189.20.30.21", "128.0.0.0", "170.34.10.0"];
      arrayIp.forEach(ip => expect(ip).toBeMask(Mask.B))
    })

    it("C", () => {
      const arrayIp = ["222.104.34.254", "198.20.30.21", "200.255.255.255", "223.255.255.255"];
      arrayIp.forEach(ip => expect(ip).toBeMask(Mask.C))
    })
  })

});
