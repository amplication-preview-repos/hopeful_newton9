import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  repository?: RepositoryWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
