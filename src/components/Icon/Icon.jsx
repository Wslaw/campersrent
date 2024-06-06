import sprite from "../../assets/svg/sprite.svg"

const Icon = ({ name, width = 32, height = 32, className = "", onClick }) => (
  <svg onClick={onClick} className={className} width={width} height={height}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);
export default Icon;