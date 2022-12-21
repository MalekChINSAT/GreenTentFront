import type { FC } from 'react';

import { RotatingLines } from 'react-loader-spinner';

interface PreloadProps {}

const Preload: FC<PreloadProps> = () => {
  return (
    <div className="w-full min-h-screen	 mx-auto flex items-center justify-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1"
        width="40"
        visible={true}
      />
    </div>
  );
};

export default Preload;
