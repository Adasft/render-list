import css from "./dom/CSSFactory";
import {
  createRef,
  createElement as h,
  createTextNode as text,
} from "./dom/elements";
import { __DOC__ } from "./global";

interface ILine {}

interface ILinesModel {
  getLine: (start: number, end?: number) => Array<ILine> | ILine;
}

type RenderLinesOptions = {
  containerElm: HTMLElement;
  linesModel: ILinesModel;
};

class RenderView {
  private readonly _scrollableElm: HTMLElement | null;
  private readonly _contentLinesElm: HTMLElement | null;

  constructor() {
    this._scrollableElm = null;
    this._contentLinesElm = null;
  }
}

class RenderLines {
  // elm = element
  private readonly _containerElm: HTMLElement;
  private readonly _hiddenLinesSpaceElm: HTMLElement | null;
  private readonly _lineElmsCache: Array<HTMLElement>;
  private readonly _linesModel: ILinesModel;
  private readonly _renderView: RenderView;

  constructor({ containerElm, linesModel }: RenderLinesOptions) {
    this._containerElm = containerElm;
    this._hiddenLinesSpaceElm = null;
    this._lineElmsCache = [];
    this._linesModel = linesModel;
    this._renderView = new RenderView();

    try {
      this._init();
    } catch (err) {
      console.error(err);
    }
  }

  private _init(): void {}
}

const ref1 = createRef();
const ref2 = createRef();
const root = h(
  "div",
  {
    attrs: {
      style: css({ margin: 50 }).toString(),
    },
    on: {
      // click: () => console.log("hola1"),
      // mouseenter: () => console.log("Enter"), // x
      // mousemove: () => console.log("move1"),
      // mouseleave: () => console.log("leave"), // x
      // mouseout: () => console.log("out1"),
      // mouseover: () => console.log("over1"),
      // mousedown: () => console.log("down1"),
      // mouseup: () => console.log("up"),
      // keydown() {
      //   console.log("keydown1");
      // },
      keypress: () => console.log("keypress 1"),
    },
  },
  text("Hola como estas JAJAJ"),
  h(
    "div",
    {
      ref: ref2,
      attrs: {
        style: css({
          width: 200,
          height: 200,
          background: "red",
          position: "absolute",
        }).toString(),
      },
      on: {
        mousedraghold: (ev: any) => {
          // console.log(ref2);
          css({
            top: ev.y,
            left: ev.x,
          }).from(ref2.current);
        },
      },
    },
    h("div", {
      ref: ref1,
      attrs: {
        style: css({
          margin: 20,
          width: 100,
          height: 100,
          background: "blue",
          position: "absolute",
        }).toString(),
      },
      on: {
        mousedraghold: (ev: any) => {
          const target = ev.target;
          // console.log(ev.pageX);
          css({
            top: ev.y,
            left: ev.x,
          }).from(ref1.current);
        },
      },
    })
  ),
  h("button", null, text("JAJAJAJA")),
  h(
    "button",
    {
      on: {
        click: (ev: any) => console.log(Math.random() + ev.x),
        // mouseenter: () => {
        //   console.log("pues si");
        // },
        // mouseleave: () => {
        //   console.log("leave 222");
        // },
      },
    },
    h("button", null, text("Hola ammamamama")),
    text("Click me!!")
  )
);

const root2 = h(
  "div",
  {
    on: {
      click: () => console.log("hola2"),
      // mouseenter: () => console.log("Enter"), // x
      // mousemove: () => console.log("move2"),
      // mouseleave: () => console.log("leave"), // x
      // mouseout: () => console.log("out2"),
      // mouseover: () => console.log("over2"),
      // mousedown: () => console.log("down2"),
      // mouseup: () => console.log("up"),
      // keydown() {
      //   console.log("keydown2");
      // },
      // paste: () => console.log("paste"), // x
      // contextmenu: () => console.log("context"),
      // copy: () => console.log("copy"), // x
      // keypress: () => console.log("keypress 2"),
    },
  },
  h("input", { on: { input: () => console.log("hola") } }),
  text("Hola como estas JAJAJ"),
  h(
    "button",
    {
      on: {
        click: () => console.log(Math.random()),
      },
    },
    text("Click me!!")
  )
);

const root3 = h("button", {
  on: {
    click: () => {
      console.log("AASDASDas");
    },
  },
});

__DOC__.getElementById("root")?.append(root.node, root2.node, root3.node);
