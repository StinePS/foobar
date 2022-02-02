import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useOnTap from "../hooks/useOnTap";

export default function Product(props) {
  // Use hook to determine if beer is currently on tap
  const onTap = useOnTap(props.name);
  const [addedText, setAddedText] = useState(false);
  useEffect(() => {
    if (addedText) {
      const timeout = setTimeout(() => setAddedText(false), 1000);
      return () => {
        // "Clean-up function" that resets the counter of items in the basket
        clearTimeout(timeout);
      };
    }
  }, [addedText]);

  function putInTheBasket() {
    setAddedText(true);
    props.addToBasket({
      price: 49,
      name: props.name,
      id: props.id,
    });
  }

  return (
    <article className="product-article">
      <div className="grid-1-3">
        <div>
          <Image src={`/images/${props.label}`} alt={`${props.name} - A lovely beer`} width={100} height={100} />
        </div>

        <div>
          {" "}
          <h2>{props.name}</h2>
          <p>{`${props.alc}%`}</p>
          <p className="price">Kr. {49},- </p>
          <p className="notontap" hidden={onTap !== false}>
            <strong>This beer is not on tap today</strong>
          </p>
        </div>
      </div>
      <div className="product-buttons">
        <button onClick={putInTheBasket} disabled={onTap !== true} className="btn">
          {addedText ? "Beer added" : "Add to cart"}
        </button>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="btn-info margin-left">
                <span>Info</span>
                <ChevronUpIcon className={`${open ? "" : "chevron-rotate"} chevron-size margin-left`} />
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className="txt-disclosure">{props.description.overallImpression}</p>
                <Link href={`/beer/${props.name}`}>
                  <a className="txt-strong hover-me">More info</a>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </article>
  );
}
