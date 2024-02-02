import React from 'react';
import classNames from 'classnames';

const Typography = ({ variant, style, children, ...rest }) => {
  return (
    <p style={style} className={classNames(variant)} {...rest}>
      {children}
    </p>
  );
};

export default Typography;
