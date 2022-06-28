import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { ModalContext } from "../../providers/Modal";

import { Container, Header, Content, Modal } from "./style";
import { FiX } from "react-icons/fi";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";

const ModalEditUser = ({ id = "modalEditUser" }) => {
  const closeModalEvent = (event) => {
    if (event.target.id === id) {
      setOpenEditUser(false);
    }
  };

  const { updateUser } = useContext(UserContext);

  const { setOpenEditUser } = useContext(ModalContext);

  const editSchema = yup.object().shape({
    username: yup.string().required("Informe novo nome"),
    email: yup.string().required("insira novo email").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(editSchema) });

  const closeEdit = (erro) => {
    if (erro === true) {
      reset();
      setOpenEditUser(false);
    }
  };

  const handleUpdateUser = (data) => {
    updateUser(data, closeEdit);
  };

  return (
    <Modal id={id} onClick={closeModalEvent}>
      <Container>
        <Header>
          <h3>Editar suas informções</h3>
          <button onClick={() => setOpenEditUser(false)}>
            <FiX />
          </button>
        </Header>
        <Content>
          <form onSubmit={handleSubmit(handleUpdateUser)}>
            <Input
              register={register}
              name={"username"}
              label={"Novo nome de Usuário"}
              error={errors.username?.message}
            />

            <Input
              register={register}
              name={"email"}
              label={"Novo e-mail"}
              error={errors.email?.message}
            />
            <Button loginDesk white type="submit">
              Editar suas informações
            </Button>
          </form>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalEditUser;
