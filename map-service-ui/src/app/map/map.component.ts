import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from '../mapstyles';
import { Geolocation } from '../models';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = 'Google Map Service';

  private map: google.maps.Map
  geolocations: Geolocation[];

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
    this.getGeolocation();
  }

  getGeolocation(){
    this.mapService.getGeolocation().subscribe((data) => {
      debugger;
      this.geolocations = data.body;
    }, (err) => {
      console.log(err.error);
    });

    this.prepareMap();
  }

  prepareMap(){
    let loader = new Loader({
      apiKey: 'AIzaSyDOX4VFz130IisVNp4ZXQYSrUSZBLRRcns'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const dhaka = { lat: 23.8103, lng: 90.4125 }

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: dhaka,
        zoom: 8,
        styles: styles
      })

      for (let i = 0; i < this.geolocations.length; i++) {
        new google.maps.Marker({
          position: { lat: this.geolocations[i].latitude, lng: this.geolocations[i].longitude },
          map: this.map,
        });
      }
    })
  }
}