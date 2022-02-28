import * as React from 'react';
import style from './AvatarGroup.module.scss';
import Avatar from '../Avatar/Avatar.jsx';

const ShowMore = ({ handler, display }) => <button id={style.showMore} onClick={handler}>+{display}</button>;

export default function AvatarGroup({ users, max = 5, avatarStyle }) {
    let avatarGroup,
		allUsers = users.map((user, index) => <Avatar style={avatarStyle} key={index} alt={user.name} src={user.avatar} />);

    function handleShowMore(event) {
        const dropdown = document.getElementById('dropdown');
	    console.log(dropdown);
        dropdown && dropdown.classList.toggle(style.active);

        //Agregar funcionalidad para que el menu se cierre cuando se hace click fuera de este
    }

    if (max < users.length) {
        avatarGroup = users
            .slice(0, max)
            .map((user, index) => <Avatar style={avatarStyle} key={index} alt={user.name} src={user.avatar} />)
            ;
    } else {
        avatarGroup = allUsers;
    }

    return (
		<div className={style.avatarGroup}>
			{avatarGroup}
            {users.length - max > 0 && <ShowMore users={users} handler={handleShowMore} display={users.length - max} />}
			<div id="dropdown" className={style.allUsers}>
				{allUsers}
			</div>
		</div>
	);
}

