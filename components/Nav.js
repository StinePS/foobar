import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DarkmodeToggle from "../components/DarkmodeToggle";
import { useBasket } from "../hooks/useBasket";
import IconBeer from "./icons/IconBeer";
import IconCart from "./icons/IconCart";
import IconHome from "./icons/IconHome";
import IconLogin from "./icons/IconLogin";

// Primary navigation with 4 links with icons + the darkmode toggle
export default function Nav() {
  const { totalItems } = useBasket();
  const previous = useRef(totalItems);
  const [showScale, setShowScale] = useState(false);
  useEffect(() => {
    if (previous.current !== totalItems) {
      setShowScale(true);
    }
  }, [totalItems]);
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
            <div onAnimationEnd={() => setShowScale(false)} className={"total-items " + (showScale ? "scale" : "")}>
              {totalItems}
            </div>
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
