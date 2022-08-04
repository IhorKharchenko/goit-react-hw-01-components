import users from '../user.json';
import statisticalData from '../data.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
export const App = () => {
  return (
    <div>
      {users.map(({ username, tag, location, avatar, stats }) => (
        <Profile
          key={username}
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      ))}
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
};
