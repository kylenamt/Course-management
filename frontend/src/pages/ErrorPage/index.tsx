import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"


export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button className ={styles.return} onClick={() => navigate('/')}>Go back Home</button>
    </div>
  );
};