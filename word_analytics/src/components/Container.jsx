import { useState } from "react";
import Status from "./Status";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/contains";

export default function Container() {
  const [text, setText] = useState("");
  const stat = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharaters: text.length,
    instagramCharatersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facbookCharatersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Status stat={stat} />
    </main>
  );
}
