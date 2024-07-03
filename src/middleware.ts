import {
  stackMiddlewares
} from "@/middlewares/stackHandler";
import {
  frontAuth
} from "@/middlewares/frontAuth";
import { backAuth } from "./middlewares/backAuth";

const middlewares = [frontAuth, backAuth];
export default stackMiddlewares(middlewares);