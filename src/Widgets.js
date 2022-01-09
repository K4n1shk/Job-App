import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("Average pay across job levels", " 5d ago • 28,506 readers")}
      {newsArticle(
        "Zerodha's Nikhil warns about inflation",
        "4d ago • 27,896 readers"
      )}
      {newsArticle(
        "Apple, Google execs rake in millions",
        "2d ago • 4,564 readers"
      )}
      {newsArticle(
        "Omicron waves hits travel industry again",
        "2d ago • 8,506 readers"
      )}
      {newsArticle(
        "India's unemployment rate spikes up",
        "1d ago • 12,026 readers"
      )}
    </div>
  );
};

export default Widgets;
