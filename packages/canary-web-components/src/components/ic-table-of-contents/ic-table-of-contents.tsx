import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import { IcPosition, IcSizes, IcThemeMode } from "../../utils/types";
import { TableOfContentsItem } from "../ic-table-of-contents-item/ic-table-of-contents-item";

@Component({
  tag: "ic-table-of-contents",
  styleUrl: "ic-table-of-contents.css",
  shadow: true,
})
export class TableOfContents {
  @Element() el: HTMLIcTableOfContentsElement;
  @Prop() heading: string = "Table of Contents";
  @Prop() size: IcSizes = "medium";
  @Prop() theme?: IcThemeMode = "inherit";
  @Prop() truncate: boolean = false;

  @State() position: IcPosition = "right";

  @Prop() setScrollHeight: number = 50;
  @Prop() setClickHeight: number = 75;

  private focusedElement: number = 0;
  private referenceElements: HTMLElement[] = [];
  private listContent: HTMLElement[] = [];
  private currentTargetHeights: number[] = [];
  private resizeObserver: ResizeObserver;
  private headerHeight: number = 0;
  @State() supressListener: boolean = false;

  @Watch("supressListener")
  supressListenerHandler() {
    window.scrollTo(0, window.scrollY - this.headerHeight - 50);
  }
  //item generation logic
  private createListItem = (
    validChild: Element,
    children: HTMLElement[],
    index: number
  ): HTMLElement[] => {
    if (!validChild.id) {
      const id = validChild.innerHTML.replace(/\s+/g, "-").toLowerCase();
      validChild.setAttribute("id", id);
    }

    const item = (
      <TableOfContentsItem
        variant={validChild.tagName.toLowerCase()}
        label={validChild.innerHTML}
        target={validChild.id}
        truncate={this.truncate}
        selected={true}
        updateSelected={this.updateOnSelection}
        position={index}
        size={this.size}
      />
    );

    this.listContent.push(item as HTMLElement);
    children.push(item);
    return children;
  };

  private generateListItems(): HTMLElement[] {
    let listItems: HTMLElement[] = [];
    this.el.querySelectorAll("h2,h3,h4,h5").forEach((child, index) => {
      listItems = this.createListItem(child, listItems, index);
      this.referenceElements.push(child as HTMLElement);
    });
    return listItems;
  }

  //container logic
  private contianerPosition(): void {
    if (this.position) {
      const container = this.el.shadowRoot?.querySelector(
        "#section-container"
      ) as HTMLIcSectionContainerElement;
      console.log(this.position === "right");
      switch (this.position) {
        case "right":
          container.style.flexDirection = "row";
          break;
        case "top":
          container.style.flexDirection = "column-reverse";
          break;
      }
    }
  }

  //sidebar logic
  private sidebarTranslation(newPosition: number): void {
    const sidebar = this.el.shadowRoot?.querySelector(
      ".table-of-contents-sidebar"
    ) as HTMLIcSectionContainerElement;

    const change = newPosition * (this.size === "large" ? 2 : 1.5);
    sidebar.style.transform = `translateY(${change}rem)`;
  }

  private updateOnSelection = (position: number) => {
    this.supressListener = true;
    this.focusedElement = position;
    this.sidebarTranslation(this.focusedElement);
  };

  private findElementsHeights() {
    const contentBounds: number[] = [];
    this.referenceElements.forEach((element) => {
      // Get the top position of each element relative to the
      contentBounds.push(element.getBoundingClientRect().top);
    });
    this.currentTargetHeights = contentBounds;
  }

  private handleResizeBounds() {
    if (window.innerWidth < 1200 && this.position !== "top")
      this.position = "top";
    else if (window.innerWidth > 1200 && this.position === "top")
      this.position = "right";
    this.findElementsHeights();
  }

