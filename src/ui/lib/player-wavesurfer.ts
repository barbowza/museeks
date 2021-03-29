
import WaveSurfer from 'wavesurfer.js';

export default class PlayerWavesurfer {
  defaultPlaybackRate: number;
  playbackRate: number;
  volume: number;
  muted: boolean;


  private audio: HTMLAudioElement;
  private wavesurfer: WaveSurfer;

  constructor() {
    this.audio = new Audio();
    this.wavesurfer = new WaveSurfer({
      container: this.audio
    });

    this.defaultPlaybackRate = 1.0;
    this.playbackRate = this.defaultPlaybackRate;
    this.volume = 1.0;
    this.muted = false;
  }

}

