import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <a>Dashboard</a>
      </Link>

      <Link href="/showproducts">
        <a>Product list</a>
      </Link>

      <Link href="/login">
        <a>Log in</a>
      </Link>
    </nav>
  );
}
