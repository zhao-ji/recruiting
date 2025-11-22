import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p style={{ "white-space": "pre-line" }}>
                  <span style={{"font-weight": "600", "font-size": "20", "color": "#333"}}>
                      {props.data ? props.data.firstParagraph: "loading..."}
                  </span>
                  <br />
                  <br />
                  {props.data ? props.data.paragraph : "loading..."}
              </p>
              <div className="list-style">
                  <br/>
                  <br/>
                  <br/>
              </div>
              {/*
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
