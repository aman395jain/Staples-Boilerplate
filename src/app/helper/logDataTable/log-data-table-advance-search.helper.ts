/**
 * @class LogDataTableHelper
 * Helper class for Advance search in log data table.
 */
// @dynamic
export default class LogDataTableHelper {
  /**
   * creating the object for search.
   * @param advanceSearchField
   */
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

  /**
   * Predict the columns for filtering.
   */
  static customFilterPredicate(table_name) {
    if (table_name === "Item_Master") {
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
    } else if (table_name === "Employee") {
      return function(data, filter) {
        console.log("in the employee filter the filter is", filter);
        console.log("in the employee filter the data is", data);

        if (
          filter.hasOwnProperty("Location") &&
          !filter.hasOwnProperty("Employee ID") &&
          !filter.hasOwnProperty("Role")
        ) {
          return data.location.includes(filter.Location);
        } else if (
          !filter.hasOwnProperty("Location") &&
          filter.hasOwnProperty("Employee ID") &&
          !filter.hasOwnProperty("Role")
        ) {
          return data.emplId.toString().includes(filter["Employee ID"]);
        } else if (
          !filter.hasOwnProperty("Location") &&
          !filter.hasOwnProperty("Employee ID") &&
          filter.hasOwnProperty("Role")
        ) {
          return data.emplRole.includes(filter.Role);
        } else if (
          filter.hasOwnProperty("Location") &&
          filter.hasOwnProperty("Employee ID") &&
          !filter.hasOwnProperty("Role")
        ) {
          return (
            data.location.includes(filter.Location) &&
            data.emplId.toString().includes(filter["Employee ID"])
          );
        } else if (
          filter.hasOwnProperty("Location") &&
          !filter.hasOwnProperty("Employee ID") &&
          filter.hasOwnProperty("Role")
        ) {
          return (
            data.store.includes(filter.store) &&
            data.emplRole.includes(filter.Role)
          );
        } else if (
          !filter.hasOwnProperty("Location") &&
          filter.hasOwnProperty("Employee ID") &&
          filter.hasOwnProperty("Role")
        ) {
          return (
            data.emplId.toString().includes(filter["Employee ID"]) &&
            data.emplRole.includes(filter.Role)
          );
        } else {
          data.location.includes(filter.Location) &&
            data.emplId.toString().includes(filter["Employee ID"]) &&
            data.emplRole.includes(filter.Role);
        }
      };
    } else if (table_name === "Order") {
      return function(data, filter) {
        console.log("in the order filter the filter is", filter);
        console.log("in the order filter the data is", data);

        if (
          filter.hasOwnProperty("Order Type") &&
          !filter.hasOwnProperty("Expiry Date") &&
          !filter.hasOwnProperty("Source")
        ) {
          return data.orderType.includes(filter["Order Type"]);
        } else if (
          !filter.hasOwnProperty("Order Type") &&
          filter.hasOwnProperty("Expiry Date") &&
          !filter.hasOwnProperty("Source")
        ) {
          return data.expiryDate.toString().includes(filter["Expiry Date"]);
        } else if (
          !filter.hasOwnProperty("Order Type") &&
          !filter.hasOwnProperty("Expiry Date") &&
          filter.hasOwnProperty("Source")
        ) {
          return data.source.includes(filter.Source);
        } else if (
          filter.hasOwnProperty("Order Type") &&
          filter.hasOwnProperty("Expiry Date") &&
          !filter.hasOwnProperty("Source")
        ) {
          return (
            data.orderType.includes(filter["Order Type"]) &&
            data.expiryDate.toString().includes(filter["Expiry Date"])
          );
        } else if (
          filter.hasOwnProperty("Order Type") &&
          !filter.hasOwnProperty("Expiry Date") &&
          filter.hasOwnProperty("Source")
        ) {
          return (
            data.orderType.includes(filter["Order Type"]) &&
            data.source.includes(filter.Source)
          );
        } else if (
          !filter.hasOwnProperty("Order Type") &&
          filter.hasOwnProperty("Expiry Date") &&
          filter.hasOwnProperty("Source")
        ) {
          return (
            data.expiryDate.toString().includes(filter["Expiry Date"]) &&
            data.source.includes(filter.Source)
          );
        } else {
          data.orderType.includes(filter["Order Type"]) &&
            data.expiryDate.toString().includes(filter["Expiry Date"]) &&
            data.source.includes(filter.Source);
        }
      };
    } else if (table_name === "Tax_Rates") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("State") &&
          !filter.hasOwnProperty("Rate") &&
          !filter.hasOwnProperty("Round Rule")
        ) {
          return data.state.includes(filter["State"]);
        } else if (
          !filter.hasOwnProperty("State") &&
          filter.hasOwnProperty("Rate") &&
          !filter.hasOwnProperty("Round Rule")
        ) {
          return data.rate.toString().includes(filter.Rate);
        } else if (
          !filter.hasOwnProperty("State") &&
          !filter.hasOwnProperty("Rate") &&
          filter.hasOwnProperty("Round Rule")
        ) {
          return data.roundRule.includes(filter["Round Rule"]);
        } else if (
          filter.hasOwnProperty("State") &&
          filter.hasOwnProperty("Rate") &&
          !filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.state.includes(filter.State) &&
            data.rate.toString().includes(filter["Rate"])
          );
        } else if (
          filter.hasOwnProperty("State") &&
          !filter.hasOwnProperty("Rate") &&
          filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.state.includes(filter.State) &&
            data.roundRule.includes(filter["Round Rule"])
          );
        } else if (
          !filter.hasOwnProperty("State") &&
          filter.hasOwnProperty("Rate") &&
          filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.rate.toString().includes(filter["Rate"]) &&
            data.roundRule.includes(filter["Round Rule"])
          );
        } else {
          data.state.includes(filter.State) &&
            data.rate.toString().includes(filter["Rate"]) &&
            data.roundRule.includes(filter["Round Rule"]);
        }
      };
    } else if (table_name === "Promos") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Discount Type") &&
          !filter.hasOwnProperty("Store") &&
          !filter.hasOwnProperty("Promo Name")
        ) {
          return data.discountType.includes(filter["Discount Type"]);
        } else if (
          !filter.hasOwnProperty("Discount Type") &&
          filter.hasOwnProperty("Store") &&
          !filter.hasOwnProperty("Promo Name")
        ) {
          return data.store.toString().includes(filter.Store);
        } else if (
          !filter.hasOwnProperty("Discount Type") &&
          !filter.hasOwnProperty("Store") &&
          filter.hasOwnProperty("Promo Name")
        ) {
          return data.promoName.includes(filter["Promo Name"]);
        } else if (
          filter.hasOwnProperty("Discount Type") &&
          filter.hasOwnProperty("Store") &&
          !filter.hasOwnProperty("Promo Name")
        ) {
          return (
            data.discountType.includes(filter["Discount Type"]) &&
            data.store.toString().includes(filter["Store"])
          );
        } else if (
          filter.hasOwnProperty("Discount Type") &&
          !filter.hasOwnProperty("Store") &&
          filter.hasOwnProperty("Promo Name")
        ) {
          return (
            data.discountType.includes(filter["Discount Type"]) &&
            data.promoName.includes(filter["Promo Name"])
          );
        } else if (
          !filter.hasOwnProperty("Discount Type") &&
          filter.hasOwnProperty("Store") &&
          filter.hasOwnProperty("Promo Name")
        ) {
          return (
            data.store.toString().includes(filter["Store"]) &&
            data.promoName.includes(filter["Promo Name"])
          );
        } else {
          data.discountType.includes(filter["Discount Type"]) &&
            data.store.toString().includes(filter["Store"]) &&
            data.promoName.includes(filter["Promo Name"]);
        }
      };
    } else if (table_name === "Price_Prompt_SKUs") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.itemDesc.includes(filter.Description);
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.sku.includes(filter.SKU);
        } else if (
          !filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return data.permPrice.toString().includes(filter["Retail Price"]);
        } else if (
          filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.permPrice.toString().includes(filter["Retail Price"])
          );
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.sku.includes(filter.SKU) &&
            data.permPrice.toString().includes(filter["Retail Price"])
          );
        } else {
          data.itemDesc.includes(filter.Description) &&
            data.sku.includes(filter.SKU) &&
            data.permPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Hardware_SKUs") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.posItemDesc.includes(filter.Description);
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.sku.includes(filter.SKU);
        } else if (
          !filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return data.retailPrice.toString().includes(filter["Retail Price"]);
        } else if (
          filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.posItemDesc.includes(filter.Description) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.posItemDesc.includes(filter.Description) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else {
          data.posItemDesc.includes(filter.Description) &&
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Linked_SKUs") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.itemDesc.includes(filter.Description);
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.sku.includes(filter.SKU);
        } else if (
          !filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return data.retailPrice.toString().includes(filter["Retail Price"]);
        } else if (
          filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else {
          data.itemDesc.includes(filter.Description) &&
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Bag_Fee_SKUs") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.itemDesc.includes(filter.Description);
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.sku.toString().includes(filter["SKU"]);
        } else if (
          !filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return data.retailPrice.toString().includes(filter["Retail Price"]);
        } else if (
          filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.sku.toString().includes(filter["SKU"])
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.sku.toString().includes(filter["SKU"]) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else {
          data.itemDesc.includes(filter.Description) &&
            data.sku.toString().includes(filter["SKU"]) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Age_Restricted_Special_rest") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.itemDesc.includes(filter.Description);
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return data.sku.toString().includes(filter["SKU"]);
        } else if (
          !filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return data.retailPrice.toString().includes(filter["Retail Price"]);
        } else if (
          filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.sku.toString().includes(filter["SKU"])
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else if (
          !filter.hasOwnProperty("Description") &&
          filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.sku.toString().includes(filter["SKU"]) &&
            data.retailPrice.toString().includes(filter["Retail Price"])
          );
        } else {
          data.itemDesc.includes(filter.Description) &&
            data.sku.toString().includes(filter["SKU"]) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    }
  }
}
