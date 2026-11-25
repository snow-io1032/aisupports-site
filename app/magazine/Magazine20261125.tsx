import { magazine20261125Html } from "./magazine20261125Data";
import "./magazine20261125.css";

export default function Magazine20261125() {
  return <div className="magazine-nov25" dangerouslySetInnerHTML={{ __html: magazine20261125Html }} />;
}
