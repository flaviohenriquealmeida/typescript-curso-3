export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        console.log(propertyKey);
    }
}