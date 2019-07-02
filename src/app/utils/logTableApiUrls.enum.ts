/**
 * API's url to call data from Restful api's for different data-logs.
 */
export enum logTableAPIUrls {
  getItemMaster = "http://lrtdqnasv104:8090/tdmapp/itemMstList",
  getPricePromptSKUs = "http://lrtdqnasv104:8090/tdmapp/pricePromptList",
  getItemMasterMain = "http://lrtdqnasv104:8090/tdmapp/itemMstList",
  getEmployee = "http://lrtdqnasv104:8090/tdmapp/employeeList",
  getTaxRate = "http://lrtdqnasv104:8090/tdmapp/taxList",
  getHardwareSKUs = "http://lrtdqnasv104:8090/tdmapp/itmMstHdwSkuList",
  getLinkedSKUs = "http://lrtdqnasv104:8090/tdmapp/linkedSkuList",
  getAgeRestrictiedSpecialRest = "http://lrtdqnasv104:8090/tdmapp/ageRestrictedList",
  getReturnDrivingLicence = "http://www.mocky.io/v2/5cbff4ce310000170e035f4e",
  getLowestPrice = "http://www.mocky.io/v2/5cbffef9310000580b035f87",
  getPOSA = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d",
  getOrder = "http://www.mocky.io/v2/5d1b259f3400005400000564",
  getPromos = "http://lrtdqnasv104:8090/tdmapp/promoList",
  getItemGroup = "http://lrtdqnasv104:8090/tdmapp/itemGroupList",
  getTaxExempt = "http://lrtdqnasv104:8090/tdmapp/taxExemptList",
  getTaxExemptValid = "http://lrtdqnasv104:8090/tdmapp/validTaxExemptList",
  getTaxExemptExpired = "http://lrtdqnasv104:8090/tdmapp/expiredTaxExemptList",
  getTaxExemptAboutToExpired = "http://lrtdqnasv104:8090/tdmapp/aboutToExpiredTaxExemptList",
  getTaxExemptDeactivate = "http://lrtdqnasv104:8090/tdmapp/deactivatedTaxExemptList",
  getRecycleFeeSKUs = "http://lrtdqnasv104:8090/tdmapp/recyclingFeeSkuList",
  getBagFeeSKUs = "http://lrtdqnasv104:8090/tdmapp/recyclingFeeSkuList",
  getEspSkus = "http://lrtdqnasv104:8090/tdmapp/espList"
}
