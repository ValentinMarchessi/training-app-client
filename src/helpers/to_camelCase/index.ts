function firstLetter(str: string, Case: 'upper' | 'lower'): string{
    if (Case === 'upper') {
        return str[0].toUpperCase() + str.slice(1);
    }
    if (Case === 'lower') {
        return str[0].toLowerCase() + str.slice(1);
    }
}

function to_camelCase(str: string): string {
    const splitStr = str.split(' ');
    return splitStr.length > 1 ?
        splitStr.reduce((prev, next) => firstLetter(prev, 'lower') + firstLetter(next, 'upper'))
        : str.toLowerCase();
}

function to_CamelCase(str: string): string{
    return str.split(' ').reduce((prev, next) => firstLetter(prev, 'upper') + firstLetter(next, 'upper'));
}

export function formatString(str: string, option: 'camelCase' | 'CamelCase' | 'capitalize' | 'uppercase' | 'lowercase'): str{
    switch (option) {
        case 'camelCase':
            return to_camelCase(str);
        case 'CamelCase':
            return to_CamelCase(str);
        case 'capitalize':
            return firstLetter(str, 'upper');
        case 'uppercase':
            return str.toUpperCase();
        case 'lowercase':
            return str.toLowerCase();
        default:
            throw new Error('Unhandled case on formatString');
    }
}