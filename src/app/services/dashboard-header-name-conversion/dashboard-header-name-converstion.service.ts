import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardHeaderNameConverstionService {
  keyMap = {
    barCode: "Bar Code",
    itemDesc: "Description",
    permPrice: "Retail Price",
    posId: "Position ID",
    profit: "Profit",
    sellPrice: "Sell Price",
    sku: "SKU Number",
    state: "State",
    store: "Store",
    empName: "Employee Name",
    empPass: "Password",
    empRole: "EmployeeE Role",
    taxRate: "Tax Rate",
    taxState: "Tax State",
    freeSku: "Free SKUs",
    freeSkuPrice: "Free SKU Price",
    itemGroupID: "Item Group ID",
    warranty: "Warrenty",
    upcList: "UPC List",
    itemId: "Item ID",
    div: "Division",
    dept: "Department",
    sub_dept: "Sub Department",
    style_code: "Style Code",
    pos_item_desc: "POS Description",
    discount_code: "Discount code",
    thresh_discount_code: "Threshold Discount Code",
    markdown_code: "Markdown Code",
    price_override_code: "Price Override code",
    alert_code: "Alert Code",
    tax_group: "Tax Group",
    allow_qty_key_flg: "Allow QTY Key Flag",
    serial_no_flg: "Serial No Flag",
    spiff_code: "Spiff Code",
    allow_ret_flg: "Allow Return Flag",
    promotionl_flg: "Promotional Flag",
    price_verify_flg: "Price Verify Flag",
    item_status_code: "Item Status Code",
    associate_grp_id: "Associate Group Id",
    item_type_code: "Item Type code",
    emailId: "Employee Id",
    emplName: "Employee Name",
    emplRole: "Employee Role",
    libraryUserName: "Liberary User Name",
    location: "Location",
    password: "Password",
    rowUpdtTms: "Row Update Time",
    updatedByBatch: "Updated By Batch",
    city: "City",
    rate: "Rate",
    roundRule: "Round Rule",
    alertCode: "Alert Code",
    retailPrice: "Retail Price",
    ageRestrictedItem: "Age Restricted Item",
    allowQtyKeyFlg: "Allow Quantity Key Flag",
    allowRetFlg: "Allow Return Flag",
    associateGrpId: "Accociate Group ID",
    discountCode: "Discount Code",
    hardwareSku: "Hardware SKU",
    id: "ID",
    itemStatusCode: "Item Status Code",
    itemTypeCode: "Item Type Code",
    markdownCode: "Mark Down Code",
    posItemDesc: "Position Item Description",
    priceOverrideCode: "Price Override Code",
    pricePromptSku: "Price Prompt SKU",
    priceVerifyFlg: "Price Verify Flag",
    promotionlFlg: "Promotional Flag",
    serialNoFlg: "Serial No Flag",
    sourceDb: "Source Data Base",
    spiffCode: "Spiff Code",
    styleCode: "Style Code",
    subDept: "Sub Department",
    taxGroup: "Tax Group",
    threshDiscountCode: "Threshold Discount Group",
    upcNumber: "UPC Number",
    userId: "User ID",
    vendorName: "Vendor Name",
    vendorNumber: "Vender Number",
    promoNum: "Promo Num",
    promoName: "Promo Name",
    discountName: "Discount Name",
    discountType: "Discount Type",
    promoStartDate: "Promo Start Date",
    promoEndDate: "Promo End Date",
    thresholdType: "Threshold Type",
    thresholdQty: "Threshold Qunatity",
    thresholdAmount: "Threshold Amount",
    discountQualifierType: "Discount Qualifier Type",
    discountQualifierValue: "Discount Qualifier Value",
    discountAppliesTo: "Discount Applies To",
    discountQuantity: "Discount Quantity",
    priceAboveLimit: "Price Above Limit",
    quantityLimit: "Quantity Limit",
    softHardLimit: "Soft Hard Limit",
    discountDesc: "Discount Discription",
    linkedList: "Linked SKUs"
  };
  printedDataNewHeader = {};

  constructor() {}

  headerNameConvert = dataForConvertion => {
    this.printedDataNewHeader = dataForConvertion.map(data => {
      return Object.keys(data).reduce((prev, next) => {
        if (next in this.keyMap) {
          prev[this.keyMap[next]] = data[next];
        } else {
          prev[next] = data[next];
        }
        return prev;
      }, {});
    });
    return this.printedDataNewHeader;
  };
}
