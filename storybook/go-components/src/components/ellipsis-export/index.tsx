import React from "react";
import { EllipsisExportType } from "./types";
import InboxInIcon from "./icons/inboxin-icon";
import "./styles/ellipsis-export.scss";

const EllipsisExport = ({
    xlxs = false,
    png = false,
    pdf = false,
    onExport,
}: EllipsisExportType) => {
    return (
        <div className="ellipsis-export">
            {xlxs && (
                <div
                    className="ellipsis-option"
                    onClick={() => onExport("XLXS")}
                >
                    <div className="ellipsis-option-content">
                        <InboxInIcon />
                        <span className="ellipsis-no-select">XLXS</span>
                    </div>
                </div>
            )}
            {png && (
                <div
                    className="ellipsis-option"
                    onClick={() => onExport("PNG")}
                >
                    <div className="ellipsis-option-content">
                        <InboxInIcon />
                        <span className="ellipsis-no-select">PNG</span>
                    </div>
                </div>
            )}
            {pdf && (
                <div
                    className="ellipsis-option"
                    onClick={() => onExport("PDF")}
                >
                    <div className="ellipsis-option-content">
                        <InboxInIcon />
                        <span className="ellipsis-no-select">PDF</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EllipsisExport;
