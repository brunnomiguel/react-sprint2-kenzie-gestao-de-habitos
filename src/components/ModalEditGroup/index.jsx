import { Container, EditGroupModalHeader, EditGroupModalEdit } from "./style";
import { FiX } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import { GroupsContext } from "../../providers/Groups";

import Input from "../Input";
import Button from "../Button";

const ModalEditGroup = ({ id = "editNewGroup", captureGroupId }) => {
  const { setOpenEditGroup } = useContext(ModalContext);
  const { editGroup } = useContext(GroupsContext);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenEditGroup(false);
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    editGroup(data, captureGroupId);
    reset();
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <EditGroupModalHeader>
        <p>Editar Grupo</p>
        <Button onClick={() => setOpenEditGroup(false)}>
          <FiX size={20} />
        </Button>
      </EditGroupModalHeader>

      <EditGroupModalEdit>
        <div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              modal
              placeholder="Digite o nome do grupo"
              register={register}
              name="name"
              label="Nome do grupo: "
              error={errors.name?.message}
              type="text"
            />

            <Input
              modal
              placeholder="Digite a descrição"
              register={register}
              name="description"
              label="Descrição: "
              error={errors.description?.message}
              type="text"
            />

            <Input
              modal
              placeholder="Digite a categoria"
              register={register}
              name="category"
              label="Categoria: "
              error={errors.category?.message}
              type="text"
            />

            <Button white share loginDesk darkSchema type="submit">
              Editar Grupo
            </Button>
          </form>
        </div>
      </EditGroupModalEdit>
    </Container>
  );
};

export default ModalEditGroup;
