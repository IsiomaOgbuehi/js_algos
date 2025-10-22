/*

🧠 What is the Decorator Pattern?

The Decorator Pattern allows you to dynamically add new behavior or responsibilities to an object without altering its structure or modifying its code.

It’s like wrapping an object in another object that adds extra features — while keeping the same interface.

💡 Real-world Analogy

Think of a coffee shop:

You can start with a simple coffee.

Then you can decorate it with milk, sugar, caramel, or whipped cream.

Each "decorator" adds new behavior (cost, description), but the base object (coffee) stays the same.

*/

interface HttpClient {
  request(url: string): Promise<string>
}

class BasicHttpClient implements HttpClient {
  async request(url: string): Promise<string> {
    console.log(`Requesting: ${url}`)
    return `Response from ${url}`
  }
}

class LoggingHttpClient implements HttpClient {
  constructor(private client: HttpClient) {}

  async request(url: string): Promise<string> {
    console.log(`[LOG] Starting request to ${url}`)
    const response = await this.client.request(url)
    console.log(`[LOG] Got response: ${response}`)
    return response
  }

  async status(): Promise<string> {
    console.log('STATUS CHECK')
    return 'status check'
  }
}

// Usage
const client = new LoggingHttpClient(new BasicHttpClient())
client.request("https://example.com")
client.status()

/// Here, LoggingHttpClient decorates the original HTTP client by adding logging behavior — 
// without changing its structure.

console.log('----------------------------------------------')

// 1️⃣ Component interface
interface Coffee {
  getCost(): number
  getDescription(): string
}

// 2️⃣ Concrete Component
class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5
  }

  getDescription(): string {
    return "Simple Coffee"
  }
}

// 3️⃣ Base Decorator (implements same interface)
class CoffeeDecorator implements Coffee {
  protected coffee: Coffee

  constructor(coffee: Coffee) {
    this.coffee = coffee
  }

  getCost(): number {
    return this.coffee.getCost()
  }

  getDescription(): string {
    return this.coffee.getDescription()
  }
}

// 4️⃣ Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 2
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Milk"
  }
}

class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 1
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Sugar"
  }
}

class CaramelDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 3
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Caramel"
  }
}

// 5️⃣ Client Code
let coffee: Coffee = new SimpleCoffee()
console.log(`${coffee.getDescription()} - $${coffee.getCost()}`)

coffee = new MilkDecorator(coffee)
coffee = new SugarDecorator(coffee)
coffee = new CaramelDecorator(coffee)

console.log(`${coffee.getDescription()} - $${coffee.getCost()}`)
