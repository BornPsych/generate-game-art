import React, { Component } from 'react';

import Animated from 'react-animated-transitions';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import { saveAs } from 'file-saver';

import Art from 'generate-game-art';
import IconBtn from './IconBtn';

import { invert, getRandom } from './utils';

import './example.css';

const isMobile = window.matchMedia('(max-width: 767px)').matches;

class Example extends Component {
  state = {
    custom: false,
    // start in full screen if mobile
    full: isMobile,
    map: getRandom().map,
    more: false,
    palette: ['#21242b', '#61dafb', '#6d6d6d', '#292c34', '#fff'],
    stopped: false,
    mounted: false,
  };

  more = () => this.setState({ more: !this.state.more });

  draw = () => {
    // just a trick for a smooth transition when re-drawing
    if (this.art.metadata().palette)
      document.body.style.background = this.art.metadata().palette[0];

    this.art.draw();

    this.setState({ palette: this.art.metadata().palette, stopped: false });
  };

  randomize = () => {
    const random = getRandom();

    this.setState({ map: random.map, palette: random.palette }, () =>
      this.draw()
    );
  };

  stop = () => {
    this.art.stop();

    this.setState({ stopped: true });
  };

  customize = () => this.setState({ custom: !this.state.custom });

  apply = () => this.setState({ custom: false }, () => this.draw());

  full = () => this.setState({ full: !this.state.full }, () => this.draw());

  download = () => {
    this.stop();

    this.art
      .ref()
      .toBlob((blob) => saveAs(blob, `${this.art.metadata().seed}.png`));
  };

  update = (i, color) => {
    const newPallete = this.state.palette;
    newPallete[i] = color;
    this.setState({ palette: newPallete });
  };

  link = (ref) => {
    this.art = ref;

    if (!this.state.mounted)
      this.setState({ mounted: true }, () => this.draw());
  };

  renderArt = () => {
    if (this.state.full) {
      return (
        <Art
          map={this.state.map}
          palette={this.state.palette}
          ref={this.link}
        />
      );
    }

    const size = 512;

    return (
      <Canvas {...{ size }}>
        <Art
          height={size}
          map={this.state.map}
          palette={this.state.palette}
          ref={this.link}
          width={size}
        />
      </Canvas>
    );
  };

  renderActions = () => (
    <div>
      <IconBtn name="Shuffle" onClick={this.randomize} />
      <IconBtn name="Pause" onClick={this.stop} disabled={this.state.stopped} />
      <IconBtn name="ColorLens" onClick={this.draw} />
      <IconBtn name="FormatColorFill" onClick={this.customize} />
      {!isMobile && <IconBtn name="Fullscreen" onClick={this.full} />}
      <IconBtn name="FileDownload" onClick={this.download} />
    </div>
  );

  renderPalette = () => {
    if (!this.state.palette) return null;

    return (
      <Palette>
        {this.state.palette.map((color, i) => (
          <Input
            onChange={(e) => this.update(i, e.target.value)}
            style={{
              backgroundColor: this.state.palette[i],
              color: invert(this.state.palette[i]),
            }}
            value={this.state.palette[i]}
          />
        ))}

        <IconBtn name="Check" onClick={this.apply} />
      </Palette>
    );
  };

  render() {
    const { more, custom } = this.state;

    return (
      <Animated>
        <Container>
          {this.renderArt()}

          <Actions>
            <Row>
              <IconBtn name="Settings" onClick={this.more} />

              <Animated items>
                {more && <Animated item>{this.renderActions()}</Animated>}
              </Animated>
            </Row>

            <Animated items>
              {more && custom && (
                <Animated item>{this.renderPalette()}</Animated>
              )}
            </Animated>
          </Actions>
        </Container>
      </Animated>
    );
  }
}

const Actions = styled.div`
  left: 10px;
  position: absolute;
  top: 10px;
`;

const Palette = styled.div`
  margin-left: 240px;
`;

const Canvas = styled(Paper).attrs({ square: true })`
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.1) !important;
  height: ${(props) => props.size}px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Input = styled.input`
  border-radius: 0;
  border: none;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans';
  height: 40px;
  margin: 10px;
  opacity: 0.75;
  outline: 0;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  width: 60px;
  &:hover {
    opacity: 1;
  }
`;

const Row = styled.div`
  display: flex;
`;

export default Example;
