'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ThreeDModel = dynamic(() => import('./3dmodel'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-background" />,
});

export default function ThreeDModelWrapper() {
  return (
    <Suspense fallback={<div className="h-full w-full bg-background" />}>
      <ThreeDModel />
    </Suspense>
  );
}
