import * as types from "../types";

const initialState = {
    botaoClicado: false,
};

function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case types.BOTAO_CLICADO_SUCCESS: {
            console.log("Botão clicado com sucesso");
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }
        case types.BOTAO_CLICADO_FAILURE: {
            console.log("Erro ao processar ação de clique no botão");
            return state;
        }
        case types.BOTAO_CLICADO_REQUEST: {
            console.log("Ação de clique no botão disparada");
            return state;
        }
        default: {
            return state;
        }
    }
}

export default exampleReducer;
