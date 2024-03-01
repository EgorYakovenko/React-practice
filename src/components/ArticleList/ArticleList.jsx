export default function ArticleList({ items }) {
  return (
    <ul>
      {items.map(items => (
        <li key={items.objectID}>
          <a href={items.url}>{items.title}</a>
        </li>
      ))}
    </ul>
  );
}
