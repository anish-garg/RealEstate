/* eslint-disable react/prop-types */
import { Avatar, Menu } from '@mantine/core';

const Profile = ({ user, logout }) => {
    return (
        <div className='flex items-center'>
            <Menu>
                <Menu.Target>
                    <Avatar src={user?.picture} alt='user image' radius={"xl"} />
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>
                        Favourites
                    </Menu.Item>
                    <Menu.Item>
                        Bookings
                    </Menu.Item>
                    <Menu.Item onClick={() => {
                        localStorage.clear();
                        logout()
                    }}>
                        Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div >
    )
}

export default Profile