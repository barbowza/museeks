import React, { createRef } from 'react';
import Player from '../../lib/player';
import WaveSurferWrapper from './WaveSurferWrapper';

import styles from './Waveform.module.css';

interface Props {
  nothingYet?: string;
}

interface State {
  cursorPosition: number;
}

class Waveform extends React.Component<Props, State> {
  private divRef = createRef<HTMLDivElement>();
  private wavesurferWrapper: any;
  nothingYet: string;

  constructor(props: Props) {
    super(props);

    this.nothingYet = props.nothingYet ?? 'nothing';

    this.state = {
      cursorPosition: 0,
    };

    this.tick = this.tick.bind(this);
    this.wavesurferWrapper = new WaveSurferWrapper();
  }

  componentDidMount() {
    Player.getAudio().addEventListener('timeupdate', this.tick);

    /*
    const ele = this.divRef.current!;
    this.wavesurferWrapper.create(ele);

    // WIP Can remove this once we're responding to the Player.setSrc event
    const audioEle = Player.getAudio();

    this.wavesurferWrapper.assignAudioEleAndPeaks(audioEle, [
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
    ]);

    // I want an event triggering when Player.setaudioSrc is called that sends me the src path.
    // WS exportPCM given src path will return me the peaks
    // Pass peaks to WS.load (as done in componentDidMount above)
    const attachPeaks = async () => {
      Player.getAudio().removeEventListener('play', attachPeaks);

      const src = Player.getSrc();
      console.log(`Waveform received 'play' event: src: ${src}`);
      // Create a temporary (offscreen) HTMLAudioElement to give wavesurfer something to work with when extracting peak data
      // const tmpAudioEle = document.createElement('HTMLAudioElement');
      const tmpAudioEle = new Audio();

      const tmpWaveSurfer = new WaveSurferWrapper();
      tmpWaveSurfer.create(tmpAudioEle);
      tmpWaveSurfer.onLoaded(() => {
        tmpWaveSurfer.exportPCM().then(peaks=>{
          this.wavesurferWrapper.assignAudioEleAndPeaks(audioEle, peaks);
          this.wavesurferWrapper.play();
        }).catch(console.error);
      });
      tmpWaveSurfer.loadUrl(src);
    }
    Player.getAudio().addEventListener('play', attachPeaks);
    */
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
        <div className={styles.waveform} ref={this.divRef}>
          waveform
        </div>
        <div className={styles.right}>right</div>
      </div>
    );
  }
}

export default Waveform;
