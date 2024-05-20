import React from 'react';

import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Input from '@mui/icons-material/Input';
// import Photo from '@mui/icons-material/Photo';
import Settings from '@mui/icons-material/Settings';
import Check from '@mui/icons-material/Check';
import ColorLens from '@mui/icons-material/ColorLens';
import FormatColorFill from '@mui/icons-material/FormatColorFill';
import FileDownload from '@mui/icons-material/FileDownload';
import Fullscreen from '@mui/icons-material/Fullscreen';
import Shuffle from '@mui/icons-material/Shuffle';
import Pause from '@mui/icons-material/Pause';

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
  Shuffle,
};

const Icon = (props) => {
  const I = icons[props.name];
  return <I style={{ color: props.color, width: props.size }} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: undefined,
  size: 16,
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

const IconBtn = (props) => (
  <Btn onClick={props.onClick} disabled={props.disabled}>
    <Icon name={props.name} />
  </Btn>
);

IconBtn.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

IconBtn.defaultProps = {
  disabled: false,
};

export default IconBtn;
