import React from 'react';
import classNames from 'classnames';

export default function Label({ variant, children, style }) {
  return (
    <label style={style} className={classNames(variant)}>
      {children}
    </label>
  );
}
