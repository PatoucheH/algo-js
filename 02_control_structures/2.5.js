import promptSync from "prompt-sync";

const prompt = promptSync();

i = 0;
while (i !== 42) {
  i = Number(prompt("what is your favorite number ? "));
  if (i === 42) {
    console.log("Good choice.");
    // alert("Good choice.");
  } else {
    // alert("Are your sure ? ");
    console.log("Are your sure ? ");
  }
}
