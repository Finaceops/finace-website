import {
  __publicField
} from "./chunk-EQCVQC35.js";

// node_modules/lord-icon-element/global.js
var VERSION = "4.1.2";

// node_modules/lord-icon-element/utils/colors.js
var COLORS = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred ": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgrey": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370d8",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#d87093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
};
function parseColor(colorName) {
  if (colorName.startsWith("#")) {
    if (colorName.length === 4) {
      return `#${colorName[1]}${colorName[1]}${colorName[2]}${colorName[2]}${colorName[3]}${colorName[3]}`;
    } else {
      return colorName;
    }
  } else {
    return COLORS[colorName.toLowerCase()] || "#000000";
  }
}
function parseColors(colors) {
  const list = colors.split(",").filter((c) => c).map((c) => c.split(":")).filter((c) => c.length == 2);
  return list.reduce((p, c) => {
    const a = c[0];
    p[a.toLowerCase()] = parseColor(c[1]);
    return p;
  }, {});
}

// node_modules/lord-icon-element/utils/helpers.js
function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}
function isNil(value) {
  return value === null || value === void 0;
}
function isObjectLike(value) {
  return value !== null && typeof value === "object";
}
function get(object, path, defaultValue) {
  const newPath = Array.isArray(path) ? path : path.split(".");
  let current = object;
  for (const key of newPath) {
    if (!isObjectLike(current)) {
      return defaultValue;
    }
    if (!(key in current)) {
      return defaultValue;
    }
    current = current[key];
  }
  return current === void 0 ? defaultValue : current;
}
function set(object, path, value) {
  let current = object;
  const newPath = Array.isArray(path) ? path : path.split(".");
  for (let i = 0; i < newPath.length; ++i) {
    if (i === newPath.length - 1) {
      current[newPath[i]] = value;
    } else {
      current = current[newPath[i]];
    }
  }
}

