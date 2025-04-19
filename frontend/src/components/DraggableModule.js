import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableModule = ({ module }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'MODULE',
    item: { id: module.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`draggable-module p-3 mb-2 border rounded shadow-sm flex items-center gap-3 bg-white cursor-move transition-opacity duration-200 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      aria-label={`Draggable module: ${module.name}`}
    >
      <div className="text-2xl text-ecoGreen-dark">
        {module.icon()}
      </div>
      <div>
        <h5 className="font-medium">{module.name}</h5>
        <p className="text-sm text-gray-600">Carbon Impact: {module.impactScore}/10</p>
      </div>
    </div>
  );
};

export default DraggableModule;
