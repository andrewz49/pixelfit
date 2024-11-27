
# Pixelfit

A lightweight and flexible screen adaptation library for mobile and large-screen devices, supporting responsive scaling and px-rem conversion.

## Features

- **Mobile adaptation**: Automatically scales the root font size (`rem`) for mobile devices based on the design width.
- **Large screen adaptation**: Adapts target DOM elements to fit large screen resolutions using `transform` scaling.
- **Utility methods**: Includes `px2rem` and `rem2px` conversion utilities.
- **Type-safe and error-proof**: Handles invalid configurations gracefully with default values and validations.

## Installation

Install `pixelfit` via npm:

```bash
npm install pixelfit
```

## Usage

### Importing the Library

```javascript
import Pixelfit from 'pixelfit';
```

### Quick Start

#### 1. Mobile Screen Adaptation

```javascript
const pixelfit = new Pixelfit({ type: 'm', width: 750 });
pixelfit.pixelfit(); // Automatically adapts to the device size
```

#### 2. Large Screen Adaptation

```javascript
const pixelfit = new Pixelfit({ 
  type: 'l', 
  width: 1920, 
  height: 1080, 
  target: document.getElementById('app') 
});
pixelfit.pixelfit(); // Adapts the target element for large screens
```

#### 3. Converting px to rem

```javascript
// Convert 100px to rem based on a design width of 750px
const remValue = Pixelfit.px2rem(100, 750);
console.log(remValue); // Output: rem value
```

#### 4. Converting rem to px

```javascript
// Convert 1rem to px based on a design width of 750px
const pxValue = Pixelfit.rem2px(1, 750);
console.log(pxValue); // Output: px value
```

## API Reference

### Constructor

#### `new Pixelfit(options)`

| Parameter    | Type     | Default            | Description                                    |
|--------------|----------|--------------------|------------------------------------------------|
| `type`       | `string` | `'m'`              | Adaptation type: `'m'` for mobile, `'l'` for large screens. |
| `width`      | `number` | `750` (mobile) / `1920` (large) | Design width for scaling. |
| `height`     | `number` | `1080` (large only) | Design height for large screens. |
| `target`     | `HTMLElement` | `document.body` | Target DOM element for large screen adaptation. |

### Methods

#### `.pixelfit()`

Starts the adaptation process. Automatically resizes elements and applies scaling based on the selected type (`'m'` or `'l'`). Automatically listens for `resize` events.

#### `.largeScreenAdp()`

Applies large screen adaptation. Automatically called when `type` is `'l'`.

#### `.mobileAdp()`

Applies mobile screen adaptation. Automatically called when `type` is `'m'`.

#### `Pixelfit.px2rem(px, designWidth = 750)`

Converts `px` to `rem`.

| Parameter      | Type     | Default | Description                      |
|----------------|----------|---------|----------------------------------|
| `px`           | `number` |         | The pixel value to convert.      |
| `designWidth`  | `number` | `750`   | The design width for conversion. |

Returns: `number` - The converted `rem` value.

#### `Pixelfit.rem2px(rem, designWidth = 750)`

Converts `rem` to `px`.

| Parameter      | Type     | Default | Description                      |
|----------------|----------|---------|----------------------------------|
| `rem`          | `number` |         | The rem value to convert.        |
| `designWidth`  | `number` | `750`   | The design width for conversion. |

Returns: `number` - The converted `px` value.

## Example Project Structure

```text
project/
├── src/
│   ├── index.js        # Your project entry point
├── dist/
│   ├── pixelfit.min.js # Minified bundle
├── package.json        # NPM package details
└── README.md           # Documentation
```

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/pixelfit.git
cd pixelfit
npm install
```

Build the library:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## License

This project is licensed under the [MIT License](LICENSE).
