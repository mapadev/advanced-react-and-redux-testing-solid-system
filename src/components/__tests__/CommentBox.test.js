import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it("has a textarea and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that user can type in", () => {
    wrapped
        .find("textarea")
        .simulate("change", { target: { value: "new comment" } });

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("when form is submitted, comment box gets emptied", () => {
    wrapped
        .find("textarea")
        .simulate("change", { target: { value: "new comment" } });

    wrapped.update();

    wrapped.find("form").simulate("submit");

    // TODO - check if preventDefault() was called.

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
});
