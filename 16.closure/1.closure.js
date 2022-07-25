const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;

  function inner() {
    console.log(`inside inner ${x}`);
  }
  return inner;
}
const inner = outer();
inner();
