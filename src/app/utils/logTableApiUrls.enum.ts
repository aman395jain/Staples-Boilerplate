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
  getReturnDrivingLicense = "http://www.mocky.io/v2/5d1cfe7034000025b1b601a7",
  getLowestPrice = "http://www.mocky.io/v2/5d1cfeb5340000dcb0b601a8",
  getPOSA = "http://www.mocky.io/v2/5d1cfb9134000023b1b60198",
  getOrder = "http://www.mocky.io/v2/5d1b259f3400005400000564",
  getPromos = "http://lrtdqnasv104:8090/tdmapp/promoList",
  getItemGroup = "http://lrtdqnasv104:8090/tdmapp/itemGroupList",
  getTaxExempt = "http://lrtdqnasv104:8090/tdmapp/taxExemptList",
  getTaxExemptValid = "http://lrtdqnasv104:8090/tdmapp/taxEmpList",
  getTaxExemptExpired = "http://lrtdqnasv104:8090/tdmapp/taxEmpList",
  getTaxExemptAboutToExpired = "http://lrtdqnasv104:8090/tdmapp/aboutToExpiredTaxExemptList",
  getTaxExemptDeactivate = "http://lrtdqnasv104:8090/tdmapp/taxEmpList",
  getTaxExemptNotValidated = "http://lrtdqnasv104:8090/tdmapp/taxEmpList",
  getTaxExemptIncomplete = "http://lrtdqnasv104:8090/tdmapp/taxEmpList",
  getRecycleFeeSKUs = "http://lrtdqnasv104:8090/tdmapp/recyclingFeeSkuList",
  getBagFeeSKUs = "http://lrtdqnasv104:8090/tdmapp/recyclingFeeSkuList",
  getEspSkus = "http://lrtdqnasv104:8090/tdmapp/espList",
  getItemGroupData = "http://lrtdqnasv104:8090/tdmapp/itmMstListByAssoGrpId",
  getCBP = "http://lrtdqnasv104:8090/tdmapp/cbpList"
}
