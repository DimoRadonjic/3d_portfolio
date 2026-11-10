/* eslint-disable react-refresh/only-export-components */
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { BallCanvas } from './canvas';
import { isWebGLAvailable } from './canvas/CanvasGuard';
import ErrorBoundary from './ErrorBoundary';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

interface TechBallProps {
  name: string;
  icon: string;
}

// Each ball is its own WebGL canvas. Browsers cap live WebGL contexts (~16),
// and with every ball plus the hero, earth and stars canvases mounted at once
// the oldest ones get dropped (blank scenes, or a tab crash on mobile).
// Mounting a ball only while it's near the viewport keeps the count low.
const TechBall = ({ name, icon }: TechBallProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '200px 0px' });
  const staticIcon = (
    <img src={icon} alt={name} className='w-full h-full object-contain p-6' />
  );

  return (
    <div ref={ref} className='w-28 h-28' title={name}>
      {!isWebGLAvailable() ? (
        staticIcon
      ) : inView ? (
        <ErrorBoundary fallback={staticIcon}>
          <BallCanvas icon={icon} />
        </ErrorBoundary>
      ) : null}
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <TechBall
          key={technology.name}
          name={technology.name}
          icon={technology.icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
