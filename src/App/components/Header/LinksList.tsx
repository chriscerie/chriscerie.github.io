import React, { useEffect, useState } from "react";
import "./LinksList.css";
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
  const [currentLink, setCurrentLink] = useState(props.linkRefs[0].linkName)

  // Set currentLink to current page in viewport
  useEffect(() => {
    const handleScroll = () => {
      for (const linkInfo of props.linkRefs) {
        const yPosition = linkInfo.linkRef.current?.getBoundingClientRect().y;
        if (yPosition && yPosition <= 120 && yPosition >= -120) {
          if (linkInfo.linkName !== currentLink) {
            setCurrentLink(linkInfo.linkName)
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.linkRefs, currentLink]);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="|" style={{ float: "right", transform: "translate(0%, 50%)" }}>
      {props.linkRefs.map(
        (value: {
          linkName: string;
          linkRef: React.RefObject<HTMLDivElement>;
        }) => (
          <div className={currentLink === value.linkName ? "currentBox" : "linkBox"} onClick={ onClick(value.linkRef) }>{value.linkName}</div>
        )
      )}
    </Breadcrumbs>
  );
}

export default LinksList;
