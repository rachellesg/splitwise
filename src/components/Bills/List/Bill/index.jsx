function Bill({ bill }) {
  return (
    <div>
      {bill.name} {bill.amount}
    </div>
  );
}

export default Bill;
