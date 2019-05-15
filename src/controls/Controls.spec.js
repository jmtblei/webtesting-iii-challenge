// Test away!
import React from 'react';
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls.js";

describe("<Controls/>", () => {
    it("should render Controls without crashing", () => {
        render(<Controls/>);
    });
    describe("Controls Default View", () => {
        it("should show buttons for close and lock gate", () => {
            const { getByText } = render(<Controls/>);
            getByText(/lock/i);
            getByText(/close/i);
        });
        describe("Toggle Button Text", () => {
            describe("Lock/Unlock Button", () => {
                it("should see lock gate button when gate is unlocked", () => {
                    const { getByText } = render(<Controls locked={false}/>)
                    getByText(/lock gate/i);
                });
                it("should see unlock gate button when gate is locked", () => {
                    const { getByText } = render(<Controls locked={true}/>)
                    getByText(/unlock gate/i);
                });
            });
            describe("Close/Open Button", () => {
                it("should see close gate button when gate is open", () => {
                    const { getByText } = render(<Controls closed={false}/>)
                    getByText(/close gate/i);
                });
                it("should see open gate button when gate is closed", () => {
                    const { getByText } = render(<Controls closed={true}/>)
                    getByText(/open gate/i);
                });
            });
        });
        describe("Button Disabled", () => {
            it("should disable lock button if gate is open", () => {
                const { getByText } = render(<Controls closed={false}/>);
                const lockButton = getByText(/lock gate/i);
                expect(lockButton.disabled).toBe(true);
            });
            it("should not show close gate button if gate is closed", () => {
                const { queryByText } = render(<Controls closed={true}/>);
                const closeButton = queryByText(/close gate/i);
                expect(closeButton).toBeNull();
            });
        });
    });
});