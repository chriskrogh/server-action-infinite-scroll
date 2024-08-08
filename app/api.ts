import { PAGE_SIZE } from "./consts";

type Arg = {
  pageNumber: number;
};

/**
 * In the real world, we'd fetch the initial page from a db / api.
 * For the sake of this example, we'll just use an array of numbers.
 */
export const fetchData = async ({ pageNumber }: Arg) => {
  return new Array(PAGE_SIZE)
    .fill(null)
    .map((_, i) => i + pageNumber * PAGE_SIZE);
};
