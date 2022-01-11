import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICityInfo } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  public apiWeather: string = 'http://api.openweathermap.org/data/2.5/weather';

  getCityInfo(city:string):Observable<ICityInfo>{
    return this.http.get<any>(this.apiWeather + "?appId=" + environment.apiKey + "&q=" + city + "&units=metric&lang=it" ).pipe(
      map(response => {
          let cityInfo:ICityInfo = {
          name: response.name,
          date: (response.dt * 1000).toString(),
          temp: (Math.floor(response.main.temp)).toString(),
          description: response.weather[0].description,
          icon: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
        }
        return cityInfo;
      })
    )
  }
}
