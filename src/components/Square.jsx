

export default function Square({value, onClickHandle}) {
    
    return (
      <>
        <button className="Square" onClick={onClickHandle}>{value}</button>
      </>
    );
  }