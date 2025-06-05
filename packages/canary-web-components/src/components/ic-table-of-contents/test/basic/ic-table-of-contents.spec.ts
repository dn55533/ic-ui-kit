import { newSpecPage } from "@stencil/core/testing";
import { TableOfContents } from "../../ic-table-of-contents";

describe("ic-table-of-contents", () => {
  beforeAll(() => {});

  it("should render default", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents>
      <div><h1>Heading</h1></div>
      </ic-table-of-contents>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default with multiple headings", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents>
      <div>
      <h1>Heading</h1>
        <h2>Subheading</h2>
      </div>
      </ic-table-of-contents>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default with custom title", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents heading="Custom Title">
      <div>
      <h1>Heading</h1>
        <h2>Subheading</h2>
      </div>
      </ic-table-of-contents>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render maximum heading depth", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents heading="Custom Title">
      <div>
      <h1>Heading</h1>
        <h2>Subheading</h2>
        <h3>Sub-subheading</h3>
        <h4>Sub-sub-subheading</h4>
        <h5>Sub-sub-sub-subheading</h5>
      </div>
      </ic-table-of-contents>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with correct targets", async () => {
    await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents>
      <div>
        <h2 id="subheading1">Subheading 1</h2>
        <h3 id="subsubheading1">Sub-subheading 1</h3>
      </div>
      </ic-table-of-contents>
        `,
    });

    const toc = document.querySelector(
      "ic-table-of-contents"
    ) as HTMLIcTableOfContentsElement;
    expect(toc).toBeTruthy();

    const tocItems = toc.shadowRoot?.querySelectorAll(
      ".table-of-contents-item"
    ) as NodeListOf<Element>;
    expect(tocItems.length).toBe(2);
    const subheading1 = tocItems[0].querySelector("a") as HTMLAnchorElement;
    expect(subheading1.getAttribute("href")).toBe("#subheading1");
    window.scrollTo = jest.fn();
    subheading1.click();
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });

  it("should respond to scroll events", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-table-of-contents>
      <div>
      <h2>Heading</h2>
      <h2>Heading 2</h2>
        <h3>Subheading</h3>
      </div>
      </ic-table-of-contents>
        `,
    });

    const toc = document.querySelector(
      "ic-table-of-contents"
    ) as HTMLIcTableOfContentsElement;
    expect(toc).toBeTruthy();

    const tocItems = toc.shadowRoot?.querySelectorAll(
      ".table-of-contents-item"
    ) as NodeListOf<Element>;
    expect(tocItems.length).toBe(3);

    page.rootInstance.currentTargetHeights = [0, 100, 600];
    page.rootInstance.sidebarTranslation = jest.fn();

    expect(window.scrollY).toBe(0);
    document.dispatchEvent(new Event("scroll"));
    expect(page.rootInstance.sidebarTranslation).toHaveBeenCalledWith(0);

    window.scrollY = 500;
    document.dispatchEvent(new Event("scroll"));
    expect(page.rootInstance.sidebarTranslation).toHaveBeenCalledWith(2);
    expect(page.rootInstance.focusedElement).toBe(2);

    window.scrollY = 100;
    document.dispatchEvent(new Event("scroll"));
    expect(page.rootInstance.sidebarTranslation).toHaveBeenCalledWith(1);
    expect(page.rootInstance.focusedElement).toBe(1);
  });

  it("should render correctly with header present", async () => {
    const page = await newSpecPage({
      components: [TableOfContents],
      html: `<ic-page-header
       heading="Latte recipe"
            subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
            reverse-order="true"
            sticky="true"></ic-page-header>
      <ic-table-of-contents heading="Custom Title">
      <div>
      <h1>Heading</h1>
        <h2>Subheading</h2>
        <h3>Sub-subheading</h3>
        <h4>Sub-sub-subheading</h4>
        <h5>Sub-sub-sub-subheading</h5>
      </div>
      </ic-table-of-contents>
        `,
    });

    const pageHeader = document.querySelector(
      "ic-page-header"
    ) as HTMLIcPageHeaderElement;

    expect(pageHeader).toBeTruthy();

    expect(page.root).toMatchSnapshot();
  });
});
