import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Advertisement } from '../advertisement.model';
import { AdvertisementService } from '../advertisement.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css'],
  providers: [AdvertisementService]
})

export class AdvertisementDetailComponent implements OnInit {
  advertisementId: string;
  advertisementToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.advertisementId = (urlParameters['id']);
     console.log(this.advertisementId);
   });
   this.advertisementToDisplay = this.advertisementService.getAdvertisementById(this.advertisementId);
  }

}
