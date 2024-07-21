"use server";

import { PAGE_SIZE } from "./consts";
import { ListItem } from "./ListItem";

export type Data = {
  payload: React.ReactNode[];
  pageNumber: number;
};

/**
 * In the real world, this would try to fetch more data from the db / api,
 * and return rendered RSCs if there are more items to show or null if not.
 *
 * For the sake of this example, we'll just return an array with more items
 * if the page number is less than 5, and null otherwise.
 */
export const fetchItemsAction = (pageNumber: number): Data => {
  if (pageNumber > 5) {
    return {
      payload: [],
      pageNumber,
    };
  }

  // Generate some dummy data
  const data = new Array(PAGE_SIZE)
    .fill(null)
    .map((_, i) => i + pageNumber * PAGE_SIZE);

  // Render RSCs
  const items = data.map((i) => <ListItem key={i} item={i} />);

  // Return the rendered payload and the next page number
  return { payload: items, pageNumber };
};
