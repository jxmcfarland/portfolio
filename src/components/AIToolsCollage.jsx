export default function AIToolsCollage() {
  const tools = [
    {
      name: 'Figma AI',
      desc: 'Design generation & automation',
      bg: '#1C1C1C',
      color: '#ffffff',
      accent: '#A259FF',
      icon: 'F',
    },
    {
      name: 'Claude',
      desc: 'Design thinking & content',
      bg: '#CC9B7A',
      color: '#1C1C1C',
      accent: '#1C1C1C',
      icon: 'C',
    },
    {
      name: 'Cursor',
      desc: 'AI-powered development',
      bg: '#000000',
      color: '#ffffff',
      accent: '#8B8BFF',
      icon: '⌥',
    },
    {
      name: 'GitHub Copilot',
      desc: 'Engineering acceleration',
      bg: '#24292F',
      color: '#ffffff',
      accent: '#79C0FF',
      icon: '◎',
    },
    {
        name: 'Lovable',
        desc: 'AI-powered app building',
        bg: '#F97316',
        color: '#ffffff',
        accent: '#ffffff',
        icon: 'L',
    },
    {
      name: 'Zeroheight',
      desc: 'Design system docs',
      bg: '#6038F7',
      color: '#ffffff',
      accent: '#ffffff',
      icon: 'Z',
    },
  ]

  return (
    <div className="ai-tools-collage">
      <p className="ai-tools-collage__label">Investing in AI tooling</p>
      <div className="ai-tools-collage__grid">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="ai-tool-card"
            style={{ background: tool.bg, color: tool.color }}
          >
            <div
              className="ai-tool-card__icon"
              style={{ background: tool.accent, color: tool.bg }}
            >
              {tool.icon}
            </div>
            <div className="ai-tool-card__body">
              <p className="ai-tool-card__name" style={{ color: tool.color }}>{tool.name}</p>
              <p className="ai-tool-card__desc" style={{ color: tool.color, opacity: 0.7 }}>{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}