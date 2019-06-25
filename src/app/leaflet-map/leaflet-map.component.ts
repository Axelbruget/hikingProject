import { Component, OnInit, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Hiking } from '../models/hiking';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements OnInit {

  @Input() page: string;
  @Input() hiking: Hiking;

  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    setTimeout(() => this.initMap(), 1000);
  }

  initMap() {
    // @ts-ignore
    const mymap = L.map('leaflet-map-' + this.page).setView([this.hiking.steps[0].latitude, this.hiking.steps[0].longitude], 20);
    // @ts-ignore
    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    mymap.addLayer(osmLayer);

    const steps = this.hiking.steps.map(step => [step.latitude, step.longitude]);

    // @ts-ignore
    L.Routing.control({
      waypoints: steps,
      show: false
    }).addTo(mymap);

    this.geolocation.getCurrentPosition().then((resp) => {
      // @ts-ignore
      
      var circle = L.circle([resp.coords.latitude, resp.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 150
        }).addTo(mymap);
          //console.log(resp.coords.latitude);
      }).catch((error) => {
        console.log('La récupération de la position a échouée', error);
      });
  }
}