  private updateSelectedItemFromScroll() {
    const targetHeight =
      window.scrollY + window.innerHeight * (this.setScrollHeight / 100);
    if (window.scrollY === 0) {
      this.focusedElement = 0;
      this.sidebarTranslation(this.focusedElement);
    } else if (targetHeight < this.currentTargetHeights[this.focusedElement]) {
      const previousItems = this.currentTargetHeights.slice(
        0,
        this.focusedElement
      );
      const closestItem = previousItems.reduce((newValue, curr, index) => {
        if (
          Math.abs(curr - targetHeight) <
          Math.abs(previousItems[newValue] - targetHeight)
        )
          return index;
        return newValue;
      }, 0);
      this.focusedElement = closestItem;
      this.sidebarTranslation(this.focusedElement);
    } else if (
      targetHeight > this.currentTargetHeights[this.focusedElement] &&
      this.focusedElement !== this.currentTargetHeights.length
    ) {
      const relevantItems = this.currentTargetHeights.slice(
        this.focusedElement
      );

      const closestItem = relevantItems.reduce((newValue, curr, index) => {
        if (
          Math.abs(curr - targetHeight) <
            Math.abs(relevantItems[newValue] - targetHeight) &&
          curr < targetHeight
        )
          return index;
        return newValue;
      }, 0);
      if (closestItem + this.focusedElement !== this.focusedElement) {
        this.focusedElement += closestItem;
        this.sidebarTranslation(this.focusedElement);
      }
    }
  }

  private findHeaderElement(): number {
    const element = document.querySelector("ic-page-header");
    if (element) {
      return element.clientHeight;
    }
    const header = document.querySelector("header");
    if (header) {
      return header.clientHeight;
    }
    return 0;
  }

  private addListMargin(): void {
    const content = this.el.shadowRoot?.querySelector(
      ".table-of-contents-content"
    ) as HTMLDivElement;
    content?.style.setProperty("top", `${this.headerHeight}px`);
  }

  private truncateText = () => {
    const element = this.el.shadowRoot?.querySelectorAll(
      `#table-of-contents-item-label`
    );
    const contentList = this.el.shadowRoot?.querySelector("#toc-content");
    const maxWidth = this.size === "large" ? 320 : 320;
    if (contentList)
      element?.forEach((item) => {
        if (maxWidth < item.scrollWidth) {
          const newLabel = document.createElement("ic-tooltip");
          newLabel.setAttribute("target", item.id);
          newLabel.setAttribute(
            "style",
            "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
          );
          newLabel.setAttribute("label", item.innerHTML);
          newLabel.setAttribute(
            "placement",
            this.position === "right" ? "left" : "right"
          );
          item.parentNode?.appendChild(newLabel);
          newLabel.appendChild(item);
        }
      });
  };

  private handleDisplayTooltip = () => {};

  componentWillLoad() {
    this.resizeObserver = new ResizeObserver(() => this.handleResizeBounds());
    this.resizeObserver.observe(this.el);
  }

  componentDidRender() {
    document.addEventListener("scroll", () => {
      if (!this.supressListener) this.updateSelectedItemFromScroll();
      else this.supressListener = false;
    });
  }

  async componentDidLoad() {
    this.contianerPosition();
    this.focusedElement = 0;
    this.headerHeight = this.findHeaderElement();
    this.addListMargin();
    this.truncateText();
    this.handleDisplayTooltip();
    this.findElementsHeights();
  }

  componentWillUpdate() {}

  render() {
    return (
      <Host>
        <ic-section-container
          id={"section-container"}
          alligned={"full-width"}
          style={{ display: "flex" }}
        >
          <slot></slot>
          <div
            class={`table-of-contents-content ${
              this.position === "top" && "table-of-contents-position-top"
            }
            ${this.position === "right" && "table-of-contents-position-side"}`}
          >
            <ic-typography variant="h3">{this.heading}</ic-typography>
            <div class={"table-of-contents-list"}>
              <div
                class={"table-of-contents-sidebar"}
                style={{ height: this.size === "large" ? "2rem" : "1.5rem" }}
              />
              <div id={"toc-content"} class={"table-of-contents-list-items"}>
                {this.generateListItems()}
              </div>
            </div>
          </div>
        </ic-section-container>
      </Host>
    );
  }
}
