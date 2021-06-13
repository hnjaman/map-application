import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';
import { Geolocation } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Google Map Service';

  // private map: google.maps.Map

  ngOnInit(): void {
    // let loader = new Loader({
    //   apiKey: 'AIzaSyDOX4VFz130IisVNp4ZXQYSrUSZBLRRcns'
    // })

    // loader.load().then(() => {
    //   console.log('loaded gmaps')

    //   let geolocations: Geolocation[] = [
    //     { id: 0, name: "Sylhet", latitude: 24.886436, longitude: 91.880722},
    //     { id: 1, name: "Chittagong", latitude: 22.3569, longitude: 91.7832 },
    //     { id: 2, name: "Khulna", latitude: 22.845641, longitude: 89.540328 }
    // ];
      
    //   const dhaka = { lat: 23.8103, lng: 	90.4125 }

    //   this.map = new google.maps.Map(document.getElementById("map"), {
    //     center: dhaka,
    //     zoom: 8,
    //     styles: styles
    //   })

    //   for (let i = 0; i < geolocations.length; i++) {
    //     new google.maps.Marker({
    //       position: { lat: geolocations[i].latitude, lng: geolocations[i].longitude },
    //       map: this.map,
    //     });
    //   }
    // })
  }
}
