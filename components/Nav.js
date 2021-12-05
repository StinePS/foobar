import Link from "next/link";
import DarkmodeToggle from "../components/DarkmodeToggle";

export default function Nav() {
  return (
    <nav>
      <div className="nav-width">
        <Link href="/">
          <a>Dashboard</a>
        </Link>

        <Link href="/showproducts">
          <a>Product list</a>
        </Link>

        <Link href="/basket">
          <a>Basket</a>
        </Link>

        <Link href="/login">
          <a>Log in</a>
        </Link>

        <DarkmodeToggle />
      </div>
    </nav>
  );
}
