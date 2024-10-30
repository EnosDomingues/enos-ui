import { colors } from '@enos-ui/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color], index) => {
    return (
      <div key={color} style={{ ...(index > 0 && { marginTop: '1rem' }) }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#ffffffcb' }}>${key}</span>
          <span style={{ color: '#ffffffcb', fontSize: '0.875rem' }}>
            {color}
          </span>
        </div>
        <div
          style={{
            backgroundColor: color,
            padding: '2rem',
            borderRadius: '6px',
          }}
        />
      </div>
    )
  })
}
