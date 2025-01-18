// 文字列中のスペース、タブ文字、改行文字、その他の空白文字を除去する関数
export const removeWhitespace = (str: string): string => {
  return str.replace(/\s/g, '')
}
