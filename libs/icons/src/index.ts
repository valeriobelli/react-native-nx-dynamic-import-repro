import { lazy } from 'react';

export const Icon = lazy(() =>
  import('./Icon').then((module) => ({ default: module.Icon }))
);
