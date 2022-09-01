declare module "smoothscroll-js" {
  class SmoothScroll {
    constructor(element: HTMLElement, options: {
      /**
       * The direction of the scroll.
       */
      direction: 'v' | 'v-',

      /**
       * The speed of the scroll animation in pixels per second.
       */
      smooth: number
    })
  }
  
  export default SmoothScroll
}