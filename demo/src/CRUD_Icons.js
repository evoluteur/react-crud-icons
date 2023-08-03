import React from "react";
import Icon, { keys } from "react-crud-icons";

import "./CRUD_Icons.scss";

const sizes = ["tiny", "small", "medium", "large", "big", "huge"];

//<div><Icon name="edit" size="tiny" tooltip="tiny" theme="light" /><div>tiny</div></div>

const CRUD_Icons = (
  <div className="evo-home">
    <h2>React-CRUD-Icons</h2>

    <p>
      Set of {keys.length} SVG icons for CRUD applications (hand-picked among
      thousands of icons at{" "}
      <a
        target="_blank"
        href="https://materialdesignicons.com"
        rel="noopener noreferrer"
      >
        Material Design Icons
      </a>
      ).
    </p>

    <h3>Icon names</h3>
    <div className="icons">
      {keys.map((ico) => (
        <div key={ico}>
          <Icon name={ico} size="medium" theme="light" />
          {ico}
        </div>
      ))}
    </div>

    <h3>Tooltip on white</h3>
    <div className="icons-notext">
      {keys.map((ico) => (
        <Icon key={ico} name={ico} size="medium" theme="light" tooltip={ico} />
      ))}
    </div>

    <h3>Tooltip on black</h3>
    <div className="icons-notext dark">
      {keys.map((ico) => (
        <Icon key={ico} name={ico} size="medium" theme="dark" tooltip={ico} />
      ))}
    </div>

    <h3>Sizes on white</h3>
    <div className="sizes">
      {sizes.map((size) => (
        <div key={size}>
          <Icon name="apps" size={size} theme="light" tooltip={size} />
        </div>
      ))}
      <div>
        <Icon
          disabled={true}
          name="apps"
          size="huge"
          theme="light"
          tooltip="huge & disabled"
        />
      </div>
    </div>
    <h3>Sizes on black</h3>
    <div className="sizes dark">
      {sizes.map((size) => (
        <div key={size}>
          <Icon name="apps" size={size} theme="dark" tooltip={size} />
        </div>
      ))}
      <div>
        <Icon
          disabled={true}
          name="apps"
          size="huge"
          theme="dark"
          tooltip="huge & disabled"
        />
      </div>
    </div>
  </div>
);

export default CRUD_Icons;
