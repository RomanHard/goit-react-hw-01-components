import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(item => {
          return (
            <HistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
