import { magazine20261107Html } from "./magazine20261107Data";
import "./magazine20261107.css";

export default function Magazine20261107() {
  return <div className="magazine-nov7" dangerouslySetInnerHTML={{ __html: magazine20261107Html }} />;
}
