import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {
  cityName: any;
  temp: any;
  description: any;

  constructor(private readonly weatherService: WeatherService) { }

  date: Date = new Date();
  ngOnInit(): void {
    this.weatherService.getWeather('London').subscribe((city) => {
      this.cityName = city.name;
      this.temp = city.main.temp;
      this.description = city.weather[0].description;
      console.log(this.description);

      // this.propNames = (Object.keys(item));
      // this.weather = city.weather[0];
    }
    )}}
