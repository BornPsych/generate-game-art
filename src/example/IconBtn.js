import React from 'react';

import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Input from '@material-ui/icons/Input';
// import Photo from '@material-ui/icons/Photo';
import Settings from '@material-ui/icons/Settings';
import Check from '@material-ui/icons/Check';
import ColorLens from '@material-ui/icons/ColorLens';
import FormatColorFill from '@material-ui/icons/FormatColorFill';
import FileDownload from '@material-ui/icons/FileDownload';
import Fullscreen from '@material-ui/icons/Fullscreen';
import Shuffle from '@material-ui/icons/Shuffle';
import Pause from '@material-ui/icons/Pause';

const icons = {
  // Input,
  // Photo,
  Check,
  ColorLens,
  FileDownload,
  FormatColorFill,
  Fullscreen,
  Pause,
  Settings,
  Shuffle
};

const Icon = props => {
  const I = icons[props.name];
  return <I style={{ color: props.color, width: props.size }} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

Icon.defaultProps = {
  color: undefined,
  size: 16
};

const Btn = styled(Button)`
  background-color: #fff !important;
  border-radius: 0 !important;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  height: 40px;
  margin: 10px !important;
  min-width: 40px !important;
  max-width: 40px !important;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;

const IconBtn = props => (
  <Btn onClick={props.onClick} disabled={props.disabled}>
    <Icon name={props.name} />
  </Btn>
);

IconBtn.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

IconBtn.defaultProps = {
  disabled: false
};

export default IconBtn;
