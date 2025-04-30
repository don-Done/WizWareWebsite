
import { BaseEdge, EdgeLabelRenderer, getBezierPath, EdgeProps } from '@xyflow/react';

export const ManaEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge 
        path={edgePath} 
        markerEnd={markerEnd}
        style={{
          ...style,
          strokeWidth: 6,
          stroke: 'url(#manaGradient)',
          strokeDasharray: '6',
          animation: 'flowingMana 0.3s linear infinite',
        }} 
      />
      <defs>
        <linearGradient id="manaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E74C3C" stopOpacity={0.9} />
          <stop offset="100%" stopColor="#C0392B" stopOpacity={0.9} />
        </linearGradient>
      </defs>

      <style>
        {`
          @keyframes flowingMana {
            from {
              stroke-dashoffset: 12;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </>
  );
};
