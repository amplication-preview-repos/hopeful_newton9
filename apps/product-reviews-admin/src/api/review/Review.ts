import { Product } from "../product/Product";
import { Repository } from "../repository/Repository";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  repository?: Repository | null;
  updatedAt: Date;
  user?: User | null;
};
