import css from './Profile.module.css';

export default function Profile(props) {
  return (
    <div className={css.cardUser}>
      <div className={css.userInfo}>
        <img src={props.image} alt="User avatar" width="150" />
        <p className={css.userName}>{props.name}</p>
        <p className={css.tagLocation}>{props.tag}</p>
        <p className={css.tagLocation}>{props.location}</p>
      </div>
      <ul className={css.cardList}>
        <li className={css.cardListItem}>
          <span className={css.itemText}>Followers</span>
          <span className={css.itemTextValue}>{props.stats.followers}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.itemText}>Views</span>
          <span className={css.itemTextValue}>{props.stats.views}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.itemText}>Likes</span>
          <span className={css.itemTextValue}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
