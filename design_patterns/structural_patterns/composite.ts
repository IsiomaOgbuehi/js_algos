/*

🧠 What is the Composite Pattern?

The Composite Pattern allows you to compose objects into tree-like structures to represent part-whole hierarchies.
It lets clients treat individual objects and compositions of objects the same way.


💡 Real-world Analogy

Imagine your computer’s file system:

A file is a leaf — it has no children.

A folder can contain files and other folders.

Yet, you can call the same operation (open(), showDetails(), etc.) on both files and folders — this is the Composite pattern.

🧩 When to Use It

✅ You want to represent part-whole hierarchies.
✅ You want clients to treat individual objects and compositions uniformly.
✅ Common use cases include file systems, UI hierarchies, and organization charts.

Component (interface)
├── Leaf (single object)
└── Composite (collection of components)

*/

// 1️⃣ Component interface
interface FileSystemItem {
  getName(): string
  showDetails(indent?: string): void
}

// 2️⃣ Leaf: File
class SystemFile implements FileSystemItem {
  constructor(private name: string) {}

  getName(): string {
    return this.name
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}- File: ${this.name}`)
  }
}

// 3️⃣ Composite: Folder
class Folder implements FileSystemItem {
  private children: FileSystemItem[] = []

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.children.push(item)
  }

  remove(item: FileSystemItem): void {
    this.children = this.children.filter(child => child !== item)
  }

  getName(): string {
    return this.name
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}+ Folder: ${this.name}`)
    this.children.forEach(child => child.showDetails(indent + '   '))
  }
}

// 4️⃣ Client Code
const root = new Folder('root')
const images = new Folder('images')
const videos = new Folder('videos')

const file1 = new SystemFile('logo.png')
const file2 = new SystemFile('banner.jpg')
const file3 = new SystemFile('intro.mp4')

images.add(file1)
images.add(file2)
videos.add(file3)

root.add(images)
root.add(videos)

// Display structure
root.showDetails()
