import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  public apiWeather: string = 'http://api.openweathermap.org/data/2.5/weather';

  getWeather(cityName:string):Observable<any>{
    const params = new HttpParams()
    .set('q', cityName)
    .set('units', 'metric')
    .set('APPID', '59330528fde765f91a8320b117f2d037');

    return this.http.get(`${this.apiWeather}`, {params})
  }
}
