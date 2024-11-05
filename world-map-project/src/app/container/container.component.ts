import { Component } from '@angular/core';
import { CountryDetailsComponent } from '../country-details/country-details.component';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryDetails } from '../../types/country-details.type';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [WorldMapComponent, CountryDetailsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  countryDetails: CountryDetails | null = null;

  onCountrySelected(countryDetails: CountryDetails) {
    this.countryDetails = countryDetails;
  }
}
