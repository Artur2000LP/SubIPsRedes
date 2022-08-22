export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidIp(): R;
			toBeClassIp(classIp : ClassIp): R
    }
  }
}