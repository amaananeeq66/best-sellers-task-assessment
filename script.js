const products = [
  {
    id: 1,
    name: "OUTSIDE VIBES T-SHIRT SUNSHINE",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER"],
    cardBgClass: "bg-[#f4cf2f]",
  },
  {
    id: 2,
    name: "NIKE BOTTLE OUTSIDE VIBES",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER", "SAVE 10%"],
    cardBgClass: "bg-[#efefee]",
  },
  {
    id: 3,
    name: "REST IN NATURE T-SHIRT CHARCOAL",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER"],
    cardBgClass: "bg-[#d6151d]",
  },
  {
    id: 4,
    name: "OUTSIDE VIBES CAP FOREST GREEN",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER", "SAVE 10%"],
    cardBgClass: "bg-[#efb3bf]",
  },
  {
    id: 5,
    name: "REST IN NATURE T-SHIRT CHARCOAL",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER"],
    cardBgClass: "bg-[#efb1ef]",
  },
  {
    id: 6,
    name: "SUMMER TOTE BAG STONE",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    badges: ["NEW"],
    cardBgClass: "bg-[#d7dbe7]",
  },
  {
    id: 7,
    name: "WEEKEND SUNGLASSES BLACK",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    badges: ["SAVE 15%"],
    cardBgClass: "bg-[#ecebea]",
  },
  {
    id: 8,
    name: "CLASSIC WATCH GOLD",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER"],
    cardBgClass: "bg-[#efe3d6]",
  },
  {
    id: 9,
    name: "TRAVEL BACKPACK KHAKI",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80",
    badges: ["NEW"],
    cardBgClass: "bg-[#d6dce0]",
  },
  {
    id: 10,
    name: "WIRELESS EARBUDS ELITE",
    price: 104.95,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=900&q=80",
    badges: ["BEST SELLER", "SAVE 10%"],
    cardBgClass: "bg-[#d8d9ef]",
  },
];    

const desktopProducts = document.getElementById("desktopProducts");
const mobilePrimaryProducts = document.getElementById("mobilePrimaryProducts");
const mobileMoreProducts = document.getElementById("mobileMoreProducts");
const mobileMorePanel = document.getElementById("mobileMorePanel");
const showMoreBtn = document.getElementById("showMoreBtn");
const desktopRail = document.getElementById("desktopRail");
const desktopScrollbar = document.getElementById("desktopScrollbar");
const desktopThumb = document.getElementById("desktopThumb");

function renderStars() {
  return Array.from(
    { length: 5 },
    () => `
                <svg  aria-hidden="true" viewBox="0 0 20 20" class="h-[12px] w-[12px] fill-[#111111]">
                    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.62L10 0 7.19 6.62 0 7.24l5.46 4.73L3.82 19z"></path>
      </svg>
            `,
  ).join("");
}

function renderBadge(badge) {
  const isSavings = badge.includes("SAVE");
  const badgeClass = isSavings
    ? "bg-[#6d8676] text-white border-black"
    : "bg-white text-[#111111] border-black";

  return `
                <span class="inline-flex items-center rounded-full border px-[8px] font-normal py-[4px] font-condensed text-[10px] leading-none tracking-[0.08em] ${badgeClass}">
                    ${badge}
                </span>
            `;
}

function getDesktopCardWidth() {
  if (window.innerWidth < 768) {
    return 355;
  }

  const railWidth =
    desktopRail.clientWidth || desktopRail.parentElement.clientWidth || 0;
  const gap = 16;
  const visibleCards = 4.5;
  const calculatedWidth = (railWidth - gap * 4) / visibleCards;
  const maxDesktopCardWidth = window.innerWidth >= 2200 ? 420 : 355;

  return Math.min(maxDesktopCardWidth, Math.max(250, calculatedWidth));
}

