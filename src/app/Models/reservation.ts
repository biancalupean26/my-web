export class Reservation{
    cmodel: string;
    start: string;
    end: string;
    pickup: string;
    returnn: string;
    fname:string;
    lname:string;
    contact:string;
    constructor(cmodel: string, start: string,end: string, pickup: string, returnn: string, fname: string, lname: string, contact: string){
        this.cmodel=cmodel;
        this.start = start;
        this.end = end;
        this.pickup = pickup;
        this.returnn = returnn;
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
}