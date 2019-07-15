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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "emplId",
      header: "Empl ID",
      cell: (element: any) => `${element.emplId}`
    },
    {
      columnDef: "emplName ",
      header: "Empl Name",
      cell: (element: any) => `${element.emplName}`
    },
    {
      columnDef: "emplRole",
      header: "Role",
      cell: (element: any) => `${element.emplRole}`
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "itemGroupDescription",
      header: "Warranty /Protection Plan",
      cell: (element: any) => `${element.itemGroupDescription}`
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
  ESP_SKUs: [
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "itemGroupDescription",
      header: "ESP SKUs",
      cell: (element: any) => `${element.itemGroupDescription}`
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
      columnDef: "store",
      header: "Store",
      cell: (element: any) => `${element.store}`
    },
    {
      columnDef: "rate",
      header: "Tax Rate",
      cell: (element: any) => `${element.rate}`
    },
    {
      columnDef: "state",
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "serialNumber",
      header: "Serial Number",
      cell: (element: any) => `${element.serialNumber}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Recycle_Fee_SKUs: [
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "itemGroupDescription",
      header: "Item Group Description",
      cell: (element: any) => `${element.itemGroupDescription}`
    },
    {
      columnDef: "itemGroupId",
      header: "Item Group ID",
      cell: (element: any) => `${element.itemGroupId}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Bottle_Deposit_SKUs: [
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
      columnDef: "itemGroupDescription",
      header: "Item Group Description",
      cell: (element: any) => `${element.itemGroupDescription}`
    },
    {
      columnDef: "itemGroupId",
      header: "Item Group ID",
      cell: (element: any) => `${element.itemGroupId}`
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
      columnDef: "posItemDesc",
      header: "Description",
      cell: (element: any) => `${element.posItemDesc}`
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
  Item_Group: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "itemGroupId",
      header: "Item Group ID",
      cell: (element: any) => `${element.itemGroupId}`
    },
    {
      columnDef: "itemGroupDescription",
      header: "Item Group Description",
      cell: (element: any) => `${element.itemGroupDescription}`
    },
    {
      columnDef: "addOrAutoadd",
      header: "Auto-Add/Add",
      cell: (element: any) => `${element.addOrAutoadd}`
    },
    {
      columnDef: "promoId",
      header: "Promo ID",
      cell: (element: any) => `${element.promoId}`
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
      header: "Last Transaction Date",
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
      header: "Promotion No.",
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
      header: "Discount Description",
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
  ],
  Tax_Exempt: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Tax_Exempt_Valid: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Tax_Exempt_Expired: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Tax_Exempt_About_To_Expired: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Tax_Exempt_Deactivated: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Tax_Exempt_Incomplete: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Tax_Exempt_Not_Validated: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "taxExemptNbr",
      header: "Tax Exempt",
      cell: (element: any) => `${element.taxExemptNbr}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "phoneNo",
      header: "Phone No.",
      cell: (element: any) => `${element.phoneNo}`
    },
    {
      columnDef: "companyName",
      header: "Company Name",
      cell: (element: any) => `${element.companyName}`
    },
    {
      columnDef: "state",
      header: "State",
      cell: (element: any) => `${element.state}`
    },
    {
      columnDef: "status",
      header: "Status",
      cell: (element: any) => `${element.status}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Order: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "orderType",
      header: "Order Type",
      cell: (element: any) => `${element.orderType}`
    },
    {
      columnDef: "source",
      header: "Source",
      cell: (element: any) => `${element.source}`
    },
    {
      columnDef: "orderNo",
      header: "Order",
      cell: (element: any) => `${element.orderNo}`
    },
    {
      columnDef: "orderLineDetail",
      header: "Order Line Details",
      cell: (element: any) => `${element.orderLineDetail}`
    },
    {
      columnDef: "expiryDate",
      header: "Order Expiry Date",
      cell: (element: any) => `${element.expiryDate}`
    },
    {
      columnDef: "sourceCreateOrderXml",
      header: "Source Create Order XML",
      cell: (element: any) => `${element.sourceCreateOrderXml}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  Rewards: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "rewardsNumber",
      header: "Rewards Number",
      cell: (element: any) => `${element.rewardsNumber}`
    },
    {
      columnDef: "firstName",
      header: "First Name",
      cell: (element: any) => `${element.firstName}`
    },
    {
      columnDef: "lastName",
      header: "Last Name",
      cell: (element: any) => `${element.lastName}`
    },
    {
      columnDef: "phoneNum",
      header: "Phone Number",
      cell: (element: any) => `${element.phoneNum}`
    },
    {
      columnDef: "address",
      header: "Address",
      cell: (element: any) => `${element.address}`
    },
    {
      columnDef: "rewardsTier",
      header: "Tier",
      cell: (element: any) => `${element.rewardsTier}`
    },
    {
      columnDef: "recieptSelection",
      header: "Receipt Selection Option",
      cell: (element: any) => `${element.recieptSelection}`
    },
    {
      columnDef: "emailAddress",
      header: "Email Address",
      cell: (element: any) => `${element.emailAddress}`
    },
    {
      columnDef: "action",
      header: null,
      cell: null
    }
  ],
  CBP: [
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
      columnDef: "upc",
      header: "UPC",
      cell: (element: any) => `${element.upc}`
    },
    {
      columnDef: "promo",
      header: "Promo",
      cell: (element: any) => `${element.promo}`
    },
    {
      columnDef: "basePrice",
      header: "POS Price",
      cell: (element: any) => `${element.basePrice}`
    },
    {
      columnDef: "listPrice",
      header: "List Price",
      cell: (element: any) => `${element.listPrice}`
    },
    {
      columnDef: "cbpOfferType",
      header: "CBP Offer Type",
      cell: (element: any) => `${element.cbpOfferType}`
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
  CEP: [
    {
      columnDef: "select",
      header: null,
      cell: null
    },
    {
      columnDef: "adcostEventId",
      header: "Adcost Event ID",
      cell: (element: any) => `${element.adcostEventId}`
    },
    {
      columnDef: "offerDescription",
      header: "Offer Description",
      cell: (element: any) => `${element.offerDescription}`
    },
    {
      columnDef: "offerType",
      header: "Offer Type",
      cell: (element: any) => `${element.offerType}`
    },
    {
      columnDef: "reIssueFlag",
      header: "Re Issue Flag",
      cell: (element: any) => `${element.reIssueFlag}`
    },
    {
      columnDef: "skuNumber",
      header: "SKU",
      cell: (element: any) => `${element.skuNumber}`
    },
    {
      columnDef: "upcList",
      header: "UPC",
      cell: (element: any) => barCodeDisplay(element)
    },
    {
      columnDef: "customers",
      header: "Customer",
      cell: (element: any) => `${element.customers}`
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
