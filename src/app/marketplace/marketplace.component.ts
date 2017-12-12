import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement.model';
import { Router } from '@angular/router';
import { AdvertisementService } from '../advertisement.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AdvertisementService]
})
export class MarketplaceComponent implements OnInit {
  advertisements: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private advertisementService: AdvertisementService) {}

  ngOnInit(){
    this.advertisements = this.advertisementService.getAdvertisements();
    console.log(this.router.url);
  }

  goToDetailPage(clickedAdvertisement) {
    this.router.navigate(['advertisements', clickedAdvertisement.$key]);
  };

}
