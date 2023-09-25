//laboratoio 6
///P. Ligia Tapia Arce
///resolucion
class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}
interface PackageService  {
    sendMessage(packageId: string, address: string): void;
}

class BikeDelivery implements PackageService {
    sendPackage(packageId: string, address: string) {
        console.log(`Sending email to ${packageId}: ${address}`);
    }
}
class SMSService implements PackageService {
    sendPackage(packageId: string, address: string) {
        console.log(`Sending email to ${packageId}: ${address}`);
    }
}
