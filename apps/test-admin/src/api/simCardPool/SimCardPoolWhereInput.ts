import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SimCardPoolWhereInput = {
  gammuExcluded?: StringNullableFilter;
  id?: StringFilter;
  pool?: StringFilter;
};
