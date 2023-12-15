import { SortOrder } from "../../util/SortOrder";

export type SimCardPoolOrderByInput = {
  createdAt?: SortOrder;
  gammuExcluded?: SortOrder;
  id?: SortOrder;
  pool?: SortOrder;
  updatedAt?: SortOrder;
};
