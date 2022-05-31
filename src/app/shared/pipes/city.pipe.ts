import { Pipe, PipeTransform } from "@angular/core";

type LongShort = "long" | "short";

@Pipe({
  name: "city",
  pure: true,
})
export class CityPipe implements PipeTransform {
  transform(value: string, fmt: LongShort): string {
    let short, long;
    switch (value) {
      case "Graz":
        short = "GRZ";
        long = "Flughafen Graz Thalerhof";
        break;
      case "Hamburg":
        short = "HAM";
        long = "Airport Hamburg Fulsbüttel Helmut Schmidt";
        break;
      case "Wien":
        short = "VIE";
        long = "Flughafen Wien Schwechat";
        break;
      default:
        short = long = value;
    }

    if (fmt === "short") {
      return short;
    } else return long;
  }
}
