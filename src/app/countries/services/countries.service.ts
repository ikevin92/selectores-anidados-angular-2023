import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions: Region[] = [
    Region.Africa,
    Region.Europe,
    Region.Asia,
    Region.Oceania,
    Region.Americas,
  ];

  constructor() {}

  get regions(): Region[] {
    return [...this._regions];
  }
}
