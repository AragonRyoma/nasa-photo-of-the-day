import React from "react";
import { Card } from "reactstrap";

function Data(props) {
  return (
    <>
      <Card style={{ margin: "0 auto", width: "80%" }}>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <img src={props.img}></img>
        <div>{props.desc}</div>
      </Card>
    </>
  );
}

export default Data;
