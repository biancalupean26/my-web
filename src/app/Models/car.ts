export class Car{
    year: string;
    seats: string;
    transmission: string;
    description: string;
    image: string;
    constructor(year: string, seats: string, transmission: string, description: string, image: string){
        this.year = year;
        this.seats = seats;
        this.transmission = transmission;
        this.description = description;
        this.image = image;
    }
}