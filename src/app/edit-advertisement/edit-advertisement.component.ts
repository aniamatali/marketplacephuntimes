import { Component, Input, OnInit } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-edit-advertisement',
  templateUrl: './edit-advertisement.component.html',
  styleUrls: ['./edit-advertisement.component.css'],
  providers: [AdvertisementService]
})
export class EditAdvertisementComponent implements OnInit {
  @Input() selectedAdvertisement;

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
  }

  beginUpdatingAdvertisement(advertisementToUpdate){
    this.advertisementService.updateAdvertisement(advertisementToUpdate);
  }

  beginDeletingAdvertisement(advertisementToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.advertisementService.deleteAdvertisement(advertisementToDelete);
    }
  }

}
