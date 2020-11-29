import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  myDate: String = new Date().toISOString();
  form : FormGroup ;
  
 
  
  



  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      tittle : new FormControl(null, {
        updateOn: "blur",
        validators : [Validators.required]
      }) ,
      describtion : new FormControl (null , {
        updateOn : "blur",
        validators : [Validators.required , Validators.maxLength(180)]
      }),
      price : new FormControl(null , {
        updateOn: "blur",
        validators : [Validators.required , Validators.min(1)]
      }),
      from :  new FormControl (null , {
        updateOn : "blur",
        validators : [Validators.required ]}),
      to :  new FormControl (null , {
        updateOn : "blur",
        validators : [Validators.required ]})
    })
  }
  onSubmit(){
    console.log(this.form)
  }
  

  


  }

