import PropTypes from 'prop-types';
import './Friends-module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      {/* <span className="status">{isOnline}</span> */}
      <span className={isOnline ? 'statusOnline' : 'statusOffline'}></span>
      <img
        className="avatar_friends"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
