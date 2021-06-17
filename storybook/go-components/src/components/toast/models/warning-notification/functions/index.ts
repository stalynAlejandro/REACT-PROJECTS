export const getBodyClass = (locale: string) => {
    return locale === "en-GB" || locale === "en-US"
        ? "alert-body-default"
        : "alert-body-custom";
};
