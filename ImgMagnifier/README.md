
# React Image Magnifier Zoom

A lightweight and customizable image magnifier component for React. This package allows you to zoom in on specific parts of an image using a magnifying glass effect.

## 📦 Installation

To install the package, use npm:

```bash
npm install react-image-magnifier-zoom
```

or with yarn:

```bash
yarn add react-image-magnifier-zoom
```

## 🚀 Usage

Here's an example of how to use the `ImageZoom` component in your React project.

### Example

```tsx
import React from 'react';
import ImageZoom from 'react-image-magnifier-zoom';

function App() {
  return (
    <div>
      <h1>Image Magnifier Example</h1>
      <ImageZoom
        src="https://via.placeholder.com/800"
        width={300}
        height={300}
        magnifierSize={100}
        zoomLevel={2.5}
        enabled={true}
      />
    </div>
  );
}

export default App;
```

### Explanation

- **`src`**: The source URL of the image.
- **`width`**: Width of the main image.
- **`height`**: Height of the main image.
- **`magnifierSize`** (optional): Diameter of the magnifier circle (default is `150`).
- **`zoomLevel`** (optional): Magnification level for the zoomed image (default is `2.5`).
- **`enabled`** (optional): Enables or disables the magnifier feature (default is `true`).

## 🛠️ Props

| Prop            | Type      | Default | Description                                                   |
|-----------------|-----------|---------|---------------------------------------------------------------|
| `src`           | `string`  | `""`    | The image source URL.                                         |
| `width`         | `number`  | `200`   | The width of the main image.                                  |
| `height`        | `number`  | `200`   | The height of the main image.                                 |
| `magnifierSize` | `number`  | `150`   | Diameter of the magnifier circle.                             |
| `zoomLevel`     | `number`  | `2.5`   | The zoom level for the magnifier effect.                      |
| `enabled`       | `boolean` | `true`  | Whether the magnifier functionality is enabled or disabled.   |

## 🖼️ Screenshot

![Image Magnifier Zoom Example](https://i.ytimg.com/vi/onUH6Op5GKQ/maxresdefault.jpg)

## ⚙️ Customization

You can customize the `ImageZoom` component by adjusting the properties:

- Change the size of the magnifier with `magnifierSize`.
- Adjust the zoom level with `zoomLevel`.
- Enable or disable the magnifier with the `enabled` prop.

## 📋 Additional Notes

- Ensure that the `src` prop points to a valid image URL.
- If using local images, make sure they are correctly imported in your React project.

## 📄 License

This package is licensed under the MIT License.