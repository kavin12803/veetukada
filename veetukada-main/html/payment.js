// Redirect to payment page (mock payment process)
function goToPaymentPage() {
    try {
        window.location.assign("payment.html");  // This is an alternative redirection method
    } catch (error) {
        console.error("Error during redirection: ", error); // Log any errors to the console for debugging
    }
}
