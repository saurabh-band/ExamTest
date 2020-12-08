import { Component } from '@angular/core';
import { itemService } from '../item.service';


@Component({
    selector:"itab",
    templateUrl : "./itab.component.html"
})

export class itemComponent{
    itarr = []
    flag = false;

    constructor(private iservice:itemService){

    }

    ngOnInit(){
        console.log("ngOninit() in itab");
        this.itarr = this.iservice.getAllData();
    }

    changeFlag(){
        this.flag = true;
    }
}