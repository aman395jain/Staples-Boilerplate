/**
 * logDataTableConst: constants for different data tables
 * and consumed in log-data-table component.
 */
export const logDataTableConst = {
  item_Master: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "itemDesc",
      header: "Description",
      cell: (element: any) => `${element.itemDesc}`
    },
    {
      columnDef: "permPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.permPrice}`
    },
    {
      columnDef: "barCode",
      header: "UPC",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  item_Master_Main: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "itemDesc",
      header: "Description",
      cell: (element: any) => `${element.itemDesc}`
    },
    {
      columnDef: "permPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.retailPrice}`
    },
    {
      columnDef: "barCode",
      header: "UPC",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  price_Prompt_Sku: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "itemDesc",
      header: "Description",
      cell: (element: any) => `${element.itemDesc}`
    },
    {
      columnDef: "permPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.permPrice}`
    },
    {
      columnDef: "barCode",
      header: "Bar Code",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  employee: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "emplName ",
      header: "Employee Name",
      cell: (element: any) => `${element.emplName}`
    },
    {
      columnDef: "password",
      header: "Emp Password",
      cell: (element: any) => `${element.password}`
    },
    {
      columnDef: "emplRole",
      header: "Role",
      cell: (element: any) => `${element.emplRole}`
    },
    {
      columnDef: "store",
      header: "Store",
      cell: (element: any) => `${element.store}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  linked_SKUs: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "retailPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.retailPrice}`
    },
    {
      columnDef: "barCode",
      header: "UPC",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "warranty",
      header: "Warrenty",
      cell: (element: any) => `${element.warranty}`
    },
    {
      columnDef: "associateGrpId",
      header: "Item Group ID",
      cell: (element: any) => `${element.associateGrpId}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  tax_Rate: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "store ",
      header: "Store",
      cell: (element: any) => `${element.store}`
    },
    {
      columnDef: "rate",
      header: "Tax Rate",
      cell: (element: any) => `${element.rate}`
    },
    {
      columnDef: "taxState",
      header: "State/Jurisdiction",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  hardware_SKUs: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "itemDesc",
      header: "Description",
      cell: (element: any) => `${element.itemDesc}`
    },
    {
      columnDef: "retailPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.retailPrice}`
    },
    {
      columnDef: "barCode",
      header: "UPC",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "vendorName",
      header: "Vendor Name",
      cell: (element: any) => `${element.vendorName}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  free_SKUs: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "itemDesc",
      header: "Description",
      cell: (element: any) => `${element.itemDesc}`
    },
    {
      columnDef: "permPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.permPrice}`
    },
    {
      columnDef: "barCode",
      header: "UPC",
      cell: (element: any) => `${element.posId}`
    },
    {
      columnDef: "freeSku",
      header: "Free SKUs",
      cell: (element: any) => `${element.freeSku}`
    },
    {
      columnDef: "freeSkuPrice",
      header: "Free SKU Price",
      cell: (element: any) => `${element.freeSkuPrice}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  age_Restricted_Special_rest: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "sku",
      header: "SKU",
      cell: (element: any) => `${element.sku}`
    },
    {
      columnDef: "itemDesc",
      header: "Description",
      cell: (element: any) => `${element.itemDesc}`
    },
    {
      columnDef: "retailPrice",
      header: "Retail Price",
      cell: (element: any) => `${element.retailPrice}`
    },
    {
      columnDef: "barCode",
      header: "UPC",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "alertCode",
      header: "Alert Code",
      cell: (element: any) => `${element.alertCode}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  return_Driver_License: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "licenseNo",
      header: "License No.",
      cell: (element: any) => `${element.licenseNo}`
    },
    {
      columnDef: "licenseFrontPage",
      header: "License Front Image",
      cell: (element: any) => `${element.licenseFrontPage}`
    },
    {
      columnDef: "licenseBackPage",
      header: "License Back Image",
      cell: (element: any) => `${element.licenseBackPage}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  lowest_Price: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "skuNo",
      header: "SKU",
      cell: (element: any) => `${element.skuNo}`
    },
    {
      columnDef: "lastTransation",
      header: "Last Transation Date",
      cell: (element: any) => `${element.lastTransation}`
    },
    {
      columnDef: "lowPrice",
      header: "Lowest Price",
      cell: (element: any) => `${element.lowPrice}`
    },
    {
      columnDef: "reason",
      header: "Reason",
      cell: (element: any) => `${element.reason}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Promos: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "promoNum",
      header: "Promo Num",
      cell: (element: any) => `${element.promoNum}`
    },
    {
      columnDef: "promoName",
      header: "Promotion Name",
      cell: (element: any) => `${element.promoName}`
    },
    {
      columnDef: "discountName",
      header: "Discount Name",
      cell: (element: any) => `${element.discountName}`
    },
    {
      columnDef: "discountDesc",
      header: "Discount Discription",
      cell: (element: any) => `${element.discountDesc}`
    },
    {
      columnDef: "discountType",
      header: "Discount Type",
      cell: (element: any) => `${element.discountType}`
    },
    {
      columnDef: "promoStartDate",
      header: "Start Date",
      cell: (element: any) => `${element.promoStartDate}`
    },
    {
      columnDef: "promoEndDate",
      header: "End Date",
      cell: (element: any) => `${element.promoEndDate}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ]
};

/**
 * Print the bar-code in data tables.
 * @param element
 */
function barCodeDisplay(element) {
  try {
    return `${element.upcList[0]}`;
  } catch (e) {}
}
