import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableModule from './DraggableModule';

const AppCanvas = ({ modules, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'MODULE',
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      className={`canvas mt-6 p-4 border-2 rounded min-h-[200px] bg-white ${isActive ? 'border-ecoGreen-dark bg-ecoGreen-light' : 'border-gray-300'}`}
      aria-label="App canvas drop area"
    >
      {modules.length === 0 && (
        <p className="text-gray-500 text-center">Drag modules here to add to your app</p>
      )}
      {modules.map((module, index) => (
        <DraggableModule key={`${module.id}-${index}`} module={module} />
      ))}
    </div>
  );
};

export default AppCanvas;
