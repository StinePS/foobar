import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <Link href="/index">
        <a>Dashboard</a>
      </Link>

      <Link href="/form">
        <a>Order form</a>
      </Link>
    </nav>
  );
}
