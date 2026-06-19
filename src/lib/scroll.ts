const ANIMATED_SELECTOR =
  ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in";

const SCROLL_TARGET_KEY = "portfolio-scroll-target";

export function requestScrollToSection(sectionId: string) {
  sessionStorage.setItem(SCROLL_TARGET_KEY, sectionId);
}

export function consumeScrollToSection(): string | null {
  const sectionId = sessionStorage.getItem(SCROLL_TARGET_KEY);

  if (sectionId) {
    sessionStorage.removeItem(SCROLL_TARGET_KEY);
  }

  return sectionId;
}

export function revealAnimatedElements(container: ParentNode = document) {
  container.querySelectorAll(ANIMATED_SELECTOR).forEach((element) => {
    element.classList.add("visible");
  });
}

export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(ANIMATED_SELECTOR).forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (isInView) {
      element.classList.add("visible");
      return;
    }

    observer.observe(element);
  });

  return () => observer.disconnect();
}

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const headerHeight = 64;
  const top =
    target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  window.scrollTo({ top, behavior });
  revealAnimatedElements(target);
}
