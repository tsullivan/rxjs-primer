// @ts-ignore
import * as level from "level";

export async function test() {
  const db = level("learnrxjs");
  const output = document.getElementById("test");

  if (output && output != null) {
    await db.put("beep", "boooooep");
    output.textContent = await db.get("beep");
  }
}
