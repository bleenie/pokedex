import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  //Navigate to home page
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return <button onClick={handleClick}>Go Back</button>;
};

export default HomeButton;
