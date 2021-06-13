import { Component, OnInit } from '@angular/core';
import { Geolocation } from '../models';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = 'Google Map Service';
  latitude = 23.8103; longitude = 90.4125;  // Dhaka Geolocation for center in the map

  geolocations: Geolocation[];
  geolocation = null;

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getGeolocation().subscribe((data) => {
      this.geolocations = data.body;
    }, (err) => {
      console.log(err.error);
    });
  }

  selectedMarkerDristrict(event) {
    this.geolocation = this.geolocations.find( ({ latitude, longitude }) => latitude === event.latitude && longitude === event.longitude );
  }
}