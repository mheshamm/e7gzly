import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { place } from '../places.model';
import { PlacesService } from '../places.service';
import { SegmentChangeEventDetail } from '@ionic/core'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  LoadedPlaces : place[] ;
  loadedVPlaces : place[];
  

  constructor(private placesService : PlacesService) { }

  ngOnInit() {
    this.LoadedPlaces = this.placesService._places;
    this.loadedVPlaces = this.placesService._places.slice(1);
  }
  onFilter(event : CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);

  }

}
