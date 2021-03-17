import WaveSurfer from 'wavesurfer.js';

export default class WaveSurferWrapper {
  private wavesurfer: WaveSurfer | undefined;

  constructor() {
    console.log(`WaveSurferWrapper created`);
  }

  getWaveSurfer(): WaveSurfer|undefined {
    return this.wavesurfer;
  }

  create(ele: HTMLElement) {
    this.wavesurfer = WaveSurfer.create({
      container: ele,
      waveColor: '#A8DBA8',
      progressColor: '#3B8686',
      backend: 'MediaElement',
    });
  }

  assignAudioEleAndPeaks(audio: HTMLAudioElement, peaks: Array<number>): void {
    if (this.wavesurfer) {
      this.wavesurfer.load(audio, peaks);
    }
  }

  loadUrl(url: string): void {
    if (this.wavesurfer) {
      this.wavesurfer.load(url);
    }
  }

  onLoaded(callback: any) {
    if (this.wavesurfer) {
      this.wavesurfer.once('waveform-ready', callback);
    }
  }

  exportPCM() {
    if (this.wavesurfer) {
      return this.wavesurfer
        .exportPCM(1024, 10000, true)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return Promise.reject();
  }
}
