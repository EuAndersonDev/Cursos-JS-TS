const initialState = {
    botaoClicado: false,
};

function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case "BOTAO_CLICADO":
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        default:
            return state;
    }
}

export default exampleReducer;
