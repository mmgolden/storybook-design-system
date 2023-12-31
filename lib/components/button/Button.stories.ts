import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
  title: "Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The text shown on the button',
    },
  } as any,
  args: {
    label: 'Test'
  } as any,
  parameters: {
    docs: {
      description: {
        component: 'The base button component'
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
 export const Default: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button>{{ args.label }}</Button>',
  }),
  args: {
    label: 'Test'
  } as any,
};