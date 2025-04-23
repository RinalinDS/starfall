import { memo } from 'react';
import { TagList } from './tag-list.tsx';
import { Typography } from '../../ui/Typography/Typography.tsx';

type Props3 = {
  description: string;
  tags: string[];
  author: string;
  year: number;
  bookPreviewData: string;
};
export const PreviewBookContent = memo(
  ({ description, tags, author, year, bookPreviewData }: Props3) => {
    return (
      <article className="mt-6 flex flex-col gap-6">
        <TagList tags={tags} />

        <Typography as="p" variant="body1" className="tracking-wide">
          {description}
        </Typography>
        <div
          className={`flex flex-col border-b border-b-gray-600 [&>*]:border-t [&>*]:border-t-gray-600`}
        >
          <div className="mb-2 flex items-center">
            <Typography className="w-32 text-4xl font-medium capitalize">
              creator
            </Typography>
            <Typography>{author}</Typography>
          </div>
          <div className="mb-2 flex items-center">
            <Typography className="w-32 text-4xl font-medium capitalize">
              year
            </Typography>
            <Typography>{year}</Typography>
          </div>
        </div>
        <Typography
          as="p"
          variant="body1"
          className="pb-64 indent-8 tracking-wide"
        >
          {bookPreviewData}
        </Typography>
      </article>
    );
  }
);
