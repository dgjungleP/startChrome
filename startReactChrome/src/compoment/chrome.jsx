import React, { useEffect, useState } from "react";

function TabInfo(props) {
  const [tabName, updateTabName] = useState();
  const [freshTag, setFreshTag] = useState(false);
  const [timer, setTimer] = useState();
  useEffect(() => {
    fresh();
    setTimer(
      setTimeout(() => {
        setFreshTag(!freshTag);
      }, 1000)
    );
    return () => {
      clearTimeout(timer);
    };
  }, [freshTag]);
  const fresh = () => {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs
      .query(queryOptions)
      .then((tab) => {
        updateTabName(tab[0].title);
      })
      .catch(() => {});
  };
  return <> {tabName} </>;
}

export { TabInfo };
