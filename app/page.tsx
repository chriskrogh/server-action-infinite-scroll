import { PAGE_SIZE } from "./consts";
import { List } from "./List";
import { ListItem } from "./ListItem";

export default function Home() {
  /**
   * In the real world, we'd fetch the initial items from the db / api.
   * For the sake of this example, we'll just generate some dummy data.
   */
  const initialItems = new Array(PAGE_SIZE)
    .fill(null)
    .map((_, i) => <ListItem key={i} item={i} />);

  return (
    <main className="flex flex-col p-8 items-center">
      <List initialData={{ payload: initialItems, pageNumber: 0 }} />
    </main>
  );
}
