import { cn } from 'shared/lib/classNames';

describe('classNames', () => {
    test('with no params', () => {
        expect(cn('')).toBe('');
    });

    test('with only first param', () => {
        expect(cn('someClass')).toBe('someClass');
    });

    test('with additional params', () => {
        const expected = 'someClass class1 class2';
        expect(cn('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods all true', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(cn(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with falsy mods', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(cn(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with undefined mods', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(cn(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
