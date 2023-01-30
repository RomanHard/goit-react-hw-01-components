import PropTypes from 'prop-types';
import transactions from './data/transactions.json';

export default function TransactionHistory({ type, amount, currency }) {
  return items.map(item => {
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
          <tbody>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
}

TransactionHistory.propTypes = {
 type: propTypes.
};
