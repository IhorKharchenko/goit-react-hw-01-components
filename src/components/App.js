import users from '../user.json';
import statisticalData from '../data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <div>
      {users.map((user, name) => (
        <Profile
          key={name}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
      <Statistics title={''} stats={statisticalData} />
    </div>
  );
};
