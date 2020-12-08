import { Component, EventEmitter, Output } from '@angular/core';
import { item } from '../item.model';
import { itemService } from '../item.service';

@Component({
    selector:"iform",
    templateUrl:"./iform.component.html"
})


export class IformComponent{
    itemname : string;
    quantity : number;
    price : number;
    desc : string;

    @Output() myevent = new EventEmitter();

    constructor(private iservice : itemService){

    }

    addData(){
        let it = new item(this.itemname,this.quantity,this.price,this.desc);
        this.iservice.addData(it);
        this.itemname = "";
        this.quantity = 0;
        this.price = 0;
        this.desc = "";
        this.myevent.emit(false);
    }
}