// node_modules/lord-icon-element/element.js
var SUPPORTS_ADOPTING_STYLE_SHEETS = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var INTERSECTION_LOADING_EVENTS = ["click", "mouseenter", "mouseleave"];
var ELEMENT_STYLE = `:host{position:relative;display:inline-block;width:32px;height:32px;transform:translate3d(0,0,0)}:host(.current-color) svg path[fill]{fill:currentColor}:host(.current-color) svg path[stroke]{stroke:currentColor}:host(:not(.current-color)) svg .primary path[fill]{fill:var(--lord-icon-primary, var(--lord-icon-primary-base))}:host(:not(.current-color)) svg .primary path[stroke]{stroke:var(--lord-icon-primary, var(--lord-icon-primary-base))}:host(:not(.current-color)) svg .secondary path[fill]{fill:var(--lord-icon-secondary, var(--lord-icon-secondary-base))}:host(:not(.current-color)) svg .secondary path[stroke]{stroke:var(--lord-icon-secondary, var(--lord-icon-secondary-base))}svg{position:absolute;pointer-events:none;display:block;transform:unset!important}::slotted(*){position:absolute;left:0;top:0;width:100%;height:100%}.body.ready ::slotted(*){display:none}`;
var styleSheet;
var OBSERVED_ATTRIBUTES = [
  "colors",
  "src",
  "icon",
  "state",
  "trigger",
  "loading",
  "target",
  "stroke"
];
var _Element = class _Element extends HTMLElement {
  constructor() {
    super(...arguments);
    __publicField(this, "_root");
    __publicField(this, "_isConnected", false);
    __publicField(this, "_isReady", false);
    __publicField(this, "_triggerInstance");
    __publicField(this, "_assignedIconData");
    __publicField(this, "_loadedIconData");
    __publicField(this, "_player");
    /**
     * Callback created by one of the lazy loading methods.
     * Enables the process to continue immediately.
     */
    __publicField(this, "delayedLoading", null);
  }
  /**
   * Get element version.
   */
  static get version() {
    return VERSION;
  }
  /**
   * Custom element observed attributes.
   */
  static get observedAttributes() {
    return OBSERVED_ATTRIBUTES;
  }
  /**
   * Assign callback responsible for loading icons. Allows our {@link element.Element | Element} to load {@link interfaces.IconData | icon data} from any source.
   * Remember to assign _icon loader_ before defining `lord-icon` custom element to take effect.
   *
   * Example:
   * ```js
   * import lottie from 'lottie-web';
   * import { defineElement } from 'lord-icon-element';
   * import { Element } from 'lord-icon-element/element';
   *
   * Element.setIconLoader(async (name) => {
   *     const response = await fetch(`https://example.com/${name}.json`);
   *     return await response.json();
   * });
   *
   * defineElement(lottie.loadAnimation);
   * ```
   *
   * @param loader Custom icon loader callback.
   */
  static setIconLoader(loader) {
    _Element._iconLoader = loader;
  }
  /**
   * Assign callback which create a player. Player is responsible for customizing icons and playing animations.
   * @param loader
   */
  static setPlayerFactory(loader) {
    _Element._playerFactory = loader;
  }
  /**
   * Define supported trigger. Triggers allows to define interaction strategy with icon.
   * @param name
   * @param triggerClass
   */
  static defineTrigger(name, triggerClass) {
    _Element._definedTriggers.set(name, triggerClass);
  }
  /**
   * Handle attribute update.
   * @param name
   * @param oldValue
   * @param newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    this[`${name}Changed`].call(this);
  }
  /**
   * Element connected.
   */
  connectedCallback() {
    if (!this._root) {
      this.createElements();
    }
    if (this.loading === "lazy") {
      let intersectionObserver = void 0;
      this.delayedLoading = (cancel) => {
        intersectionObserver.unobserve(this);
        intersectionObserver = void 0;
        this.delayedLoading = null;
        if (!cancel) {
          this.createPlayer();
        }
      };
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && intersectionObserver) {
            if (this.delayedLoading) {
              this.delayedLoading();
            }
          }
        });
      };
      intersectionObserver = new IntersectionObserver(callback);
      intersectionObserver.observe(this);
    } else if (this.loading === "interaction") {
      let interactionEvent = void 0;
      this.delayedLoading = (cancel) => {
        for (const eventName of INTERSECTION_LOADING_EVENTS) {
          (targetElement || this).removeEventListener(eventName, intersectionCallback);
        }
        this.delayedLoading = null;
        if (!cancel) {
          this.createPlayer().then(() => {
            (targetElement || this).dispatchEvent(new Event(interactionEvent));
          });
        }
      };
      const targetElement = this.target ? this.closest(this.target) : null;
      let intersectionCallback = (event) => {
        const eventName = event == null ? void 0 : event.type;
        if (!interactionEvent) {
          interactionEvent = eventName;
          if (this.delayedLoading) {
            this.delayedLoading();
          }
        } else {
          interactionEvent = eventName;
        }
      };
      intersectionCallback = intersectionCallback.bind(this);
      for (const eventName of INTERSECTION_LOADING_EVENTS) {
        (targetElement || this).addEventListener(eventName, intersectionCallback);
      }
    } else {
      this.createPlayer();
    }
    this._isConnected = true;
  }
  /**
   * Element disconnected.
   */
  disconnectedCallback() {
    if (this.delayedLoading) {
      this.delayedLoading(true);
    }
    this.destroyPlayer();
    this._isConnected = false;
  }
  /**
   * Create DOM elements.
   * @returns
   */
  createElements() {
    this._root = this.attachShadow({
      mode: "open"
    });
    if (SUPPORTS_ADOPTING_STYLE_SHEETS) {
      if (!styleSheet) {
        styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(ELEMENT_STYLE);
      }
      this._root.adoptedStyleSheets = [styleSheet];
    } else {
      const style = document.createElement("style");
      style.innerHTML = ELEMENT_STYLE;
      this._root.appendChild(style);
    }
    const container = document.createElement("div");
    container.classList.add("body");
    this._root.appendChild(container);
    const slot = document.createElement("slot");
    container.appendChild(slot);
  }
  /**
   * Instantiate player intance on demand with assigned player factory.
   * @returns
   */
  async createPlayer() {
    if (!_Element._playerFactory) {
      throw new Error("Missing player loader!");
    }
    if (this.delayedLoading) {
      return;
    }
    const iconData = await this.loadIconData();
    if (!iconData) {
      return;
    }
    this._player = _Element._playerFactory(this.animationContainer, iconData);
    this._player.connect();
    if (this.state || this.colors || this.stroke) {
      this.player.resetProperties({
        colors: parseColors(this.colors || ""),
        stroke: this.stroke,
        state: this.state
      });
    }
    this._player.addEventListener("ready", () => {
      if (this._triggerInstance && this._triggerInstance.onReady) {
        this._triggerInstance.onReady();
      }
    });
    this._player.addEventListener("refresh", () => {
      this.refresh();
      if (this._triggerInstance && this._triggerInstance.onRefresh) {
        this._triggerInstance.onRefresh();
      }
    });
    this._player.addEventListener("complete", () => {
      if (this._triggerInstance && this._triggerInstance.onComplete) {
        this._triggerInstance.onComplete();
      }
    });
    this._player.addEventListener("frame", () => {
      if (this._triggerInstance && this._triggerInstance.onFrame) {
        this._triggerInstance.onFrame();
      }
    });
    this.refresh();
    this.triggerChanged();
    await new Promise((resolve, reject) => {
      if (this._player.isReady) {
        resolve();
      } else {
        this._player.addEventListener("ready", resolve);
      }
    });
    this._isReady = true;
    this.dispatchEvent(new CustomEvent("ready"));
  }
  /**
   * Destroy connected player and connected trigger.
   * Player is recreated on every icon data change.
   */
  destroyPlayer() {
    this._isReady = false;
    this._loadedIconData = void 0;
    if (this._triggerInstance) {
      if (this._triggerInstance.onDisconnected) {
        this._triggerInstance.onDisconnected();
      }
      this._triggerInstance = void 0;
    }
    if (this._player) {
      this._player.disconnect();
      this._player = void 0;
    }
  }
  /**
   * Load icon with assigned icon loader or source indicated by src attribute.
   * @returns Icon data.
   */
  async loadIconData() {
    let iconData = this.iconData;
    if (!iconData) {
      if (this.icon && _Element._iconLoader) {
        this._loadedIconData = iconData = await _Element._iconLoader(this.icon);
      } else if (this.src) {
        const response = await fetch(this.src);
        this._loadedIconData = iconData = await response.json();
      }
    }
    return iconData;
  }
  /**
   * Synchronize element state with player.
   */
  refresh() {
    this.movePaletteToCssVariables();
  }
  /**
   * Update defaults for css variables.
   * Notice: css variables take precedence over colors assigned by other methods!
   */
  movePaletteToCssVariables() {
    for (const [key, value] of Object.entries(this.player.colors || {})) {
      this.animationContainer.style.setProperty(`--lord-icon-${key}-base`, value);
    }
  }
  /**
   * Target attribute changed. Element should reload it's trigger.
   */
  targetChanged() {
    this.triggerChanged();
  }
  /**
   * Loading attribute changed.
   */
  loadingChanged() {
  }
  /**
   * Trigger attribute changed. Disconnect old trigger and instantiate new one.
   */
  triggerChanged() {
    var _a;
    if (this._triggerInstance) {
      if (this._triggerInstance.onDisconnected) {
        this._triggerInstance.onDisconnected();
      }
      this._triggerInstance = void 0;
      (_a = this.player) == null ? void 0 : _a.pause();
    }
    if (!this.trigger || !this._player) {
      return;
    }
    const TriggerClass = _Element._definedTriggers.get(this.trigger);
    if (!TriggerClass) {
      throw new Error(`Can't use unregistered trigger!`);
    }
    const targetElement = this.target ? this.closest(this.target) : null;
    this._triggerInstance = new TriggerClass(this, targetElement || this, this._player);
    if (this._triggerInstance.onConnected) {
      this._triggerInstance.onConnected();
    }
    if (this._player.isReady && this._triggerInstance.onReady) {
      this._triggerInstance.onReady();
    }
  }
  /**
   * Colors attribute changed. Notify about new value player.
   */
  colorsChanged() {
    if (!this.player) {
      return;
    }
    this.player.colors = parseColors(this.colors || "");
  }
  /**
   * Stroke attribute changed. Notify about new value player.
   */
  strokeChanged() {
    if (!this.player) {
      return;
    }
    this.player.stroke = this.stroke;
  }
  /**
   * State attribute changed. Notify about new value player.
   */
  stateChanged() {
    if (!this.player) {
      return;
    }
    this.player.state = this.state;
  }
  /**
   * Icon attribute changed. Reload our player.
   */
  iconChanged() {
    if (!this._isConnected) {
      return;
    }
    this.destroyPlayer();
    this.createPlayer();
  }
  /**
   * Src attribute changed. Reload our player.
   */
  srcChanged() {
    if (!this._isConnected) {
      return;
    }
    this.destroyPlayer();
    this.createPlayer();
  }
  /**
   * Update current icon. We can assign here icon name handled by {@link interfaces.IconLoader | icon loader} or right away {@link interfaces.IconData | icon data}.
   */
  set icon(value) {
    if (value && isObjectLike(value)) {
      if (this._assignedIconData !== value) {
        this._assignedIconData = value;
        if (this.hasAttribute("icon")) {
          this.removeAttribute("icon");
        } else {
          this.iconChanged();
        }
      }
    } else {
      const oldIconData = this._assignedIconData;
      this._assignedIconData = void 0;
      if (value && typeof value === "string") {
        this.setAttribute("icon", value);
      } else {
        this.removeAttribute("icon");
        if (oldIconData) {
          this.iconChanged();
        }
      }
    }
  }
  /**
   * Get icon (icon name or assiged directly {@link interfaces.IconData | icon data})
   */
  get icon() {
    return this._assignedIconData || this.getAttribute("icon");
  }
  /**
   * Set src value.
   */
  set src(value) {
    if (value) {
      this.setAttribute("src", value);
    } else {
      this.removeAttribute("src");
    }
  }
  /**
   * Get src value.
   */
  get src() {
    return this.getAttribute("src");
  }
  /**
   * Set state value.
   *
   * Notice: you can check available states for loaded icon with `states` property.
   */
  set state(value) {
    if (value) {
      this.setAttribute("state", value);
    } else {
      this.removeAttribute("state");
    }
  }
  /**
   * Get state value.
   */
  get state() {
    return this.getAttribute("state");
  }
  /**
   * Set colors value. We support here string format with comma color separation: "primary:#fdd394,secondary:#03a9f4".
   *
   * Example:
   * ```html
   * <lord-icon colors="primary:#fdd394,secondary:#03a9f4" src="/icons/confetti.json"></lord-icon>
   * ```
   */
  set colors(value) {
    if (value) {
      this.setAttribute("colors", value);
    } else {
      this.removeAttribute("colors");
    }
  }
  /**
   * Get colors value.
   */
  get colors() {
    return this.getAttribute("colors");
  }
  /**
   * Set trigger value. Provide name of already defined trigger!
   */
  set trigger(value) {
    if (value) {
      this.setAttribute("trigger", value);
    } else {
      this.removeAttribute("trigger");
    }
  }
  /**
   * Get trigger value.
   */
  get trigger() {
    return this.getAttribute("trigger");
  }
  /**
   * Set loading strategy. By default {@link interfaces.IconData | icon data} are loaded instantly on {@link interfaces.IPlayer | player} initialisation.
   * It's possible to delay icon loading (with _src_ and _icon_ attribute) by changing _loading_ value to _lazy_.
   */
  set loading(value) {
    if (value) {
      this.setAttribute("loading", value);
    } else {
      this.removeAttribute("loading");
    }
  }
  /**
   * Get loading value.
   */
  get loading() {
    if (this.getAttribute("loading")) {
      const param = this.getAttribute("loading").toLowerCase();
      if (param === "lazy") {
        return "lazy";
      } else if (param === "interaction") {
        return "interaction";
      }
    }
    return null;
  }
  /**
   * Assign query selector for closest element target used for listening events.
   */
  set target(value) {
    if (value) {
      this.setAttribute("target", value);
    } else {
      this.removeAttribute("target");
    }
  }
  /**
   * Get target value.
   */
  get target() {
    return this.getAttribute("target");
  }
  /**
   * Set stroke value (in range 0-100).
   */
  set stroke(value) {
    if (isNil(value)) {
      this.removeAttribute("stroke");
    } else {
      this.setAttribute("stroke", "" + value);
    }
  }
  /**
   * Get stroke value.
   */
  get stroke() {
    if (this.hasAttribute("stroke")) {
      return parseFloat(this.getAttribute("stroke"));
    }
    return null;
  }
  /**
   * Access animation {@link interfaces.IPlayer | player}.
   */
  get player() {
    return this._player;
  }
  /**
   * Check whether the element is ready (instantiated player, trigger and loaded icon data).
   *
   * You can listen for element ready with event listener:
   * ```js
   * element.addEventListener('ready', () => {});
   * ```
   */
  get isReady() {
    return this._isReady;
  }
  /**
   * Access connected {@link interfaces.ITrigger | trigger} instance.
   */
  get triggerInstance() {
    return this._triggerInstance;
  }
  /**
   * Access animation container element.
   */
  get animationContainer() {
    return this._root.lastElementChild;
  }
  /**
   * Access loaded {@link interfaces.IconData | icon data}.
   */
  get iconData() {
    return this._assignedIconData || this._loadedIconData;
  }
};
__publicField(_Element, "_iconLoader");
__publicField(_Element, "_playerFactory");
__publicField(_Element, "_definedTriggers", /* @__PURE__ */ new Map());
var Element = _Element;

