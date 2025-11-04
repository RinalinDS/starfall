type Props4 = {
  tags: string[];
};
export const TagList = ({ tags }: Props4) => {
  return (
    <ul className="flex flex-wrap gap-6">
      {tags.map((tag) => (
        <li
          className="rounded-4xl border-1 border-solid border-slate-500 p-3 text-2xl font-medium capitalize"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
