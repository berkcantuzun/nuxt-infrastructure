import Util from "./Util";
import SComponents from "./SComponents";


export default ($app) => ({
  u: new Util(),
  c: new SComponents($app)
});
