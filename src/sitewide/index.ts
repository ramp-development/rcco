import type { Config, Elements } from '$types';

import { breakpoints } from './breakpoint';
import { mouse } from './mouse';

export const sitewide = (config: Config) => {
  const elements: Elements = {
    body: document.querySelector('body'),
    nav: document.querySelector('.nav-wrapper'),
    navTrigger: document.querySelector('.nav-trigger'),
    navButton: document.querySelector('.nav-button'),
    navClose: document.querySelector('.nav-close'),
    mouse: document.querySelector('.mouse'),
    mouseWrapper: document.querySelector('.mouse__wrapper'),
    mouseCursor: document.querySelector('.mouse__cursor'),
    mouseText: document.querySelector('.mouse__text'),
    mouseInteractions: document.querySelectorAll('[data-mouse-class]'),
    sliderDots: document.querySelectorAll('.w-slider-dot'),
    scrollElements: document.querySelectorAll('[data-scroll-to]'),
    fadingElements: document.querySelectorAll("[data-mouse-fade = 'true']"),
  };

  config.elements = elements;

  mouse(config);
  breakpoints(config);
};
