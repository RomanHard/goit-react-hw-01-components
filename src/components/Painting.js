import PropTypes from 'prop-types';

export default function Painting({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Painting.PropTypes {
    username : PropTypes.string,
    tag : PropTypes.string,
    location : PropTypes.string,
    avatar : PropTypes.string,
}
