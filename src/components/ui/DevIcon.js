import React from 'react';


const DevIcon = (props) => {

  return (
    <div style={{ width: props.width ?? 28, padding: props.padding ?? 5 }}>
      {props.children}
    </div>
  );
}

export default DevIcon;