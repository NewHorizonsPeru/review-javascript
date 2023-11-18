/**import { UserService } from "./UserService";

const btnSaveChanges = document.getElementById("save-changes");
btnSaveChanges.addEventListener("click", () => {
  UserService.UpdateInfo();
});**/

const btnSaveChanges = document.getElementById("save-changes");
btnSaveChanges.addEventListener("click", async () => {
  const userService = await import("./UserService");
  userService.UpdateInfo();
});