function createCardMarkup(product, desktop) {
  const desktopCardWidth = Math.round(getDesktopCardWidth());

  return `
                <li class="${desktop ? "shrink-0" : "w-full"}" ${desktop ? `style="width:${desktopCardWidth}px"` : ""}>
                    <article class="group">
                        <a href="#" class="block" draggable="false">
                            <div class="relative mb-2 overflow-hidden rounded-[10px] ${product.cardBgClass}">
                                <div class="absolute inset-x-1.5 top-1.5 z-10 flex flex-wrap items-start justify-between gap-1">
                                    ${product.badges.map(renderBadge).join("")}
                                </div>
                                <div class="relative aspect-square overflow-hidden">
                                    <img
                                        src="${product.image}"
                                        alt="${product.name}"
                                        loading="lazy"
                                        draggable="false"
                                        class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:opacity-0"
                                    >
                                    <img
                                        src="${product.hoverImage}"
                                        alt="${product.name}"
                                        loading="lazy"
                                        draggable="false"
                                        class="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
                                    >
                                </div>
                            </div>
                            <div class="space-y-1 p-[8px] md:p-[12px]">
                                <h2 class="font-condensed text-[16px] md:text-[18px] lg:text-[18px] leading-[0.95] tracking-[0.02em] text-[#1C1D1D] ${desktop ? "min-h-[26px]" : "min-h-[38px] text-[11px]"}">
                                    ${product.name}
                                </h2>
                                <div class="flex items-center gap-1 text-[12px] text-[#9d9892]">
                                    <div class="flex items-center gap-[1px]">
                                        ${renderStars()}
                                    </div>
                                    <span class="font-body text-[11px] md:text-[12px] lg:text-[12px]">${product.reviews.toLocaleString()} Reviews</span>
                                </div>
                                <p class="font-body text-[16px] font-medium text-[#1C1D1D]">$${product.price.toFixed(2)}</p>
                            </div>
                        </a>
                    </article>
                </li>
            `;
}

function renderProducts() {
  desktopProducts.innerHTML = products
    .map((product) => createCardMarkup(product, true))
    .join("");
  mobilePrimaryProducts.innerHTML = products
    .slice(0, 4)
    .map((product) => createCardMarkup(product, false))
    .join("");
  mobileMoreProducts.innerHTML = products
    .slice(4)
    .map((product) => createCardMarkup(product, false))
    .join("");
}

function updateScrollbarThumb() {
  const visibleWidth = desktopRail.clientWidth;
  const contentWidth = desktopRail.scrollWidth;
  const maxScroll = contentWidth - visibleWidth;

  if (desktopRail.scrollLeft > maxScroll) {
    desktopRail.scrollLeft = Math.max(maxScroll, 0);
  }

  if (maxScroll <= 0) {
    desktopThumb.style.width = `${desktopScrollbar.clientWidth}px`;
    desktopThumb.style.transform = "translate(0, -50%)";
    return;
  }

  const ratio = visibleWidth / contentWidth;
  const thumbWidth = Math.max(desktopScrollbar.clientWidth * ratio, 80);
  const maxThumbTravel = desktopScrollbar.clientWidth - thumbWidth;
  const thumbLeft = (desktopRail.scrollLeft / maxScroll) * maxThumbTravel;

  desktopThumb.style.width = `${thumbWidth}px`;
  desktopThumb.style.transform = `translate(${thumbLeft}px, -50%)`;
}

