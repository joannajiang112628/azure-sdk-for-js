/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ExternalUserCreateOrUpdateOptionalParams,
  ExternalUserCreateOrUpdateResponse
} from "../models";

/** Interface representing a ExternalUser. */
export interface ExternalUser {
  /**
   * Create User inside elastic deployment which are used by customers to perform operations on the
   * elastic deployment
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    options?: ExternalUserCreateOrUpdateOptionalParams
  ): Promise<ExternalUserCreateOrUpdateResponse>;
}
