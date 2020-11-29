import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false ;
  login = false ;

  constructor( private router : Router , private authSrevice : AuthService , private loadingCrtl : LoadingController) { }

  ngOnInit() {
  }
  OnlogIn (){
    this.isLoading = true ;
   this.authSrevice.logIn() ;
   this.loadingCrtl.create({ keyboardClose : true , message : "Logging in .."}).then( loadEl => {
     loadEl.present();
     setTimeout( () => {
       this.isLoading = false ; 
       this.loadingCrtl.dismiss();
       this.router.navigateByUrl("/places/tabs/discover") ;
     
     } , 1500 )
   })
  
   
   
  }
  onSubmit( form : NgForm){
    
  }
  onSwitch (){
    this.login = !this.login ;

  }
  

}
