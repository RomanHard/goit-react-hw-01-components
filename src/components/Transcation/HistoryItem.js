import PropTypes from 'prop-types';

export default function HistoryItem({ type, amount, currency }) {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}

HistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
