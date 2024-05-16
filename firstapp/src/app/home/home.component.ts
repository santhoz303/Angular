import { Component,inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import {HousingService} from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = '/assets';
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService;

  constructor(housingService: HousingService) {
    this.housingService = housingService;
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
