import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Test',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    children: 'Test',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Test',
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Test',
    theme: ThemeButton.OUTLINE,
};
