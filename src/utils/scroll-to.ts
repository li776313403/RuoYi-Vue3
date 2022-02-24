/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 13:50:13
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 14:04:19
 */

declare global {
  interface Math {
    easeInOutQuad(t: number, b: number, c: number, d: number): number;
  }
}

declare global {
  interface Window {
    webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
    mozRequestAnimationFrame(callback: FrameRequestCallback): number;
  }
}

Math.easeInOutQuad = function (
  t: number,
  b: number,
  c: number,
  d: number
): number {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

/**
 * Because it's so fucking difficult to detect the scrolling element, just move them all
 * @param {number} amount
 */
function move(amount: number) {
  document.documentElement.scrollTop = amount;
  const parent = document.body;
  if (parent && parent.parentNode) {
    const parentElem = parent.parentNode as HTMLElement;
    parentElem.scrollTop = amount;
  }
  document.body.scrollTop = amount;
}

function position(): number {
  let num = document.documentElement.scrollTop || document.body.scrollTop;
  if (!num) {
    const elem = document.body;
    if (elem && elem.parentNode) {
      const parentElem = elem.parentNode as HTMLElement;
      num = parentElem.scrollTop;
    }
  }
  return num;
}

/**
 * @param {number} to
 * @param {number} duration
 * @param {Function} callback
 */
export function scrollTo(to: number, duration: number, callback: () => void) {
  const start = position();
  const change = to - start;
  const increment = 20;
  let currentTime = 0;
  duration = typeof duration === "undefined" ? 500 : duration;
  var animateScroll = function () {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof callback === "function") {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}
