import { test, expect } from "@playwright/test";

test.describe("Mobile responsiveness", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("page loads without horizontal scroll", async ({ page }) => {
    // Verify user cannot actually scroll horizontally (overflow-x: hidden should prevent it)
    const canScrollHorizontally = await page.evaluate(() => {
      // Try scrolling horizontally
      window.scrollTo(100, 0);
      const scrolledX = window.scrollX;
      window.scrollTo(0, 0);
      return scrolledX > 0;
    });
    expect(canScrollHorizontally).toBe(false);

    // Also verify visible content doesn't extend beyond viewport
    // (excludes absolutely-positioned decorative elements with overflow:hidden parents)
    const visibleOverflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const sections = document.querySelectorAll("section, nav, footer");
      for (const section of sections) {
        const style = window.getComputedStyle(section);
        // Skip sections that clip overflow
        if (style.overflowX === "hidden" || style.overflow === "hidden") continue;
        // Check direct children only (not absolutely positioned decorations)
        for (const child of section.children) {
          const cs = window.getComputedStyle(child);
          if (cs.position === "absolute" || cs.position === "fixed") continue;
          const rect = child.getBoundingClientRect();
          if (rect.right > docWidth + 5) return true;
        }
      }
      return false;
    });
    expect(visibleOverflow).toBe(false);
  });

  test("navbar is visible and functional", async ({ page, isMobile }) => {
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();

    // Check if hamburger is present (only on small mobile, not tablet at 768px which hits md breakpoint)
    const hamburger = page.locator('button[aria-label="Open menu"]');
    const hamburgerVisible = await hamburger.isVisible().catch(() => false);

    if (isMobile && hamburgerVisible) {
      // Desktop nav links should be hidden
      const desktopLinks = nav.locator(".hidden.md\\:flex").first();
      await expect(desktopLinks).toBeHidden();

      // Click hamburger to open menu
      await hamburger.click();
      await page.waitForTimeout(400);

      // Mobile menu should show links
      const mobileLink = page.getByRole("link", { name: "Services" }).last();
      await expect(mobileLink).toBeVisible();

      // Close menu
      const closeBtn = page.locator('button[aria-label="Close menu"]');
      await closeBtn.click();
      await page.waitForTimeout(400);
    } else {
      // Desktop/tablet at md+ — nav links should be visible
      const servicesLink = nav.getByRole("link", { name: "Services" });
      await expect(servicesLink).toBeVisible();
    }
  });

  test("hero section renders properly", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();

    // Hero heading should be visible
    const heading = page.getByText("Delivering");
    await expect(heading).toBeVisible();

    // CTA buttons should be visible
    const whatsappCta = page.getByRole("link", { name: /Book via WhatsApp/i });
    await expect(whatsappCta).toBeVisible();

    // Check CTA is not overflowing
    const ctaBox = await whatsappCta.boundingBox();
    const viewportSize = page.viewportSize();
    expect(ctaBox).toBeTruthy();
    if (ctaBox && viewportSize) {
      expect(ctaBox.x).toBeGreaterThanOrEqual(0);
      expect(ctaBox.x + ctaBox.width).toBeLessThanOrEqual(viewportSize.width + 2);
    }
  });

  test("stats bar numbers are visible", async ({ page }) => {
    const statsSection = page.locator("text=Deliveries / Month").first();
    await statsSection.scrollIntoViewIfNeeded();
    await expect(statsSection).toBeVisible();
  });

  test("services section is readable on mobile", async ({ page, isMobile }) => {
    const servicesSection = page.locator("#services");
    await servicesSection.scrollIntoViewIfNeeded();
    await expect(servicesSection).toBeVisible();

    // Each service title should be visible (use getByRole to find visible heading)
    for (const title of ["Full Truck Load", "LTL Cargo", "Same-Day Dispatch", "Door-to-Door"]) {
      const el = servicesSection.getByText(title, { exact: true }).filter({ hasNot: page.locator(".hidden, .sm\\:hidden, [class*='hidden']") });
      // At least one instance of each title should be visible
      const allInstances = servicesSection.getByText(title, { exact: true });
      const count = await allInstances.count();
      let anyVisible = false;
      for (let j = 0; j < count; j++) {
        if (await allInstances.nth(j).isVisible()) {
          anyVisible = true;
          break;
        }
      }
      expect(anyVisible).toBe(true);
    }

    // On mobile, check that service items don't overflow
    if (isMobile) {
      const viewportSize = page.viewportSize();
      if (viewportSize) {
        const serviceItems = servicesSection.locator(".group");
        const count = await serviceItems.count();
        for (let i = 0; i < count; i++) {
          const box = await serviceItems.nth(i).boundingBox();
          if (box) {
            expect(box.x).toBeGreaterThanOrEqual(-1);
            expect(box.x + box.width).toBeLessThanOrEqual(viewportSize.width + 2);
          }
        }
      }
    }
  });

  test("routes section is visible and not overflowing", async ({ page }) => {
    const routesSection = page.locator("#routes");
    await routesSection.scrollIntoViewIfNeeded();
    await expect(routesSection).toBeVisible();

    // City names should be visible
    for (const city of ["Johor", "Malacca"]) {
      const el = page.locator(`#routes >> text=${city}`).first();
      await expect(el).toBeVisible();
    }
  });

  test("why us bento grid renders without overflow", async ({ page }) => {
    const whyUs = page.getByText("The Difference Is").first();
    await whyUs.scrollIntoViewIfNeeded();
    await expect(whyUs).toBeVisible();

    // License number card should be visible
    const license = page.getByText("1489547.W").first();
    await expect(license).toBeVisible();

    // Bottom card stats should fit
    const statsCard = page.getByText("Trusted by Malaysian SMEs").first();
    await statsCard.scrollIntoViewIfNeeded();
    await expect(statsCard).toBeVisible();
  });

  test("about section renders properly", async ({ page }) => {
    const about = page.locator("#about");
    await about.scrollIntoViewIfNeeded();

    const heading = page.locator("#about >> text=Shuda Logistics").first();
    await expect(heading).toBeVisible();

    // Tags should be visible
    const tag = page.locator("#about >> text=Johor").first();
    await expect(tag).toBeVisible();
  });

  test("testimonials are visible", async ({ page }) => {
    const testimonial = page.getByText("Ahmad Razif").first();
    await testimonial.scrollIntoViewIfNeeded();
    await expect(testimonial).toBeVisible();
  });

  test("contact form is usable", async ({ page }) => {
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();

    // Form should be visible
    const nameInput = page.locator('input[name="name"]');
    await nameInput.scrollIntoViewIfNeeded();
    await expect(nameInput).toBeVisible();

    // Check form inputs are not overflowing
    const viewportSize = page.viewportSize();
    if (viewportSize) {
      const inputBox = await nameInput.boundingBox();
      if (inputBox) {
        expect(inputBox.x).toBeGreaterThanOrEqual(0);
        expect(inputBox.x + inputBox.width).toBeLessThanOrEqual(viewportSize.width + 2);
      }
    }

    // Submit button should be visible
    const submitBtn = page.getByRole("button", { name: /Send via WhatsApp/i });
    await submitBtn.scrollIntoViewIfNeeded();
    await expect(submitBtn).toBeVisible();
  });

  test("footer renders without overflow", async ({ page }) => {
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // CTA in footer should be visible
    const ctaText = page.getByText("Ready to Ship Today?").first();
    await expect(ctaText).toBeVisible();

    // Check footer doesn't overflow
    const viewportSize = page.viewportSize();
    if (viewportSize) {
      const footerBox = await footer.boundingBox();
      if (footerBox) {
        expect(footerBox.width).toBeLessThanOrEqual(viewportSize.width + 2);
      }
    }
  });

  test("all sections are accessible by scrolling", async ({ page }) => {
    const sections = ["#services", "#routes", "#about", "#contact"];
    for (const id of sections) {
      const section = page.locator(id);
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
    }
  });
});
