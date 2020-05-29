import React, { useState, Fragment } from "react";
import HeaderLogged from "../../../src/components/header_logged";

import Notes from "../../../src/components/Notes";

function NotesScreen() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  );
}

export default NotesScreen;
