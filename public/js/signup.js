// Asynchronous function to create a new user on the backend
async function createUser(user) {
    try {
        // Send POST request to the users router.
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!res.ok) {
            throw new Error(`Fetch error. Status: ${res.status}`);
        }
        const data = await res.json();
        console.log('User created: ', res.data);
        alert("New user created!");
        return data;

        // Handles any errors from the request.
    } catch(error) {
        console.error("Failed to create new user: ", error);
        alert("Something went wrong, please try again.")
    }
}

// Starts listening for 'submit' event on 'signup-form' when the page loads.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Gathers user data from the form in 'user' object.
        const user = {
            email: document.querySelector('#email').value,
            firstName: document.querySelector('#firstName').value,
            lastName: document.querySelector('#lastName').value
        };

        // Passes the new user data to, and executes, 'createUser' function.
        createUser(user);
    });

});