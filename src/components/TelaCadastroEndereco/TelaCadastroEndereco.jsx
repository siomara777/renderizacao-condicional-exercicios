import React from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";
import { useState } from "react";

const TelaCadastroEndereco = ({ mudarTela }) => {

    const tela = () => {

        mudarTela("TelaPrincipal");

    }
    let [endereco, setEndereco,] = useState("")
    let [numeroResidecial, setnumeroResidecia] = useState("")
    let [complemento, setComplemento] = useState("")
    let [telefone, setTelefone] = useState("")

    const cadastroEndereco = (event) => {
        event.preventDefault()

        if (event.target.endereco.value.length && event.target.numeroResidecial.value.length && event.target.complemento.value.length && event.target.telefone.value.length) {

            console.log({ endereco: event.target.endereco.value, numeroResidecial: event.target.numeroResidecial.value, complemento: event.target.complemento.value, telefone: event.target.telefone.value })
            tela()


        } else {
            alert("Preencha os campos abaixo")

        }

    }

    return (
        <Form onSubmit={cadastroEndereco}>
            <StyledLabel htmlFor="endereco">
                Endereço:
                <Input id="endereco" />
            </StyledLabel>


            <StyledLabel htmlFor="numeroResidecial">
                Numero Residecial:
                <Input id="numeroResidecial" />
            </StyledLabel>

            <StyledLabel htmlFor="complemento">
                Complemento:
                <Input id="complemento" />
            </StyledLabel>

            <StyledLabel htmlFor="telefone">
                Telefone:
                <Input id="telefone" />
            </StyledLabel>

          
            <SendButton type="submit">Enviar</SendButton>

        </Form>

    )

}
export default TelaCadastroEndereco