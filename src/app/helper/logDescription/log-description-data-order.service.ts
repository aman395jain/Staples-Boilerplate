import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LogDescriptionDataOrderService {
  private dataToBeDisplayedOnModal: any[] = [];
  private mainDataToDisplay: object = {};
  private rowDataWithLinkedSKUs: object = {};
  private tableName: string = "";

  constructor() {}

  tableNameByComponent(tName) {
    this.tableName = tName;
  }

  getTableName() {
    return this.tableName;
  }

  /**
   * For classification of data of Modal.
   * @param row
   */
  dataOrderClassification(row, tableName) {
    let rowDataWithRestData = {};
    Object.assign(rowDataWithRestData, row);
    if (tableName === "Item_Master") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        store: row.store
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["store"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Price_Prompt_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        store: row.store
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["store"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Hardware_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        vendorName: row.vendorName
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["vendorName"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Linked_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        warranty: row.itemGroupDescription,
        retailPrice: row.retailPrice,
        associateGrpId: row.associateGrpId,
        addOrAutoadd: row.addOrAutoadd,
        itemDesc: row.itemDesc
      };
      this.rowDataWithLinkedSKUs = {
        linkedList: row.linkedList
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemGroupDescription"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["associateGrpId"];
      delete rowDataWithRestData["linkedList"];
      delete rowDataWithRestData["addOrAutoadd"];
      delete rowDataWithRestData["itemDesc"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      this.dataToBeDisplayedOnModal[2] = this.rowDataWithLinkedSKUs;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Recycle_Fee_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        upcList: row.upcList,
        retailPrice: row.retailPrice,
        feeSku: row.feeSku,
        feeSkuPrice: row.feeSkuPrice,
        itemGroupDescription: row.itemGroupDescription,
        addOrAutoadd: row.addOrAutoadd
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["feeSku"];
      delete rowDataWithRestData["feeSkuPrice"];
      delete rowDataWithRestData["itemGroupDescription"];
      delete rowDataWithRestData["linkedList"];
      delete rowDataWithRestData["addOrAutoadd"];
      delete rowDataWithRestData["upcList"];
      this.rowDataWithLinkedSKUs = {
        linkedList: row.linkedList
      };

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Bag_Fee_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        upcList: row.upcList,
        feeSku: row.feeSku,
        feeSkuPrice: row.feeSkuPrice,
        itemGroupDescription: row.itemGroupDescription,
        addOrAutoadd: row.addOrAutoadd
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["feeSku"];
      delete rowDataWithRestData["feeSkuPrice"];
      delete rowDataWithRestData["itemGroupDescription"];
      delete rowDataWithRestData["linkedList"];
      delete rowDataWithRestData["addOrAutoadd"];
      delete rowDataWithRestData["upcList"];
      this.rowDataWithLinkedSKUs = {
        linkedList: row.linkedList
      };

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "ESP_Skus") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        feeSku: row.feeSku,
        feeSkuPrice: row.feeSkuPrice,
        itemGroupDescription: row.itemGroupDescription,
        addOrAutoadd: row.addOrAutoadd
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["feeSku"];
      delete rowDataWithRestData["feeSkuPrice"];
      delete rowDataWithRestData["itemGroupDescription"];
      delete rowDataWithRestData["addOrAutoadd"];
      delete rowDataWithRestData["linkedList"];

      this.rowDataWithLinkedSKUs = {
        linkedList: row.linkedList
      };

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Age_Restricted_Special_rest") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        upcList: row.upcList,
        retailPrice: row.retailPrice,
        alertCode: row.alertCode
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["alertCode"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Employee") {
      this.mainDataToDisplay = {
        emplName: row.emplName,
        emplId: row.emplId,
        emplRole: row.emplRole,
        store: row.store
      };
      delete rowDataWithRestData["emplName"];
      delete rowDataWithRestData["emplId"];
      delete rowDataWithRestData["emplRole"];
      delete rowDataWithRestData["store"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Rates") {
      this.mainDataToDisplay = {
        store: row.store,
        rate: row.rate,
        state: row.state
      };
      delete rowDataWithRestData["store"];
      delete rowDataWithRestData["rate"];
      delete rowDataWithRestData["state"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Promos") {
      this.mainDataToDisplay = {
        promoNum: row.promoNum,
        promoName: row.promoName,
        discountName: row.discountName,
        discountType: row.discountType,
        discountDesc: row.discountDesc,
        promoStartDate: row.promoStartDate,
        promoEndDate: row.promoEndDate
      };
      delete rowDataWithRestData["promoNum"];
      delete rowDataWithRestData["promoName"];
      delete rowDataWithRestData["discountName"];
      delete rowDataWithRestData["discountType"];
      delete rowDataWithRestData["discountDesc"];
      delete rowDataWithRestData["promoStartDate"];
      delete rowDataWithRestData["promoEndDate"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt_Valid") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt_Expired") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt_About_To_Expired") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt_Deactivated") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt_Not_Validated") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Exempt_Incomplete") {
      this.mainDataToDisplay = {
        taxExemptNbr: row.taxExemptNbr,
        name: row.name,
        phoneNo: row.phoneNo,
        companyName: row.companyName,
        state: row.state,
        status: row.status
      };
      delete rowDataWithRestData["taxExemptNbr"];
      delete rowDataWithRestData["name"];
      delete rowDataWithRestData["phoneNo"];
      delete rowDataWithRestData["companyName"];
      delete rowDataWithRestData["state"];
      delete rowDataWithRestData["status"];
      delete rowDataWithRestData["id"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Order") {
      this.mainDataToDisplay = {
        orderNo: row.orderNo,
        orderType: row.orderType,
        source: row.source,
        sourceCreateOrderXml: row.sourceCreateOrderXml
      };
      delete rowDataWithRestData["orderNo"];
      delete rowDataWithRestData["orderType"];
      delete rowDataWithRestData["source"];
      delete rowDataWithRestData["sourceCreateOrderXml"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Item_Group") {
      this.mainDataToDisplay = {
        itemGroupId: row.itemGroupId,
        itemGroupDescription: row.itemGroupDescription,
        promoId: row.promoId
      };
      delete rowDataWithRestData["itemGroupId"];
      delete rowDataWithRestData["itemGroupDescription"];
      delete rowDataWithRestData["promoId"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "CEP") {
      this.mainDataToDisplay = {
        adcostEventId: row.adcostEventId,
        offerDescription: row.offerDescription,
        offerType: row.offerType,
        skuNumber: row.skuNumber,
        reIssueFlag: row.reIssueFlag,
        upcList: row.upcList
      };
      delete rowDataWithRestData["adcostEventId"];
      delete rowDataWithRestData["offerDescription"];
      delete rowDataWithRestData["offerType"];
      delete rowDataWithRestData["skuNumber"];
      delete rowDataWithRestData["reIssueFlag"];
      delete rowDataWithRestData["upcList"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "CBP") {
      this.mainDataToDisplay = {
        sku: row.sku,
        store: row.store,
        upc: row.upc,
        promo: row.promo,
        basePrice: row.basePrice,
        listPrice: row.listPrice
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["store"];
      delete rowDataWithRestData["upc"];
      delete rowDataWithRestData["promo"];
      delete rowDataWithRestData["basePrice"];
      delete rowDataWithRestData["listPrice"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    }
  }

  /**
   * Restrict the searching according to dashboard colunms.
   * @param tableName
   */
  filterRestrictionOnlyForDisplayedRows(tableName) {
    if (tableName === "Employee") {
      return function(data, filter: string): boolean {
        return (
          data.emplName.toLowerCase().includes(filter) ||
          data.emplName.includes(filter) ||
          data.emplId
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.emplId.toString().includes(filter) ||
          data.emplRole
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.emplRole.toString().includes(filter) ||
          data.store.toString().includes(filter)
        );
      };
    } else if (tableName === "Tax_Rates") {
      return function(data, filter: string): boolean {
        return (
          data.store.toString().includes(filter) ||
          data.rate.toString().includes(filter) ||
          data.state
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.state.toString().includes(filter)
        );
      };
    } else if (tableName === "Item_Master") {
      return function(data, filter: string): boolean {
        return (
          data.sku.toLowerCase().includes(filter) ||
          data.sku.includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.itemDesc.includes(filter) ||
          data.retailPrice.toString().includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Price_Prompt_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku.toLowerCase().includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.itemDesc.includes(filter) ||
          data.retailPrice.toString().includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Linked_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku.toLowerCase().includes(filter) ||
          data.retailPrice.toString().includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.itemDesc.includes(filter) ||
          data.itemGroupDescription
            .toLowerCase()
            .toString()
            .includes(filter) ||
          data.itemGroupDescription.toString().includes(filter) ||
          data.itemGroupId
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Hardware_SKUs") {
      // Need to add Vendor Name check
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc.toString().includes(filter) ||
          data.retailPrice.toString().includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Recycle_Fee_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.itemDesc.includes(filter) ||
          data.retailPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Bag_Fee_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.itemDesc.includes(filter) ||
          data.retailPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "ESP_Skus") {
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.itemDesc.includes(filter) ||
          data.itemGroupDescription.includes(filter) ||
          data.itemGroupDescription.toLowerCase().includes(filter) ||
          data.retailPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemGroupId.toLowerCase().includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Age_Restricted_Special_rest") {
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc.toLowerCase().includes(filter) ||
          data.retailPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.alertCode === filter ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Item_Group") {
      return function(data, filter: string): boolean {
        return (
          data.itemGroupId
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemGroupDescription.toLowerCase().includes(filter) ||
          data.itemGroupDescription.includes(filter) ||
          data.addOrAutoadd.includes(filter) ||
          data.addOrAutoadd.toLowerCase().includes(filter)
        );
      };
    } else if (tableName === "Order") {
      return function(data, filter: string): boolean {
        return (
          data.orderType
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.orderNo
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.sourceCreateOrderXml
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Promos") {
      return function(data, filter: string): boolean {
        return (
          data.promoNum
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.promoName
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.promoName.toString().includes(filter) ||
          data.discountName.toLowerCase().includes(filter) ||
          data.discountName.includes(filter) ||
          data.discountDesc.toLowerCase().includes(filter) ||
          data.discountDesc.includes(filter) ||
          data.discountType.toLowerCase().includes(filter) ||
          data.discountType.toLowerCase().includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Tax_Exempt") {
      return function(data, filter: string): boolean {
        return (
          data.taxExemptNbr.toLowerCase().includes(filter) ||
          data.name.toLowerCase().includes(filter) ||
          data.name.includes(filter) ||
          data.govtCertificate.toLowerCase().includes(filter) ||
          data.govtCertificate.includes(filter) ||
          data.companyName.toLowerCase().includes(filter) ||
          data.companyName.includes(filter) ||
          data.phoneNo.toLowerCase().includes(filter)
        );
      };
    } else if (tableName === "Tax_Exempt_Valid") {
      return function(data, filter: string): boolean {
        return (
          data.taxExemptNbr.toLowerCase().includes(filter) ||
          data.name.toLowerCase().includes(filter) ||
          data.name.includes(filter) ||
          data.govtCertificate.toLowerCase().includes(filter) ||
          data.govtCertificate.includes(filter) ||
          data.companyName.toLowerCase().includes(filter) ||
          data.companyName.includes(filter) ||
          data.phoneNo.toLowerCase().includes(filter)
        );
      };
    } else if (tableName === "Tax_Exempt_Expired") {
      return function(data, filter: string): boolean {
        return (
          data.taxExemptNbr.toLowerCase().includes(filter) ||
          data.name.toLowerCase().includes(filter) ||
          data.name.includes(filter) ||
          data.govtCertificate.toLowerCase().includes(filter) ||
          data.govtCertificate.includes(filter) ||
          data.companyName.toLowerCase().includes(filter) ||
          data.companyName.includes(filter) ||
          data.phoneNo.toLowerCase().includes(filter)
        );
      };
    } else if (tableName === "Tax_Exempt_About_To_Expired") {
      return function(data, filter: string): boolean {
        return (
          data.taxExemptNbr.toLowerCase().includes(filter) ||
          data.name.toLowerCase().includes(filter) ||
          data.name.includes(filter) ||
          data.govtCertificate.toLowerCase().includes(filter) ||
          data.govtCertificate.includes(filter) ||
          data.companyName.toLowerCase().includes(filter) ||
          data.companyName.includes(filter) ||
          data.phoneNo.toLowerCase().includes(filter)
        );
      };
    } else if (tableName === "Tax_Exempt_Deactivated") {
      return function(data, filter: string): boolean {
        return (
          data.taxExemptNbr.toLowerCase().includes(filter) ||
          data.name.toLowerCase().includes(filter) ||
          data.name.includes(filter) ||
          data.govtCertificate.toLowerCase().includes(filter) ||
          data.govtCertificate.includes(filter) ||
          data.companyName.toLowerCase().includes(filter) ||
          data.companyName.includes(filter) ||
          data.phoneNo.toLowerCase().includes(filter)
        );
      };
    } else if (tableName === "CBP") {
      return function(data, filter: string): boolean {
        return (
          data.comments.toLowerCase().includes(filter) ||
          data.comments.includes(filter) ||
          data.promo.toLowerCase().includes(filter) ||
          data.promo.includes(filter) ||
          data.basePrice.toString().includes(filter) ||
          data.listPrice.toString().includes(filter) ||
          data.sku.toString().includes(filter) ||
          data.store.toString().includes(filter)
        );
      };
    } else if (tableName === "CEP") {
      return function(data, filter: string): boolean {
        return (
          data.adcostEventId.toLowerCase().includes(filter) ||
          data.adcostEventId.includes(filter) ||
          data.offerDescription.toLowerCase().includes(filter) ||
          data.offerDescription.includes(filter) ||
          data.store.toString().includes(filter) ||
          data.reIssueFlag.toString().includes(filter) ||
          data.skuNumber.toString().includes(filter) ||
          data.customers.toString().includes(filter) ||
          data.upcList.toString().includes(filter)
        );
      };
    }
  }
}
