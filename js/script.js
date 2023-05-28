import validaCPF from "./validaCPF.js";
import ehMaiorDeIdade from "./validaIdade.js";
import validaIdade from "./validaIdade.js";

const camposDoForm = document.querySelectorAll("[required]");

camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validaCPF(campo);
    }

    if (campo.name == 'aniversario' && campo.value != '') {
        ehMaiorDeIdade(campo);
    }
}