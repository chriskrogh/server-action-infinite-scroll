import { fetchData } from "./api";
import { List } from "./List";
import { ListItem } from "./ListItem";

export default async function Home() {
  // Fetch the initial data
  const data = await fetchData({ pageNumber: 0 });

  // Render the initial items
  const initialItems = data.map((i) => <ListItem key={i} item={i} />);

  // Pass the initial items down to the client
  return (
    <main className="flex flex-col p-8 items-center">
      <List initialData={{ payload: initialItems, pageNumber: 0 }} />
    </main>
  );
}
