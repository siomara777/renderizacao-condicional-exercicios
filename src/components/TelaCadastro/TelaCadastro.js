import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";


function TelaCadastro(props) {
  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    props.mudarTela("TelaPrincipal")
  }

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin")
  }

  const mostrarTelaEndereco = () => {
    props.mudarTela("TelaCadastroEndereco")
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>

        <SendButton onClick={mostrarTelaEndereco}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
