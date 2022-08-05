import { getInput, setOutput, setFailed } from "@actions/core";
import github from "@actions/github";

try {
  // throw(new Error("Some error message"));
  const name = getInput("who-to-greet");
  console.log("Hello ${name}");

  const time = new Date();
  setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  setFailed("dwdw");
}
