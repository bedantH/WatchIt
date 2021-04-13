// component displays all the users present in a lobby / room
// import react
import React from 'react'

// component function
function UsersList(props) {
    // return component
    return (
        <footer className="currently-online">
            <p>Currently online: </p>
            <div className="usersList">
                {
                    props.users.map((user) => {
                        return (
                            <div className="username-card" key={user.id}>
                                <span className="online"></span>
                                <p>{user.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </footer>
    )
}

export default UsersList;
