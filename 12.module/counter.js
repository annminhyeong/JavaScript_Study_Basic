let count = 0;
export function increase() {
  count++;
  console.log(count);
}

export default function getCount() {
  return count;
}
