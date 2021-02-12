import { SavePurchases } from "./save-purchases";

import { PurchasesModel } from "@/domain/models";

export interface LoadPurchases {
  load: () => Promise<Array<LoadPurchases.Result>>;
}

export namespace LoadPurchases {
  export type Result = PurchasesModel;
}
