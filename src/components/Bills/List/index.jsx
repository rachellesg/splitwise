import Bill from "./Bill";

function BillsList({ bills }) {
  return bills.map((bills, index) => {
    return <Bill key={index} bill={bills} />;
  });
}

export default BillsList;
