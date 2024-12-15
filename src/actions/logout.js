import { redirect } from "react-router";

// helpers
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction(params) {
  //delete user
  deleteItem({
    key: "username",
  });
  toast.success("You've Successfully deleted your Account")

  //return redirect
  return redirect("/");
}
