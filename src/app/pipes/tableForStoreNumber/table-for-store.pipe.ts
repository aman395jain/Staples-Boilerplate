import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tableForStore"
})
export class TableForStorePipe implements PipeTransform {
  transform(displayedData: any, store: any): any {
    if (displayedData) {
      // console.log("in the filter displayed values:", displayedData);
      // console.log("in the filter store values:", store);
      displayedData.data.filter(function(dataValue) {
        return dataValue.store.includes(store);
      });

      // console.log(
      //   "in the filter displayed values after filter:",
      //   displayedData
      // );
    }
    if (store === undefined) {
      return displayedData;
    }
    return displayedData;
  }
}
