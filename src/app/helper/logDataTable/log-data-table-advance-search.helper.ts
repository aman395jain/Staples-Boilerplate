export default class LogDataTableHelper {
  static advanceSearchDataObject(advanceSearchField) {
    let advanceSearchObject: any[] = [];
    if (advanceSearchField.length === 1) {
      advanceSearchObject = [
        {
          [advanceSearchField[0].name]: advanceSearchField[0].fieldValue
        }
      ];
      return advanceSearchObject;
    } else if (advanceSearchField.length === 2) {
      advanceSearchObject = [
        {
          [advanceSearchField[0].name]: advanceSearchField[0].fieldValue,
          [advanceSearchField[1].name]: advanceSearchField[1].fieldValue
        }
      ];
      return advanceSearchObject;
    } else if (advanceSearchField.length === 3) {
      advanceSearchObject = [
        {
          [advanceSearchField[0].name]: advanceSearchField[0].fieldValue,
          [advanceSearchField[1].name]: advanceSearchField[1].fieldValue,
          [advanceSearchField[2].name]: advanceSearchField[2].fieldValue
        }
      ];
      return advanceSearchObject;
    }
  }

  static customFilterPredicate() {
    return function(data, filter) {
      if (
        filter.hasOwnProperty("store") &&
        !filter.hasOwnProperty("sku") &&
        !filter.hasOwnProperty("Description")
      ) {
        return data.store.includes(filter.store);
      } else if (
        filter.hasOwnProperty("sku") &&
        !filter.hasOwnProperty("store") &&
        !filter.hasOwnProperty("Description")
      ) {
        return data.sku.includes(filter.sku);
      } else if (
        !filter.hasOwnProperty("sku") &&
        !filter.hasOwnProperty("store") &&
        filter.hasOwnProperty("Description")
      ) {
        return data.itemDesc.toLowerCase().includes(filter.Description);
      } else if (
        filter.hasOwnProperty("sku") &&
        filter.hasOwnProperty("store") &&
        !filter.hasOwnProperty("Description")
      ) {
        return (
          data.store.includes(filter.store) && data.sku.includes(filter.sku)
        );
      } else if (
        !filter.hasOwnProperty("sku") &&
        filter.hasOwnProperty("store") &&
        filter.hasOwnProperty("Description")
      ) {
        return (
          data.store.includes(filter.store) &&
          data.itemDesc.toLowerCase().includes(filter.Description)
        );
      } else if (
        filter.hasOwnProperty("sku") &&
        !filter.hasOwnProperty("store") &&
        filter.hasOwnProperty("Description")
      ) {
        return (
          data.sku.includes(filter.sku) &&
          data.itemDesc.toLowerCase().includes(filter.Description)
        );
      } else {
        data.store.includes(filter.store) &&
          data.sku.includes(filter.sku) &&
          data.itemDesc.toLowerCase().includes(filter.Description);
      }
    };
  }
}
