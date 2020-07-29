import bodyParser from "body-parser";
var express = require("express");
var expressSession = require("express-session");
import { handleError, ErrorHandler } from "./modules/error";

import { postMessages, putMessage } from "./routes/messages";
import { getUser } from "./routes/users";
import { getMe } from "./routes/getMe";
import { getPlayer } from "./routes/getPlayer";
import { getTeams } from "./routes/getTeams";
import { getSports } from "./routes/getSports";
import { getPlayers } from "./routes/getPlayers";
import { authLogin } from "./routes/authLogin";
// import { sessionCheck } from './routes/sessionCheck'
import { postRegistor, putRegistor } from "./routes/registor";

const app = express();
const port = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.cookieParser());

// user
function sessionCheck(req, res, next) {
  if (req.session?.user) {
    res.render("index", { title: req.session.user.email });
  } else {
    res.redirect("/login");
  }
}
// app.get("/", sessionCheck);

const test = (req, res) => {
  const data = {
    ok: true,
  };
  res.send(data);
};
app.get("/test", test);

app.get("/");

app.get("/api/v1/users/me/followers", getUser);
app.get("/api/v1/me/", getMe);
app.get("/api/v1/players", getPlayers);
app.get("/api/v1/player/:id", getPlayer);
app.get("/api/v1/sports", getSports);
app.get("/api/v1/teams", getTeams);
app.get("/error", (req, res) => {
  throw new ErrorHandler("500", "Internal server error");
});

// messages
app.post("/api/v1/auth/register", postRegistor);
app.post("/api/v1/auth/login", authLogin);
app.put("/api/v1/edit_registor", putRegistor);
app.post("/api/v1/messages", postMessages);
app.put("/api/v1/messages/:id", putMessage);

// app.use((err, req, res, next) => {
//   handleError(err, res);
// });
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
