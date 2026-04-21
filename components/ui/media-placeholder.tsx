type MediaPlaceholderProps = {
  label: string
  title: string
  height?: string
  compact?: boolean
}

export function MediaPlaceholder({ label, title, height, compact = false }: MediaPlaceholderProps) {
  return (
    <div className="media-placeholder card-hover" style={{ minHeight: height ?? '340px' }}>
      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/60 backdrop-blur-md">
        {label}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.42))]" />
      <div className="media-overlay">
        <div>
          <div className="text-sm font-medium text-white/95">{title}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
            {compact ? 'Placeholder still' : 'Placeholder image or loop video'}
          </div>
        </div>
        <div className="play-chip text-white/85">▶</div>
      </div>
    </div>
  )
}
