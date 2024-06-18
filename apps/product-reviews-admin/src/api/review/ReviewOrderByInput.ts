import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  rating?: SortOrder;
  repositoryId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
