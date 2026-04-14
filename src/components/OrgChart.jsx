export default function OrgChart() {
  const directs = [
    { label: 'Principal Designer', hasIndirect: true },
    { label: 'Senior Designer' },
    { label: 'Designer II' },
    { label: 'Designer II' },
    { label: 'UX Researcher' },
  ]
  const indirect = { label: 'Designer I' }

  const svgW = 900
  const rootW = 240
  const rootH = 72
  const rootX = svgW / 2 - rootW / 2
  const rootY = 24

  const nodeW = 168
  const nodeH = 60
  const nodeGap = 12
  const totalNodesW = directs.length * nodeW + (directs.length - 1) * nodeGap
  const nodesStartX = svgW / 2 - totalNodesW / 2
  const nodesY = 150

  const spineY = rootY + rootH + (nodesY - rootY - rootH) / 2

  const indirectW = 158
  const indirectH = 52
  const indirectNodeIndex = directs.findIndex(d => d.hasIndirect)
  const indirectParentCX = nodesStartX + indirectNodeIndex * (nodeW + nodeGap) + nodeW / 2
  const indirectY = nodesY + nodeH + 48

  const svgH = indirectY + indirectH + 32

  return (
    <div className="orgchart-wrap" role="img" aria-label="UX team org chart">
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
      >
        <defs>
          <style>{`
            .oc-root rect   { fill: #1C1C1C; }
            .oc-direct rect { fill: #3D6B5F; stroke: #3D6B5F; stroke-width: 1.5; }
            .oc-direct text { fill: #ffffff; font-family: Inter, sans-serif; }
            .oc-root text   { fill: #ffffff; font-family: Inter, sans-serif; }
            .oc-indirect rect { fill: #F3EAF4; stroke: #4E2A52; stroke-width: 1.5; }
            .oc-indirect text { fill: #4E2A52; font-family: Inter, sans-serif; }
            .oc-line          { stroke: #3D6B5F; stroke-width: 1.5; fill: none; }
            .oc-line-indirect { stroke: #4E2A52; stroke-width: 1.5; fill: none; stroke-dasharray: 6 4; }
          `}</style>
        </defs>

        {/* Root node */}
        <g className="oc-root">
          <rect x={rootX} y={rootY} width={rootW} height={rootH} rx="10" />
          <text x={rootX + rootW / 2} y={rootY + 26} textAnchor="middle" fontSize="17" fontWeight="600">Jason McFarland</text>
          <text x={rootX + rootW / 2} y={rootY + 46} textAnchor="middle" fontSize="14" opacity="0.85">Senior Director, UX</text>
        </g>

        {/* Root to spine */}
        <line className="oc-line" x1={svgW / 2} y1={rootY + rootH} x2={svgW / 2} y2={spineY} />

        {/* Horizontal spine */}
        <line
          className="oc-line"
          x1={nodesStartX + nodeW / 2}
          y1={spineY}
          x2={nodesStartX + (directs.length - 1) * (nodeW + nodeGap) + nodeW / 2}
          y2={spineY}
        />

        {/* Direct report nodes */}
        {directs.map((d, i) => {
          const nx = nodesStartX + i * (nodeW + nodeGap)
          const cx = nx + nodeW / 2
          return (
            <g key={i}>
              <line className="oc-line" x1={cx} y1={spineY} x2={cx} y2={nodesY} />
              <g className="oc-direct">
                <rect x={nx} y={nodesY} width={nodeW} height={nodeH} rx="8" />
                <text x={cx} y={nodesY + nodeH / 2 + 6} textAnchor="middle" fontSize="15" fontWeight="500">{d.label}</text>
              </g>
            </g>
          )
        })}

        {/* Indirect report — connects from Principal Designer */}
        <line className="oc-line-indirect" x1={indirectParentCX} y1={nodesY + nodeH} x2={indirectParentCX} y2={indirectY} />
        <g className="oc-indirect">
          <rect x={indirectParentCX - indirectW / 2} y={indirectY} width={indirectW} height={indirectH} rx="8" />
          <text x={indirectParentCX} y={indirectY + indirectH / 2 - 5} textAnchor="middle" fontSize="15" fontWeight="500">{indirect.label}</text>
          <text x={indirectParentCX} y={indirectY + indirectH / 2 + 14} textAnchor="middle" fontSize="12">Indirect report</text>  
        </g>
      </svg>

      {/* Legend */}
      <div className="orgchart-legend">
        <div className="orgchart-legend__item">
          <svg width="32" height="12" viewBox="0 0 32 12">
            <line x1="0" y1="6" x2="32" y2="6" stroke="#3D6B5F" strokeWidth="2" />
          </svg>
          <span>Direct report</span>
        </div>
        <div className="orgchart-legend__item">
          <svg width="32" height="12" viewBox="0 0 32 12">
            <line x1="0" y1="6" x2="32" y2="6" stroke="#4E2A52" strokeWidth="2" strokeDasharray="6 4" />
          </svg>
          <span>Indirect report</span>
        </div>
      </div>
    </div>
  )
}