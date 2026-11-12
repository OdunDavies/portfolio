type Colors = {
  background: string; ink: string; accent: string; accentHover: string; onAccent: string
  muted: string; border: string; subtle: string; surface: string; panel: string
  successBg: string; successInk: string
}
type Palette = { id: string; name: string; description: string; colors: Colors }

export const palettes: Palette[] = [
  { id: 'original', name: 'Original / Black & White', description: 'The existing monochrome palette, for direct comparison.', colors: { background:'#FFFFFF', ink:'#000000', accent:'#000000', accentHover:'#111111', onAccent:'#FFFFFF', muted:'#737373', border:'#000000', subtle:'#E5E5E5', surface:'#F5F5F5', panel:'#FFFFFF', successBg:'#000000', successInk:'#FFFFFF' } },
  { id: 'paper-cobalt', name: 'Paper & Cobalt', description: 'Closest to the original: paper surfaces, carbon borders, cobalt for actions, green only for live status.', colors: { background:'#F9F8F5', ink:'#202124', accent:'#2449D8', accentHover:'#1935AF', onAccent:'#FFFFFF', muted:'#5E626B', border:'#30333A', subtle:'#DEDED9', surface:'#F0F0EB', panel:'#FFFFFF', successBg:'#DEEEE2', successInk:'#24623B' } },
  { id: 'warm-olive', name: 'Warm Paper & Olive', description: 'Warm paper and dark olive keep the technical character while feeling calmer and more grounded.', colors: { background:'#F5F1E8', ink:'#262B24', accent:'#4C5F35', accentHover:'#394A27', onAccent:'#FFFFFF', muted:'#62685C', border:'#3C4337', subtle:'#DADCCD', surface:'#EAEADD', panel:'#FCFAF5', successBg:'#DBE7D1', successInk:'#365625' } },
  { id: 'ivory-oxblood', name: 'Ivory & Oxblood', description: 'A restrained editorial palette: ivory panels, wine-colored actions, and separate green live indicators.', colors: { background:'#FAF4EA', ink:'#322628', accent:'#812F40', accentHover:'#642131', onAccent:'#FFFFFF', muted:'#776166', border:'#493438', subtle:'#E5D7D0', surface:'#F1E7DC', panel:'#FFF9F1', successBg:'#E0E8D9', successInk:'#3D5F34' } },
  { id: 'mist-petrol', name: 'Mist & Petrol', description: 'Cool gray surfaces with deep petrol actions. A precise, understated direction for software and infrastructure.', colors: { background:'#F0F5F5', ink:'#203337', accent:'#17616B', accentHover:'#104A52', onAccent:'#FFFFFF', muted:'#536C72', border:'#304C52', subtle:'#CFDDDE', surface:'#E3ECEC', panel:'#F9FCFC', successBg:'#D8EDE4', successInk:'#206148' } },
  { id: 'stone-rust', name: 'Stone & Rust', description: 'Mineral neutrals and a burnt-rust accent add warmth while preserving hard borders and clear hierarchy.', colors: { background:'#F6F2EE', ink:'#302925', accent:'#A33D20', accentHover:'#812D16', onAccent:'#FFFFFF', muted:'#73655D', border:'#4B3E36', subtle:'#DED5CD', surface:'#ECE4DC', panel:'#FFFAF5', successBg:'#DFE7D5', successInk:'#405B2E' } },
  { id: 'lavender-ink', name: 'Chalk & Ink Violet', description: 'Near-white lavender panels, dark ink, and a single violet action color. Expressive without changing the layout.', colors: { background:'#F5F3FA', ink:'#292637', accent:'#6543B5', accentHover:'#4D3290', onAccent:'#FFFFFF', muted:'#6A637D', border:'#443D58', subtle:'#DED9EA', surface:'#EAE6F2', panel:'#FCFAFF', successBg:'#DFECE3', successInk:'#2D623F' } },
  { id: 'night-ice', name: 'Night & Ice', description: 'A dark translation of the original: blue-black canvas, pale borders, icy blue actions, mint live status.', colors: { background:'#111720', ink:'#E5ECF5', accent:'#99CCFF', accentHover:'#BDDFFF', onAccent:'#142132', muted:'#9EACBD', border:'#7D8CA1', subtle:'#2F3D50', surface:'#1A2533', panel:'#141E2B', successBg:'#203F36', successInk:'#A5E5C5' } },
  { id: 'forest-sand', name: 'Forest & Sand', description: 'Deep forest surfaces and warm sand actions. The same panels and typography in a quieter dark palette.', colors: { background:'#15231F', ink:'#F1EAD8', accent:'#E9CB8C', accentHover:'#F5DDAE', onAccent:'#262C20', muted:'#ADBCAE', border:'#809987', subtle:'#344C3E', surface:'#20342A', panel:'#192B23', successBg:'#304B37', successInk:'#C1E1AD' } },
]

