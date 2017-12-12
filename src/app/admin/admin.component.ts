import { Component } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';
import { Advertisement } from '../advertisement.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdvertisementService]
})

export class AdminComponent {

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, description: string) {
    var newAdvertisement: Advertisement = new Advertisement(title, author, description);
    this.advertisementService.addAdvertisement(newAdvertisement);
  }

}
