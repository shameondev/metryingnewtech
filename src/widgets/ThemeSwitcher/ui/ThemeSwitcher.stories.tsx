import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
