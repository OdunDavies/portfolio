'use client'

import { useEffect, type ReactNode } from 'react'
import { motionPresets, mountPrototypeLab, palettes } from './controller'

export default function PrototypeLab({ children }: { children: ReactNode }) {
  useEffect(() => mountPrototypeLab(), [])

  return (
    <>
      <div id="prototype-content">{children}</div>
      <aside id="portfolio-prototype-controls" className="prototype-lab" aria-label="Portfolio prototype controls">
        <div className="prototype-lab-heading">
          <div>
            <p className="prototype-lab-kicker">Original UI / Color + motion study</p>
            <h2>Portfolio lab <span data-current-palette>Paper & Cobalt</span></h2>
          </div>
          <button type="button" data-collapse aria-expanded="true" aria-controls="prototype-options">Minimize</button>
        </div>
        <div id="prototype-options">
          <div className="prototype-lab-fields">
            <label>Color combination
              <select name="prototype-palette" defaultValue="paper-cobalt">
                {palettes.map(palette => <option value={palette.id} key={palette.id}>{palette.name}</option>)}
              </select>
            </label>
            <label>Motion direction
              <select name="prototype-motion" defaultValue="quiet">
                {motionPresets.map(preset => <option value={preset.id} key={preset.id}>{preset.name}</option>)}
              </select>
            </label>
            <div className="prototype-lab-buttons">
              <button type="button" data-replay>Replay motion</button>
              <button type="button" data-original>Original</button>
            </div>
          </div>
          <div className="prototype-lab-swatches" aria-label="Color roles">
            {(['background', 'ink', 'accent', 'successBg'] as const).map((role, index) => (
              <span key={role}><i data-swatch={role} aria-hidden="true" /><span>{['Canvas', 'Ink', 'Action', 'Live'][index]} <code data-color-value={role} /></span></span>
            ))}
          </div>
          <p className="prototype-lab-description" data-palette-description />
          <div className="prototype-lab-foot">
            <p data-motion-description />
            <label className="prototype-reduce"><input type="checkbox" name="prototype-reduce" /> Reduce motion</label>
          </div>
          <div className="prototype-lab-source"><a data-motion-source href="https://emilkowal.ski" target="_blank" rel="noopener noreferrer">Motion reference ↗</a><span data-lab-status role="status">Selections save on this device.</span></div>
        </div>
      </aside>
    </>
  )
}
