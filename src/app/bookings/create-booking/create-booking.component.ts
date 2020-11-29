import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { place } from 'src/app/places/places.model';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  date : string ;
@Input() booked : place ;
@ViewChild("f") form : NgForm ;

  constructor( private modalCrtl : ModalController , private router : Router , private alertCtrl : AlertController )  { }

  ngOnInit() {
    var d = new Date();
    this.date  = new Date(d.getTime()).toISOString();
    
  }
  onCancel (){
    this.modalCrtl.dismiss(null , "cancel");
    

  }
  onBook(){
    var x = 
    
    this.alertCtrl.create({
      header: 'Booked ',
      message: `Successful Booking ${this.form.value["first-name"]} , You Booked ${this.booked.tittle}` ,
      buttons: [{ text : "OK" ,
    handler : ()=>{
      this.modalCrtl.dismiss({ bookingData :{
        firstName : this.form.value["first-name"] ,
        lastName : this.form.value["last-name"],
        number : this.form.value["no-Guests"],
        from : this.form.value["from"],
        to : this.form.value["to"]

      } }, "confirm")
      this.router.navigateByUrl('/places/tabs/discover');
    }
    }]
    }).then(alertEl => {
      alertEl.present()
    })
    
    
    
  }
  getDate(from){
    this.date = new Date(from.value+ 24*60*60*1000).toISOString();
    return this.date ;
  }

  
  

}
