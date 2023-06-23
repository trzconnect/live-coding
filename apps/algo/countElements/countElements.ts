export function countElements(arr: number[][]) {
  const flatArr = arr.flat();

  return flatArr.reduce((acc: Record<number, number>, curr) => {
    if (acc[curr]) return { ...acc, [curr]: acc[curr] + 1 };

    return { ...acc, [curr]: 1 };
  }, {});
}
