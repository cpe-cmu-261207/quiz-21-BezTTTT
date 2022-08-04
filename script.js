async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}
const imgprofile = document.querySelector("#img-profile");

const btnRandom = document.querySelector("#btn-random");

btnRandom.onclick = async () => {
  btnRandom.disabled = false;
};
