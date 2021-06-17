export function debounce(fn: () => void, wait: number) {
    let t: ReturnType<typeof setTimeout>;
    return function (this: any) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this), wait);
    };
}
