// expo-device.d.ts

declare module "expo-device" {
  interface Device {
    isDevice?: boolean;
  }
  const Device: Device;
  export default Device;
}
