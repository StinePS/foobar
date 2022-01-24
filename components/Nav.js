import Link from "next/link";
import DarkmodeToggle from "../components/DarkmodeToggle";
import { useBasket } from "../hooks/useBasket";
import IconBeer from "./icons/IconBeer";
import IconCart from "./icons/IconCart";
import IconHome from "./icons/IconHome";
import IconLogin from "./icons/IconLogin";

// Primary navigation with 4 links with icons + the darkmode toggle
export default function Nav() {
  const { totalItems } = useBasket();
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
          <a className="basket-icon">
            <IconCart className="icon-size main-txt" />
            <div className="total-items">{totalItems}</div>
          </a>
        </Link>

        <Link href="/login">
          <a>
            <IconLogin className="icon-size main-txt" />
          </a>
        </Link>

        <DarkmodeToggle />
      </div>
    </nav>
  );
}
