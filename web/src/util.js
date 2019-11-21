// easing functions http://goo.gl/5HLl8
const easeInOutQuad = (t, b, c, d) => {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || ((callback) => {
    window.setTimeout(callback, 1000 / 60);
  })
)();

export const scrollTo = (to, callback, duration = 500) => {
  const move = (amount) => {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  };
  const position = () => document.documentElement.scrollTop
    || document.body.parentNode.scrollTop
    || document.body.scrollTop;
  const start = position(),
    change = to - start,
    increment = 20;
  let currentTime = 0;
  const animateScroll = () => {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    const val = easeInOutQuad(currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        callback();
      }
    }
  };
  animateScroll();
};

export const scrollToTop = () => {
  // disable scroll animation WCSCMS-19038
  // TODO: add scroll handler for virtualized list before reenabling scroll animation
  // scrollTo(0, 0);
  window.scrollTo(0, 0);
};


