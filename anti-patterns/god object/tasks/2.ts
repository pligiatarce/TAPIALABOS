//laboratoio 2
///P. Ligia Tapia Arce
class AirportSystems {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}
///RESOLUCIOMN
class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: string) {
        this.flights.push(flight);
    }
    getFlightAsigned(flightID: string) {
        return this.flights.find(flights => flights.id === flightID);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: string) {
        this.passengers.push(passenger);
    }
    getPassengerDetails(passengerID: string) {
        return this.passengers.find(passengers => passengers.id === passengerID);
    }

    // Métodos relacionados con tripulaciones
    addCrew(crew: any) {
        this.crews.push(crew);
    }
    getCrewDetails(crewID: any) {
        return this.crews.filter(crew => crew.crewtID === crewID);
    }
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    scheduleplanesMaintenance(planesMaintenance: string) {
        this.planesMaintenance.push(planesMaintenance);
    }
    getplanesMaintenanceDetails(crewID: any) {
        return this.crews.filter(crew => crew.crewtID === crewID);
    }
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
    getFinancialTransaction(date: string): any[] {
        return this.financialRecords.filter(transaction => transaction.date === date);
    }
}

