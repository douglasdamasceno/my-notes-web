import React, { Fragment, useState, useEffect } from "react";

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

function Editor(props) {
  const [currentContent, setCurrentContent] = useState("");

  const [timer, setTimer] = useState(null);
  useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source == "user") {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 2000));
    }
  };
  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/gi, "").slice(0, 30);
    props.updateNote(props.note, { title: title, body: content });
  };

  return (
    <Fragment>
      <ReactQuill
        value={currentContent}
        onChange={handleChange}
        modules={modules}
      />
    </Fragment>
  );
}

export default Editor;
