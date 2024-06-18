import { ReviewUpdateManyWithoutRepositoriesInput } from "./ReviewUpdateManyWithoutRepositoriesInput";

export type RepositoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutRepositoriesInput;
  url?: string | null;
};
