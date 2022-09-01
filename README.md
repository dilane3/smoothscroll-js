# Smoothscroll-js
  
A simple smooth scroll library for JavaScript. 

## Advantages

* Easy to use
* Lightweight
* Fast
* Cross-browser
* Customizable

## Installation

```bash
npm install smoothscroll-js
```

or 

```bash
yarn add smoothscroll-js
```

## Usage

Genarally, you can use the library like this.

```jsx
import SmoothScroll from 'smoothscroll-js';
```

Then you can use it in your application:

```jsx
// Wrapper element for smooth scrolling
const wrapper = document.querySelector('.wrapper');

// Smooth scroll option
const options = {
  direction: 'v',
  smooth: 0.08
}

// Initialization
new SmoothScroll(wrapper, options);
```

**For React App**

Especialy for React App, you can use the library like this.

```jsx
import { SmoothScroll } from 'smoothscroll-js';
```

Then you can use it in your application:

```jsx
// Create a component for smooth scrolling
const App = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const options = {
      direction: 'v',
      smooth: 0.08
    }

    new SmoothScroll(wrapper.current, options);
  } , []);

  return (
    <div ref={wrapper} className="wrapper">
      <div className="content">
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
      </div>
    </div>
  );
}

```

## Parameters

The constructor of SmoothScroll accepts the following parameters.

| Parameter | Type        | Description |
| --------- | ----------- | ----------- |
| wrapper   | HTMLElement | The wrapper element for smooth scrolling |
| options   | Object      | The options for smooth scrolling |

### Options parameters

| Parameter | Type            | Description |
| --------- | --------------- | ----------- |
| direction | 'v' | 'v-'      | The direction of smooth scrolling |
| smooth    | Number          | The smooth value of smooth scrolling |

## License

MIT License

Copyright (c) 2022 Dilane3
