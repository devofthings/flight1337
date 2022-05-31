import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityPipe } from "./pipes/city.pipe";
import { StatusColorPipe } from "./pipes/status-color.pipe";
import { StatusFilterPipe } from './pipes/status-filter.pipe';
import { CityValidatorDirective } from './validation/city-validator.directive';

@NgModule({
  declarations: [CityPipe, StatusColorPipe, StatusFilterPipe, CityValidatorDirective],
  imports: [CommonModule],
  exports: [CityPipe, StatusColorPipe, StatusFilterPipe, CityValidatorDirective],
})
export class SharedModule {}
