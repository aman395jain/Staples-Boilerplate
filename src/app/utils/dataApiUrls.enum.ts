/**
 * API's url to call data from Restful api's for different data-logs.
 */
export enum dataUrls {
  getItemMaster = "http://localhost:8090/tdmapp/itemMstList",
  getPricePromptSKUs = "http://localhost:8090/tdmapp/pricePromptList",
  getItemMasterMain = "http://localhost:8090/tdmapp/itemMstList",
  getEmployee = "http://localhost:8090/tdmapp/employeeList",
  getTaxRate = "http://localhost:8090/tdmapp/taxList",
  getHardwareSKUs = "http://localhost:8090/tdmapp/itmMstHdwSkuList",
  getLinkedSKUs = "http://localhost:8090/tdmapp/linkedSkuList",
  getFreeSKUs = "http://www.mocky.io/v2/5cbeff80300000bb069ce463",
  getAgeRestrictiedSpecialRest = "http://localhost:8090/tdmapp/ageRestrictedList",
  getReturnDrivingLicence = "http://www.mocky.io/v2/5cbff4ce310000170e035f4e",
  getLowestPrice = "http://www.mocky.io/v2/5cbffef9310000580b035f87",
  getPOSA = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d",
  getOrder = "http://www.mocky.io/v2/5d0393333200004b00d7474b",
  getPromos = "http://localhost:8090/tdmapp/promoList",
  getItemGroup = "http://www.mocky.io/v2/5cf60cd9320000ac2b8ccf7c",
  getTaxExempt = "http://www.mocky.io/v2/5cffb39f3200005400eac913"
}
