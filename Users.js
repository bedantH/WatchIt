// Manage users join the room using sockets
const users = [];

const addUser = ({ id, name, room }) => {
    // Trim name and room provided (removin trailing spaces)
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const checkExistingUser = users.find((user) => user.room === room && user.name === name);

    // Check if room and name are empty if true return error
    if (room === '' || name === '') {
        return { error: 'Username and Room ID is required.' }
    }

    // Check if an user with the same name is alerady present
    if (checkExistingUser) {
        return { error: 'Username is already taken.' }
    }

    // Create user object
    const user = { id, name, room };
    console.log(user);
    // Push it to the user array
    users.push(user);
    console.log(users);

    return { user }
}

const removeUser = (id) => {
    // find the index of the user using the provided id
    const index = users.findIndex((user) => user.id === id);

    // if we get an index then we will splice the array upto that element
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };