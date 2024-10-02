function findProfile(platform) {
    let username = document.getElementById("username").value.trim();
    let url = "";
    let errorMessage = document.getElementById("error-message");

    // Clear any previous error message
    errorMessage.textContent = "";

    // Check if the username is empty
    if (username === "") {
        errorMessage.textContent = "Please enter a valid username or profile URL.";
        return;
    }

    // Determine the correct URL based on the platform
    switch(platform) {
        case 'facebook':
            url = `https://www.facebook.com/${username}`;
            break;
        case 'instagram':
            url = `https://www.instagram.com/${username}`;
            break;
        case 'twitter':
            url = `https://www.twitter.com/${username}`;
            break;
        case 'linkedin':
            url = `https://www.linkedin.com/in/${username}`;
            break;
        default:
            errorMessage.textContent = "Invalid platform selected.";
            return;
    }

    // Open the profile in a new tab if the username is valid
    if (url !== "") {
        window.open(url, '_blank');
    } else {
        errorMessage.textContent = "An error occurred while generating the profile URL.";
    }
}
