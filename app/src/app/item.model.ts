export class item{
    itemname : string;
    quantity : number;
    price : number;
    desc : string;

    constructor(itemname:string,quantity:number,price:number,desc:string){
        this.itemname = itemname;
        this.quantity = quantity;
        this.price = price;
        this.desc = desc;
    }
}