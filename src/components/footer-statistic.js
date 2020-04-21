export const createFooterStatisticTemplate = (moviesCount) => {
  return (
    `<section class="footer__statistics">
      <p>${moviesCount} movies inside</p>
    </section>`
  );
};
