import {
  ModalHeader,
  AddBttn,
  CardsContainer,
  ModalContent,
  Overlay,
  PageButtons,
} from "./styles";

import { FiPlus, FiX, FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Button from "../Button";
import CardActivity from "../CardActivity";
import ModalAddNewActivity from "../ModalAddNewActivity";
import ModalEditActivity from "../ModalEditActivity";

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../providers/Modal";
import { ActivitiesContext } from "../../providers/Activities";

const ModalShowActivities = ({ id = "modalActivities", capturedGroup }) => {
  const {
    setOpenAllActivities,
    openAddNewActivity,
    setOpenAddNewActivity,
    openEditActivity,
  } = useContext(ModalContext);

  const {
    loadActivities,
    activities,
    pageActivities,
    setPageActivities,
    total,
  } = useContext(ActivitiesContext);

  const [capturedActivity, setCapturedActivity] = useState({});

  const captureActivity = (activityId) => {
    const verifyActivity = activities.filter(
      (activity) => activity.id === activityId
    );
    setCapturedActivity(...verifyActivity);
  };

  useEffect(() => {
    loadActivities(capturedGroup.id);
  }, [capturedGroup.id, pageActivities]);

  const nextPage = () => {
    const totalPage = Math.ceil(total / 15);
    if (pageActivities < totalPage) {
      setPageActivities(pageActivities + 1);
    }
  };

  const previusPage = () => {
    if (pageActivities > 1) {
      setPageActivities(pageActivities - 1);
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAllActivities(false);
    }
  };

  return (
    <>
      <Overlay id={id} onClick={handleOutsideClick} />
      <ModalContent>
        <ModalHeader>
          <p>Atividades</p>
          <FiX size={20} onClick={() => setOpenAllActivities(false)} />
        </ModalHeader>

        <AddBttn>
          <span>Crie uma atividade</span>
          <abbr title="Adicionar atividade">
            <Button white onClick={() => setOpenAddNewActivity(true)}>
              <FiPlus size={20} />
            </Button>
          </abbr>
        </AddBttn>
        <CardsContainer>
          {activities.map((activity) => {
            return (
              <CardActivity
                key={activity.id}
                activity={activity}
                captureActivity={captureActivity}
                capturedGroupId={capturedGroup.id}
              />
            );
          })}
        </CardsContainer>
        <PageButtons>
          <Button white onClick={() => previusPage()}>
            <FiChevronLeft size={20} />
          </Button>
          <span>{pageActivities}</span>
          <Button white onClick={() => nextPage()}>
            <FiChevronRight size={20} />
          </Button>
        </PageButtons>
      </ModalContent>

      {openAddNewActivity && (
        <ModalAddNewActivity capturedGroupId={capturedGroup.id} />
      )}
      {openEditActivity && (
        <ModalEditActivity
          capturedActivity={capturedActivity}
          capturedGroupId={capturedGroup.id}
        />
      )}
    </>
  );
};

export default ModalShowActivities;
