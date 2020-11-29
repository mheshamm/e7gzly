import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers : place[];

  constructor( private placesService : PlacesService) { }

  ngOnInit() {
    this.offers = this.placesService._places;
  }
  onEdit(slider : IonItemSliding){
    slider.close();

  }

}
