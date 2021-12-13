import Link from "next/link";
import DarkmodeToggle from "../components/DarkmodeToggle";
import IconBeer from "./icons/IconBeer";
import IconCart from "./icons/IconCart";
import IconHome from "./icons/IconHome";

export default function Nav() {
  return (
    <nav>
      <div className="nav-width">
        <Link href="/">
          <a>
            <IconHome className="icon-size main-txt" />
          </a>
        </Link>

        <Link href="/showproducts">
          <a>
            <IconBeer className="icon-size main-txt" />
          </a>
        </Link>

        <Link href="/cart">
          <a>
            <IconCart className="icon-size main-txt" />
          </a>
        </Link>

        <DarkmodeToggle />
      </div>
    </nav>
  );
}
