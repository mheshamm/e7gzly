import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  LoadedPlace : place ;

  constructor( private router : ActivatedRoute , private navCrtl : NavController , private placesService : PlacesService , private modalCrtl : ModalController) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paraMap => {
      if(!paraMap.has('placeId')){
        this.navCrtl.navigateBack('/places/tabs/discover')
        return;
      }
      this.LoadedPlace = this.placesService.getLoaded(paraMap.get('placeId'))
    })
  }
onBooking(){
  this.modalCrtl.create({
    component : CreateBookingComponent , componentProps : {booked : this.LoadedPlace}
  }).then(modalEl => {
    
    modalEl.present();
  } )
}
}
