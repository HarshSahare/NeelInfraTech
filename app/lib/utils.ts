export function onScroll(
  e: React.UIEvent<HTMLDivElement>,
  setPage: React.Dispatch<React.SetStateAction<number>>
) {
  const container = e.currentTarget;
  const scrollLeft = container.scrollLeft;
  const containerWidth = container.clientWidth;
  const scrollWidth = container.scrollWidth;

  const firstCard = container.querySelector<HTMLElement>("div");
  if (!firstCard) return;
  const cardWidth =
    firstCard.clientWidth +
    parseInt(getComputedStyle(firstCard).marginRight || "0");
  const cardsPerPage = Math.floor(containerWidth / cardWidth) || 1;

  const totalPages = Math.ceil(
    container.querySelectorAll("div").length / cardsPerPage
  );

  // If we're scrolled to within 2px of the end, snap to last page
  if (scrollLeft + containerWidth >= scrollWidth - 2) {
    setPage(totalPages - 1);
    return;
  }

  const currentPage = Math.round(scrollLeft / (cardsPerPage * cardWidth));
  setPage(currentPage);
}