// node_modules/lord-icon-element/utils/lottie.js
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(value) {
  return "#" + componentToHex(value.r) + componentToHex(value.g) + componentToHex(value.b);
}
function hexToRgb(hex) {
  let data = parseInt(hex[0] != "#" ? hex : hex.substring(1), 16);
  return {
    r: data >> 16 & 255,
    g: data >> 8 & 255,
    b: data & 255
  };
}
function toUnitVector(n) {
  return Math.round(n / 255 * 1e3) / 1e3;
}
function fromUnitVector(n) {
  return Math.round(n * 255);
}
function hexToLottieColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  return [toUnitVector(r), toUnitVector(g), toUnitVector(b)];
}
function lottieColorToHex(value) {
  const color = {
    r: fromUnitVector(value[0]),
    g: fromUnitVector(value[1]),
    b: fromUnitVector(value[2])
  };
  return rgbToHex(color);
}
function properties(data, options = {}) {
  const result = [];
  const { lottieInstance } = options;
  if (!data || !data.layers) {
    return result;
  }
  data.layers.forEach((layer, layerIndex) => {
    if (!layer.nm || !layer.ef || !layer.nm.toLowerCase().includes("change")) {
      return;
    }
    layer.ef.forEach((field, fieldIndex) => {
      var _a, _b, _c;
      const value = (_c = (_b = (_a = field == null ? void 0 : field.ef) == null ? void 0 : _a[0]) == null ? void 0 : _b.v) == null ? void 0 : _c.k;
      if (value === void 0) {
        return;
      }
      let path;
      if (lottieInstance) {
        path = `renderer.elements.${layerIndex}.effectsManager.effectElements.${fieldIndex}.effectElements.0.p.v`;
      } else {
        path = `layers.${layerIndex}.ef.${fieldIndex}.ef.0.v.k`;
      }
      let type;
      if (field.mn === "ADBE Color Control") {
        type = "color";
      } else if (field.mn === "ADBE Slider Control") {
        type = "slider";
      } else if (field.mn === "ADBE Point Control") {
        type = "point";
      } else if (field.mn === "ADBE Checkbox Control") {
        type = "checkbox";
      }
      if (!type) {
        return;
      }
      const name = field.nm.toLowerCase();
      result.push({
        name,
        path,
        value,
        type
      });
    });
  });
  return result;
}
function resetProperties(data, properties2) {
  for (const property of properties2) {
    set(data, property.path, property.value);
  }
}
function updateProperties(data, properties2, value, { scale } = {}) {
  for (const property of properties2) {
    if (property.type === "color") {
      if (typeof value === "object" && "r" in value && "g" in value && "b" in value) {
        set(data, property.path, [toUnitVector(value.r), toUnitVector(value.g), toUnitVector(value.b)]);
      } else if (Array.isArray(value)) {
        set(data, property.path, value);
      } else if (typeof value === "string") {
        set(data, property.path, hexToLottieColor(parseColor(value)));
      }
    } else if (property.type === "point") {
      let ratio = 1;
      if (scale) {
        ratio = (property.value[0] + property.value[1]) / 2 / scale;
      }
      if (typeof value === "object" && "x" in value && "y" in value) {
        set(data, property.path + ".0", value.x * ratio);
        set(data, property.path + ".1", value.y * ratio);
      } else if (Array.isArray(value)) {
        set(data, property.path + ".0", value[0] * ratio);
        set(data, property.path + ".1", value[1] * ratio);
      }
    } else {
      let ratio = 1;
      if (scale) {
        ratio = property.value / scale;
      }
      set(data, property.path, value * ratio);
    }
  }
}

