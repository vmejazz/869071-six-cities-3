import React from "react";
import renderer from "react-test-renderer";
import {BookmarkButton} from "./bookmark-button.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";

it(`<BookmarkButton /> should render Bookmark button `, () => {
  const tree = renderer
      .create(
          <Router history={customHistory} >
            <BookmarkButton
              userInfo = {{authorizationStatus: `AUTH`}}
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
