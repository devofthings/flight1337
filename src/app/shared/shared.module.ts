import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityPipe } from "./pipes/city.pipe";
import { StatusColorPipe } from "./pipes/status-color.pipe";

@NgModule({
  declarations: [CityPipe, StatusColorPipe],
  imports: [CommonModule],
  exports: [CityPipe, StatusColorPipe],
})
export class SharedModule {}
