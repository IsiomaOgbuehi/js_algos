/*

🧠 What Is the Facade Pattern?

The Facade Pattern provides a simplified interface to a complex subsystem.

Think of it as a “front desk” or a “customer service representative” — you don’t need to deal with every department inside a company; you just talk to one person who handles it for you.

🏢 Real-world Analogy

Imagine booking a vacation:

You need to book a flight, a hotel, and a car.

Normally, you’d call three different services.

Instead, you use a TravelAgent (Facade):

You → TravelAgent → (FlightBooking + HotelBooking + CarRental)


The agent handles the messy coordination internally.

*/

/// Let’s say you have several components that make up a home theater system.

// 🎬 Subsystem Classes

class DVDPlayer {
  on() { console.log("DVD Player ON") }
  play(movie: string) { console.log(`Playing movie: ${movie}`) }
  off() { console.log("DVD Player OFF") }
}

class Projector {
  on() { console.log("Projector ON") }
  wideScreenMode() { console.log("Projector in widescreen mode") }
  off() { console.log("Projector OFF") }
}

class SurroundSound {
  on() { console.log("Surround Sound ON") }
  setVolume(level: number) { console.log(`Volume set to ${level}`) }
  off() { console.log("Surround Sound OFF") }
}

class Lights {
  dim(level: number) { console.log(`Lights dimmed to ${level}%`) }
  on() { console.log("Lights ON") }
}

// Let’s create a HomeTheaterFacade:

class HomeTheaterFacade {
  constructor(
    private dvd: DVDPlayer,
    private projector: Projector,
    private sound: SurroundSound,
    private lights: Lights
  ) {}

  watchMovie(movie: string) {
    console.log("Get ready to watch a movie...")
    this.lights.dim(30)
    this.projector.on()
    this.projector.wideScreenMode()
    this.sound.on()
    this.sound.setVolume(50)
    this.dvd.on()
    this.dvd.play(movie)
  }

  endMovie() {
    console.log("Shutting movie theater down...")
    this.lights.on()
    this.projector.off()
    this.sound.off()
    this.dvd.off()
  }
}

// Client Code

const homeTheater = new HomeTheaterFacade(
  new DVDPlayer(),
  new Projector(),
  new SurroundSound(),
  new Lights()
)

homeTheater.watchMovie("Inception")

// Later...
homeTheater.endMovie()
