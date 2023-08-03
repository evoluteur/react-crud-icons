import React from "react";
import pkg from "../package.json";
import Icon, { keys } from "react-crud-icons";
import { useState } from "react";
import Footer from "./Footer";

import "react-crud-icons/dist/css/react-crud-icons.css";

import "./App.scss";

const sizes = ["tiny", "small", "medium", "large", "big", "huge"];

function App() {
  const [search, setSearch] = useState(null);
  const [size, setSize] = useState("medium");
  const [theme, setTheme] = useState("light");
  const [nameVisible, setNameVisible] = useState(false);

  const onChangeSize = (evt) => {
    const ddSize = evt.target.selectedOptions[0].childNodes[0].data;
    setSize(ddSize.toLowerCase());
  };

  const onChangeTheme = (evt) => {
    const t = evt.target;
    let ddTheme = t.selectedOptions[0].childNodes[0].data;
    if (ddTheme.startsWith("none")) {
      ddTheme = "none";
    }
    setTheme(ddTheme);
  };

  const onSearch = (evt) => {
    const nSearch = evt.target.value;
    setSearch(nSearch.toLowerCase());
  };

  const onToggleName = (evt) => {
    const bChecked = evt.target.checked;
    setNameVisible(bChecked);
  };

  const getFilteredIcons = (searchString) => {
    const mkeys = searchString
      ? keys.filter((k) => k.includes(searchString))
      : keys;
    return mkeys;
  };

  const filteredIcons = getFilteredIcons(search);

  return (
    <>
      <div className="App">
        <div className="evo-home">
          <header>
            <h1>
              React-CRUD-Icons <span className="version">v{pkg?.version}</span>
            </h1>

            <a
              className="github"
              href="https://github.com/evoluteur/react-crud-icons"
            >
              <svg
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </header>
          <section>
            <p>
              Set of <strong>{keys.length} SVG icons</strong> for CRUD
              applications (hand-picked among thousands of icons at{" "}
              <a
                target="_blank"
                href="https://materialdesignicons.com"
                rel="noopener noreferrer"
              >
                Material Design Icons
              </a>
              ), packaged as a React component with light & dark themes and
              tooltip.
            </p>
          </section>
          <br />
          <section>
            <div className="icons-options">
              <div>
                <label>Theme: </label>
                <select onChange={onChangeTheme} value={theme}>
                  <option>light</option>
                  <option>dark</option>
                  <option value="none">none (SVG only)</option>
                </select>
              </div>
              <div>
                <label className={theme === "none" ? "silver-text" : ""}>
                  Size:{" "}
                </label>
                <select
                  onChange={onChangeSize}
                  value={size}
                  disabled={theme === "none"}
                >
                  {sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Search: </label>
                <input
                  onChange={onSearch}
                  className="search"
                  placeholder="Icon name"
                />
              </div>
              <div className="show-names">
                <label>
                  <input
                    onChange={onToggleName}
                    placeholder="Icon name"
                    type="checkbox"
                  />
                  <span>Show icon names</span>
                </label>
              </div>
            </div>
            <br />

            <div
              className={
                "icons-notext " + theme + (nameVisible ? " name-on" : "")
              }
            >
              {filteredIcons?.length < 1 && (
                <div>No icons found for "{search}".</div>
              )}
              {filteredIcons.map((ico) => (
                <div key={ico}>
                  <Icon name={ico} tooltip={ico} theme={theme} size={size} />
                  {nameVisible && <span>{ico}</span>}
                </div>
              ))}
            </div>
          </section>

          <p>
            Open Source at GitHub:{" "}
            <a href="https://github.com/evoluteur/react-crud-icons">
              evoluteur/react-crud-icons
            </a>
          </p>
          <section>
            <h3>Installation</h3>
            <p>
              The package can be installed via{" "}
              <a href="https://www.npmjs.com/package/react-crud-icons">npm</a>:
            </p>
            <code>npm install react-crud-icons --save</code>

            <p>
              You’ll need to install React and PropTypes separately since those
              dependencies aren't included in the package.
            </p>
          </section>

          <section>
            <h3>Usage</h3>
            <p>
              Below is a simple example of how to use the component in a React
              view. You will also need to include the CSS file from this package
              (or provide your own). The example below shows how to include the
              CSS from this package if your build system supports requiring CSS
              files (Webpack is one that does).
            </p>

            <code>
              import React from "react";
              <br />
              import Icon from "react-crud-icons";
              <br />
              <br />
              import "react-crud-icons/dist/react-crud-icons.css";
              <br />
              <br />
              const ExampleComponent = () =&gt; {"("}
              <br />
              <div className="codeTab">
                <div className="codeTab">
                  {"<"}Icon
                  <br />
                  <div className="codeTab">
                    name = "edit"
                    <br />
                    tooltip = "Edit"
                    <br />
                    theme = "light"
                    <br />
                    size = "medium"
                    <br />
                    onClick = {"{"} doSomething {"}"}
                  </div>
                  {"/>"}
                </div>
                );
              </div>
              {"}"} <br />
            </code>

            <p>
              Note: Icons only take focus on tab when the "onClick" property is
              set and they are not disabled.
            </p>
          </section>

          <section>
            <h3>Properties</h3>
            <table>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>
                    Possible values: {keys.map((k) => `"${k}"`).join(", ")}.
                  </td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>
                    Possible values: "tiny", "small", "medium", "large", "big",
                    "huge".
                  </td>
                </tr>
                <tr>
                  <td>theme</td>
                  <td>
                    Possible values: "light", "dark". Use theme="none" to
                    display raw SVG without the CSS classes and hover effect.{" "}
                  </td>
                </tr>
                <tr>
                  <td>tooltip</td>
                  <td>Tooltip text shown on hover.</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>Disable click event (icon in grey).</td>
                </tr>
                <tr>
                  <td>onClick</td>
                  <td>
                    Callback function triggered when icon is clicked. If empty,
                    there will be no hover effect on the icon.
                  </td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>Additional CSS class name.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>License</h3>
            <p>
              <a href="https://github.com/evoluteur/react-crud-icons">
                React-CRUD-Icons
              </a>{" "}
              is Open Source with{" "}
              <a href="https://github.com/evoluteur/react-crud-icons/blob/master/LICENSE">
                MIT License
              </a>
              .
            </p>
            <p>
              Suggest a feature or report a bug at&nbsp;
              <a href="https://github.com/evoluteur/react-crud-icons/issues">
                GitHub
              </a>
              .
            </p>
            Note: React-CRUD-Icons was originaly made for{" "}
            <a href="https://github.com/evoluteur/evolutility-ui-react">
              Evolutility-UI-React
            </a>
            .
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
