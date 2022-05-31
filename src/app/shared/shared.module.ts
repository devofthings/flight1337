import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityPipe } from "./pipes/city.pipe";
import { StatusColorPipe } from "./pipes/status-color.pipe";
import { StatusFilterPipe } from './pipes/status-filter.pipe';

@NgModule({
  declarations: [CityPipe, StatusColorPipe, StatusFilterPipe],
  imports: [CommonModule],
  exports: [CityPipe, StatusColorPipe, StatusFilterPipe],
})
export class SharedModule {}
