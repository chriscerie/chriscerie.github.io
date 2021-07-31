import React from "react";
import "./index.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const onClick = (linkRef: React.RefObject<HTMLDivElement>) => () => {
  linkRef.current?.scrollIntoView({behavior: 'smooth'})
}

type propTypes = {
  linkRefs: Array<{
    linkName: string;
    linkRef: React.RefObject<HTMLDivElement>;
  }>;
};

function LinksList(props: propTypes) {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="|" style={{ float: "right", transform: "translate(0%, 50%)" }}>
      {props.linkRefs.map(
        (value: {
          linkName: string;
          linkRef: React.RefObject<HTMLDivElement>;
        }) => (
          <Link color="inherit" onClick={ onClick(value.linkRef) }>{ value.linkName }</Link>
        )
      )}
    </Breadcrumbs>
  );
}

export default LinksList;
