import Profile from 'components/Profile/Profile';
import user from './data/user.json';
import data from './data/data.json';

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
}
