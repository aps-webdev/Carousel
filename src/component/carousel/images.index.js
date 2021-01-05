import React from "react";

export default function Images(props) {
  const styles = {
    width: 100 + "%",
  };
  return (
    <React.Fragment>
      <img src={props.src} alt="carouselView" style={styles} />
    </React.Fragment>
  );
}
