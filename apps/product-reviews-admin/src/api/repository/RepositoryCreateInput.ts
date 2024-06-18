import { ReviewCreateNestedManyWithoutRepositoriesInput } from "./ReviewCreateNestedManyWithoutRepositoriesInput";

export type RepositoryCreateInput = {
  description?: string | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutRepositoriesInput;
  url?: string | null;
};
