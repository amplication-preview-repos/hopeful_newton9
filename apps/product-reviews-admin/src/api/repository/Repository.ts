import { Review } from "../review/Review";

export type Repository = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
  url: string | null;
};
