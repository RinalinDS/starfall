import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useBoundStore } from '../../store/useBoundStore';
import { Card } from '../Card/Card';

export const ReadlistCards = () => {
  const readlist = useBoundStore((state) => state.readlist);
  const reorderReadlist = useBoundStore((state) => state.setReadlist);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (!over) return;
    if (over.id !== active.id) {
      const startIndex = readlist.findIndex((item) => item === active.id);
      const endIndex = readlist.findIndex((item) => item === over.id);
      reorderReadlist(arrayMove(readlist, startIndex, endIndex));
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext
        items={readlist}
        strategy={horizontalListSortingStrategy}
      >
        <div className="grid-col mt-10 grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-10">
          {readlist.map((id) => (
            <Card key={id} id={id}></Card>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
