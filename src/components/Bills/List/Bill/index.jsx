function Bill({ bill }) {
  return (
    <div className="bill-content">
      {bill.name} <div className="bill-content_amount">{bill.amount}</div>
    </div>
  );
}

export default Bill;
