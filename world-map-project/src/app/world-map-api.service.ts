// import { Injectable } from '@angular/core';

// const API_URL = 'https://api.worldbank.org/v2/country/';

// @Injectable({
//   providedIn: 'root',
// })
// export class WorldMapApiService {
//   constructor() {}

//   getCountryDetailsByCode(countryCode: string) {
//     return fetch(`${API_URL}${countryCode}?format=json`)
//       .then((response) => response.json())
//       .then((data) => {
//         const countryData = data[1][0];
//         return {
//           name: countryData.name,
//           capitalCity: countryData.capitalCity,
//           region: countryData.region.value,
//           incomeLevel: countryData.incomeLevel.value,
//           latitude: countryData.latitude,
//           longitude: countryData.longitude,
//         };
//       });
//   }
// }
// Rewrite all the code above to use the HttpClient service instead of the fetch API. The service should still return the same data structure.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.worldbank.org/v2/country/';

@Injectable({
  providedIn: 'root',
})
export class WorldMapApiService {
  constructor(private http: HttpClient) {}

  getCountryDetailsByCode(countryCode: string) {
    return this.http.get(`${API_URL}${countryCode}?format=json`).pipe(
      map((data: any) => {
        const countryData = data[1][0];
        return {
          name: countryData.name,
          capitalCity: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          latitude: countryData.latitude,
          longitude: countryData.longitude,
        };
      })
    );
  }
}
