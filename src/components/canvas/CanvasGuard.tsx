import { type ComponentType, type ReactNode } from 'react';

import ErrorBoundary from '../ErrorBoundary';

let webglSupport: boolean | undefined;

/** True when the browser can create a WebGL context (checked once, cached). */
export const isWebGLAvailable = (): boolean => {
  if (webglSupport !== undefined) return webglSupport;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    webglSupport = !!gl;
    // Release the probe context right away so it doesn't count against the
    // browser's limit on simultaneous WebGL contexts.
    (gl as WebGLRenderingContext | null)
      ?.getExtension('WEBGL_lose_context')
      ?.loseContext();
  } catch {
    webglSupport = false;
  }
  return webglSupport;
};

/**
 * Wraps a 3D canvas so it renders nothing (or `fallback`) when WebGL is
 * unavailable or the scene throws, instead of crashing the whole app.
 */
export function withCanvasGuard<P extends object>(
  CanvasComponent: ComponentType<P>,
  fallback: ReactNode = null
) {
  const Guarded = (props: P) => {
    if (!isWebGLAvailable()) return <>{fallback}</>;
    return (
      <ErrorBoundary fallback={fallback}>
        <CanvasComponent {...props} />
      </ErrorBoundary>
    );
  };
  Guarded.displayName = `withCanvasGuard(${
    CanvasComponent.displayName || CanvasComponent.name || 'Canvas'
  })`;
  return Guarded;
}
