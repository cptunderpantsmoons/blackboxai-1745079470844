import React from 'react';
import { useDrag } from 'react-dnd';

const ModuleComponent = ({ module, onConfigure }) => {
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
      className={`module cursor-move p-4 border rounded shadow-sm flex items-center gap-4 bg-white hover:bg-ecoGreen-light transition-opacity duration-200 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      onClick={() => onConfigure(module)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') onConfigure(module); }}
      aria-label={`Configure ${module.name} module`}
    >
      <div className="module-icon text-4xl text-ecoGreen-dark">
        {module.icon()}
      </div>
      <div>
        <h4 className="font-semibold text-lg">{module.name}</h4>
        <p className="text-sm text-gray-600">Carbon Impact: {module.impactScore}/10</p>
      </div>
    </div>
  );
};

export default ModuleComponent;
