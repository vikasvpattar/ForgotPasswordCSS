import React from 'react';
import classNames from 'classnames';

export default function Input({ variant, style, ...rest }) {
  return (
    <input
      className={classNames(variant)}
      type="text"
      placeholder="new"
      style={style}
      {...rest}
    />
  );
}
