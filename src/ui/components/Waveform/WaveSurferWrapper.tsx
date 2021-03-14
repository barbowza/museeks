import WaveSurfer from 'wavesurfer.js';

export default class WaveSurferWrapper {
  private wavesurfer: WaveSurfer | undefined;

  constructor() {
    console.log(`WaveSurferWrapper`);
  }

  create(ele: HTMLElement) {
    this.wavesurfer = WaveSurfer.create({
      container: ele,
      waveColor: '#A8DBA8',
      progressColor: '#3B8686',
      backend: 'MediaElement',
    });
  }

  load(audio: HTMLAudioElement, peaks: Array<number>) {
    if (this.wavesurfer) {
      this.wavesurfer.load(audio, peaks);
    }
  }
}
