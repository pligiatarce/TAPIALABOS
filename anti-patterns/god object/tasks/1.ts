//laboratoio 1
///P. Ligia Tapia Arce
class Cine {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovies(movies: any) {
        this.movies.push(movies);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}
///RESOLUCION
class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovies(movies: any) {
        this.movies.push(movies);
    }
    getMoviesAsigned(moviesID: any) {
        return this.movies.find(movies => movies.id === moviesID);
    }
    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }
    getSnacksDetails(snacksID: any) {
        return this.snacks.filter(snacks => snacks.snacksID === snacksID);
    }
    // Métodos relacionados con entradas
    buyTicket(ticket: number) {
        this.tickets.push(ticket);
    }
    getTicketDetails(ticketID: number) {
        return this.tickets.filter(ticket => ticket.ticketID === ticketID);
    }
    assignTicketMovies(ticketID: number, moviesID: any) {
        let movies = this.movies.find(movies => movies.id === moviesID);
        if (movies) {
            movies.assignedTicket = ticketID;
        }
    }
    // Atributos relacionados con los empleados
    employee: string[] = [];
    salaries: { [key: string]: number } = {};
    // Métodos relacionados con empleados
    hireEmployee(employee: string, salary: number) {
        this.employees.push(employee);
        this.salaries [employee] = salary;
    }
    cinemaEmployee(employee: string) {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
            this.employees.splice(index, 1);
        }
        delete this.salaries [employee];
    }
}


