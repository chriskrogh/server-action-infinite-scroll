"use client";

import { useQueryClient } from "@tanstack/react-query";

export const InvalidateButton: React.FC = () => {
  const queryClient = useQueryClient();

  const invalidateList = () =>
    queryClient.invalidateQueries({
      queryKey: ["list"],
    });

  return (
    <button
      className="p-1 m-0 border-2 border-blue-500 bg-none"
      onClick={invalidateList}
    >
      invalidate
    </button>
  );
};
