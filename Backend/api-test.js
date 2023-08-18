const { registerProvider } = require('./riot');

async function testRegisterProvider() {
    try {
        // ... rest of your code
    const region = 'EUW';
    const callbackUrl = 'https://7687-178-232-144-0.ngrok-free.app/'; // Update with your callback URL

    const result = await registerProvider(region, callbackUrl);
    if (result) {
        console.log("Provider registration successful:", result);
    } else {
        console.log("Provider registration failed.");
    }
}
    catch (err) {
        console.error("An unexpected error occurred:", err);

}
}
testRegisterProvider();
