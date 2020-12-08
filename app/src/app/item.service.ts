import { Injectable } from '@angular/core';
import { item } from './item.model';

@Injectable()
export class itemService{
    itmarr = [
        new item("iPhone SE", 2 , 54000 ,"stylish designed mobile phone"),
        new item("Dell inspiron 1500", 3 , 150000 ,"stylish designed gaming laptop"),
        new item("surface studio", 4 , 250000 ,"stylish designed laptop for designing"),
        new item("xBox", 9 , 45000 ,"best gaming suite"),
    ];

    getAllData():item[]{
        return this.itmarr;
    }

    addData(it:item){
        this.itmarr.push(it);
    }
}