// node_modules/lord-icon-element/player.js
var PROPERTY_SCALE = 50;
var STATE_PREFIX = "state-";
var DEFAULT_LOTTIE_WEB_OPTIONS = {
  renderer: "svg",
  loop: false,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
    progressiveLoad: true,
    hideOnTransparent: true
  }
};
function createColorsProxy() {
  return new Proxy(this, {
    set: (target, property, value, receiver) => {
      if (typeof property === "string") {
        if (value) {
          updateProperties(this.lottie, this.rawProperties.filter((c) => c.type === "color" && c.name === property.toLowerCase()), value);
        } else {
          resetProperties(this.lottie, this.rawProperties.filter((c) => c.type === "color" && c.name === property.toLowerCase()));
        }
        target.refresh();
      }
      return true;
    },
    get: (target, property, receiver) => {
      for (const current of target.rawProperties) {
        if (current.type == "color" && typeof property === "string" && property.toLowerCase() == current.name) {
          const data = get(this.lottie, current.path);
          if (data) {
            return lottieColorToHex(data);
          }
        }
      }
      return void 0;
    },
    deleteProperty: (target, property) => {
      if (typeof property === "string") {
        resetProperties(this.lottie, this.rawProperties.filter((c) => c.type === "color" && c.name === property.toLowerCase()));
        target.refresh();
      }
      return true;
    },
    ownKeys: (target) => {
      return target.rawProperties.filter((c) => c.type == "color").map((c) => c.name);
    },
    has: (target, property) => {
      for (const current of target.rawProperties) {
        if (current.type == "color" && typeof property === "string" && property.toLowerCase() == current.name) {
          return true;
        }
      }
      return false;
    },
    getOwnPropertyDescriptor: (target) => {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
}
var Player = class {
  /**
   *
   * @param animationLoader Provide `loadAnimation` here from `lottie-web`.
   * @param container DOM element in which the animation will be drawn.
   * @param iconData Lottie icon data.
   * @param options Options for `lottie-web`. If not provided {@link DEFAULT_LOTTIE_WEB_OPTIONS | default} will be used.
   */
  constructor(animationLoader, container, iconData, options) {
    __publicField(this, "_animationLoader");
    __publicField(this, "_container");
    __publicField(this, "_iconData");
    __publicField(this, "_options");
    __publicField(this, "_lottie");
    __publicField(this, "_isReady", false);
    __publicField(this, "_colorsProxy");
    __publicField(this, "_direction", 1);
    __publicField(this, "_speed", 1);
    __publicField(this, "_rawProperties");
    __publicField(this, "_eventCallbacks", {});
    this._animationLoader = animationLoader;
    this._container = container;
    this._iconData = iconData;
    this._options = options || DEFAULT_LOTTIE_WEB_OPTIONS;
  }
  connect() {
    if (this._lottie) {
      throw new Error("Already connected player!");
    }
    this._lottie = this._animationLoader({
      ...this._options,
      container: this._container,
      animationData: deepClone(this._iconData)
    });
    this._lottie.addEventListener("complete", () => {
      this.triggerEvent("complete");
    });
    this._lottie.addEventListener("loopComplete", () => {
      this.triggerEvent("complete");
    });
    this._lottie.addEventListener("enterFrame", (params) => {
      this.triggerEvent("frame");
    });
    if (this._lottie.isLoaded) {
      this._container.classList.add("ready");
      this._isReady = true;
      this.triggerEvent("ready");
    } else {
      this._lottie.addEventListener("config_ready", () => {
        this._container.classList.add("ready");
        this._isReady = true;
        this.triggerEvent("ready");
      });
    }
  }
  disconnect() {
    if (!this._lottie) {
      throw new Error("Not connected player!");
    }
    this._isReady = false;
    this._lottie.destroy();
    this._lottie = void 0;
    this._colorsProxy = void 0;
    this._rawProperties = void 0;
    this._container.classList.remove("ready");
  }
  addEventListener(name, callback) {
    if (!this._eventCallbacks[name]) {
      this._eventCallbacks[name] = [];
    }
    this._eventCallbacks[name].push(callback);
    return () => {
      this.removeEventListener(name, callback);
    };
  }
  removeEventListener(eventName, callback) {
    if (!callback) {
      this._eventCallbacks[eventName] = null;
    } else if (this._eventCallbacks[eventName]) {
      let i = 0;
      let len = this._eventCallbacks[eventName].length;
      while (i < len) {
        if (this._eventCallbacks[eventName][i] === callback) {
          this._eventCallbacks[eventName].splice(i, 1);
          i -= 1;
          len -= 1;
        }
        i += 1;
      }
      if (!this._eventCallbacks[eventName].length) {
        this._eventCallbacks[eventName] = null;
      }
    }
  }
  /**
   * Trigger event.
   * @param eventName Event name.
   * @param args Args.
   */
  triggerEvent(eventName, args) {
    if (this._eventCallbacks[eventName]) {
      const callbacks = this._eventCallbacks[eventName];
      for (let i = 0; i < callbacks.length; i += 1) {
        callbacks[i](args);
      }
    }
  }
  /**
   * Refresh animation and notify about that fact.
   */
  refresh() {
    var _a;
    (_a = this._lottie) == null ? void 0 : _a.renderer.renderFrame(null);
    this.triggerEvent("refresh");
  }
  play() {
    this._lottie.play();
  }
  playFromBeginning() {
    this._lottie.goToAndPlay(0);
  }
  playSegment(from, to) {
    this._lottie.playSegments([from, to], true);
  }
  pause() {
    this._lottie.pause();
  }
  stop() {
    this._lottie.stop();
  }
  goToFrame(frame) {
    this._lottie.goToAndStop(frame, true);
  }
  goToFirstFrame() {
    this.goToFrame(0);
  }
  goToLastFrame() {
    this.goToFrame(Math.max(0, this._lottie.getDuration(true) - 1));
  }
  resetProperties(properties2 = {}) {
    if (!properties2 || typeof properties2 !== "object") {
      return;
    }
    const alreadyCustomized = this._rawProperties ? true : false;
    if (alreadyCustomized) {
      resetProperties(this._lottie, this.rawProperties.filter((c) => c.type === "color"));
    }
    if (properties2.colors && !isNil(properties2.colors)) {
      for (const [key, value] of Object.entries(properties2.colors)) {
        updateProperties(this._lottie, this.rawProperties.filter((c) => c.type === "color" && c.name === key.toLowerCase()), value);
      }
    }
    if (alreadyCustomized) {
      resetProperties(this._lottie, this.rawProperties.filter((c) => c.name.startsWith(STATE_PREFIX)));
    }
    if (!isNil(properties2.state) && properties2.state) {
      const name = `${STATE_PREFIX}${properties2.state.toLowerCase()}`;
      updateProperties(this._lottie, this.rawProperties.filter((c) => c.name.startsWith(STATE_PREFIX)), 0);
      updateProperties(this._lottie, this.rawProperties.filter((c) => c.name === name), 1);
    }
    if (!isNil(properties2.stroke)) {
      updateProperties(this._lottie, this.rawProperties.filter((c) => c.name === "stroke"), properties2.stroke, { scale: PROPERTY_SCALE });
    } else if (alreadyCustomized) {
      resetProperties(this._lottie, this.rawProperties.filter((c) => c.name === "stroke"));
    }
    this.refresh();
  }
  set colors(colors) {
    resetProperties(this._lottie, this.rawProperties.filter((c) => c.type === "color"));
    if (colors) {
      for (const [key, value] of Object.entries(colors)) {
        updateProperties(this._lottie, this.rawProperties.filter((c) => c.type === "color" && c.name === key.toLowerCase()), value);
      }
    }
    this.refresh();
  }
  get colors() {
    if (!this._colorsProxy) {
      this._colorsProxy = createColorsProxy.call(this);
    }
    return this._colorsProxy;
  }
  set stroke(stroke) {
    if (isNil(stroke)) {
      resetProperties(this._lottie, this.rawProperties.filter((c) => c.name === "stroke"));
    } else {
      updateProperties(this._lottie, this.rawProperties.filter((c) => c.name === "stroke"), stroke, { scale: PROPERTY_SCALE });
    }
    this.refresh();
  }
  get stroke() {
    const property = this.rawProperties.filter((c) => c.name === "stroke")[0];
    if (property) {
      return get(this._lottie, property.path) * (PROPERTY_SCALE / property.value);
    }
    return null;
  }
  set state(state) {
    if (isNil(state)) {
      resetProperties(this._lottie, this.rawProperties.filter((c) => c.name.startsWith(STATE_PREFIX)));
    } else {
      const name = `${STATE_PREFIX}${state.toLowerCase()}`;
      updateProperties(this._lottie, this.rawProperties.filter((c) => c.name.startsWith(STATE_PREFIX)), 0);
      updateProperties(this._lottie, this.rawProperties.filter((c) => c.name === name), 1);
    }
    this.refresh();
  }
  get state() {
    for (const property of this.rawProperties.filter((c) => c.name.startsWith(STATE_PREFIX))) {
      const value = get(this._lottie, property.path);
      if (value) {
        return property.name.substr(STATE_PREFIX.length);
      }
    }
    return null;
  }
  set speed(speed) {
    var _a;
    this._speed = speed;
    (_a = this._lottie) == null ? void 0 : _a.setSpeed(speed);
  }
  get speed() {
    return this._speed;
  }
  set direction(direction) {
    this._direction = direction;
    this._lottie.setDirection(direction);
  }
  get direction() {
    return this._direction;
  }
  set loop(loop) {
    this._lottie.loop = loop;
  }
  get loop() {
    return this._lottie.loop ? true : false;
  }
  set frame(frame) {
    this.goToFrame(Math.max(0, Math.min(this.frames, frame)));
  }
  get frame() {
    return this._lottie.currentFrame;
  }
  get states() {
    return this.rawProperties.filter((c) => c.name.startsWith(STATE_PREFIX)).map((c) => {
      return c.name.substr(STATE_PREFIX.length);
    });
  }
  get isPlaying() {
    return !this._lottie.isPaused;
  }
  get isReady() {
    return this._isReady;
  }
  get frames() {
    return this._lottie.getDuration(true) - 1;
  }
  get duration() {
    return this._lottie.getDuration(false);
  }
  /**
   * Access to internal lottie player instance.
   */
  get lottie() {
    return this._lottie;
  }
  /**
   * Supported customizable properties by loaded icon.
   */
  get rawProperties() {
    if (!this._rawProperties && this._iconData) {
      this._rawProperties = properties(this._iconData, { lottieInstance: true });
    }
    return this._rawProperties || [];
  }
};

// node_modules/lord-icon-element/triggers/boomerang.js
var Boomerang = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
    this.onHover = this.onHover.bind(this);
  }
  onConnected() {
    this.targetElement.addEventListener("mouseenter", this.onHover);
  }
  onDisconnected() {
    this.targetElement.removeEventListener("mouseenter", this.onHover);
    this.player.direction = 1;
  }
  onComplete() {
    this.player.direction = -1;
    this.player.play();
  }
  onHover() {
    this.player.direction = 1;
    this.player.play();
  }
};

// node_modules/lord-icon-element/triggers/click.js
var CLICK_EVENTS = [
  { name: "mousedown" },
  { name: "touchstart", options: { passive: true } }
];
var Click = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
    this.onClick = this.onClick.bind(this);
  }
  onConnected() {
    for (const event of CLICK_EVENTS) {
      this.targetElement.addEventListener(event.name, this.onClick, event.options);
    }
  }
  onDisconnected() {
    for (const event of CLICK_EVENTS) {
      this.targetElement.removeEventListener(event.name, this.onClick);
    }
  }
  onClick() {
    if (this.player.isPlaying) {
      return;
    }
    this.player.playFromBeginning();
  }
};

