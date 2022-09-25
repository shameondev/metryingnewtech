type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
    cls,
    ...additional.filter((val) => Boolean(val)),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([cls]) => cls),
]
    .join(' ');
