import { Project } from "@/shared/model";

export function neededProjectsSearch(
  targetArray: Project[],
  neededIds: number[],
): Project[] {
  const resultArray: any = [];

  targetArray.forEach((element) => {
    if (neededIds.includes(element.id)) {
      resultArray.push(element);
    }
  });

  return resultArray;
}
