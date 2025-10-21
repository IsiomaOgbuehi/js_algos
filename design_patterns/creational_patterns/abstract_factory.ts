/**
 Problem
Imagine that you’re creating a furniture shop simulator. Your code consists of classes that represent:

A family of related products, say: Chair + Sofa + CoffeeTable.

Several variants of this family. For example, products Chair + Sofa + CoffeeTable are available in these variants: Modern, Victorian, ArtDeco.
 */



interface Chairs {
    sitOn(): void
    hasLegs(): boolean
}

interface Sofa {
    lieOn(): void
    hasLegs(): boolean
}

interface CoffeeTable {
    placeItem(): void
}

class ModernChair implements Chairs {
    sitOn(): void {
        console.info('MODERN CHAIR PRODUCT - SIT ON')
    }
    hasLegs(): boolean {
        console.info('MODERN CHAIR PRODUCT - HAS LEGS')
        return true
    }
}

class ModernSofa implements Sofa {
    lieOn(): void {
        console.info('MODERN SOFA PRODUCT - LIE ON')
    }
    hasLegs(): boolean {
        return true
    }
}

class ModernCoffeeTable implements CoffeeTable {
    placeItem(): void {
        console.info('MODERN COFFEE TABLE!!!')
    }
}

class ArtDecoChair implements Chairs {
    sitOn() {
        console.info('ART DECO CHAIR PRODUCT - SIT ON')
    }
    hasLegs() {
        console.info('ART DECO CHAIR PRODUCT - HAS LEGS')
        return true
    }
}

class ArtDecoSofa implements Sofa {
    lieOn(): void {
        console.info('ART DECO SOFA PRODUCT - LIE ON')
    }
    hasLegs(): boolean {
        return true
    }
}

class ArtDecoCoffeeTable implements CoffeeTable {
    placeItem(): void {
        console.info('ART DECO COFFEE TABLE!!!')
    }
}

class VictorianChair implements Chairs {
    sitOn() {
        console.info('VICTORIAN CHAIR PRODUCT - SIT ON')
    }
    hasLegs() {
        console.info('VICTORIAN CHAIR PRODUCT - HAS LEGS')
        return true
    }
}

class VictorianSofa implements Sofa {
    lieOn(): void {
        console.info('VICTORIAN SOFA PRODUCT - LIE ON')
    }
    hasLegs(): boolean {
        return true
    }
}

class VictorianCoffeeTable implements CoffeeTable {
    placeItem(): void {
        console.info('VICTORIAN COFFEE TABLE!!!')
    }
}

interface FurnitureFactory {
    createChair(): Chairs
    createSofa(): Sofa
    createCoffeeTable(): CoffeeTable
}

class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chairs {
        return new ModernChair()
    }

    createSofa(): Sofa {
        return new ModernSofa()
    }

    createCoffeeTable(): CoffeeTable {
        return new ModernCoffeeTable()
    }
}

class ArtDecoFurnitureFactory implements FurnitureFactory {
    createChair(): Chairs {
        return new ArtDecoChair()
    }

    createSofa(): Sofa {
        return new ArtDecoSofa()
    }

    createCoffeeTable(): CoffeeTable {
        return new ArtDecoCoffeeTable()
    }
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chairs {
        return new VictorianChair()
    }

    createSofa(): Sofa {
        return new VictorianSofa()
    }

    createCoffeeTable(): CoffeeTable {
        return new VictorianCoffeeTable()
    }
}

// Application
class FactoryStore {
    private chair: Chairs
    private sofa: Sofa
    private coffeeTable: CoffeeTable

    constructor(furniture: FurnitureFactory) {
        this.chair = furniture.createChair()
        this.sofa = furniture.createSofa()
        this.coffeeTable = furniture.createCoffeeTable()
    }

    displayFurniture() {
        console.log("Setting up your room with this furniture set:")
        this.chair.sitOn()
        this.sofa.lieOn()
        this.coffeeTable.placeItem()
    }
}

const furniture = new FactoryStore(new ArtDecoFurnitureFactory())
furniture.displayFurniture()