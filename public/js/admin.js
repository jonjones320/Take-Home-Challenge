async function getUsers() {
    try {
        const res = await fetch('http://localhost:3000/users');
        if (!res.ok) {
            throw new Error(`Fetch error. Status: ${res.status}`)
        }
        const data = await res.json();
        console.log("DATA: ", data);
        
        return data;
    } catch(error) {
        console.error("Error fetching users: ", error);
        return [];
    };

}

document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM CONTENT LOADED");
    const userList = document.querySelector('.admin-user-list');
    userList.innerHTML = '';
    
    try {
        const users = await getUsers();
        users.forEach(user => {
            const userLi = document.createElement('li');
            userLi.innerHTML = `
                <p>Email: ${user.email}</p>
                <p>First Name: ${user.firstName}</p>
                <p>Last Name: ${user.lastName}</p>
                <p>State: ${user.state}</p>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>`;
            userList.appendChild(userLi);
        });
    } catch(error) {
        console.error('Error processing users:', error);
    }
})