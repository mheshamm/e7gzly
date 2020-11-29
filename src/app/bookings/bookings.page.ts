import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { place } from '../places/places.model';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  booked : place ;
  

  constructor( private placesService : PlacesService , private router : ActivatedRoute , private navCrtl : NavController )  { }

  ngOnInit() {
    this.router.paramMap.subscribe(paraMap => {
      if(!paraMap.has('placeId')){
        this.navCrtl.navigateBack('/places/tabs/discover')
        return;
      }
      this.booked = this.placesService.getLoaded(paraMap.get('placeId'))
    })
  }

}
