import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form : FormGroup ;
  place : place ;

  constructor( private router : ActivatedRoute , private places : PlacesService , private navCrtl : NavController) { }

  ngOnInit() {
    this.router.paramMap.subscribe( paramap => {
      if(!paramap.has("placeId")){
        this.navCrtl.navigateBack("places/tab/offers");
        return ;

      }
      this.place = this.places.getLoaded(paramap.get('placeId'))
      this.form = new FormGroup ({
        tittle : new FormControl(this.place.tittle , {
          updateOn : "blur" ,
          validators : [Validators.required]
        }) ,
        description : new FormControl(this.place.desc , {
          updateOn : "blur" ,
          validators : [Validators.required , Validators.maxLength(180)]
        })
      })
      
    })

  }
  onEdit(){
    console.log(this.form) ;
  }

}
