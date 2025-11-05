import { useSortableActions } from '../../../hooks/useSortableActions.ts';
import { BookDataProvider } from './BookDataProvider.tsx';
import Card from './atoms';

export const ReadlistCard = ({
  id,
  isActivelyDragging = false,
}: {
  id: string;
  isActivelyDragging?: boolean;
}) => {
  const { attributes, listeners, setNodeRef, style } = useSortableActions(
    id,
    isActivelyDragging
  );

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <BookDataProvider id={id}>
        <Card.CardContainer>
          <Card.Image />
          <Card.ContentContainer>
            <Card.Title />
            <Card.Rating />
            <Card.ActionsContainer>
              <Card.TrailerLink />
              <Card.DragHandle {...listeners} />
            </Card.ActionsContainer>
          </Card.ContentContainer>
        </Card.CardContainer>
        <Card.CardRatingModal />
      </BookDataProvider>
    </div>
  );
};
