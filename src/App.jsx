import Painting from 'components/Painting';
import user from './user.json';

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Painting
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