// node_modules/lord-icon-element/triggers/hover.js
var Hover = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
    this.onHover = this.onHover.bind(this);
  }
  onConnected() {
    this.targetElement.addEventListener("mouseenter", this.onHover);
  }
  onDisconnected() {
    this.targetElement.removeEventListener("mouseenter", this.onHover);
  }
  onHover() {
    if (this.player.isPlaying) {
      return;
    }
    this.player.playFromBeginning();
  }
};

// node_modules/lord-icon-element/triggers/loop-on-hover.js
var LoopOnHover = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    __publicField(this, "playTimeout", null);
    __publicField(this, "mouseIn", false);
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onConnected() {
    this.targetElement.addEventListener("mouseenter", this.onMouseEnter);
    this.targetElement.addEventListener("mouseleave", this.onMouseLeave);
  }
  onDisconnected() {
    this.targetElement.removeEventListener("mouseenter", this.onMouseEnter);
    this.targetElement.removeEventListener("mouseleave", this.onMouseLeave);
    this.resetPlayDelayTimer();
  }
  onMouseEnter() {
    this.mouseIn = true;
    if (!this.player.isPlaying) {
      this.play();
    }
  }
  onMouseLeave() {
    this.mouseIn = false;
    this.resetPlayDelayTimer();
  }
  onComplete() {
    this.play();
  }
  play() {
    this.resetPlayDelayTimer();
    if (!this.mouseIn) {
      return;
    }
    if (this.delay > 0) {
      this.playTimeout = setTimeout(() => {
        this.player.playFromBeginning();
      }, this.delay);
    } else {
      this.player.playFromBeginning();
    }
  }
  resetPlayDelayTimer() {
    if (!this.playTimeout) {
      return;
    }
    clearTimeout(this.playTimeout);
    this.playTimeout = null;
  }
  get delay() {
    const value = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(value, 0);
  }
};

