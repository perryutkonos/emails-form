// @flow
import type { Node } from 'react';
import React from 'react';

type Props = {
  children: Node
};

const ButtonList = ({ children }: Props) => (
  <div className="emails-buttons">
    {children}
  </div>
);

export default ButtonList;
