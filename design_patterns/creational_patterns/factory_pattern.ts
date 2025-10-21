/*

FACTORY PATTERN FOR NOTIFICATIONS

enum NotificationErrorTypes {
    EmailNoficationError = 'Email Notification Error',
    SmsNotificationError = 'Sms Notification Error',
}

class NotificationError extends Error {
    notificationErrorType: NotificationErrorTypes
    constructor(message: string, noficationErrorType: NotificationErrorTypes) {
        super(message)
     this.notificationErrorType = noficationErrorType
     this.name = 'Notification Error'
     // ✅ Restore prototype chain manually
    // Object.setPrototypeOf(this, NotificationError.prototype)
    }
}

interface CustomNotification {
    send(message: string): boolean
}

class SmsNotification implements CustomNotification {
    send(message: string) {
        if(message) {
            console.log(message)
            return true
        }
        throw new NotificationError(message, NotificationErrorTypes.SmsNotificationError)
    }
}

class EmailNotification implements CustomNotification {
    send(message: string): boolean {
        if(message) {
            console.log(message)
            return true
        }
        throw new NotificationError('Error sending notification', NotificationErrorTypes.EmailNoficationError)
    }
}

abstract class NotificationCreator {
    abstract createNotification(): CustomNotification

    sendNotification(message: string) {
        const notification = this.createNotification()
        notification.send(message)
    }
}

class SmsNotificationService extends NotificationCreator {
    createNotification(): CustomNotification {
        return new SmsNotification()
    }
}

class EmailNotificationService extends NotificationCreator  {
    createNotification(): CustomNotification {
        return new EmailNotification()
    }
}

try {
    const notification = new EmailNotificationService()
    notification.sendNotification('')

    const smsNofication = new SmsNotificationService()
    smsNofication.sendNotification('SMs NOtifiCation')
} catch(e) {
    if(e instanceof NotificationError) {
        console.error(e.notificationErrorType, e.message)
    }
    console.log(typeof(e))
    console.log('ERRORRRRR')
}

*/

type RoadProduct = {
    perishables: boolean
    fragile: boolean
}

type SeaProduct = {
    isLiquid: boolean
    isContainer: boolean
}

interface Transport<T> {
    deliver(product: T): void
    receieve(product: T): void
}

class RoadTransport implements Transport<RoadProduct> {
    deliver(product: RoadProduct) {
        console.log(`SEND ROAD PRODUCT ${product.fragile}`)
    }
    receieve(product: RoadProduct): void {
         console.log(`RECEIVE PRODUCT ${product}`)
    }
}

class SeaTransport implements Transport<SeaProduct> {
    deliver(product: SeaProduct): void {
        console.log(`SEA PRODUCT DELIVERY ${product}`)
    }
    receieve(product: SeaProduct): void {
        console.log(`SEA PRODUCT RECEIVING... ${product}`)
    }
}

abstract class TransportFactory<T> {
    abstract createTransport(): Transport<T>

    sendItem(product: T) {
        const transport = this.createTransport()
        transport.deliver(product)
    }
}

class RoadTransportService extends TransportFactory<RoadProduct> {
    createTransport(): Transport<RoadProduct> {
        return new RoadTransport()
    }
}

class SeaTransportService extends TransportFactory<SeaProduct> {
    createTransport(): Transport<SeaProduct> {
        return new SeaTransport()
    }
}

const transport = new RoadTransportService()
transport.sendItem({perishables: true, fragile: false})