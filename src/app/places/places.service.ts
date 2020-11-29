import { Injectable } from '@angular/core';
import { place } from "./places.model"

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
   _places: place[] = [
    new place('1', "Deluxe Appartment ", "In the Middle of london",
    "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2015/10/One-Tower-Bridge-penthouse1.jpg", 250 , 
    [' Beds' , "Air Condition" , "Pool"] , 2 , new Date("11-2-2020") , new Date("11-2-2020") ),
    new place('2', " Elegant Appartment ", " Amazing Sea View in Alexandria ",
    "https://q-xx.bstatic.com/xdata/images/hotel/max500/266457803.jpg?k=b272da69e9cb465a6c7ea174b94dc2d3fd0fcfc2ea40fe2f415cd7bf46b9138e&o=",
    50 , [' Beds' , "Air Condition" ] , 3 , new Date("11-2-2020") , new Date("11-2-2020")),
    new place('3', "Deluxe Villa ", " Amazing Sea View in Gouna ",
    "https://media-cdn.tripadvisor.com/media/vr-splice-j/00/86/e4/4d.jpg", 150 , ['5 Beds' , "Air Condition" , "Pool" , "garden"] , 5 , new Date("11-2-2020") , new Date("11-2-2020"))
 
  ];
 
get Place(){
  return { ...this._places };
}
getLoaded(id:string){
  return {...this._places.find(
    p=> p.id === id 
  )}
}

constructor() { }
}