export const motionPresets = [
  { id:'original', name:'Original motion', description:'Original typewriter headline, blinking cursors, floating chips, and project hover.', source:'https://brittanychiang.com', credit:'Original baseline / earlier inspiration' },
  { id:'quiet', name:'Quiet precision', description:'Short 320 ms entrances, 6 px of travel, quick focus and press feedback.', source:'https://emilkowal.ski', credit:'Emil Kowalski / restrained interface motion' },
  { id:'editorial', name:'Editorial flow', description:'Soft 620 ms panel entrances with staggered project and image reveals.', source:'https://www.dennissnellenberg.com', credit:'Dennis Snellenberg / work presentation' },
  { id:'tactile', name:'Tactile studio', description:'Spring-like entrances, tiny magnetic CTAs, and responsive project thumbnails.', source:'https://paco.me', credit:'Paco Coursey / interface craft' },
  { id:'technical', name:'Technical trace', description:'Crisp horizontal reveals, accent-line tracing, and existing terminal typography.', source:'https://emilkowal.ski', credit:'Emil Kowalski / timing and state transitions' },
] as const

type Settings = { palette: string; motion: string; reduce: boolean }
const storageKey = 'odunayo-portfolio-prototype-v2'
const cssTokens: Record<keyof Colors, string> = {
  background:'--color-background', ink:'--color-ink', accent:'--color-accent', accentHover:'--color-accent-hover', onAccent:'--prototype-on-accent', muted:'--color-muted', border:'--color-border', subtle:'--color-border-subtle', surface:'--color-surface-raised', panel:'--color-panel', successBg:'--prototype-success-bg', successInk:'--prototype-success-ink',
}

