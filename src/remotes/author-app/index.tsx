import { RemoteAppWrapper } from "src/remotes/index";
import { mount } from "author/Module";

const AuthorApp = () => {
  return <RemoteAppWrapper mountFunc={mount} remoteAppName={"author"} />;
};

export default AuthorApp;
