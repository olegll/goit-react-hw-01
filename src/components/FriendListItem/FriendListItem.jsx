export default function FriendListItem({ friend: { name, isOnline, avatar } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
