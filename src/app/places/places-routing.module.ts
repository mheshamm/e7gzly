import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [{
      path: 'discover',
      children:[
      {
        path: "",
        loadChildren : "./discover/discover.module#DiscoverPageModule"
      },
      {
        path:":placeId",
        loadChildren: "./discover/place-detail/place-detail.module#PlaceDetailPageModule"

      }
      ]
    },
    {
      path:"offers",
      children: [{
        path:"",
        loadChildren: "./offers/offers.module#OffersPageModule"
         },
         {
          path:"edit/:placeId",
          loadChildren: "./offers/edit-offer/edit-offer.module#EditOfferPageModule"
         },
         {
          path:"new",
          loadChildren: "./offers/new-offer/new-offer.module#NewOfferPageModule"
         },
         {
          path:":placeId",
          loadChildren: "./offers/place-booking/place-booking.module#PlaceBookingPageModule"
         }
        ]
    }

    ]
  },
  {
    path: "",
    redirectTo : "/places/tabs/discover",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
