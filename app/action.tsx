"use server";

import { fetchData } from "./api";
import { ListItem } from "./ListItem";

export type Data = {
  payload: React.ReactNode[];
  pageNumber: number;
};

export const fetchItemsAction = async (pageNumber: number) => {
  // Fetch data
  const data = await fetchData({ pageNumber });

  // Render RSCs
  const items = data.map((i) => <ListItem key={i} item={i} />);

  // Return the rendered payload and the respective page number
  return { payload: items, pageNumber };
};
