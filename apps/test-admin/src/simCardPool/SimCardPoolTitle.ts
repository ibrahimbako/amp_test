import { SimCardPool as TSimCardPool } from "../api/simCardPool/SimCardPool";

export const SIMCARDPOOL_TITLE_FIELD = "id";

export const SimCardPoolTitle = (record: TSimCardPool): string => {
  return record.id?.toString() || String(record.id);
};
