import React from 'react'

function UsersList(props) {
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
