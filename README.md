# ![Alt text](src/icons/icon-128.png) Yoink!
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

**Yoink** is a Firefox browser extension that lets you easily extract and copy content from web pages using CSS selectors, mimicking the functionality of JavaScript's `querySelectorAll`. Select specific elements, then choose to extract their inner text, HTML, or attributes, and copy the results to your clipboard.

## Features

- **Extract Inner Text**: Retrieve just the text from matched elements.
- **Extract HTML**: Capture the full HTML content of matched elements.
- **Extract Attributes**: Specify an attribute (e.g., `src`, `href`) to retrieve its value from matched elements.
- **Persistent queries**: The last query remains even if you close and reopen the extension popup.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/jessicawarburton/yoink.git
   ```
2. Open your browser's extension settings (found in about:addons for Firefox).

3. Select "Debug Add-ons" > "Load Temporary Add-on" and choose the cloned yoink folder.

Yoink is now ready to use!

### Usage

1. **Open Yoink**: Click on the Yoink icon in your browser's toolbar.

2. **Enter Query Selector**: Enter a CSS selector (e.g., .titleline > a) to target elements on the page.

3. **Choose Content Type**: Select whether to extract Text, HTML, or a specific Attribute.

4. **(Optional)**: If you select "Attribute," an additional field will appear to specify the attribute name (e.g., href).

5. **Extract from Page**: Click "Extract from page" to retrieve content from the specified elements.

6. **View Results**: The extracted results will appear in the text area below.



## Contributing

Contributions are welcome! If you have ideas for improvements or spot any issues, feel free to submit a pull request.

## License

MIT License. See LICENSE for details.