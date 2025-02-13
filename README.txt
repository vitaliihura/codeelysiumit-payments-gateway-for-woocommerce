=== CodeElysiumIT Payments Gateway for WooCommerce ===
Contributors: vitaliihura
Donate link:
Tags: payment, gateway, staxpayment, woo, credit cards
Requires at least: 5.8
Tested up to: 6.7
Stable tag: 1.0.0
Requires PHP: 7.5
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

CodeElysiumIT Payments Gateway for WooCommerce integrates Stax with WooCommerce for secure credit card payments.

== Description ==

CodeElysiumIT Payments Gateway for WooCommerce is a WooCommerce extension that allows merchants to securely accept credit card payments via the CodeElysiumIT Payments Gateway for WooCommerce. The plugin integrates seamlessly with WooCommerce’s checkout system (classic checkout) and has been successfully tested on several live websites. Key features include:

* Secure payment processing via Stax.
* Easy configuration from the WooCommerce settings panel.
* Full support for the classic checkout interface.
* Localized text for improved internationalization.
* Developer-friendly architecture for future enhancements.

== Installation ==

1. Download and unzip the plugin archive.
2. Upload the `codeelysiumit-payments-gateway-for-woocommerce` folder to the `/wp-content/plugins/` directory.
3. Activate the plugin through the WordPress 'Plugins' menu.
4. Go to WooCommerce > Settings > Payments and configure the Stax payment method by entering your API Key and Web Payments Token.

== Usage ==

After installation, the plugin appears as a payment option in your WooCommerce settings. To use it:

= How do I set up the plugin? =
Navigate to WooCommerce > Settings > Payments, find "Stax", and click "Setup." Enter your API Key and Web Payments Token, then save your settings. Customers will then be able to pay using the Stax gateway during checkout.

= Is the plugin compatible with block-based checkout? =
No. Currently, the plugin does not support the WooCommerce Checkout block. Please switch to the classic checkout for full functionality.

== Important Notice ==

Stax does not yet support the Checkout block. This may impact the shopper experience. Please switch to classic checkout for a complete payment experience.

== External Services ==

This plugin integrates with **StaxPayments API** to process transactions securely.
As part of this integration, the plugin includes JavaScript files that originate from the official Stax implementation.

- `https://globalsiteanalytics.com/resource/resource.png`
- `https://globalsiteanalytics.com/service/hdim`
- `https://app.staxpayments.com/#/bill/`

**Purpose:**
These resources are part of the original Stax JavaScript library and are required for proper communication with the StaxPayments API.
They facilitate payment processing by dynamically integrating payment fields and handling secure transactions.
These links are also used in the middle of the original code from staxpayments which is located in the middle of the files stax.js and stax.min.js

**Data Sent:**
- The plugin interacts with Stax API and sends order-related details required for payment processing, including:
  - Order total
  - Billing details (name, address, email, phone number)
  - Payment token
  - Order reference number
  - Tax and subtotal amounts

**When:**
- The scripts are executed during WooCommerce checkout when a user selects StaxPayments as the payment method.
- The payment request is sent to Stax API at the time of checkout.

**Privacy Policy:**
- [StaxPayments Privacy Policy](https://staxpayments.com/privacy/)

**Terms of Service:**
- [StaxPayments Terms](https://staxpayments.com/terms-of-use/)

As this plugin uses the original JavaScript files provided by Stax, all external resource links within `stax.min.js` and `stax.js` remain unchanged to ensure the integrity and proper functioning of the original code.

== Minified JavaScript & Source Code ==

The plugin includes JavaScript files for frontend functionality. The minified version (`stax.min.js`) is used for performance optimization, while the original source file (`stax.js`) is included for transparency and further development.

- **Minified JS:** `assets/js/stax.min.js` (Used in the plugin)
- **Unminified JS:** `assets/js/stax.js` (Included for reference, but not used directly)

Developers can modify and regenerate the minified file as needed.

== Developer Note ==
This is one of the first versions of the plugin. It contains some stylistic issues and incomplete aspects; not all error messages may display correctly in notifications. However, the payment process works correctly and has been successfully tested on several live websites.
For feedback and suggestions, please contact: vitaliihura@gmail.com

== Documentation ==

For detailed documentation and troubleshooting, please visit:
https://codeelysiumit.com/plugins/codeelysiumit-payments-gateway-for-woocommerce/#docs

== Screenshots ==

1. Payment form integration during checkout.
2. Backend settings page in WooCommerce.

== Changelog ==

= 1.0.0 =
* Initial release with basic payment integration.
* Secure payment processing and WooCommerce integration.
* Developer note added regarding known issues and feedback contact.
* Documented use of external API (StaxPayments) and external resources.
* Included minified and unminified JavaScript files for transparency.
* Clarified that `stax.js` and `stax.min.js` remain unchanged to preserve original Stax functionality.
* Added details on data sent to StaxPayments API for processing transactions.

== Upgrade Notice ==

= 1.0.0 =
Initial release.

Links require brackets and parenthesis:
Here's a link to [WordPress](https://wordpress.org/ "WordPress").

`<?php code(); ?>`
