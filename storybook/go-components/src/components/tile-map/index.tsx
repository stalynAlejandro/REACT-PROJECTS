import React from "react";
import { TileMapType } from "./types";
import "./styles/tile.scss";

const TileMap = ({ loading, loadingTitle, style, children }: TileMapType) => {
    return (
        <div className="tile-map" style={style}>
            {loading ? (
                <div className="spiner">
                    <span>{loadingTitle}</span>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default TileMap;
