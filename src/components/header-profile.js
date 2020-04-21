export const createHeaderProfileTemplate = (profileRaiting) => {
  let userRank = ``;
  if (profileRaiting <= 0) {
    userRank = ``;
  } else if (profileRaiting > 1 && profileRaiting <= 10) {
    userRank = `novice`;
  } else if (profileRaiting > 10 && profileRaiting <= 20) {
    userRank = `fan`;
  } else {
    userRank = `movie buff`;
  }
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${userRank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};
