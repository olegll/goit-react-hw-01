import clsx from 'clsx';

import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { name, isOnline, avatar } }) {
  const statusUser = clsx(isOnline ? css.active : css.offline);

  return (
    <div className={css.wrapper}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={statusUser}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
