import { useContext, useEffect } from 'react';
import { useIDBImage, useIDBImageInfo } from './storage';
import { WorkerContext } from './AlignerWorker';

function getStyle(show: boolean): React.CSSProperties {
  const rv: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '1',
  };
  if (!show) {
    rv['zIndex'] = 0;
  }
  return rv;
}

export function Page({
  collectionName,
  index,
  language,
  ...rest
}: {
  collectionName: string;
  index: number;
  language: 'orig' | 'transl';
}) {
  const { blobURL: originalPage } = useIDBImage(
    collectionName,
    'out_orig',
    index
  );
  const { blobURL: translatedPage, refresh: refreshTransl } = useIDBImage(
    collectionName,
    'out_transl',
    index
  );
  const { ratio } = useIDBImageInfo(collectionName, 'out_orig', index);
  const effectiveLanguage = translatedPage === '' ? 'orig' : language;

  const { worker } = useContext(WorkerContext);
  useEffect(() => {
    if (!worker) return;

    function messageHandler({ data }: MessageEvent) {
      if (data['msg'] === 'transl-written' && data['newIndexes'].has(index)) {
        refreshTransl();
      }
    }

    worker.addEventListener('message', messageHandler);
    return () => {
      worker.removeEventListener('message', messageHandler);
    };
  }, [worker, refreshTransl, index]);

  return (
    <div
      style={{
        height: `${90 * ratio}vw`,
        width: '90vw',
        margin: '8px',
        position: 'relative',
      }}
    >
      <img
        src={originalPage}
        style={getStyle(effectiveLanguage === 'orig')}
        key={'original'}
        alt={'loading'}
      />
      <img
        src={translatedPage}
        style={getStyle(effectiveLanguage === 'transl')}
        key={'translated'}
        alt={'loading'}
      />
    </div>
  );
}
