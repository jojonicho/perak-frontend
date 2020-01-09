import React, { Fragment } from "react";

const getViewBox = name => {
  switch (name) {
    case "purple-yellow-ball":
      return "0 0 95 95";
    case "black-white-rect":
      return "0 0 34 132";
    case "orange-ellipse":
      return "0 0 102 102";
    case "orange-ellipse-2":
      return "0 0 102 102";
    case "purple-ball":
      return "0 0 89 89";
    case "orange-green-ball-rect":
      return "0 0 93 61";
    case "purple-rect":
      return "0 0 154 38";
    case "orange-green-ball":
      return "0 0 79 79";
    default:
      return "0 0 32 32";
  }
};

const getPath = name => {
  switch (name) {
    case "purple-yellow-ball":
      return (
        <Fragment>
          <path
            d="M47.421 94.8523C73.611 94.8523 94.8421 73.6189 94.8421 47.4261C94.8421 21.2334 73.611 0 47.421 0C21.2311 0 0 21.2334 0 47.4261C0 73.6189 21.2311 94.8523 47.421 94.8523Z"
            fill="#5055A5"
          />
          <path
            d="M47.421 94.8529C73.613 94.8529 94.8421 73.6215 94.8421 47.4268H0C0 73.6215 21.2291 94.8529 47.421 94.8529Z"
            fill="#F0D035"
          />
        </Fragment>
      );
    case "black-white-rect":
      return (
        <Fragment>
          <path
            d="M-0.000236511 0H33.5977V132H-0.000236511V0Z"
            fill="#191821"
          />
          <path
            d="M-0.000236511 66H33.5977V132H-0.000236511V66Z"
            fill="#E6E5DE"
          />
        </Fragment>
      );
    case "orange-ellipse":
      return (
        <circle cx="51" cy="51" r="41" stroke="#DD5C26" strokeWidth="20" />
      );
    case "orange-ellipse-2":
      return (
        <circle cx="51" cy="51" r="41" stroke="#DD5C26" strokeWidth="20" />
      );
    case "purple-ball":
      return (
        <path
          d="M44.5 89C69.0767 89 89 69.0767 89 44.5C89 19.9233 69.0767 0 44.5 0C19.9233 0 0 19.9233 0 44.5C0 69.0767 19.9233 89 44.5 89Z"
          fill="#5055A5"
        />
      );
    case "orange-green-ball-rect":
      return (
        <Fragment>
          <path
            d="M30.3737 60.7539C47.1486 60.7539 60.7474 47.1536 60.7474 30.3769C60.7474 13.6002 47.1486 0 30.3737 0C13.5988 0 0 13.6002 0 30.3769C0 47.1536 13.5988 60.7539 30.3737 60.7539Z"
            fill="#DD5C26"
          />
          <path
            d="M92.9997 17.2344H27.1934V49.7074H92.9997V17.2344Z"
            fill="#21A1D6"
          />
        </Fragment>
      );
    case "purple-rect":
      return <path d="M154 0H0V38H154V0Z" fill="#5055A5" />;
    case "orange-green-ball":
      return (
        <Fragment>
          <path
            d="M39.5 79C61.3153 79 79 61.3153 79 39.5C79 17.6848 61.3153 0 39.5 0C17.6848 0 0 17.6848 0 39.5C0 61.3153 17.6848 79 39.5 79Z"
            fill="#DD5C26"
          />
          <path
            d="M79 39.5C79 17.683 61.317 0 39.5 0V79C61.317 79 79 61.317 79 39.5Z"
            fill="#1B9CD5"
          />
        </Fragment>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  viewBox = "",
  width = "100%",
  height = "100%"
}) => (
  <svg
    fill="none"
    width={width}
    height={height}
    className={`decor ${name}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name)}
  </svg>
);

export default SVGIcon;
