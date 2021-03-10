import React from 'react';
import Player from '../../lib/player';
import WaveSurfer from 'wavesurfer.js';

import styles from './Waveform.module.css';

interface Props {
  nothingYet?: string;
}

interface State {
  cursorPosition: number;
}

class Waveform extends React.Component<Props, State> {
  nothingYet: string;

  constructor(props: Props) {
    super(props);

    this.nothingYet = props.nothingYet ?? 'nothing';

    this.state = {
      cursorPosition: 0,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    Player.getAudio().addEventListener('timeupdate', this.tick);
    const wavesurfer = WaveSurfer.create({
      container: document.querySelector('#waveform'),
      waveColor: '#A8DBA8',
      progressColor: '#3B8686',
      backend: 'MediaElement',
    });
    wavesurfer.load(Player.getAudio(), [
      0.7218,
      0.2183,
      0.3165,
      0.5198,
      0.0137,
      0.7218,
      0.2183,
      0.3165,
      0.5198,
      0.0137,
    ], 'none');
  }

  componentWillUnmount() {
    Player.getAudio().removeEventListener('timeupdate', this.tick);
  }

  tick() {
    this.setState({ cursorPosition: Player.getCurrentTime() });
  }

  render() {
    // const { somethingYouNeedFromProps } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.left}>{this.state.cursorPosition}</div>
        <div className={styles.waveform} id='waveform'>
          waveform
        </div>
        <div className={styles.right}>right</div>
      </div>
    );
  }
}

export default Waveform;