// node_modules/lord-icon-element/triggers/loop.js
var Loop = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    __publicField(this, "playTimeout", null);
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
  }
  onReady() {
    this.play();
  }
  onComplete() {
    this.play();
  }
  onDisconnected() {
    this.resetPlayDelayTimer();
  }
  play() {
    this.resetPlayDelayTimer();
    if (this.delay > 0) {
      this.playTimeout = setTimeout(() => {
        this.player.playFromBeginning();
      }, this.delay);
    } else {
      this.player.playFromBeginning();
    }
  }
  resetPlayDelayTimer() {
    if (!this.playTimeout) {
      return;
    }
    clearTimeout(this.playTimeout);
    this.playTimeout = null;
  }
  get delay() {
    const value = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(value, 0);
  }
};

// node_modules/lord-icon-element/triggers/morph.js
var Morph = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onConnected() {
    this.targetElement.addEventListener("mouseenter", this.onMouseEnter);
    this.targetElement.addEventListener("mouseleave", this.onMouseLeave);
  }
  onDisconnected() {
    this.targetElement.removeEventListener("mouseenter", this.onMouseEnter);
    this.targetElement.removeEventListener("mouseleave", this.onMouseLeave);
    this.player.direction = 1;
  }
  onMouseEnter() {
    this.player.direction = 1;
    this.player.play();
  }
  onMouseLeave() {
    this.player.direction = -1;
    this.player.play();
  }
};

