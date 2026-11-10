import EarthCanvas from './Earth';
import BallCanvas from './Ball';
import ComputersCanvas from './Computers';
import StarsCanvas from './Stars';
import { withCanvasGuard } from './CanvasGuard';

const SafeEarthCanvas = withCanvasGuard(EarthCanvas);
const SafeBallCanvas = withCanvasGuard(BallCanvas);
const SafeComputersCanvas = withCanvasGuard(ComputersCanvas);
const SafeStarsCanvas = withCanvasGuard(StarsCanvas);

export {
  SafeEarthCanvas as EarthCanvas,
  SafeBallCanvas as BallCanvas,
  SafeComputersCanvas as ComputersCanvas,
  SafeStarsCanvas as StarsCanvas,
};
