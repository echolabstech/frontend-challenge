import React from 'react';
import Page from 'components/Page';

export default function Colors(props) {
  const {
    pageNumber,
    active,
    direction,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <Page
        color1="#fcfb56"
        color2="#e44582"
        pageNumber={pageNumber}
        heading="Color's"
        subHeading="Pick any color"
        active={active}
        direction={direction}
      />
    </React.Fragment>
  );
}