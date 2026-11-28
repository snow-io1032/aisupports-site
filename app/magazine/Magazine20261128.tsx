import { magazine20261128Html } from "./magazine20261128Data";
import "./magazine20261128.css";

export default function Magazine20261128() {
  return <div className="magazine-nov28" dangerouslySetInnerHTML={{ __html: magazine20261128Html }} />;
}
