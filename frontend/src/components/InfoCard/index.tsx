import styles from './styles.module.scss';
import { TCardInfo } from '../../constants/cardInfo';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InfoCard(card:TCardInfo) {
  let statistic: JSX.Element = <div></div>;

  if(typeof card.unit !== 'undefined'){
    statistic =(
    <div className={styles.statistic}>
      <p className={styles.unit}>{card.unit}</p>
      <p>{card.statistics}</p>
    </div>
    );
  }else{
    statistic = (
    <div className={styles.statistic}>
      <p>{card.statistics}</p>
    </div>
    );
  }

  return (
    <div className = {cx(`infoCard`,"_"+card.id)}>
      <div className = {styles.cardIcons}>
        <img src = {card.icon} alt = "" />
        <p>{card.title}</p>
      </div>
      {statistic}
    </div>
  );
}
export default InfoCard;