

# react-image-magnifier-zoom

A React component that allows users to zoom into images with a magnifying lens effect. This package is perfect for e-commerce sites or galleries where users can view high-resolution images more closely.

## Note :
 Before proceeding, please note that the height and width of both images must be the same (e.g., width={100}, zoomWidth={100}, height={100}, zoomHeight={100}) to ensure proper output. We are currently working on enhancing this package to make it flexible and easy to use.
## Installation

To install the package, run:

```bash
npm install react-image-magnifier-zoom
```

## Usage

To use the `ImageZoom` component, simply import it into your React component and provide the necessary props:

```javascript
import React from 'react';
import ImageZoom from 'react-image-magnifier-zoom';

const App = () => {
    return (
        <div>
            <h1>Image Zoom Example</h1>
            <ImageZoom
                src="path_to_your_image.jpg"
                width={400}
                height={400}
                zoomWidth={300}
                zoomHeight={300}
                lensSize={40}
            />
        </div>
    );
};

export default App;
```

## Props

| Prop          | Type     | Default | Description                                           |
|---------------|----------|---------|-------------------------------------------------------|
| `src`        | `string` | `''`    | The source URL of the image to be zoomed in.         |
| `width`      | `number` | `300`   | The width of the image container.                     |
| `height`     | `number` | `300`   | The height of the image container.                    |
| `zoomWidth`  | `number` | `300`   | The width of the zoomed image display.                |
| `zoomHeight` | `number` | `300`   | The height of the zoomed image display.               |
| `lensSize`   | `number` | `40`    | The size of the magnifying lens.                      |

## Styles

This component requires Tailwind CSS for styling. Make sure to include Tailwind CSS in your project. You can set up Tailwind CSS by following the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or fixes.

## Author

pushpak-bhoite - [ GitHub Profile](https://github.com/Pushpak-bhoite)