export function mountPrototypeLab() {
  const controls = document.getElementById('portfolio-prototype-controls')
  const content = document.getElementById('prototype-content')
  if (!controls || !content) return () => {}
  const root = document.documentElement
  const paletteSelect = controls.querySelector<HTMLSelectElement>('[name="prototype-palette"]')!
  const motionSelect = controls.querySelector<HTMLSelectElement>('[name="prototype-motion"]')!
  const reduceInput = controls.querySelector<HTMLInputElement>('[name="prototype-reduce"]')!
  const status = controls.querySelector<HTMLElement>('[data-lab-status]')!
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  const attributeNames = ['data-portfolio-prototype','data-prototype-palette','data-prototype-motion','data-prototype-reduced']
  const previousAttributes = attributeNames.map(name => [name, root.getAttribute(name)] as const)
  const tokenNames = [...Object.values(cssTokens), '--color-surface-highest', '--color-accent-foreground', '--color-border-strong']
  const previousTokens = tokenNames.map(name => [name, root.style.getPropertyValue(name)] as const)
  let settings: Settings = { palette:'original', motion:'original', reduce:false }
  let observer: IntersectionObserver | null = null
  const animations = new Set<Animation>()
  const listeners: (() => void)[] = []
  let disposed = false

  function listen(target: EventTarget, name: string, callback: EventListener, options?: AddEventListenerOptions | boolean) {
    target.addEventListener(name, callback, options)
    listeners.push(() => target.removeEventListener(name, callback, options))
  }
  function validSettings(value: Partial<Settings>) {
    if (palettes.some(p => p.id === value.palette)) settings.palette = value.palette!
    if (motionPresets.some(p => p.id === value.motion)) settings.motion = value.motion!
    if (typeof value.reduce === 'boolean') settings.reduce = value.reduce
  }
  try { validSettings(JSON.parse(localStorage.getItem(storageKey) ?? '{}')) } catch { /* Storage may be disabled. */ }
  const params = new URLSearchParams(window.location.search)
  validSettings({ palette:params.get('palette') ?? undefined, motion:params.get('motion') ?? undefined })

  function reduced() { return settings.reduce || media.matches }
  function cancelAnimations() {
    animations.forEach(animation => animation.cancel())
    animations.clear()
    content!.querySelectorAll<HTMLElement>('[data-prototype-magnetic]').forEach(el => { el.style.translate = ''; el.removeAttribute('data-prototype-magnetic') })
  }
  function animate(el: Element, frames: Keyframe[], options: KeyframeAnimationOptions) {
    if (reduced() || settings.motion === 'original' || typeof el.animate !== 'function') return
    const animation = el.animate(frames, options)
    animations.add(animation)
    animation.finished.then(() => animations.delete(animation), () => animations.delete(animation))
  }
  function reveal(panel: Element, index = 0) {
    const preset = settings.motion
    const duration = preset === 'quiet' ? 320 : preset === 'editorial' ? 620 : 480
    const from = preset === 'technical' ? 'translateX(-10px)' : `translateY(${preset === 'quiet' ? 6 : preset === 'editorial' ? 20 : 12}px)`
    animate(panel, [{ opacity:.35, transform:from }, { opacity:1, transform:'translate(0,0)' }], { duration, delay:index * 55, easing:'cubic-bezier(.22,1,.36,1)' })
    if (preset === 'editorial' || preset === 'tactile') panel.querySelectorAll('#work a').forEach((row, i) => {
      animate(row, [{ opacity:.25, translate:'0 12px' }, { opacity:1, translate:'0 0' }], { duration:480, delay:90 + i * 65, easing:'cubic-bezier(.22,1,.36,1)' })
      const img = row.querySelector('img')
      if (img) animate(img, [{ scale:'1.08' }, { scale:'1' }], { duration:700, delay:i * 65, easing:'cubic-bezier(.22,1,.36,1)' })
    })
    if (preset === 'technical') {
      const panelElement = panel as HTMLElement
      panelElement.removeAttribute('data-trace')
      requestAnimationFrame(() => { if (!disposed) panelElement.setAttribute('data-trace','true') })
    }
  }
  function observePanels() {
    observer?.disconnect()
    cancelAnimations()
    const panels = content!.querySelectorAll(':scope > section > div:first-of-type')
    if (reduced() || settings.motion === 'original') return
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { reveal(entry.target); observer?.unobserve(entry.target) } })
    }, { threshold:.1 })
    panels.forEach(panel => observer!.observe(panel))
  }
  function render(persist = false) {
    const palette = palettes.find(p => p.id === settings.palette)!
    const preset = motionPresets.find(p => p.id === settings.motion)!
    root.setAttribute('data-portfolio-prototype','true')
    root.setAttribute('data-prototype-palette', palette.id)
    root.setAttribute('data-prototype-motion', preset.id)
    root.setAttribute('data-prototype-reduced', String(reduced()))
    ;(Object.keys(cssTokens) as (keyof Colors)[]).forEach(key => root.style.setProperty(cssTokens[key], palette.colors[key]))
    root.style.setProperty('--color-surface-highest', palette.colors.ink)
    root.style.setProperty('--color-accent-foreground', palette.colors.onAccent)
    root.style.setProperty('--color-border-strong', palette.colors.border)
    paletteSelect.value = palette.id
    motionSelect.value = preset.id
    reduceInput.checked = settings.reduce || media.matches
    reduceInput.disabled = media.matches
    controls!.querySelector<HTMLElement>('[data-current-palette]')!.textContent = palette.name
    controls!.querySelector<HTMLElement>('[data-palette-description]')!.textContent = palette.description
    controls!.querySelector<HTMLElement>('[data-motion-description]')!.textContent = reduced() ? 'Reduced motion: readable content, no added movement.' : preset.description
    const source = controls!.querySelector<HTMLAnchorElement>('[data-motion-source]')!
    source.href = preset.source
    source.textContent = preset.credit + ' ↗'
    controls!.querySelectorAll<HTMLElement>('[data-swatch]').forEach(swatch => { swatch.style.backgroundColor = palette.colors[swatch.dataset.swatch as keyof Colors] })
    controls!.querySelectorAll<HTMLElement>('[data-color-value]').forEach(label => { label.textContent = palette.colors[label.dataset.colorValue as keyof Colors] })
    if (persist) {
      try { localStorage.setItem(storageKey, JSON.stringify(settings)); status.textContent = 'Selection saved.' } catch { status.textContent = 'Preview updated.' }
      try {
        const url = new URL(window.location.href)
        url.searchParams.set('palette', settings.palette)
        url.searchParams.set('motion', settings.motion)
        history.replaceState(null, '', url)
      } catch { /* file:// viewers may disallow history updates. */ }
    }
  }

  listen(paletteSelect, 'change', () => { settings.palette = paletteSelect.value; render(true) })
  listen(motionSelect, 'change', () => { settings.motion = motionSelect.value; render(true); observePanels() })
  listen(reduceInput, 'change', () => { settings.reduce = reduceInput.checked; render(true); observePanels() })
  listen(media, 'change', () => { render(); observePanels() })
  listen(controls.querySelector('[data-original]')!, 'click', () => {
    settings = { palette:'original', motion:'original', reduce:settings.reduce }
    render(true); observePanels()
    status.textContent = 'Original palette and motion.'
  })
  listen(controls.querySelector('[data-replay]')!, 'click', () => {
    cancelAnimations()
    if (reduced()) { status.textContent = 'Reduced motion is enabled.'; return }
    if (settings.motion === 'original') { status.textContent = 'Choose a motion direction to replay its treatment.'; return }
    let index = 0
    content.querySelectorAll(':scope > section > div:first-of-type').forEach(panel => {
      const rect = panel.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) reveal(panel, index++)
    })
    status.textContent = 'Replaying visible sections. Scroll to preview the rest.'
  })
  const collapse = controls.querySelector<HTMLButtonElement>('[data-collapse]')!
  const options = controls.querySelector<HTMLElement>('#prototype-options')!
  listen(collapse, 'click', () => {
    options.hidden = !options.hidden
    collapse.setAttribute('aria-expanded', String(!options.hidden))
    collapse.textContent = options.hidden ? 'Expand' : 'Minimize'
    controls.classList.toggle('is-minimized', options.hidden)
  })
  listen(document, 'pointermove', event => {
    if (settings.motion !== 'tactile' || reduced() || !finePointer.matches) return
    const pointer = event as PointerEvent
    const target = pointer.target instanceof Element ? pointer.target.closest<HTMLElement>('#hero a.bg-ink, #contact a.bg-ink') : null
    if (!target) return
    const rect = target.getBoundingClientRect()
    target.dataset.prototypeMagnetic = 'true'
    target.style.translate = `${((pointer.clientX - rect.left) / rect.width - .5) * 8}px ${((pointer.clientY - rect.top) / rect.height - .5) * 6}px`
  })
  listen(document, 'pointerout', event => {
    const pointer = event as PointerEvent
    const target = pointer.target instanceof Element ? pointer.target.closest<HTMLElement>('[data-prototype-magnetic]') : null
    if (target && (!(pointer.relatedTarget instanceof Node) || !target.contains(pointer.relatedTarget))) { target.style.translate = ''; target.removeAttribute('data-prototype-magnetic') }
  })
  listen(content, 'pointerdown', event => {
    const target = event.target instanceof Element ? event.target.closest('a,button') : null
    if (target) animate(target, [{ scale:'1' }, { scale:'.975' }, { scale:'1' }], { duration:200, easing:'ease-out' })
  })
  listen(document, 'click', event => {
    if (!reduced()) return
    const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null
    const id = anchor?.getAttribute('href')?.slice(1)
    const section = id ? document.getElementById(id) : null
    if (section) { event.preventDefault(); event.stopImmediatePropagation(); section.scrollIntoView({ behavior:'instant', block:'start' }) }
  }, true)
  listen(document, 'visibilitychange', () => { if (document.hidden) cancelAnimations() })
  render()
  observePanels()

  return () => {
    disposed = true
    observer?.disconnect()
    cancelAnimations()
    listeners.forEach(remove => remove())
    previousAttributes.forEach(([name,value]) => { if (value === null) root.removeAttribute(name); else root.setAttribute(name,value) })
    previousTokens.forEach(([name,value]) => { if (value) root.style.setProperty(name,value); else root.style.removeProperty(name) })
  }
}