function setupDesktopScrollDrag() {
  let isDraggingThumb = false;
  let dragStartX = 0;
  let isDraggingRail = false;
  let railStartX = 0;
  let railInitialScrollLeft = 0;
  let movedWhileDraggingRail = false;
  let suppressRailClick = false;

  function syncFromPointer(clientX) {
    const visibleWidth = desktopRail.clientWidth;
    const contentWidth = desktopRail.scrollWidth;
    const maxScroll = contentWidth - visibleWidth;
    const thumbWidth = desktopThumb.offsetWidth;
    const trackRect = desktopScrollbar.getBoundingClientRect();
    const maxThumbTravel = trackRect.width - thumbWidth;
    const pointerOffset = clientX - trackRect.left;
    const thumbLeft = Math.min(
      Math.max(pointerOffset - dragStartX, 0),
      maxThumbTravel,
    );
    const ratio = maxThumbTravel === 0 ? 0 : thumbLeft / maxThumbTravel;

    desktopRail.scrollLeft = ratio * maxScroll;
  }

  desktopThumb.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    isDraggingThumb = true;
    dragStartX = event.clientX - desktopThumb.getBoundingClientRect().left;
    desktopThumb.setPointerCapture(event.pointerId);
  });

  desktopThumb.addEventListener("pointermove", (event) => {
    if (!isDraggingThumb) {
      return;
    }

    syncFromPointer(event.clientX);
  });

  desktopThumb.addEventListener("pointerup", (event) => {
    isDraggingThumb = false;
    desktopThumb.releasePointerCapture(event.pointerId);
  });

  desktopThumb.addEventListener("pointercancel", (event) => {
    isDraggingThumb = false;
    desktopThumb.releasePointerCapture(event.pointerId);
  });

  desktopScrollbar.addEventListener("pointerdown", (event) => {
    if (event.target === desktopThumb) {
      return;
    }

    const thumbWidth = desktopThumb.offsetWidth;
    dragStartX = thumbWidth / 2;
    syncFromPointer(event.clientX);
  });

  desktopRail.addEventListener("pointerdown", (event) => {
    if (window.innerWidth < 768) {
      return;
    }

    event.preventDefault();
    isDraggingRail = true;
    movedWhileDraggingRail = false;
    railStartX = event.clientX;
    railInitialScrollLeft = desktopRail.scrollLeft;
    desktopRail.setPointerCapture(event.pointerId);
  });

  desktopRail.addEventListener("pointermove", (event) => {
    if (!isDraggingRail) {
      return;
    }

    event.preventDefault();
    const deltaX = event.clientX - railStartX;
    if (Math.abs(deltaX) > 3) {
      movedWhileDraggingRail = true;
    }
    desktopRail.scrollLeft = railInitialScrollLeft - deltaX;
  });

  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    desktopRail.addEventListener(eventName, (event) => {
      if (!isDraggingRail) {
        return;
      }

      suppressRailClick = movedWhileDraggingRail;
      isDraggingRail = false;
      movedWhileDraggingRail = false;
      if (desktopRail.hasPointerCapture(event.pointerId)) {
        desktopRail.releasePointerCapture(event.pointerId);
      }
    });
  });

  desktopRail.addEventListener(
    "click",
    (event) => {
      if (!suppressRailClick) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      suppressRailClick = false;
    },
    true,
  );

  desktopRail.addEventListener("scroll", updateScrollbarThumb, {
    passive: true,
  });
  window.addEventListener("resize", updateScrollbarThumb);
  updateScrollbarThumb();
}

function setMobileExpanded(expanded) {
  showMoreBtn.setAttribute("aria-expanded", String(expanded));
  mobileMorePanel.setAttribute("aria-hidden", String(!expanded));
  showMoreBtn.textContent = expanded ? "Show Less" : "Show More";

  if (expanded) {
    mobileMorePanel.classList.remove("mt-0", "max-h-0", "opacity-0");
    mobileMorePanel.classList.add("mt-4", "max-h-[1600px]", "opacity-100");
  } else {
    mobileMorePanel.classList.remove("mt-4", "max-h-[1600px]", "opacity-100");
    mobileMorePanel.classList.add("mt-0", "max-h-0", "opacity-0");
  }
}

renderProducts();
setupDesktopScrollDrag();
setMobileExpanded(false);

window.addEventListener("resize", () => {
  renderProducts();
  updateScrollbarThumb();
});

showMoreBtn.addEventListener("click", () => {
  const expanded = showMoreBtn.getAttribute("aria-expanded") === "true";
  setMobileExpanded(!expanded);
});
