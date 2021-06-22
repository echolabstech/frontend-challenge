import React from 'react';
import Page from 'components/Page';

export default function Presets(props) {
  const {
    pageNumber,
    active,
    direction,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <Page
        color1="#75e2f6"
        color2="#f9f855"
        pageNumber={pageNumber}
        heading="Presets"
        subHeading="Manage presets"
        active={active}
        direction={direction}
      />
    </React.Fragment>
  );
}