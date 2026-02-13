import {call, put, all, takeLatest} from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";
import { toast } from "react-toastify";

const requisicao = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

function* exampleRequest(){
    try{
        yield call(requisicao);
        yield put(actions.clicarBotaoSuccess());
        toast.success("Requisição processada com sucesso");
        } catch (error) {
        console.log("Erro ao processar requisição");
        toast.error("Erro ao processar requisição");
        yield put(actions.clicarBotaoFailure());
    }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
