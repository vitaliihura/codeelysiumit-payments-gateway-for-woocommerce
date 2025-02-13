<?php
/**
 * Plugin Name: CodeElysiumIT Payments Gateway for WooCommerce
 * Plugin URI: https://codeelysiumit.com/plugins/codeelysiumit-payments-gateway-for-woocommerce/
 * Description: Adds support for the StaxPayments Gateway for WooCommerce.
 * Version: 1.0.0
 * Author: vitaliihura
 * Author URI: https://codeelysiumit.com
 * Text Domain: codeelysiumit-payments-gateway-for-woocommerce
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * WC requires at least: 8.5
 * WC tested up to: 9.6.1
 * Requires Plugins: woocommerce
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/*
 * Define plugin constants.
 */
if (!defined('CEIT_GATEWAY_VERSION')) {
    define('CEIT_GATEWAY_VERSION', '1.0.0');
}

if (!defined('CEIT_GATEWAY_PLUGIN_DIR')) {
    define('CEIT_GATEWAY_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

if (!defined('CEIT_GATEWAY_PLUGIN_URL')) {
    define('CEIT_GATEWAY_PLUGIN_URL', plugin_dir_url(__FILE__));
}

/**
 * Register the Stax gateway class with WooCommerce.
 *
 * @param array $gateways List of available payment gateways.
 * @return array Modified list of payment gateways.
 */
add_filter('woocommerce_payment_gateways', 'ceit_add_gateway_class');
function ceit_add_gateway_class($gateways)
{
    $gateways[] = 'WC_Gateway_Ceit_Stax';
    return $gateways;
}

/**
 * Initialize the Stax gateway class after all plugins are loaded.
 */
add_action('plugins_loaded', 'ceit_init_gateway_class');
function ceit_init_gateway_class()
{
    // Ensure that the WooCommerce Payment Gateway class exists.
    if (!class_exists('WC_Payment_Gateway')) {
        return;
    }

    /**
     * Class WC_Gateway_Ceit_Stax
     *
     * Implements the StaxPayments Gateway for WooCommerce.
     */
    class WC_Gateway_Ceit_Stax extends WC_Payment_Gateway
    {

        /**
         * Constructor.
         */
        public function __construct()
        {
            $this->id = 'stax';
            $this->icon = plugins_url('assets/images/stax-logo.png', __FILE__);
            $this->has_fields = true;
            $this->method_title = __('Stax', 'codeelysiumit-payments-gateway-for-woocommerce');
            $this->method_description = __('Allows payments with Stax.', 'codeelysiumit-payments-gateway-for-woocommerce');
            $this->supports = array(
                'products',
                'default_credit_card_form',
                'blocks', // Supports block-based checkout.
            );

            // Load the settings defined in the admin.
            $this->init_form_fields();
            $this->init_settings();

            // Retrieve saved settings.
            $this->title = $this->get_option('title');
            $this->description = $this->get_option('description');
            $this->api_key = $this->get_option('api_key');
            $this->web_payments_token = $this->get_option('web_payments_token');

            // Hook to update settings and enqueue necessary scripts.
            add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
            add_action('wp_enqueue_scripts', array($this, 'payment_scripts'));

            // Hook for handling gateway callbacks (if needed).
            add_action('woocommerce_api_' . strtolower(get_class($this)), array($this, 'check_response'));
        }

        /**
         * Initialize form fields for the admin settings.
         */
        public function init_form_fields()
        {
            $this->form_fields = array(
                'enabled' => array(
                    'title' => __('Enable/Disable', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'type' => 'checkbox',
                    'label' => __('Enable Stax Payment', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'default' => 'yes',
                ),
                'title' => array(
                    'title' => __('Title', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'type' => 'text',
                    'description' => __('This controls the title which the user sees during checkout.', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'default' => __('Stax Payment', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'desc_tip' => true,
                ),
                'description' => array(
                    'title' => __('Description', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'type' => 'textarea',
                    'description' => __('This controls the description which the user sees during checkout.', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'default' => __('Pay securely using your credit card with Stax.', 'codeelysiumit-payments-gateway-for-woocommerce'),
                ),
                'api_key' => array(
                    'title' => __('API Key', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'type' => 'text',
                    'description' => __('Your Stax API Key', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'default' => '',
                ),
                'web_payments_token' => array(
                    'title' => __('Web Payments Token', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'type' => 'text',
                    'description' => __('Your Stax Web Payments Token', 'codeelysiumit-payments-gateway-for-woocommerce'),
                    'default' => '',
                ),
            );
        }

        /**
         * Output the payment fields on the checkout page.
         */
        public function payment_fields()
        {
            // Output the description if set.
            if ($this->description) {
                echo esc_html(wp_kses_post($this->description));
            }

            // Only display the fields if the web payments token is provided.
            if ($this->web_payments_token != '') {
                ?>
                <fieldset id="wc-<?php echo esc_attr($this->id); ?>-cc-form" class="wc-credit-card-form wc-payment-form"
                          style="background:transparent;">
                    <?php do_action('woocommerce_credit_card_form_start', $this->id); ?>
                    <div class="form-row form-row-wide">
                        <label><?php echo esc_html__('Card Number', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>
                            <span
                                    class="required">*</span></label>
                        <div id="stax-card-number" style="width:100%;">
                            <input inputmode="numeric"
                                   title="<?php echo esc_attr__('Credit card number', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>"
                                   type="text" name="card_number" maxlength="19" size="19" class="input-outline-none"
                                   placeholder="0000 0000 0000 0000"
                                   style="width: 92%; height: 38px; border-radius: 0; border: 1px solid rgb(204,204,204); padding: 0 10px;">
                        </div>
                    </div>
                    <div class="form-row form-row-first date-year-holder">
                        <label><?php echo esc_html__('Expiry Date', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>
                            <span
                                    class="required">*</span></label>
                        <div class="snax-month">
                            <input class="month" name="month" size="3" maxlength="2"
                                   placeholder="<?php echo esc_attr__('MM', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>">
                        </div>
                        /
                        <div class="snax-year">
                            <input class="year" name="year" size="5" maxlength="4"
                                   placeholder="<?php echo esc_attr__('YYYY', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>">
                        </div>
                    </div>
                    <div class="form-row form-row-last">
                        <label><?php echo esc_html__('Card Code (CVC)', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>
                            <span
                                    class="required">*</span></label>
                        <div id="stax-card-cvv">
                            <input inputmode="numeric"
                                   title="<?php echo esc_attr__('CVC number', 'codeelysiumit-payments-gateway-for-woocommerce'); ?>"
                                   type="text"
                                   size="4" maxlength="4" placeholder="000"
                                   style="width: 84%; height: 38px; border-radius: 0; border: 1px solid rgb(204,204,204); padding: 0 10px;">
                        </div>
                    </div>
                    <?php do_action('woocommerce_credit_card_form_end', $this->id); ?>
                    <div class="clear"></div>
                </fieldset>
                <?php
            }
        }

        /**
         * Process the payment for the order.
         *
         * @param int $order_id Order ID.
         * @return array Payment result.
         */
        public function process_payment($order_id)
        {
            // Verify nonce to ensure the request is valid.
            if (!isset($_POST['stax_nonce']) || !wp_verify_nonce(sanitize_key(wp_unslash($_POST['stax_nonce'])), 'stax_nonce')) {
                // If nonce verification fails, add an error notice and mark payment as failed.
                wc_add_notice(__('Payment error: Nonce verification failed.', 'codeelysiumit-payments-gateway-for-woocommerce'), 'error');
                do_action('woocommerce_payment_failed', $order_id);
                return array(
                    'result' => 'fail',
                    'redirect' => '',
                );
            }

            $order = wc_get_order($order_id);

            // Sanitize and retrieve the POSTed data.
            $stax_payment = isset($_POST['stax-payment-done']) ? sanitize_text_field(wp_unslash($_POST['stax-payment-done'])) : '';
            $stax_payment_error = isset($_POST['stax-payment-error']) ? sanitize_text_field(wp_unslash($_POST['stax-payment-error'])) : '';

            if (!empty($stax_payment) && 'done' === $stax_payment) {
                // Payment successful. Additional verification via Stax API can be added here.
                $order->payment_complete();
                $order->add_order_note(__('Stax payment successful', 'codeelysiumit-payments-gateway-for-woocommerce'));

                return array(
                    'result' => 'success',
                    'redirect' => $this->get_return_url($order),
                );
            } else {
                // Payment failed.
                do_action('woocommerce_payment_failed', $order_id);
                $text_error = $stax_payment_error ? $stax_payment_error : __('Missing payment result', 'codeelysiumit-payments-gateway-for-woocommerce');
                wc_add_notice(__('Payment error: ', 'codeelysiumit-payments-gateway-for-woocommerce') . $text_error, 'error');

                return array(
                    'result' => 'fail',
                    'redirect' => '',
                );
            }
        }

        /**
         * Enqueue custom styles and scripts for the payment gateway.
         */
        public function payment_scripts()
        {
            if (!is_checkout()) {
                return;
            }

            wp_enqueue_style('stax-gateway-css', plugins_url('assets/css/stax-gateway.css', __FILE__), array(), CEIT_GATEWAY_VERSION, 'all');
            wp_enqueue_script('stax-min', plugins_url('assets/js/stax.min.js', __FILE__), array('jquery'), CEIT_GATEWAY_VERSION, true);
            wp_enqueue_script('stax-gateway', plugins_url('assets/js/stax-gateway.js', __FILE__), array('jquery', 'stax-min'), CEIT_GATEWAY_VERSION, true);

            // Calculate cart totals.
            $cart_data = WC()->session->get('cart', array());
            $total = 0;
            $tax = 0;

            foreach ($cart_data as $data) {
                $total += isset($data['line_total']) ? floatval($data['line_total']) : 0;
                $tax += isset($data['line_tax']) ? floatval($data['line_tax']) : 0;
            }

            $total = number_format((float)$total, 2, '.', '');
            $tax = number_format((float)$tax, 2, '.', '');
            $grand_total = number_format((float)$total, 2, '.', '');

            $isUserLoggedIn = is_user_logged_in();
            $site_url = site_url();
            $order_total = (WC()->cart) ? WC()->cart->total : '';

            // Localize variables for the JavaScript file.
            wp_localize_script('stax-gateway', 'stax_params', array(
                'web_payments_token' => $this->web_payments_token,
                'ajax_url' => admin_url('admin-ajax.php'),
                'stax_nonce' => wp_create_nonce('stax_nonce'),
                'total' => $total,
                'grand_total' => $grand_total,
                'tax' => $tax,
                'isUserLoggedIn' => $isUserLoggedIn,
                'site_url' => $site_url,
                'order_total' => $order_total,
            ));
        }

        /**
         * Placeholder method for handling callback responses from Stax.
         */
        public function check_response()
        {
            // Process any callback from Stax if required.
        }
    }
}

/**
 * Add a settings link to the plugin action links on the Plugins page.
 *
 * @param array $links Existing plugin action links.
 * @return array Modified plugin action links.
 */
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'ceit_gateway_settings_link');
function ceit_gateway_settings_link($links)
{
    $settings_link = '<a href="admin.php?page=wc-settings&tab=checkout&section=stax">' . esc_html__('Settings', 'codeelysiumit-payments-gateway-for-woocommerce') . '</a>';
    array_unshift($links, $settings_link);
    return $links;
}
