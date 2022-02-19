import * as React from 'react';
import style from './AvatarGroup.module.scss';
import Avatar from '../Avatar/Avatar.jsx';

const ShowMore = ({ users, handler }) => <button id={style.showMore} onClick={handler}>+{users.length}</button>;

export default function AvatarGroup({ users, max = 5 }) {
    let avatarGroup, allUsers = users.map((user, index) => <Avatar key={index} alt={user.name} src={user.avatar} />);
    const dropdown = React.useRef();

    React.useEffect(() => {

    },[])

    function handleShowMore() {
                document.addEventListener('click', (event) => {
					console.log(event);
					if (event.target !== dropdown.current) {
						dropdown.current.classList.remove(style.active);
					}
				});
        dropdown.current.classList.toggle(style.active);
    }

    if (max < users.length) {
        avatarGroup = users
            .slice(0, max)
            .map((user, index) => <Avatar key={index} alt={user.name} src={user.avatar} />)
            .concat([<ShowMore users={users} handler={ handleShowMore }/>])
            ;
    } else {
        avatarGroup = allUsers;
    }

    return (
        <div className={style.avatarGroup}>
            {avatarGroup}
            <div ref={dropdown} className={style.allUsers}>
                {allUsers}
            </div>
        </div>
    );
}

