'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

const TILE_WIDTH = 120;
const TILE_GAP = 12;
const SPEED = 40;

export default function SkillsMarquee({ skills }) {
  const laneRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const lane = laneRef.current;
    if (!lane) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(lane);
    return () => observer.disconnect();
  }, [skills.length]);

  if (!skills.length) return null;

  // Repeat the list enough to fill the lane without gaps between loops.
  const spacing = TILE_WIDTH + TILE_GAP;
  const copies = Math.ceil((width + TILE_WIDTH + spacing) / (skills.length * spacing));
  const tiles = Array.from({ length: copies }, () => skills).flat();
  const distance = tiles.length * spacing;
  const percent = (position) => (position / distance) * 100;
  const edgeZone = Math.min(180, width / 2);
  const animationName = `skillTravel${Math.round(width)}x${tiles.length}`;
  const keyframes = `
    @keyframes ${animationName} {
      0% { left: ${width}px; transform: scale(.45); opacity: 0; }
      ${percent(edgeZone)}% { transform: scale(1); opacity: 1; }
      ${percent(width + TILE_WIDTH - edgeZone)}% { transform: scale(1); opacity: 1; }
      ${percent(width + TILE_WIDTH)}%, 100% {
        left: -${TILE_WIDTH}px; transform: scale(.45); opacity: 0;
      }
    }
  `;

  return (
    <section className={styles.section} aria-label="Development skills">
      {width > 0 && <style>{keyframes}</style>}
      <h3 className={styles.heading}>Skills & tools</h3>
      <ul className="sr-only">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.lane} ref={laneRef} aria-hidden="true">
        {tiles.map((skill, index) => (
          <span
            className={styles.skill}
            data-copy={index >= skills.length ? 'true' : undefined}
            key={`${skill}-${index}`}
            style={{
              '--animation': width > 0 ? animationName : 'none',
              '--duration': `${distance / SPEED}s`,
              '--delay': `${(-index * spacing) / SPEED}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
