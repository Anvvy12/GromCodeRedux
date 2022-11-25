const baseUrl = "https://api.github.com/users";

const fetchUserDataV1 = (userName) => {
  return fetch(`${baseUrl}/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("bad reuest");
  });
};

export default fetchUserDataV1;
