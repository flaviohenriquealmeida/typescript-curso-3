export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        return descriptor;
    }
}