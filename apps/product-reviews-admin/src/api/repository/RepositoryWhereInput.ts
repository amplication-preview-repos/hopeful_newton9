import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type RepositoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  url?: StringNullableFilter;
};
