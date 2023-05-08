import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
