import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { useBoundStore } from '../../../store/useBoundStore.ts';
import { ReadlistCard } from '../../shared/Card/readlist-card.tsx';

export const ReadlistCards = () => {
  const readlist = useBoundStore((state) => state.readlist);
  const reorderReadlist = useBoundStore((state) => state.setReadlist);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    setActiveId(null);
    if (!over) return;
    if (over.id !== active.id) {
      const startIndex = readlist.findIndex((item) => item === active.id);
      const endIndex = readlist.findIndex((item) => item === over.id);
      reorderReadlist(arrayMove(readlist, startIndex, endIndex));
    }
  };
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);
  };

  const handleDragCancel = () => {
    setActiveId(null);
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
      modifiers={[restrictToParentElement]}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragAbort={handleDragCancel}
    >
      <SortableContext items={readlist}>
        <div className="grid-col mt-10 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-10">
          {readlist.map((id) => (
            <ReadlistCard key={id} id={id} />
          ))}
        </div>
      </SortableContext>
      <DragOverlay
        adjustScale
        dropAnimation={{
          duration: 150,
          easing: 'cubic-bezier(0.19, 0.67, 0.6, 1.22)',
        }}
      >
        {activeId ? (
          <ReadlistCard
            key={activeId}
            id={`${activeId}`}
            isActivelyDragging={true}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
