# QR Scan

A simple, mobile-friendly QR code generator built as a static web page. Enter text or a URL, generate a scannable QR code, and download it as a PNG image.

## Features

- Clean, modern UI with responsive layout
- Text or URL input for QR generation
- Adjustable QR size with live preview
- Download generated QR code as PNG
- No backend required; runs entirely in the browser

## Usage

1. Open `index.html` in your browser.
2. Enter the text or link you want to encode.
3. Adjust the size slider if needed.
4. Click **Create QR**.
5. Use the **Download PNG** button to save the image.

## Files

- `index.html` — Main application page and UI

## Notes

- The page uses `qrcodejs` from a CDN to generate QR codes.
- Works offline after initial load if the browser has already cached the library.

## Tips

- Use URLs, plain text, contact details, or short instructions as input.
- Scan the generated QR code with any camera or QR reader app.
