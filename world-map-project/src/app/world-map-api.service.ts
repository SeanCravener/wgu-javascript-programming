import { Injectable } from '@angular/core';

const API_URL = 'https://api.worldbank.org/v2/country/';

@Injectable({
  providedIn: 'root',
})
export class WorldMapApiService {
  constructor() {}

  getCountryDetailsByCode(countryCode: string) {
    return fetch(`${API_URL}${countryCode}?format=json`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[1][0];
        return {
          name: countryData.name,
          capitalCity: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          latitude: countryData.latitude,
          longitude: countryData.longitude,
        };
      });
  }
}
