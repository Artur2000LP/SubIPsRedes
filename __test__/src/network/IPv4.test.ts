import { ClassIp, Mask } from "src/network/IPv4";

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

  describe("Given an array of ips", () => {
    it("Your network id is expected to be 127", () => {
      const arrayIp = ["127.104.34.254", "127.20.30.21", "127.255.255.255", "127.255.255.255"];
      arrayIp.forEach((ip) => expect(ip).toBeIdNetwork("127"))
    })
    it("Your network id is expected to be 191.255", () => {
      const arrayIp = ["191.255.34.254", "191.255.30.21", "191.255.0.0", "191.255.10.0"];
      arrayIp.forEach((ip) => expect(ip).toBeIdNetwork("191.255"))
    })
    it("your network id is expected to be 223.255.255", () => {
      const arrayIp = ["223.255.255.254", "223.255.255.21", "233.255.255.255", "223.255.255.0"];
      arrayIp.forEach(ip => expect(ip).toBeMask(Mask.C))
    })
  })

  describe("Given an array of ips", () => {
    it("Your host id is expected to be 104.34.254", () => {
      const arrayIp = ["127.104.34.254", "27.104.34.254", "1.104.34.254", "15.104.34.254"];
      arrayIp.forEach((ip) => expect(ip).toBeIdHost("104.34.254"))
    })

    it("Your network id is expected to be 23.12", () => {
      const arrayIp = ["191.255.23.12", "190.0.23.12", "128.0.23.12", "145.145.23.12"];
      arrayIp.forEach((ip) => expect(ip).toBeIdHost("23.12"))
    })

    it("your network id is expected to be 0", () => {
      const arrayIp = ["223.123.255.0", "192.187.255.0", "233.0.0.0", "192.255.255.0"];
      arrayIp.forEach(ip => expect(ip).toBeIdHost("0"))
    })
  })

  describe("Given an array of ips verify", () => {
    it("Your network ip is expected to be 127.0.0.0", () => {
      const arrayIp = ["127.123.255.0", "127.187.255.0", "127.0.0.0", "127.255.255.0"];
      arrayIp.forEach(ip => expect(ip).toBeIpNetwork("127.0.0.0"))
    })

    it("Your network ip is expected to be 140.23.0.0", () => {
      const arrayIp = ["140.23.34.23", "140.23.0.0", "140.23.0.255", "140.23.255.0"];
      arrayIp.forEach(ip => expect(ip).toBeIpNetwork("140.23.0.0"))
    })

    it("Your network ip is expected to be 192.255.255.0", () => {
      const arrayIp = ["192.255.255.0", "192.255.255.23", "192.255.255.255", "192.255.255.203"];
      arrayIp.forEach(ip => expect(ip).toBeIpNetwork("192.255.255.0"))
    })
  })
  describe("Given the ips verify ip host", () => {
    it("for 234.23.12.3 to be 234.23.12.3", () => {
      const ip = "234.23.12.3";
      expect(ip).toBeIpHost("234.23.12.3");
    })
    it("for 145.34.23.12 to be 234.23.12.3", () => {
      const ip = "145.34.23.12";
      expect(ip).toBeIpHost("145.34.23.12");
    })
    it("for 1.23.12.3 to be 1.23.12.3", () => {
      const ip = "1.23.12.3";
      expect(ip).toBeIpHost("1.23.12.3");
    })
  })

});
