const pages = [
  "",
  "SobreLaWeb",
  "ConQueSeRenderiza",
  "PatronesDeRenderizadoComunes",
  "PaginasEstaticas1",
  "PaginasEstaticas2",
  "SinglePageApplications1",
  "SinglePageApplications2",
  "SinglePageApplications3",
  "ImportanciaVelocidad",
  "ComparacionHtml",
  "StaticSiteGeneration1",
  "StaticSiteGeneration2",
  "IslasDeInteractividad",
  "DiagramaIslas",
  "BalanceIslas",
  "MasAlla",
  "Flexibilidad",
  "EjemploInteractividad",
  "Integraciones",
  "ViewTransitions1",
  "ViewTransitions2",
];

function isOutOfScope(idx) {
  return idx < 0 || idx >= pages.length;
}

function getNextPage(current) {
  const currentIdx = pages.indexOf(current);
  const nextIdx = currentIdx + 1;
  if (!isOutOfScope(nextIdx)) return pages[nextIdx];
  return pages[0];
}

function getPrevPage(current) {
  const currentIdx = pages.indexOf(current);
  const prevIdx = currentIdx - 1;
  if (!isOutOfScope(prevIdx)) return pages[prevIdx];
  return pages[0];
}

export { getNextPage, getPrevPage };
