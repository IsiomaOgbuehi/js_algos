// Prototype interface
interface FurniturePrototype {
  clone(): FurniturePrototype
}

// Concrete prototype
class Chair implements FurniturePrototype {
  constructor(
    public color: string,
    public material: string,
    public hasArmRest: boolean
  ) {}

  clone(): Chair {
    // Clone returns a *new instance* with the same properties
    return new Chair(this.color, this.material, this.hasArmRest)
  }

  describe(): void {
    console.log(
      `🪑 Chair -> Color: ${this.color}, Material: ${this.material}, ArmRest: ${this.hasArmRest ? 'Yes' : 'No'}`
    )
  }
}

// Usage
const prototypeChair = new Chair('Black', 'Wood', true)
const officeChair = prototypeChair.clone()
const loungeChair = prototypeChair.clone()

// Modify cloned versions
officeChair.color = 'Blue'
loungeChair.hasArmRest = false

prototypeChair.describe()
officeChair.describe()
loungeChair.describe()
