import { Injectable } from '@angular/core';
import { Advertisement } from './advertisement.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdvertisementService {
  advertisements: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.advertisements = database.list('advertisements');
  }

  getAdvertisements(){
    return this.advertisements;
  }

  addAdvertisement(newAdvertisement: Advertisement) {
    this.advertisements.push(newAdvertisement);
  }

  getAdvertisementById(advertisementId: string){
    return this.database.object('advertisements/' + advertisementId);
  }

  updateAdvertisement(localUpdatedAdvertisement){
    var advertisementEntryInFirebase = this.getAdvertisementById(localUpdatedAdvertisement.$key);
    advertisementEntryInFirebase.update({title: localUpdatedAdvertisement.title,
                                author: localUpdatedAdvertisement.author,
                                description: localUpdatedAdvertisement.description});
  }

  deleteAdvertisement(localAdvertisementToDelete){
    var advertisementEntryInFirebase = this.getAdvertisementById(localAdvertisementToDelete.$key);
    advertisementEntryInFirebase.remove();
  }

}
