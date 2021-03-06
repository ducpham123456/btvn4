class Chat {
  container = document.createElement("div");
  btnLogout = document.createElement("button");

  constructor() {
    this.container.innerHTML = "Chat";

    this.btnLogout.innerHTML = "Log out";
    this.btnLogout.addEventListener("click", this.handleLogout);

    this.container.appendChild(this.btnLogout);
  }

  handleLogout = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign out is successful");
      })
      .catch((error) => {
        // An error happened.
        comsole.log(error.message);
      });
  };
}

export { Chat };
