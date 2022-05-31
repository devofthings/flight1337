import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "statusColor",
  pure: true,
})
export class StatusColorPipe implements PipeTransform {
  transform(delayed: boolean, active: boolean): string {
    if (active) {
      return "white";
    } else {
      return delayed ? "orange" : "green";
    }
  }
}
