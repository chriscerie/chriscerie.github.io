import React, { useEffect, useState } from "react";
import "./index.css";
import LinksList from "./LinksList";
import Container from "@material-ui/core/Container";

type propTypes = {
  linkRefs: Array<{
    linkName: string,
    linkRef: React.RefObject<HTMLDivElement>,
  }>
}

function Header(props: propTypes) {
  const [isSticky, setIsSticky] = useState(false);

  // Sticky topbar when scrolled down
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.pageYOffset > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={isSticky ? "header-sticky" : "header"}>
    <Container style={{ padding: "0 clamp(1rem,5%, 7rem)" }}>
      <LinksList linkRefs={ props.linkRefs }/>
    </Container>
  </div>;
}

export default Header;