// node_modules/lord-icon-element/triggers/sequence.js
var NUMBER_REGEX = /^\d*(\.\d+)?$/;
var MUTATION_OBSERVER_CONFIG = { attributes: true, childList: false, subtree: false };
var Sequence = class {
  constructor(element, targetElement, player) {
    __publicField(this, "element");
    __publicField(this, "targetElement");
    __publicField(this, "player");
    __publicField(this, "sequenceIndex", 0);
    __publicField(this, "frameState", null);
    __publicField(this, "frameDelayFirst", null);
    __publicField(this, "frameDelayLast", null);
    __publicField(this, "timer");
    __publicField(this, "observer");
    this.element = element;
    this.targetElement = targetElement;
    this.player = player;
    this.observer = new MutationObserver((mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes" && mutation.attributeName === "sequence") {
          this.reset();
          this.step();
        }
      }
    });
  }
  onReady() {
    this.step();
  }
  onComplete() {
    this.timer = setTimeout(() => {
      this.timer = null;
      this.frameDelayLast = null;
      this.step();
    }, this.frameDelayLast || 0);
  }
  onConnected() {
    this.observer.observe(this.element, MUTATION_OBSERVER_CONFIG);
  }
  onDisconnected() {
    this.observer.disconnect();
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
  reset() {
    this.player.pause();
    this.sequenceIndex = 0;
    this.frameState = this.frameDelayFirst = this.frameDelayLast = null;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
  takeStep() {
    const steps = this.sequence.split(",");
    const step = steps[this.sequenceIndex];
    this.sequenceIndex++;
    if (this.sequenceIndex >= steps.length) {
      this.sequenceIndex = 0;
    }
    const [action, ...params] = step.split(":");
    return { action, params };
  }
  handleStep(action, params) {
    if (action === "play") {
      if (this.frameState) {
        this.player.state = this.frameState;
        this.frameState = null;
      }
      const hasReverse = params.includes("reverse");
      if (hasReverse) {
        this.player.goToLastFrame();
        this.player.direction = -1;
      } else {
        this.player.goToFirstFrame();
        this.player.direction = 1;
      }
      this.timer = setTimeout(() => {
        this.timer = null;
        this.frameDelayFirst = null;
        this.player.play();
      }, this.frameDelayFirst || 0);
    } else if (action === "frame") {
      let frameIndex = 0;
      if (params.length && params[0].match(NUMBER_REGEX)) {
        frameIndex = Math.max(0, Math.min(this.player.frames, +params[0]));
      }
      this.player.frame = frameIndex;
      this.timer = setTimeout(() => {
        this.timer = null;
        this.frameDelayFirst = null;
        this.step();
      }, this.frameDelayFirst || 0);
    } else if (action === "state") {
      this.frameState = params[0];
      this.step();
    } else if (action === "delay") {
      let value = null;
      for (const param of params) {
        if (param && param.match(NUMBER_REGEX)) {
          value = +param;
        }
      }
      if (value && value > 0) {
        if (params.includes("first") && params.includes("last")) {
          this.frameDelayFirst = value;
          this.frameDelayLast = value;
        } else if (params.includes("first")) {
          this.frameDelayFirst = value;
        } else if (params.includes("last")) {
          this.frameDelayLast = value;
        } else {
          this.frameDelayFirst = value;
        }
      }
      this.step();
    } else if (action === "idle") {
    } else {
      throw new Error(`Invalid sequence action: ${action}`);
    }
  }
  step() {
    const { action, params } = this.takeStep();
    if (!action) {
      return;
    }
    this.handleStep(action, params);
  }
  get sequence() {
    return this.element.getAttribute("sequence") || "";
  }
};

// node_modules/lord-icon-element/index.js
function defineElement(animationLoader) {
  Element.setPlayerFactory((container, iconData) => {
    return new Player(animationLoader, container, iconData);
  });
  Element.defineTrigger("click", Click);
  Element.defineTrigger("hover", Hover);
  Element.defineTrigger("loop", Loop);
  Element.defineTrigger("loop-on-hover", LoopOnHover);
  Element.defineTrigger("morph", Morph);
  Element.defineTrigger("boomerang", Boomerang);
  Element.defineTrigger("sequence", Sequence);
  if (!customElements.get || !customElements.get("lord-icon")) {
    customElements.define("lord-icon", Element);
  }
}
export {
  defineElement
};
//# sourceMappingURL=lord-icon-element.js.map
