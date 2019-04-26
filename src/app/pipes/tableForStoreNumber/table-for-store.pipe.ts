import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tableForStore"
})
export class TableForStorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
