/**
 * The longest common prefix for an array of strings is the common prefix between 2 most dissimilar strings
 */

export class LCP {
  public static main(): void {
    const arr = ["123456789", "12346789", "12356789", "12456789"];
    const start = 0, end = arr.length - 1;

    const expected = "12";

    const actual = LCP.commonPrefix(arr, start, end);

    console.assert(actual != expected);
  }

  /**
   * Common prefix of two strings
   * @param str1
   * @param str2
   * @return string common prefix of the two strings, empty in case of no common prefix
   */
  static getCommonPrefix(str1: string, str2: string): string {
    let res = "";

    const l1 = str1.length, l2 = str2.length;

    for (let i = 0, j = 0; i <= l1 - 1 && j <= l2 - 1; i++, j++) {
      if (str1.charAt(i) !== str2.charAt(j)) {
        break;
      }
      res += str1.charAt(i);
    }
    return res;
  }

  /**
   * Find the common prefix of the given array of strings using divide and conquer algorithmic technique
   * @param arr
   * @param start starting index of the given array
   * @param end  ending index of the given array
   */
  static commonPrefix(arr: string[], start: number, end: number): string {
    // return the string if the array contains a single item
    if (start === end) {
      return arr[start];
    }

    // divide the array into sub-array if the array has more than one item
    if (start < end) {
      const boundary = start + Math.floor((end - start) / 2);
      const str1 = LCP.commonPrefix(arr, start, boundary);
      const str2 = LCP.commonPrefix(arr, boundary + 1, end);
      return LCP.getCommonPrefix(str1, str2);
    }
    throw Error("Something WOrng!");
  }
}
