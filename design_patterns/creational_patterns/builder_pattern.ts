class House {
  walls?: number
  doors?: number
  hasGarage?: boolean
  hasSwimmingPool?: boolean
  hasGarden?: boolean

  describe(): void {
    console.log(`
      🏠 House description:
      - Walls: ${this.walls}
      - Doors: ${this.doors}
      - Garage: ${this.hasGarage ? "Yes" : "No"}
      - Swimming Pool: ${this.hasSwimmingPool ? "Yes" : "No"}
      - Garden: ${this.hasGarden ? "Yes" : "No"}
    `)
  }
}

interface HouseBuilderInterface {
    buildWalls(number: number): this
    buildDoors(amount: number): this
    addGarage(): this
    addSwimmingPool(): this
    addGarden(): this
    getResult(): House
}

class ConcreteHouseBuilder implements HouseBuilderInterface {
    private house: House
    constructor() {
        this.house = new House()
    }

    private reset(): void {
        this.house = new House()
    }

    buildWalls(number: number): this {
        this.house.walls = number
        return this
    }
    buildDoors(amount: number): this {
        this.house.doors = amount
        return this
    }
    addGarage(): this {
        this.house.hasGarage = true
        return this
    }
    addSwimmingPool(): this {
        this.house.hasSwimmingPool = true
        return this
    }
    addGarden(): this {
        this.house.hasGarden = true
        return this
    }
    getResult(): House {
        const result = this.house
        this.reset()
        return result
    }
}

class HouseDirector {
  constructor(private builder: HouseBuilderInterface) {}

  constructLuxuryHouse(): House {
    return this.builder
      .buildWalls(6)
      .buildDoors(3)
      .addGarage()
      .addSwimmingPool()
      .addGarden()
      .getResult()
  }

  constructSimpleHouse(): House {
    return this.builder
      .buildWalls(4)
      .buildDoors(1)
      .getResult()
  }
}

const builder = new ConcreteHouseBuilder()
const director = new HouseDirector(builder)

const luxuryHouse = director.constructLuxuryHouse()
const simpleHouse = director.constructSimpleHouse()

luxuryHouse.describe()
simpleHouse.describe()