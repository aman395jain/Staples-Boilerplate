/**
 * @class LogDataTableHelper
 * Helper class for Advanced search in log data table.
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
          filter.hasOwnProperty("Retail Price") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Description")
        ) {
          return data.retailPrice.toString().includes(filter["Retail Price"]);
        } else if (
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price") &&
          !filter.hasOwnProperty("Description")
        ) {
          return data.sku.includes(filter.SKU);
        } else if (
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price") &&
          filter.hasOwnProperty("Description")
        ) {
          return (
            data.itemDesc.toLowerCase().includes(filter.Description) ||
            data.itemDesc.includes(filter.Description)
          );
        } else if (
          filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price") &&
          !filter.hasOwnProperty("Description")
        ) {
          return (
            data.retailPrice.toString().includes(filter["Retail Price"]) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price") &&
          filter.hasOwnProperty("Description")
        ) {
          return (
            data.retailPrice.toString().includes(filter["Retail Price"]) &&
            (data.itemDesc.toLowerCase().includes(filter.Description) ||
              data.itemDesc.includes(filter.Description))
          );
        } else if (
          filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price") &&
          filter.hasOwnProperty("Description")
        ) {
          return (
            data.sku.includes(filter.SKU) &&
            (data.itemDesc.toLowerCase().includes(filter.Description) ||
              data.itemDesc.includes(filter.Description))
          );
        } else {
          data.retailPrice.toString().includes(filter.retailPrice) &&
            data.sku.includes(filter.SKU) &&
            (data.itemDesc.toLowerCase().includes(filter.Description) ||
              data.itemDesc.includes(filter.Description));
        }
      };
    } else if (table_name === "Employee") {
      return function(data, filter) {
        // console.log("in the employee filter the filter is", filter);
        // console.log("in the employee filter the data is", data);
        // done
        if (
          filter.hasOwnProperty("Employee Name") &&
          !filter.hasOwnProperty("Employee ID") &&
          !filter.hasOwnProperty("Role")
        ) {
          return (
            data.emplName.includes(filter["Employee Name"]) ||
            data.emplName.toLowerCase().includes(filter["Employee Name"])
          );
        } else if (
          !filter.hasOwnProperty("Employee Name") &&
          filter.hasOwnProperty("Employee ID") &&
          !filter.hasOwnProperty("Role")
        ) {
          return data.emplId.toString().includes(filter["Employee ID"]);
        } else if (
          !filter.hasOwnProperty("Employee Name") &&
          !filter.hasOwnProperty("Employee ID") &&
          filter.hasOwnProperty("Role")
        ) {
          return (
            data.emplRole.includes(filter.Role) ||
            data.emplRole.toLowerCase().includes(filter.Role)
          );
        } else if (
          filter.hasOwnProperty("Employee Name") &&
          filter.hasOwnProperty("Employee ID") &&
          !filter.hasOwnProperty("Role")
        ) {
          return (
            (data.emplName.includes(filter["Employee Name"]) ||
              data.emplName.toLowerCase().includes(filter["Employee Name"])) &&
            data.emplId.toString().includes(filter["Employee ID"])
          );
        } else if (
          filter.hasOwnProperty("Employee Name") &&
          !filter.hasOwnProperty("Employee ID") &&
          filter.hasOwnProperty("Role")
        ) {
          return (
            (data.emplName.includes(filter["Employee Name"]) ||
              data.emplName.toLowerCase().includes(filter["Employee Name"])) &&
            (data.emplRole.includes(filter.Role) ||
              data.emplRole.toLowerCase().includes(filter.Role))
          );
        } else if (
          !filter.hasOwnProperty("Employee Name") &&
          filter.hasOwnProperty("Employee ID") &&
          filter.hasOwnProperty("Role")
        ) {
          return (
            data.emplId.toString().includes(filter["Employee ID"]) &&
            (data.emplRole.includes(filter.Role) ||
              data.emplRole.toLowerCase().includes(filter.Role))
          );
        } else {
          (data.emplName.includes(filter["Employee Name"]) ||
            data.emplName.toLowerCase().includes(filter["Employee Name"])) &&
            data.emplId.toString().includes(filter["Employee ID"]) &&
            (data.emplRole.includes(filter.Role) ||
              data.emplRole.toLowerCase().includes(filter.Role));
        }
      };
    } else if (table_name === "Order") {
      return function(data, filter) {
        // console.log("in the order filter the filter is", filter);
        // console.log("in the order filter the data is", data);

        if (
          filter.hasOwnProperty("Order Line Details") &&
          !filter.hasOwnProperty("Expiry Date") &&
          !filter.hasOwnProperty("Source")
        ) {
          return data.orderLineDetail.includes(filter["Order Line Details"]);
        } else if (
          !filter.hasOwnProperty("Order Line Details") &&
          filter.hasOwnProperty("Expiry Date") &&
          !filter.hasOwnProperty("Source")
        ) {
          return data.expiryDate.toString().includes(filter["Expiry Date"]);
        } else if (
          !filter.hasOwnProperty("Order Line Details") &&
          !filter.hasOwnProperty("Expiry Date") &&
          filter.hasOwnProperty("Source")
        ) {
          return data.source.includes(filter.Source);
        } else if (
          filter.hasOwnProperty("Order Line Details") &&
          filter.hasOwnProperty("Expiry Date") &&
          !filter.hasOwnProperty("Source")
        ) {
          return (
            data.orderLineDetail.includes(filter["Order Line Details"]) &&
            data.expiryDate.toString().includes(filter["Expiry Date"])
          );
        } else if (
          filter.hasOwnProperty("Order Line Details") &&
          !filter.hasOwnProperty("Expiry Date") &&
          filter.hasOwnProperty("Source")
        ) {
          return (
            data.orderLineDetail.includes(filter["Order Line Details"]) &&
            data.source.includes(filter.Source)
          );
        } else if (
          !filter.hasOwnProperty("Order Line Details") &&
          filter.hasOwnProperty("Expiry Date") &&
          filter.hasOwnProperty("Source")
        ) {
          return (
            data.expiryDate.toString().includes(filter["Expiry Date"]) &&
            data.source.includes(filter.Source)
          );
        } else {
          data.orderLineDetail.includes(filter["Order Line Details"]) &&
            data.expiryDate.toString().includes(filter["Expiry Date"]) &&
            data.source.includes(filter.Source);
        }
      };
    } else if (table_name === "Tax_Rates") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("State") &&
          !filter.hasOwnProperty("Tax Rate") &&
          !filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.state.includes(filter["State"]) ||
            data.state.toLowerCase().includes(filter["State"])
          );
        } else if (
          !filter.hasOwnProperty("State") &&
          filter.hasOwnProperty("Tax Rate") &&
          !filter.hasOwnProperty("Round Rule")
        ) {
          return data.rate.toString().includes(filter["Tax Rate"]);
        } else if (
          !filter.hasOwnProperty("State") &&
          !filter.hasOwnProperty("Tax Rate") &&
          filter.hasOwnProperty("Round Rule")
        ) {
          return data.roundRule.includes(filter["Round Rule"]);
        } else if (
          filter.hasOwnProperty("State") &&
          filter.hasOwnProperty("Tax Rate") &&
          !filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.state.includes(filter.State) &&
            data.rate.toString().includes(filter["Tax Rate"])
          );
        } else if (
          filter.hasOwnProperty("State") &&
          !filter.hasOwnProperty("Tax Rate") &&
          filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.state.includes(filter.State) &&
            data.roundRule.includes(filter["Round Rule"])
          );
        } else if (
          !filter.hasOwnProperty("State") &&
          filter.hasOwnProperty("Tax Rate") &&
          filter.hasOwnProperty("Round Rule")
        ) {
          return (
            data.rate.toString().includes(filter["Tax Rate"]) &&
            data.roundRule.includes(filter["Round Rule"])
          );
        } else {
          data.state.includes(filter.State) &&
            data.rate.toString().includes(filter["Tax Rate"]) &&
            data.roundRule.includes(filter["Round Rule"]);
        }
      };
    } else if (table_name === "Promos") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Discount Type") &&
          !filter.hasOwnProperty("Promo Num") &&
          !filter.hasOwnProperty("Promo Name")
        ) {
          return data.discountType.includes(filter["Discount Type"]);
        } else if (
          !filter.hasOwnProperty("Discount Type") &&
          filter.hasOwnProperty("Promo Num") &&
          !filter.hasOwnProperty("Promo Name")
        ) {
          return data.promoNum.toString().includes(filter["Promo Num"]);
        } else if (
          !filter.hasOwnProperty("Discount Type") &&
          !filter.hasOwnProperty("Promo Num") &&
          filter.hasOwnProperty("Promo Name")
        ) {
          return data.promoName.includes(filter["Promo Name"]);
        } else if (
          filter.hasOwnProperty("Discount Type") &&
          filter.hasOwnProperty("Promo Num") &&
          !filter.hasOwnProperty("Promo Name")
        ) {
          return (
            data.discountType.includes(filter["Discount Type"]) &&
            data.promoNum.toString().includes(filter["Promo Num"])
          );
        } else if (
          filter.hasOwnProperty("Discount Type") &&
          !filter.hasOwnProperty("Promo Num") &&
          filter.hasOwnProperty("Promo Name")
        ) {
          return (
            data.discountType.includes(filter["Discount Type"]) &&
            data.promoName.includes(filter["Promo Name"])
          );
        } else if (
          !filter.hasOwnProperty("Discount Type") &&
          filter.hasOwnProperty("Promo Num") &&
          filter.hasOwnProperty("Promo Name")
        ) {
          return (
            data.promoNum.toString().includes(filter["Promo Num"]) &&
            data.promoName.includes(filter["Promo Name"])
          );
        } else {
          data.discountType.includes(filter["Discount Type"]) &&
            data.promoNum.toString().includes(filter["Promo Num"]) &&
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
          return (
            data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)
          );
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
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
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
          (data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Hardware_SKUs") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)
          );
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
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
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
          (data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)) &&
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
          return (
            data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)
          );
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
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
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
          (data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Recycle_Fee_SKUs") {
      return function(data, filter) {
        if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          !filter.hasOwnProperty("Retail Price")
        ) {
          return (
            data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)
          );
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
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU)
          );
        } else if (
          filter.hasOwnProperty("Description") &&
          !filter.hasOwnProperty("SKU") &&
          filter.hasOwnProperty("Retail Price")
        ) {
          return (
            (data.itemDesc.includes(filter.Description) ||
              data.itemDesc.toLowerCase().includes(filter.Description)) &&
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
          (data.itemDesc.includes(filter.Description) ||
            data.itemDesc.toLowerCase().includes(filter.Description)) &&
            data.sku.includes(filter.SKU) &&
            data.retailPrice.toString().includes(filter["Retail Price"]);
        }
      };
    } else if (table_name === "Bottle_Deposit_SKUs") {
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
          return data.sku.toString().includes(filter.SKU);
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
