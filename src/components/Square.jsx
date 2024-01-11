
// import { useState } from 'preact/hooks';

export default function Square({value, onClickHandle}) {
    
    return (
      <>
        <button onClick={onClickHandle}>{value}</button>
      </>
    );
  }