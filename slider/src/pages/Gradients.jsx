import React from 'react';
import Page from 'components/Page';

export default function Gradients(props) {
  const {
    pageNumber,
    direction,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <Page
        color1="#7943F5"
        color2="#76e5f6"
        pageNumber={pageNumber}
        heading="Gradients"
        subHeading="Start, end, angle"
      />
    </React.Fragment>
  );
}
