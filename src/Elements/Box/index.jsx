import React from 'react';
import classNames from 'classnames';

const Box = ({ variant, style, children, ...rest }) => {
  return (
    <div style={style} className={classNames(variant)} {...rest}>
      {children}
    </div>
  );
};

export default Box;
