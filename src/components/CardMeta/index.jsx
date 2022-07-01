import { Container, Header, Content, ContainerBtn } from "./style";

import { FiEdit, FiDelete } from "react-icons/fi";

import { GoalsContext } from "../../providers/Goals";
import { useContext } from "react";
import Button from "../Button";

const CardMeta = ({ goal, capturedGroupId }) => {
  const { id, title, difficulty } = goal;
  const { updateGoal, deleteGoal } = useContext(GoalsContext);

  const handleUpdateGoal = () => {
    updateGoal(id, capturedGroupId);
  };

  const handleDeleteGoal = () => {
    deleteGoal(id, capturedGroupId);
  };

  const { goals } = useContext(GoalsContext);
  console.log(goals);
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
      </Header>
      <Content>
        <p>{difficulty}</p>
      </Content>
      <ContainerBtn>
        <Button white onClick={() => handleUpdateGoal()}>
          <FiEdit size={20} />
        </Button>
        <Button white onClick={() => handleDeleteGoal()}>
          <FiDelete size={20} />
        </Button>
      </ContainerBtn>
    </Container>
  );
};

export default CardMeta;