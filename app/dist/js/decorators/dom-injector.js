export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(propertyKey);
    };
}
