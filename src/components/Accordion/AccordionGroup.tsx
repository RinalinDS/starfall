import { useState } from 'react';
import { Accordion } from './Accordion';

const items: { title: string; content: string }[] = [
  { title: 'Title 1', content: 'Content 1' },
  { title: 'Title 2', content: 'Content 2' },
  { title: 'Title 3', content: 'Content 3' },
];

// potentialy items should come from props or state
export const AccordionGroup = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return items.map(({ content, title }, index) => (
    <Accordion
      content={content}
      title={title}
      isActive={activeIndex === index}
      setActiveIndex={setActiveIndex}
      index={index}
    />
  ));
};
