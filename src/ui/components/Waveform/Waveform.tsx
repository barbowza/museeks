import React from 'react';
import Player from '../../lib/player';

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
      <header className={styles.header}>
        <div className={styles.header__mainControls}>one {this.state.cursorPosition}</div>
        <div className={styles.header__playingBar}>two</div>
        <div className={styles.header__search}>three</div>
      </header>
    );
  }
}

export default Waveform;
