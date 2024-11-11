import React from 'react';
import { useGlobalState } from '@/GlobalState';
import { Button } from '@nextui-org/button';
import { useNavigate } from 'react-router-dom';



const ChangePage: React.FC = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (globalState === "nlp") {
        setGlobalState("ml")
    } else if (globalState === "ml") {
        setGlobalState("nlp")
    }
};

  return (
    <div>
      <p>Current State: {globalState === "nlp" ? 0 : 1}</p>
      <Button onClick={handleClick}>
        Switch State
      </Button>
      <Button onClick={() => navigate("/")}>
        Back
      </Button>
    </div>
  );
}

export default ChangePage;
