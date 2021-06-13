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
  latitude = 23.8103;
  longitude = 90.4125;

  selectedMarker = null;

  markers: Geolocation[];

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getGeolocation().subscribe((data) => {
      debugger;
      this.markers = data.body;
    }, (err) => {
      console.log(err.error);
    });
  }
}