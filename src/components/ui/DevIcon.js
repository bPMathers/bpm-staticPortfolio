import React from 'react';


const DevIcon = (props) => {

  return (
    <div style={{ width: props.width ?? 25, padding: props.padding ?? 3 }}>
      {props.children}
    </div>
  );
}

export default DevIcon;