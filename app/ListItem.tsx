// ListItem is a server component
import "server-only";

import { InvalidateButton } from "./InvalidateButton";

type Props = {
  item: number;
};

export const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-4 items-center w-full h-[200px] p-2 border-2 border-red-500">
      <p>{item}</p>
      <InvalidateButton />
    </div>
  );
};
