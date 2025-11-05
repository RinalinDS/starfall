import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const useSortableActions = (
  id: string,
  isActivelyDragging?: boolean
) => {
  const {
    setNodeRef,
    isDragging,
    transition,
    transform,
    listeners,
    attributes,
  } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging && !isActivelyDragging ? 0.3 : 1,
    cursor: isActivelyDragging || isDragging ? 'grabbing' : 'grab',
  };

  return {
    setNodeRef,
    isDragging,
    listeners,
    attributes,
    style,
  };
};
