import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.name}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
