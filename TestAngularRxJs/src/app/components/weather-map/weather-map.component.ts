import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ICityInfo } from 'src/app/interfaces/city';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {
  public weatherForm = this.fb.group({
    city: ["Palermo"]
  })

  public cityInfo!:ICityInfo;

  constructor(private fb:FormBuilder, private service:WeatherService) { }

  ngOnInit(): void {

  }

  searchCityInfo(): void {
    this.service.getCityInfo(this.weatherForm.value.city).subscribe(response => {
      this.cityInfo = response;
    })

  }
}
