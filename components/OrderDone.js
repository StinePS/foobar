import Link from "next/link";

export default function OrderDone() {
  return (
    <div>
      <h3>Dear CUSTOMER NAME!</h3>
      <p>Thank you for your order!</p>
      <p>You can follow your order on the dashboard - Your order number is ORDER NUMBER</p>
      <Link href="/">
        <a>Dashboard</a>
      </Link>
      ;
    </div>
  );
}
