import { useSelector } from "react-redux";
import { selectIsUserVerified } from "redux/auth/auth-selectors";
import { NavLinkCss } from "../../AppBar.styled";
import { ProjectsContainerCss } from "./ProjectsMenu.styled";

const ProjectsMenu = () => {
  const verify = useSelector(selectIsUserVerified);

  return (
    <ProjectsContainerCss>
      {verify && <NavLinkCss to="/contacts">Contacts</NavLinkCss>}
    </ProjectsContainerCss>
    );
}

export default ProjectsMenu;