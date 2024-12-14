import { redirect } from "react-router";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction(params) {
  //delete user
  deleteItem({
    key: "username",
  });

  //return redirect
  return redirect("/");
}
