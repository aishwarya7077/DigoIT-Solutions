import { Link } from "react-router-dom";
import BrandWordmark from "./BrandWordmark.jsx";

// Official DigoIT Global logo: emblem image + shared text wordmark.
export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="DigoIT Global — home">
      <img className="logo__img" src="/logo-mark.png" alt="DigoIT Global" />
      <BrandWordmark />
    </Link>
  );
}
