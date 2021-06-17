import React from "react";
import { DetailViewPopoverType } from "./types";
import CloseIcon from "./icons/close-icon";
import "./styles/detealviewpopover.scss";

const DetailViewPopover = ({
    headerComponent = null,
    children,
    onClose,
}: DetailViewPopoverType) => {
    return (
        <div className="detailview-popover">
            <div className="detail-view-background">
                <div className="detailview">
                    <div className="detailview-header">
                        <div className="detail-info">{headerComponent}</div>
                        <div className="detail-icon" onClick={onClose}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="detailview-container">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailViewPopover;
