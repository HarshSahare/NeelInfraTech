export function calculatePages(
  container: HTMLDivElement | null,
  cardsCount: number
): number {
  if (!container || cardsCount === 0) return 0;
  const containerWidth = container.clientWidth;
  const firstCard = container.querySelector<HTMLElement>("div");
  if (!firstCard) return 0;
  const cardWidth =
    firstCard.clientWidth +
    parseInt(getComputedStyle(firstCard).marginRight || "0");
  const cardsPerPage = Math.floor(containerWidth / cardWidth) || 1;
  return Math.ceil(cardsCount / cardsPerPage);
}

export function scrollToPage(
  container: HTMLDivElement | null,
  pageIndex: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
) {
  if (!container) return;
  const containerWidth = container.clientWidth;
  const firstCard = container.querySelector<HTMLElement>("div");
  if (!firstCard) return;
  const cardWidth =
    firstCard.clientWidth +
    parseInt(getComputedStyle(firstCard).marginRight || "0");
  const cardsPerPage = Math.floor(containerWidth / cardWidth) || 1;
  const scrollLeft = pageIndex * cardsPerPage * cardWidth;
  container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  setPage(pageIndex);
}

export function onScroll(
  e: React.UIEvent<HTMLDivElement>,
  setPage: React.Dispatch<React.SetStateAction<number>>
) {
  const container = e.currentTarget;
  const scrollLeft = container.scrollLeft;
  const containerWidth = container.clientWidth;

  const firstCard = container.querySelector<HTMLElement>("div");
  if (!firstCard) return;
  const cardWidth =
    firstCard.clientWidth +
    parseInt(getComputedStyle(firstCard).marginRight || "0");
  const cardsPerPage = Math.floor(containerWidth / cardWidth) || 1;

  const currentPage = Math.round(scrollLeft / (cardsPerPage * cardWidth));
  setPage(currentPage);
}
