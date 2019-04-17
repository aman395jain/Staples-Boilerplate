import { Injectable } from "@angular/core";

/**
 * @ngdoc service
 * @name LogDescriptionService
 *
 * @description
 * Share the data from data table to description modal.
 **/

@Injectable()
export class LogDescriptionService {
  constructor() {}

  setDescription(data) {
    console.log("in the logDescriptionService", data);
  }
}
