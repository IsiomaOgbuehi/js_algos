/*
🧠 Concept

The Adapter Pattern allows objects with incompatible interfaces to work together.

It acts like a translator between two different classes or systems that otherwise couldn’t interact directly.

💬 Real-world analogy:

Think of a power adapter for your laptop.
Your laptop expects a specific plug shape and voltage, but your wall socket may not match it — the adapter bridges that difference.
*/

// The interface your app expects
interface PaymentRequired {
    pay(amount: number): void
}

// Existing class from a third-party crypto library
class UseCryptoPayment {
    makePayment(amountInEth: number) {
        console.log(`💰 Paid ${amountInEth} ETH via UseCryptoPayment gateway`)
    }
}

class Adapter implements PaymentRequired {
    private cryptoPayment: UseCryptoPayment

    constructor(payment: UseCryptoPayment) {
        this.cryptoPayment = payment
    }

    pay(amount: number): void {
        const ethValue = 4000
        const paymentAmount = amount * ethValue
        this.cryptoPayment.makePayment(paymentAmount)
    }
}

// Normal credit card processor
class CreditCardPayment implements PaymentRequired {
  pay(amount: number): void {
    console.log(`💳 Paid $${amount} via Credit Card`)
  }
}

// 
class CryptoCardPayment extends UseCryptoPayment {
    constructor() {super()}
}

const cryptoPayment = new CryptoCardPayment()
const adapter = new Adapter(cryptoPayment)

adapter.pay(50)

const creditCardPay = new CreditCardPayment()
creditCardPay.pay(100)
