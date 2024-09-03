export function neededProjectsSearch(
  targetArray: any[],
  neededIds: number[],
): any[] {
  const resultArray: any = [];

  targetArray.forEach((element) => {
    if (neededIds.includes(element.id)) {
      resultArray.push(element);
    }
  });

  return resultArray;
}
