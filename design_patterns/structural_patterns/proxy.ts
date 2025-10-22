/*

🧩 What is the Proxy Pattern?

The Proxy pattern provides a substitute or placeholder for another object to control access to it.

You create a Proxy class that implements the same interface as the real object (called the “real subject”).
The proxy then controls how and when the real object is created, accessed, or used.

💡 Real-Life Analogy

Think of a credit card as a proxy for cash.

You use your credit card to make a payment.

The card forwards the request to your bank account, but you don’t deal with the bank directly.

The card might also add extra checks (e.g., fraud detection, spending limit, etc.).

🧱 Structure

Subject (Interface): Defines common operations between RealSubject and Proxy.

RealSubject: The actual object that performs the real work.

Proxy: Wraps the RealSubject and controls access to it.

*/

// 💻 Example: Image Proxy (Lazy Loading)

// Step 1 — Common Interface
interface Image {
  display(): void;
}

// Step 2 — Real Object (Heavy Operation)

class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}

// NOTE: 🧠 The RealImage object takes time or resources to create because it loads from disk immediately when instantiated.

// Step 3 — Proxy Class (Lazy Loading)
class ProxyImage implements Image {
  private filename: string;
  private realImage: RealImage | null = null;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): void {
    // Lazy initialization
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// NOTE: 🧠 The proxy only creates the RealImage object when display() is called for the first time.

// CLIENT CODE:

const image1 = new ProxyImage("photo1.png");
const image2 = new ProxyImage("photo2.png");

// Images not loaded yet
console.log("Images created but not loaded yet.");

// Now display them
image1.display(); // Loads and displays
image1.display(); // Already loaded, just displays again
image2.display(); // Loads and displays


/*

🧠 When to Use the Proxy Pattern

✅ Virtual Proxy — Lazy-load or cache heavy objects (e.g., image, video, or large dataset).
✅ Remote Proxy — Represent an object that lives on a remote server (e.g., API client).
✅ Protection Proxy — Control access (e.g., authorization or permission checks).
✅ Logging / Monitoring Proxy — Add logging or performance monitoring transparently.

*/