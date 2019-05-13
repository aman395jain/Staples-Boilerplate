import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UniqueStoreService {
  constructor() {}

  uniqueStore = storeData => {
    let aux = {};
    return storeData.reduce((tot, curr) => {
      if (!aux[curr]) {
        aux[curr] = 1;
        tot.push(curr);
      }
      return tot;
    }, []);
  };

  applyFilterOnStore(filterValue: string, dataByAPI) {
    // console.log("in the search filter service", filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

    if (filterValue === "select a store") {
      return (dataByAPI.filter = null);
    } else {
      return (dataByAPI.filter = filterValue);
    }
  }
}
