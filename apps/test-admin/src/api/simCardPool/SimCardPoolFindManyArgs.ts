import { SimCardPoolWhereInput } from "./SimCardPoolWhereInput";
import { SimCardPoolOrderByInput } from "./SimCardPoolOrderByInput";

export type SimCardPoolFindManyArgs = {
  where?: SimCardPoolWhereInput;
  orderBy?: Array<SimCardPoolOrderByInput>;
  skip?: number;
  take?: number;
};
