import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tableForStore"
})
export class TableForStorePipe implements PipeTransform {
  transform(displayedData: any, store: any): any {
    if (displayedData && store) {
      displayedData.data.map(data => {
        console.log("in the filter displayed values:", data);

        console.log("in the filter store values:", store);
      });
    }
    console.log("in the filter displayed values:", displayedData);
    if (store === undefined) {
      return displayedData;
    }
    return displayedData;
  }
}
