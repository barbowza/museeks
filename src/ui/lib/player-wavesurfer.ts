import { EventEmitter } from 'events';
import WaveSurfer from 'wavesurfer.js';

export default class PlayerWavesurfer extends EventEmitter {
  defaultPlaybackRate: number;
  playbackRate: number;
  volume: number;
  muted: boolean;

  private audio: HTMLAudioElement;
  private wavesurfer: WaveSurfer;

  constructor() {
    super();
    this.audio = new Audio();
    this.wavesurfer = new WaveSurfer({
      container: this.audio,
    });

    this.defaultPlaybackRate = 1.0;
    this.playbackRate = this.defaultPlaybackRate;
    this.volume = 1.0;
    this.muted = false;
  }

  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    return this.audio.addEventListener(type, listener, options);
  }

  public removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void {
    return this.audio.removeEventListener(type, listener, options);
  }

  public get src() {
    return this.audio.src;
  }
  public set src(value: string) {
    this.audio.src = value;
  }
  public get paused() {
    return this.audio.paused;
  }
  public get duration() {
    return this.audio.duration;
  }
  public get currentTime() {
    return this.audio.currentTime;
  }
  public set currentTime(value:number) {
    this.audio.currentTime = value;
  }

  public pause() {
    return this.audio.pause();
  }

  public play() {
    return this.audio.play();
  }

  public setSinkId(deviceId:string) {
    // eslint-disable-next-line
    // @ts-ignore
    return this.audio.setSinkId(deviceId);
  }
}
