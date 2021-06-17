export const splitText = (text: string) => {
    const splitedText: Array<string> = text.split(" ");
    const newText: string = splitedText.length > 0 ? splitedText[0] : text;
    if (newText.length === 1) return text;
    return newText;
};
