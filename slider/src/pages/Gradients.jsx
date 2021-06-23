import React from 'react';
import Page from 'components/Page';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

export default function Gradients(props) {
  const {
    pageNumber,
    active,
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
        active={active}
        direction={direction}
        icon={<InvertColorsIcon />}
      />
    </React.Fragment>
  );
}
