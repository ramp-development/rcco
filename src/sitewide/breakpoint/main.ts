import type { Config } from '$types';

export const main = (config: Config) => {
  const { body, nav } = config.elements;

  desktopBaseSize();
  window.addEventListener('resize', desktopBaseSize);

  window.onscroll = () => {
    if (window.scrollY >= 32) {
      nav.classList.add('is--scrolled');
    } else {
      nav.classList.remove('is--scrolled');
    }
  };

  function desktopBaseSize() {
    const width = window.innerWidth,
      height = window.innerHeight,
      divided = width / height;

    const fontSize = divided > 16 / 9 ? `${(16 / 945) * 100}vh` : `${(16 / 1680) * 100}vw`;

    body.style.fontSize = fontSize;
  }
};
