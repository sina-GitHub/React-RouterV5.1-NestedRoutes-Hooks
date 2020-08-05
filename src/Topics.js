import React from "react";
import {Link, useHistory, useLocation, useRouteMatch} from "react-router-dom";

import Name from "./Name";

function TopicName({match}) {
  let history = useHistory();
  let location = useLocation();

  if (location.pathname === "/topics/user") {
    return (
      <div>
        <div>TOPIC NAME</div>
        {location.pathname}
        {[{name: "sina"}, {name: "tom"}, {name: "mike"}].map((item, index) => {
          return (
            <h1
              style={{
                margin: "5px 0 0 20px",
                color: "#333",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => history.push(`${match.url}/${item.name}`)}
            >
              {item.name}
            </h1>
          );
        })}
      </div>
    );
  } else {
    return <h1>Null</h1>;
  }
}

export default function Topics() {
  let match = useRouteMatch();

  let topicNameRoute = useRouteMatch({
    path: `${match.url}/:topics`,
    exact: true,
    strict: true,
    sensitive: true,
  });

  let nameRoute = useRouteMatch({
    path: `${match.url}/:topics/:name`,
    exact: true,
    strict: true,
    sensitive: true,
  });

  return (
    <div>
      <h1>Topics</h1>
      {[{title: "shop"}, {title: "product"}, {title: "user"}].map(
        (item, index) => (
          <Link key={index} to={`${match.url}/${item.title}`}>
            <div>{item.title}</div>
          </Link>
        )
      )}

      {topicNameRoute && <TopicName match={topicNameRoute} />}
      {nameRoute && <Name match={nameRoute} />}
    </div>
  );
}
