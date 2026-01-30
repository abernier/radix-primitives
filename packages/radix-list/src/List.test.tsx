import { render, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import * as List from "./List";

describe("List", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list", () => {
    const { container } = render(
      <List.Root>
        <List.Item id="item1">Item 1</List.Item>
      </List.Root>,
    );
    expect(container.querySelector('[role="listbox"]')).toBeTruthy();
  });

  it("should render list items", () => {
    const { container } = render(
      <List.Root>
        <List.Item id="item1">Item 1</List.Item>
        <List.Item id="item2">Item 2</List.Item>
      </List.Root>,
    );
    const items = container.querySelectorAll('[role="option"]');
    expect(items.length).toBe(2);
  });

  it("should handle selected keys", () => {
    const { container } = render(
      <List.Root defaultSelectedKeys={["item1"]}>
        <List.Item id="item1">Item 1</List.Item>
        <List.Item id="item2">Item 2</List.Item>
      </List.Root>,
    );
    const items = container.querySelectorAll('[role="option"]');
    expect(items[0]?.getAttribute("aria-selected")).toBe("true");
    expect(items[1]?.getAttribute("aria-selected")).toBe(null);
  });

  it("should support multiselect", () => {
    const { container } = render(
      <List.Root multiselect defaultSelectedKeys={["item1", "item2"]}>
        <List.Item id="item1">Item 1</List.Item>
        <List.Item id="item2">Item 2</List.Item>
        <List.Item id="item3">Item 3</List.Item>
      </List.Root>,
    );
    const listbox = container.querySelector('[role="listbox"]');
    const items = container.querySelectorAll('[role="option"]');

    expect(listbox?.getAttribute("aria-multiselectable")).toBe("true");
    expect(items[0]?.getAttribute("aria-selected")).toBe("true");
    expect(items[1]?.getAttribute("aria-selected")).toBe("true");
    expect(items[2]?.getAttribute("aria-selected")).toBe(null);
  });

  it("should render list groups", () => {
    const { container } = render(
      <List.Root>
        <List.Group>
          <List.Item id="item1">Item 1</List.Item>
          <List.Item id="item2">Item 2</List.Item>
        </List.Group>
      </List.Root>,
    );
    expect(container.querySelector('[role="group"]')).toBeTruthy();
  });
});
