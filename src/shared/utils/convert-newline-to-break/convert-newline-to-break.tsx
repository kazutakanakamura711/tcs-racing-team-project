import React from 'react';

export const convertNewlineToBreak = (text: string): JSX.Element[] => {
  return text.split('\n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index !== array.length - 1 && <br />}
    </React.Fragment>
  ));
};
