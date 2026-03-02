function pageCount(n, p) {
  let frontCount = 0;
  let backCount = 0;
  let totalSheets = Math.floor(n / 2);
  // front
  for (let i = 0; i < totalSheets; i++) {
    const pages = [i * 2, i * 2 + 1];
    if (pages.includes(p)) {
      frontCount = i;
    }
  }

  // back

  for (let i = totalSheets; i >= 0; i--) {
    const pages = [i * 2, i * 2 + 1];

    if (pages.includes(p)) {
      backCount = totalSheets - i;
      break;
    }
  }

  return Math.min(frontCount, backCount);
}

console.log("pages", pageCount(5, 4));
