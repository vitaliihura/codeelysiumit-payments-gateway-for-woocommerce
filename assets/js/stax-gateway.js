jQuery(document).ready(function ($) {
    // Variable to hold the StaxJs instance and the checkout form element.
    let staxJs;
    let checkout_form = $('form.checkout');

    // Only proceed if the StaxJs library is defined.
    if (typeof StaxJs !== 'undefined') {
        // Listen for WooCommerce's "updated_checkout" event to re-render card fields.
        $(document.body).on('updated_checkout', function () {
            // Remove any existing input fields for card number and CVC to avoid duplication.
            $('#stax-card-number > input').remove();
            $('#stax-card-cvv > input').remove();

            // Initialize the StaxJs object with the web payments token and field configuration.
            staxJs = new StaxJs(stax_params.web_payments_token, {
                number: {
                    id: 'stax-card-number',
                    // Use localized placeholder text if provided; fallback to default.
                    placeholder: stax_params.card_number_placeholder || '0000 0000 0000 0000',
                    style: 'width: 100%; height: 38px; border-radius: 0px; border: 1px solid rgb(204, 204, 204); padding: 0px 10px; background: rgb(255, 255, 255);'
                },
                cvv: {
                    id: 'stax-card-cvv',
                    // Use localized placeholder text if provided; fallback to default.
                    placeholder: stax_params.cvv_placeholder || 'CVV',
                    style: 'width: 100%; height: 38px; border-radius: 0px; border: 1px solid rgb(204, 204, 204); padding: 0px 10px; background: rgb(255, 255, 255);'
                }
            });

            // Show the card form; log the success message or any error to the console.
            staxJs.showCardForm().then(function (handler) {
                console.log(stax_params.card_form_loaded_text || 'Stax card form was loaded');
            }).catch(function (err) {
                console.log((stax_params.error_loading_form_text || 'There was an error loading the form:') + ' ', err);
            });
        });

        // Intercept click event on the "Place Order" button.
        $(document).on('click', '#place_order', function (e) {
            e.preventDefault();

            // Prevent multiple submissions by setting a flag.
            $('.stax_prevent_submit').val('0');

            // Append a payment processing overlay using localized text if available.
            let overlayHTML = '<div class="stax-overlay"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/></svg> ' + (stax_params.payment_processing_text || 'Payment processing.') + '</div>';
            $('body').append(overlayHTML);

            // Retrieve checkout field values and trim whitespace.
            let firstName = $.trim($('#billing_first_name').val());
            let lastName = $.trim($('#billing_last_name').val());
            let email = $.trim($('#billing_email').val());
            let address_1 = $.trim($('#billing_address_1').val());
            let address_2 = $.trim($('#billing_address_2').val());
            let city = $.trim($('#billing_city').val());
            let state = $.trim($('#billing_state').val());
            let zip = $.trim($('#billing_postcode').val());
            let country = $.trim($('#billing_country').val());
            let phone = $.trim($('#billing_phone').val());
            let company = $.trim($('#billing_company').val());
            let year = $.trim($('.year').val());
            let month = $.trim($('.month').val());
            let note = $.trim($('#order_comments').val());
            let orderNumber = $.trim($('.order > strong').text());
            // Remove '$' and commas from numerical values.
            let grandTotal = $.trim($('.order-total:first bdi').text().replace('$', '').replace(/,/g, ''));
            let tax = $.trim($('.tax-total:first bdi').text().replace('$', '').replace(/,/g, ''));

            // Construct an object with extra details required for processing the payment.
            let extraDetails = {
                total: grandTotal,
                firstname: firstName,
                lastname: lastName,
                company: company,
                email: email,
                month: month,
                year: year,
                phone: phone,
                address_1: address_1,
                address_2: address_2,
                address_city: city,
                address_state: state,
                address_zip: zip,
                address_country: country,
                url: 'https://app.staxpayments.com/#/bill/',
                method: 'card',
                validate: false,
                meta: {
                    reference: orderNumber,
                    memo: note,
                    subtotal: grandTotal,
                    tax: tax
                }
            };

            // Call the payment method of StaxJs with the extra details.
            staxJs.pay(extraDetails).then(function (result) {
                // Append a hidden input to signal that payment is done.
                $('form.checkout').append('<input type="hidden" name="stax-payment-done" id="stax-payment-done" value="done">');
                // If the result contains an ID, submit the checkout form.
                if (result.id) {
                    checkout_form.submit();
                }
            }).catch(function (err) {
                console.log((stax_params.error_payment_text || 'Stax payment error:') + ' ', err);
                // Handle the error by showing an error message to the user.
                handlePaymentError(err.message);
                // Append a hidden input to signal that payment error occurred.
                $('form.checkout').append('<input type="hidden" name="stax-payment-error" id="stax-payment-error" value="' + err.message + '">');
            });
        });

        // Intercept form submission to prevent default behavior if errors are present.
        checkout_form.on('submit', function (e) {
            e.preventDefault();
            let subErrorCount = $('.woocommerce-NoticeGroup-checkout ul li').length;
            if (subErrorCount < 1) {
                $('.stax_prevent_submit').val('0');
                $('body').append('<div class="stax-overlay"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/></svg> ' + (stax_params.payment_processing_text || 'Payment processing.') + '</div>');
            }
        });
    }

    /**
     * Safely display a payment error message using jQuery to avoid XSS.
     *
     * @param {string} message - The error message to display.
     */
    function handlePaymentError(message) {
        // Create an unordered list element for the error message and apply inline CSS.
        let $noticeList = $('<ul>', {class: 'woocommerce-error__list'}).css('color', '#EA4335');
        // Append a list item with the error message text (safely escaping HTML).
        $('<li>').text(message).appendTo($noticeList);

        // If multiple error messages exist, remove them before appending the new one.
        if ($('.woocommerce-error__list').length > 1) {
            $('.woocommerce-error__list').remove();
            $('.woocommerce-notices-wrapper:first').append($noticeList);
        } else {
            $('.woocommerce-notices-wrapper:first').append($noticeList);
        }

        // Remove any payment processing overlay and blocking UI elements.
        $('.stax-overlay, .blockUI.blockOverlay').remove();

        // Smoothly scroll to the error message for better user experience.
        $('html, body').animate({
            scrollTop: $noticeList.offset().top
        }, 500);
    }
});
