/*

🧠 What is the Flyweight Pattern?

The Flyweight Pattern is used to minimize memory usage by sharing objects that are similar (have identical, reusable data) instead of creating new copies for each instance.

It separates an object’s state into:

Intrinsic state → shared, immutable data that doesn’t change (e.g., color, shape, model).

Extrinsic state → context-specific data that can change (e.g., position, owner, coordinates).

Instead of creating a new object each time, the system reuses existing objects that have the same intrinsic data.

🪶 Real-World Analogy

Imagine a text editor showing thousands of characters (A, B, C, etc.).
Each letter has the same font, size, color, but a different position.

Instead of creating a separate object for every letter (thousands of them),
the editor can share one flyweight object per character type, and just store different coordinates for each instance.

*/

// EXAMPLE:

/*

💻 TypeScript Example — Trees in a Forest 🌳

Let’s say we’re building a forest simulator that displays thousands of trees.

Each tree has:

Shared (intrinsic) data: species, color, texture (same for many trees)

Unique (extrinsic) data: position (x, y)

*/

class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(x: number, y: number) {
    console.log(`🌳 Drawing [${this.name}] tree at (${x}, ${y}) with color ${this.color}`)
  }
}

// 2️⃣ Create a Flyweight Factory to manage and reuse shared objects

class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map()

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`

    if (!this.treeTypes.has(key)) {
      console.log(`Creating new TreeType for ${name}`)
      this.treeTypes.set(key, new TreeType(name, color, texture))
    }

    return this.treeTypes.get(key)!
  }
}

// 3️⃣ Define the Context (unique state)

class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType
  ) {}

  draw() {
    this.type.draw(this.x, this.y)
  }
}

// 4️⃣ The Forest (Client) that uses shared Flyweights

class Forest {
  private trees: Tree[] = []

  plantTree(x: number, y: number, name: string, color: string, texture: string) {
    const type = TreeFactory.getTreeType(name, color, texture)
    const tree = new Tree(x, y, type)
    this.trees.push(tree)
  }

  draw() {
    for (const tree of this.trees) {
      tree.draw()
    }
  }
}

// 🌲 5️⃣ Using the Flyweight Pattern

const forest = new Forest()

forest.plantTree(10, 20, "Oak", "Green", "Rough")
forest.plantTree(15, 25, "Pine", "Dark Green", "Smooth")
forest.plantTree(20, 30, "Oak", "Green", "Rough") // Reuses same TreeType
forest.plantTree(25, 35, "Oak", "Green", "Rough") // Reuses same TreeType

forest.draw()