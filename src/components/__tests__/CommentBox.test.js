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

describe("the text area", () => {
    beforeEach(() => {
        wrapped
            .find("textarea")
            .simulate("change", { target: { value: "new comment" } });

        wrapped.update();
    });

    it("allows user to type in text", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it("gets emptied when form is submitted", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();
        // TODO - check if preventDefault() was called.

        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
