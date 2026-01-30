import { useEffect, useState, type ComponentProps } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import * as List from ".";

/**
 * ## Anatomy
 *
 * ```tsx
 * <List.Root>
 *   <List.Item />
 *   ...
 * </List.Root>
 *
 * <List.Root>
 *   <List.Group>
 *     <List.Item />
 *     <List.Item />
 *     ...
 *   </List.Group>
 *   ...
 * </List.Root>
 * ```
 */

const meta: Meta<typeof List.Root> = {
  title: "primitives/List",
  component: List.Root,
  args: {
    defaultSelectedKeys: ["C"],
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List.Root>;

//

/**
 *
 */

const ListGroup = (props: ComponentProps<typeof List.Group>) => (
  <List.Group {...props} className="ml-4 aria-hidden:hidden" />
);
const ListItem = (props: ComponentProps<typeof List.Item>) => (
  <List.Item
    {...props}
    className="aria-[selected]:bg-green-500 [&+[role=group]]:aria-[selected]:bg-green-400"
  />
);

export const St0: Story = {
  name: "Default",
  args: {},
  render: (args) => (
    <List.Root {...args}>
      <ListItem id="A">Option A</ListItem>
      <ListItem id="B">Option B</ListItem>
      <ListItem id="C">Option C</ListItem>
      <ListItem id="D">Option D</ListItem>
    </List.Root>
  ),
};

//

const ControlledList = (props: ComponentProps<typeof List.Root>) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["A", "C"]);

  useEffect(() => {
    console.log(selectedKeys);
  }, [selectedKeys]);

  return (
    <List.Root
      {...props}
      selectedKeys={selectedKeys}
      onSelectedKeysChange={setSelectedKeys}
    >
      <ListItem id="A">Option A</ListItem>
      <ListItem id="B">Option B</ListItem>
      <ListItem id="C">Option C</ListItem>
      <ListItem id="D">Option D</ListItem>
    </List.Root>
  );
};
export const St1: Story = {
  name: "Controlled",
  args: {
    multiselect: true,
  },
  render: (args) => <ControlledList {...args} />,
};

//

export const St2: Story = {
  name: "Multiselect",
  args: {
    multiselect: true,
  },
  render: (args) => (
    <List.Root {...args}>
      <ListItem id="A">Option A</ListItem>
      <ListItem id="B">Option B</ListItem>
      <ListItem id="C">Option C</ListItem>
      <ListItem id="D">Option D</ListItem>
    </List.Root>
  ),
};

//

export const St3: Story = {
  name: "With groups",
  args: {},
  render: (args) => (
    <List.Root {...args}>
      <ListGroup>
        <div className="text-sm text-gray-500">Flavor</div>
        <ListItem id="strawberry">Strawberry</ListItem>
        <ListItem id="lemon">Lemon</ListItem>
        <ListItem id="pistachio">Pistachio</ListItem>
        <ListItem id="cherry">Cherry</ListItem>
      </ListGroup>
      <ListGroup>
        <div className="text-sm text-gray-500">Size</div>
        <ListItem id="1">Single</ListItem>
        <ListItem id="2">Double</ListItem>
        <ListItem id="3">Triple</ListItem>
      </ListGroup>
    </List.Root>
  ),
};

//

export const St4: Story = {
  name: "With groups + Multiselect",
  args: {
    multiselect: true,
  },
  render: (args) => (
    <List.Root {...args}>
      <ListGroup>
        <div className="text-sm text-gray-500">Flavor</div>
        <ListItem id="strawberry">Strawberry</ListItem>
        <ListItem id="lemon">Lemon</ListItem>
        <ListItem id="pistachio">Pistachio</ListItem>
        <ListItem id="cherry">Cherry</ListItem>
      </ListGroup>
      <ListGroup>
        <div className="text-sm text-gray-500">Size</div>
        <ListItem id="1">Single</ListItem>
        <ListItem id="2">Double</ListItem>
        <ListItem id="3">Triple</ListItem>
      </ListGroup>
    </List.Root>
  ),
};
