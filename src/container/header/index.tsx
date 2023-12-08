import { Link } from "react-router-dom";
import { StyledHeaderContainer } from "./styled";
import { SITE_MAP } from "src/utils";
import { useStoreSelector } from "src/redux/hooks/useStoreSelector";

const Header = () => {
  const {
    counter: { value },
  } = useStoreSelector((state) => state);
  return (
    <StyledHeaderContainer>
      <Link to={SITE_MAP.INDEX}>Home</Link>
      <Link to={SITE_MAP.AUTHOR_APP}>Author App</Link>
      <Link to={SITE_MAP.CURRICULUM_APP}>Curriculum App</Link>

      <div style={{ color: "red", fontWeight: 700, fontSize: 20 }}>{value}</div>
    </StyledHeaderContainer>
  );
};

export default Header;
