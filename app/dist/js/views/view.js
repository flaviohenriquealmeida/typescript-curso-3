var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
__decorate([
    logarTempoDeExecucao()
], View.prototype, "update", null);
