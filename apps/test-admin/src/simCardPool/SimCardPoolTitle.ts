import { SimCardPool as TSimCardPool } from "../api/simCardPool/SimCardPool";

export const SIMCARDPOOL_TITLE_FIELD = "pool";

export const SimCardPoolTitle = (record: TSimCardPool): string => {
  return record.pool?.toString() || String(record.id);
};
