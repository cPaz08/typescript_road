type Operation = "multiply" | "add" | "divide"
type Result = number
const calculator = (
  a: number,
  b: number,
  op: Operation
): Result => {
  if (op === "multiply") return a * b;
  if (op === "add") return a + b;

  if (op == "divide") {
    if (b == 0) throw new Error('Cant\t divide by 0');
    return a / b;
  }

  throw new Error('Expresion is not valid')
};

console.log(process.argv)