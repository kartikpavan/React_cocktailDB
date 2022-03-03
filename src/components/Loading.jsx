import React from 'react';
import Spinner from './assets/loading.gif';
function Loading() {
  return (
    <>
      <img
        src={Spinner}
        alt="loading..."
        width={180}
        className="text-center mx-auto"
      />
    </>
  );
}

export default Loading;
