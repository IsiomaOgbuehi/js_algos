/*

🧠 Concept: What is the Bridge Pattern?

The Bridge Pattern decouples an abstraction from its implementation, so the two can vary independently.

In simple words:

You separate what you do (abstraction) from how you do it (implementation).


💬 Real-world analogy:

Imagine you make a remote control (abstraction) that can work with multiple TV brands (implementation).
You don’t want to create SonyRemote, SamsungRemote, LGRemote, etc.

*/

// Device interface: defines low-level operations
interface Device {
  turnOn(): void
  turnOff(): void
  setVolume(volume: number): void
  getName(): string
}

class SonyTV implements Device {
  turnOn(): void {
    console.log("📺 Sony TV is now ON")
  }
  turnOff(): void {
    console.log("📴 Sony TV is now OFF")
  }
  setVolume(volume: number): void {
    console.log(`🔊 Sony TV volume set to ${volume}`)
  }
  getName(): string {
    return "Sony TV"
  }
}

class SamsungTV implements Device {
  turnOn(): void {
    console.log("📺 Samsung TV is now ON")
  }
  turnOff(): void {
    console.log("📴 Samsung TV is now OFF")
  }
  setVolume(volume: number): void {
    console.log(`🔊 Samsung TV volume set to ${volume}`)
  }
  getName(): string {
    return "Samsung TV"
  }
}

// The high-level abstraction: doesn't depend on device details
class RemoteControl {
  protected device: Device

  constructor(device: Device) {
    this.device = device
  }

  togglePower(on: boolean) {
    if (on) this.device.turnOn()
    else this.device.turnOff()
  }

  volumeUp() {
    console.log(`Increasing volume on ${this.device.getName()}`)
    this.device.setVolume(10)
  }
}

// Adds more advanced control logic
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    console.log(`🔇 Muting ${this.device.getName()}`)
    this.device.setVolume(0)
  }
}


const sonyRemote = new AdvancedRemoteControl(new SonyTV())
sonyRemote.togglePower(true)
sonyRemote.volumeUp()
sonyRemote.mute()
sonyRemote.togglePower(false)

console.log("------")

const samsungRemote = new RemoteControl(new SamsungTV())
samsungRemote.togglePower(true)
samsungRemote.volumeUp()
