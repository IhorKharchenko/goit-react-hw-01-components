import users from '../../user.json';
import statisticalData from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Box as="main" p="4">
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
      <TransactionHistory items={transactions} />
    </Box>
  );
};
