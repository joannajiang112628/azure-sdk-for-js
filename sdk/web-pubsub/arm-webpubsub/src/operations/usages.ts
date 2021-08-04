/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebPubSubManagementClientContext } from "../webPubSubManagementClientContext";
import {
  SignalRServiceUsage,
  UsagesListNextOptionalParams,
  UsagesListOptionalParams,
  UsagesListResponse,
  UsagesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Usages. */
export class UsagesImpl implements Usages {
  private readonly client: WebPubSubManagementClientContext;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: WebPubSubManagementClientContext) {
    this.client = client;
  }

  /**
   * List resource usage quotas by location.
   * @param location the location like "eastus"
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: UsagesListOptionalParams
  ): PagedAsyncIterableIterator<SignalRServiceUsage> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: UsagesListOptionalParams
  ): AsyncIterableIterator<SignalRServiceUsage[]> {
    let result = await this._list(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    options?: UsagesListOptionalParams
  ): AsyncIterableIterator<SignalRServiceUsage> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * List resource usage quotas by location.
   * @param location the location like "eastus"
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: UsagesListOptionalParams
  ): Promise<UsagesListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param location the location like "eastus"
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: UsagesListNextOptionalParams
  ): Promise<UsagesListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SignalRServiceUsageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.location,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SignalRServiceUsageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.location,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
