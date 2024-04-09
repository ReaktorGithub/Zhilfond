import { useEffect, useRef, useState } from 'react';

import type { MutableRefObject } from 'react';

interface ClientHeightReturn {
  rootRef: MutableRefObject<HTMLDivElement | null>;
  rootHeight: number;
}

export function useCalculateHeight(): ClientHeightReturn {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [rootHeight, setRootHeight] = useState(400);

  useEffect(() => {
    const onResize = () => {
      if (rootRef?.current?.clientHeight) {
        setRootHeight(rootRef.current.clientHeight);
      }
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    rootRef,
    rootHeight,
  };
}
