export type EllipsisExportType = {
    xlxs: boolean;
    png: boolean;
    pdf: boolean;
    onExport: (option: optionsInterface) => void;
};

export type optionsInterface = "XLXS" | "PNG" | "PDF";
