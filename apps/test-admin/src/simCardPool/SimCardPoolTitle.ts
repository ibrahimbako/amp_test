import { SimCardPool as TSimCardPool } from "../api/simCardPool/SimCardPool";

export const SIMCARDPOOL_TITLE_FIELD = "gammuExcluded";

export const SimCardPoolTitle = (record: TSimCardPool): string => {
  return record.gammuExcluded?.toString() || String(record.id);
};
