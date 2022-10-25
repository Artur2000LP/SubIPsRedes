export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidIp(): R
			toBeClassIp(classIp : ClassIp): R
      toBeMask(mask: Mask): R
      toBeIdNetwork(idnetwork: string): R
      toBeIdHost(idHost: string): R
      toBeIpNetwork(ipNetwork: string): R
      toBeIpHost(ipHost: string): R
    }
  }
}
