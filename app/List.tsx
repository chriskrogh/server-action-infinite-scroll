"use client";

import flatMap from "lodash/flatMap";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Data, fetchItemsAction } from "./action";
import { Fragment, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

const INITIAL_PAGE_NUMBER = 0;

type Props = {
  initialData: Data;
};

export const List: React.FC<Props> = ({ initialData }) => {
  // Cache the rendered RSC payloads using react-query.
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["list"],
    // Using a server action to fetch more rendered items
    queryFn: ({ pageParam }) => fetchItemsAction(pageParam),
    initialPageParam: INITIAL_PAGE_NUMBER,
    initialData: {
      pages: [initialData],
      pageParams: [INITIAL_PAGE_NUMBER],
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage) return undefined;
      return lastPage.pageNumber + 1;
    },
  });

  // When the last element comes into view, we fetch the next page
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  // Flatten the pages into a single array of items
  const items = useMemo(() => {
    return flatMap(data?.pages, (page) => page.payload);
  }, [data?.pages]);

  return (
    <>
      {items.map((item, index) => (
        <Fragment key={index}>
          {/* ReactNodes rendered on the server! */}
          {item}
          {index === items.length - 3 && (
            <div ref={ref} className="invisible" />
          )}
        </Fragment>
      ))}
    </>
  );
};
