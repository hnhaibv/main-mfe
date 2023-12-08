import RemoteAppWrapper from "../remote-app-wrapper";
import { mount } from "curriculum/Module";

const CurriculumApp = () => {
  return <RemoteAppWrapper mountFunc={mount} remoteAppName={"curriculum"} />;
};

export default CurriculumApp;
