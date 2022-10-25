import expect from "expect";
import IPv4, { ClassIp, Mask } from "src/network/IPv4";

expect.extend({
  toBeValidIp(strIp) {
    try {
      new IPv4(strIp);
      return {
        message: () => `it is expected that ${strIp} was not a valid IP`,
        pass: true
      }
    } catch (error) {
      return {
        message: () => `${strIp} is expected to be a valid IP`,
        pass: false
      }
    }
  },

  toBeClassIp(received: string, expected: ClassIp) {
    const ip = new IPv4(received);
    if (ip.classIp == expected)
      return {
        message: () => `it is expected that ${received} is not a ${expected}`,
        pass: true
      }
    return {
      message: () => `${received} is expected to be a ${expected}`,
      pass: false
    }
  },

  toBeMask(received: string, expected: Mask) {
    const ip = new IPv4(received);
    if (ip.mask == expected)
      return {
        message: () => `it is expected that ${received} is not a Mask ${expected}`,
        pass: true
      }
    else return {
      message: () => `${received} is expected to be a ${expected}`,
      pass: false
    }
  },

  toBeIdNetwork(received: string, expected: string) {
    const ip = new IPv4(received)
    if (ip.idNetwork === expected)
      return {
        message: () => `Se esperaba que para el ip ${received} su idNetwork NO SEA ${expected}`,
        pass: true
      }
    else return {
      message: () => `Se esperaba que para el ip ${received} su idNetwork sea ${expected}`,
      pass: false
    }
  },

  toBeIdHost(received: string, expected: string) {
    const ip = new IPv4(received)
    if (ip.idHost === expected)
      return {
        message: () => `Se esperaba que para el ip ${received} su idHost NO SEA ${expected}`,
        pass: true
      }
    else return {
      message: () => `Se esperaba que para el ip ${received} su idHost SEA ${expected} output: ${ip.idHost}`,
      pass: false
    }
  },

  toBeIpNetwork(received: string, expected: string) {
    const ip = new IPv4(received)
    if (ip.ipNetwork === expected)
      return {
        message: () => `Para ${received} su ip de red NO TIENE que ser ${expected} output: ${ip.ipNetwork}`,
        pass: true
      }
    else return {
      message: () => `Para ${received} su ip de red TIENE que ser ${expected} output: ${ip.ipNetwork}`,
      pass: false
    }
  },

  toBeIpHost(received: string, expected: string) {
    const ip = new IPv4(received)
    if (ip.ipHost === expected)
      return {
        message: () => `Para ${received} su ip de host NO TIENE que ser ${expected} output: ${ip.ipHost}`,
        pass: true
      }
    else return {
      message: () => `Para ${received} su ip de host TIENE que ser ${expected} output: ${ip.ipHost}`,
      pass: false
    }
  }
});
