# CodeElysiumIT Payments Gateway for WooCommerce

**CodeElysiumIT Payments Gateway for WooCommerce** is a WooCommerce extension that integrates the CodeElysiumIT Payments
Gateway for WooCommerce to enable secure credit card payments on your online store. The plugin streamlines the checkout
process and is designed for merchants who need a reliable payment solution.

## Description

CodeElysiumIT Payments Gateway for WooCommerce allows your customers to securely pay using the CodeElysiumIT Payments
Gateway for WooCommerce. The plugin integrates seamlessly with WooCommerce’s classic checkout system and has been
successfully tested on several live websites. Features include:

- Secure integration with the CodeElysiumIT Payments Gateway for WooCommerce.
- Simple configuration via the WooCommerce settings panel.
- Full support for the classic checkout interface.
- Localized text for multi-language support.
- Developer-friendly architecture for further enhancements.

## Installation

1. Download and unzip the plugin archive.
2. Upload the `codeelysiumit-payments-gateway-for-woocommerce` folder to the `/wp-content/plugins/` directory on your
   WordPress site.
3. Activate the plugin through the WordPress Plugins menu.
4. Navigate to **WooCommerce > Settings > Payments** and configure the Stax payment method by entering your API Key and
   Web Payments Token.

## Plugin structure

```
codeelysiumit-payments-gateway-for-woocommerce/
├── assets/
│ ├── index.php
│ ├── css/
│ │ ├── index.php
│ │ └── stax-gateway.css
│ ├── js/
│ │ ├─── index.php
│ │ ├── stax.js
│ │ ├── stax.min.js
│ │ └── stax-gateway.js
│ ├── images/
│ │ ├── index.php
│ │ └── stax-logo.png
│ └── screenshots/
│   ├── index.php
│   ├── checkout.png
│   └── settings.png
├── index.php
├── LICENSE.txt
├── README.txt
├── REAME.md
└── codeelysiumit-payments-gateway-for-woocommerce.php
```

## Usage

Once installed and activated, the plugin appears as a payment option in your WooCommerce settings. To use it:

- Go to **WooCommerce > Settings > Payments**.
- Find "Stax" and click **Setup**.
- Enter your Stax API Key and Web Payments Token.
- Save your settings. Customers will then be able to pay using the Stax gateway during checkout.

## Important Notice

Stax does not yet support the Checkout block. This may impact the shopper experience. Please switch to classic checkout
for full functionality.

## External Services

This plugin integrates with **StaxPayments API** to process transactions securely. As part of this integration, the
plugin includes JavaScript files that originate from the official Stax implementation.

- `https://globalsiteanalytics.com/resource/resource.png`
- `https://globalsiteanalytics.com/service/hdim`
- `https://app.staxpayments.com/#/bill/`

**Purpose:**
These resources are part of the original Stax JavaScript library and are required for proper communication with the
StaxPayments API. They facilitate payment processing by dynamically integrating payment fields and handling secure
transactions. These links are also used in the middle of the original code from StaxPayments, which is located
inside `stax.js` and `stax.min.js`.

## Data Transmission

The plugin interacts with Stax API and sends order-related details required for payment processing, including:

- Order total
- Billing details (name, address, email, phone number)
- Payment token
- Order reference number
- Tax and subtotal amounts

These scripts execute during the WooCommerce checkout process when the user selects StaxPayments as the payment method.

## Minified JavaScript & Source Code

The plugin includes JavaScript files for frontend functionality. The minified version (`stax.min.js`) is used for
performance optimization, while the original source file (`stax.js`) is included for transparency and further
development.

- **Minified JS:** `assets/js/stax.min.js` (Used in the plugin)
- **Unminified JS:** `assets/js/stax.js` (Included for reference, but not used directly)

Developers can modify and regenerate the minified file as needed.

## Privacy Policy

- [StaxPayments Privacy Policy](https://staxpayments.com/privacy/)
- [StaxPayments Terms of Service](https://staxpayments.com/terms-of-use/)

## Developer Note

This is one of the first versions of the plugin. It contains some stylistic issues and incomplete aspects; not all error
messages may display correctly in notifications. However, the payment process works correctly and has been successfully
tested on several live websites.  
For feedback and suggestions, please contact: [vitaliihura@gmail.com](mailto:vitaliihura@gmail.com)

## Documentation

For detailed documentation and troubleshooting, please visit:  
[https://codeelysiumit.com/plugins/codeelysiumit-payments-gateway-for-woocommerce/#docs](https://codeelysiumit.com/plugins/codeelysiumit-payments-gateway-for-woocommerce/#docs)

## Screenshots

1. Payment form integration during checkout.
2. Backend settings page in WooCommerce.

## Changelog

**1.0.0**

- Initial release with basic payment integration.
- Secure payment processing and WooCommerce integration.
- Developer note regarding known issues added.
- Documented use of external API (StaxPayments) and external resources.
- Included minified and unminified JavaScript files for transparency.
- Clarified that `stax.js` and `stax.min.js` remain unchanged to preserve original Stax functionality.
- Added details on data sent to StaxPayments API for processing transactions.

## Upgrade Notice

**1.0.0**

- Initial release.

## License

This plugin is licensed under GPL-2.0 or later.
