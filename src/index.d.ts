export interface Config {
  site: {
    currentBreakpoint: 'tiny' | 'small' | 'medium' | 'main';
    hasMouse: boolean;
  };
  elements?: Elements;
}

export interface Elements {
  body: HTMLBodyElement;
  nav: HTMLElement;
  navTrigger: HTMLElement;
  navButton: HTMLElement;
  navClose: HTMLElement;
  mouse: HTMLElement;
  mouseWrapper: HTMLElement;
  mouseCursor: HTMLElement;
  mouseText: HTMLElement;
  mouseInteractions: NodeListOf<HTMLElement>;
  sliderDots: NodeListOf<HTMLElement>;
  scrollElements: NodeListOf<HTMLElement>;
  fadingElements: NodeListOf<HTMLElement>;
}
