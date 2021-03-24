export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
