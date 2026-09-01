/* @ds-bundle: {"format":4,"namespace":"MeliusDesignSystem_9f56c0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CanvasNode","sourcePath":"components/product/CanvasNode.jsx"},{"name":"PromptBar","sourcePath":"components/product/PromptBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bf904de86c0e","components/core/Button.jsx":"3c1330f7c308","components/core/Card.jsx":"295796fce494","components/core/Chip.jsx":"0575e90a6a14","components/navigation/AnnouncementBar.jsx":"0594ea5f6aad","components/navigation/NavBar.jsx":"28b26fc4d98d","components/navigation/Tabs.jsx":"38f4d5e2282c","components/product/CanvasNode.jsx":"314810eea148","components/product/PromptBar.jsx":"e45534bd598c","ui_kits/website/CanvasShowcase.jsx":"2bf1dd3d5a21","ui_kits/website/Hero.jsx":"bbe2027f204e","ui_kits/website/PersonaShowcase.jsx":"71de9afd89ac","ui_kits/website/app.jsx":"b97878eb7824","ui_kits/website/data.jsx":"5780eb2504e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MeliusDesignSystem_9f56c0 = window.MeliusDesignSystem_9f56c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — the orange type-pill that sits on canvas node cards ("Image" /
 * "Video"), plus small status flags. Slightly smaller and blockier than Chip,
 * with an optional leading dot.
 */
function Badge({
  children,
  tone = "orange",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    orange: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    yellow: {
      background: "var(--color-secondary)",
      color: "var(--color-on-secondary)"
    },
    dark: {
      background: "var(--color-dark-surface)",
      color: "var(--color-on-dark)"
    },
    neutral: {
      background: "var(--mel-mist)",
      color: "var(--color-text)"
    }
  };
  const t = tones[tone] || tones.orange;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      letterSpacing: "0.01em",
      padding: "5px 9px",
      borderRadius: "var(--radius-sm)",
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "999px",
      background: "currentColor",
      opacity: 0.9
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Melius Button — the site's core action. Orange primary CTA, butter-yellow
 * secondary ("Sign In"), plus ghost and dark fills. Rounded 6px, weight 400.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  iconGlyph = "arrow",
  href,
  disabled = false,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "6px 14px",
      font: "var(--text-xs)",
      gap: "6px"
    },
    md: {
      padding: "10px 18px",
      font: "var(--text-sm)",
      gap: "8px"
    },
    lg: {
      padding: "14px 24px",
      font: "var(--text-body)",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--color-secondary)",
      color: "var(--color-on-secondary)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--color-dark-surface)",
      color: "var(--color-on-dark)",
      border: "1px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)"
    },
    plain: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid transparent"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    fontWeight: "var(--weight-regular)",
    lineHeight: 1,
    letterSpacing: "0",
    padding: s.padding,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)",
    ...v,
    ...style
  };
  const glyphs = {
    arrow: /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    plus: /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }))
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, icon && (glyphs[iconGlyph] || glyphs.arrow));
  const hoverHandlers = disabled ? {} : {
    onMouseEnter: e => {
      if (variant === "primary") e.currentTarget.style.background = "var(--color-primary-hover)";else if (variant === "secondary") e.currentTarget.style.background = "var(--color-secondary-hover)";else if (variant === "dark") e.currentTarget.style.filter = "brightness(1.35)";else e.currentTarget.style.background = "var(--color-surface-raised)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.filter = "none";
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.98)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)"
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, hoverHandlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, hoverHandlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — rounded, softly warm-shadowed surface. `media` variant is an
 * edge-to-edge image tile with an optional pinned yellow label tag (the
 * floating "polaroid" cards from the site). `surface` variant is padded content.
 */
function Card({
  children,
  variant = "surface",
  label,
  labelColor = "yellow",
  media,
  elevation = "card",
  radius = "xl",
  interactive = false,
  style,
  ...rest
}) {
  const radii = {
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  };
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    card: "var(--shadow-card)",
    float: "var(--shadow-float)",
    lg: "var(--shadow-lg)"
  };
  const labelBg = labelColor === "orange" ? "var(--color-primary)" : "var(--color-secondary)";
  const labelFg = labelColor === "orange" ? "var(--color-on-primary)" : "var(--color-on-secondary)";
  const base = {
    position: "relative",
    background: "var(--color-surface)",
    borderRadius: radii[radius] || radii.xl,
    boxShadow: shadows[elevation] || shadows.card,
    overflow: "hidden",
    fontFamily: "var(--font-sans)",
    color: "var(--color-text)",
    transition: "box-shadow var(--dur-normal) var(--ease-out), transform var(--dur-normal) var(--ease-out)",
    ...style
  };
  if (variant === "surface") base.padding = "var(--space-6)";
  const tag = label ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "12px",
      right: "12px",
      zIndex: 2,
      background: labelBg,
      color: labelFg,
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      padding: "4px 12px",
      borderRadius: "var(--radius-md)",
      letterSpacing: "0"
    }
  }, label) : null;
  const hover = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-float)";
      e.currentTarget.style.transform = "translateY(-3px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = shadows[elevation] || shadows.card;
      e.currentTarget.style.transform = "translateY(0)";
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, hover, rest), tag, variant === "media" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "block",
      width: "100%",
      height: "100%"
    }
  }, media || children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — the small rounded label tag used across Melius: yellow "polaroid"
 * tags, node role labels, and neutral metadata pills.
 */
function Chip({
  children,
  tone = "yellow",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    yellow: {
      background: "var(--color-secondary)",
      color: "var(--color-on-secondary)"
    },
    orange: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    dark: {
      background: "var(--color-dark-surface)",
      color: "var(--color-on-dark)"
    },
    neutral: {
      background: "var(--mel-mist)",
      color: "var(--color-text)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-text)",
      boxShadow: "inset 0 0 0 1px var(--color-hairline)"
    }
  };
  const sizes = {
    sm: {
      padding: "3px 9px",
      font: "var(--text-caption)"
    },
    md: {
      padding: "4px 12px",
      font: "var(--text-xs)"
    }
  };
  const t = tones[tone] || tones.yellow;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--weight-medium)",
      lineHeight: 1.2,
      padding: s.padding,
      borderRadius: "var(--radius-md)",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AnnouncementBar — the slim near-black banner across the top of the site
 * ("Seedance 2.5 is live on Melius  Try it now →"). Centered message with an
 * optional orange inline link.
 */
function AnnouncementBar({
  children,
  linkLabel,
  href = "#",
  onLinkClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      width: "100%",
      background: "var(--color-text)",
      color: "var(--color-on-dark)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-regular)",
      padding: "10px 16px",
      textAlign: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onLinkClick,
    style: {
      color: "var(--color-primary)",
      textDecoration: "none",
      fontWeight: "var(--weight-medium)",
      whiteSpace: "nowrap"
    },
    onMouseEnter: e => e.currentTarget.style.textDecoration = "underline",
    onMouseLeave: e => e.currentTarget.style.textDecoration = "none"
  }, linkLabel, " \u2192"));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — the floating black pill navigation. Brand lockup (placeholder mark +
 * "Melius" wordmark) with a hamburger, sitting top-left over the canvas.
 * Right-side actions (Sign In / Start for Free) are passed as `actions`.
 */
function NavBar({
  brand = "Melius",
  onMenu,
  menuOpen = false,
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "16px",
      background: "var(--color-dark-surface)",
      color: "var(--color-on-dark)",
      padding: "12px 16px",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-float)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "22px",
      height: "22px",
      borderRadius: "6px",
      background: "var(--color-on-dark)",
      color: "var(--color-dark-surface)",
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1
    }
  }, "M"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.01em"
    }
  }, brand)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    "aria-expanded": menuOpen,
    onClick: onMenu,
    style: {
      appearance: "none",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--color-on-dark)",
      padding: "4px",
      marginLeft: "8px",
      display: "inline-flex"
    }
  }, menuOpen ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "7",
    x2: "21",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "17",
    x2: "21",
    y2: "17"
  })))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px"
    }
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — the centered pill segmented control used for use-case and persona
 * switching (Advertising / E-commerce / … · Agencies / CD/Filmmakers / …).
 * Active item is a filled orange pill; inactive items are muted text.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = "orange",
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const active = value !== undefined ? value : internal;
  const norm = items.map(it => typeof it === "string" ? {
    value: it,
    label: it
  } : it);
  const activeBg = tone === "dark" ? "var(--color-dark-surface)" : "var(--color-primary)";
  const activeFg = tone === "dark" ? "var(--color-on-dark)" : "var(--color-on-primary)";
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2px",
      padding: "5px",
      background: "var(--color-surface)",
      border: "var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-md)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), norm.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.value),
      style: {
        appearance: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-regular)",
        padding: "8px 18px",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)",
        background: on ? activeBg : "transparent",
        color: on ? activeFg : "var(--color-text-secondary)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--color-text)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--color-text-secondary)";
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/product/CanvasNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CanvasNode — a node on the Melius creative canvas. A role label + model name
 * row sits above a dark media frame carrying an orange "Image"/"Video" type
 * pill (top-left). Optional connection ports (small orange dots) on the sides.
 */
function CanvasNode({
  role = "Studio Shot",
  model = "Nano Banana Pro",
  type = "Image",
  media,
  width = 260,
  ports = [],
  // e.g. ["left","right"]
  selected = false,
  style,
  ...rest
}) {
  const typeTone = type ? {
    background: "var(--color-primary)",
    color: "var(--color-on-primary)"
  } : {};
  const port = side => /*#__PURE__*/React.createElement("span", {
    key: side,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      [side]: "-5px",
      transform: "translateY(-50%)",
      width: "10px",
      height: "10px",
      borderRadius: "999px",
      background: "var(--color-canvas-edge)",
      boxShadow: "0 0 0 3px var(--color-canvas-bg)"
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      width: `${width}px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "12px",
      padding: "0 2px 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-on-dark)",
      fontWeight: "var(--weight-medium)"
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--color-on-dark-muted)"
    }
  }, model)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--color-canvas-node)",
      border: `1px solid ${selected ? "var(--color-canvas-edge)" : "var(--color-canvas-line)"}`,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-node)",
      aspectRatio: "1 / 1"
    }
  }, type && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "10px",
      left: "10px",
      zIndex: 2,
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-medium)",
      padding: "5px 9px",
      borderRadius: "var(--radius-sm)",
      ...typeTone
    }
  }, type), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, media), ports.map(port)));
}
Object.assign(__ds_scope, { CanvasNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/CanvasNode.jsx", error: String((e && e.message) || e) }); }

// components/product/PromptBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PromptBar — the dark rounded composer where you brief the agent "Mel".
 * Placeholder mark on the left, prompt text, circular send button on the right.
 * On light grounds use theme="dark" (default); a "light" theme also exists.
 */
function PromptBar({
  value,
  placeholder = "Describe what you want to create…",
  onChange,
  onSend,
  theme = "dark",
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const dark = theme === "dark";
  const sizes = {
    md: {
      pad: "12px 12px 12px 18px",
      font: "var(--text-body)",
      btn: 36
    },
    lg: {
      pad: "16px 16px 16px 22px",
      font: "var(--text-body-lg)",
      btn: 44
    }
  };
  const s = sizes[size] || sizes.md;
  const sendReady = !!(value && value.trim());
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      background: dark ? "var(--color-dark-surface)" : "var(--color-surface)",
      color: dark ? "var(--color-on-dark)" : "var(--color-text)",
      border: dark ? "1px solid transparent" : "var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      boxShadow: dark ? "var(--shadow-float)" : "var(--shadow-md)",
      padding: s.pad,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: "26px",
      height: "18px",
      borderRadius: "999px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "16",
    viewBox: "0 0 26 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3 C2 1 4 1 6 4 L10 9 C12 12 14 12 16 9 L20 4 C22 1 24 1 24 3 L24 13 C24 15 22 15 20 12 L16 7 C14 4 12 4 10 7 L6 12 C4 15 2 15 2 13 Z",
    fill: dark ? "var(--color-on-dark)" : "var(--color-text)",
    opacity: "0.9"
  }))), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    disabled: disabled,
    onKeyDown: e => {
      if (e.key === "Enter" && sendReady && onSend) onSend(value);
    },
    style: {
      flex: 1,
      minWidth: 0,
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "inherit",
      fontFamily: "inherit",
      fontSize: s.font,
      fontWeight: "var(--weight-regular)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Send",
    onClick: () => sendReady && onSend && onSend(value),
    disabled: disabled || !sendReady,
    style: {
      flex: "0 0 auto",
      width: `${s.btn}px`,
      height: `${s.btn}px`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "999px",
      border: "none",
      cursor: sendReady ? "pointer" : "default",
      background: sendReady ? "var(--color-primary)" : dark ? "rgba(255,255,255,0.14)" : "var(--mel-mist)",
      color: sendReady ? "var(--color-on-primary)" : dark ? "var(--color-on-dark-muted)" : "var(--color-text-secondary)",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))));
}
Object.assign(__ds_scope, { PromptBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PromptBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CanvasShowcase.jsx
try { (() => {
/* CanvasShowcase — use-case tabs drive a dark node graph with orange edges. */
const {
  Tabs,
  CanvasNode,
  Chip
} = window.MeliusDesignSystem_9f56c0;
const CV_W = 940,
  CV_H = 460,
  HEADER = 28;
function nodePorts(nd) {
  const frame = nd.w; // square frame
  const cy = nd.y + HEADER + frame / 2;
  return {
    left: {
      x: nd.x,
      y: cy
    },
    right: {
      x: nd.x + nd.w,
      y: cy
    }
  };
}
function edgePath(a, b) {
  const p1 = nodePorts(a).right,
    p2 = nodePorts(b).left;
  const dx = Math.max(40, (p2.x - p1.x) / 2);
  return `M ${p1.x} ${p1.y} C ${p1.x + dx} ${p1.y}, ${p2.x - dx} ${p2.y}, ${p2.x} ${p2.y}`;
}
function tileMedia(nd) {
  if (nd.mark) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        background: `linear-gradient(150deg, ${nd.tile[0]}, ${nd.tile[1]})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: nd.w * 0.42,
        color: nd.invert ? "var(--mel-canvas)" : "var(--mel-ink)"
      }
    }, "M"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: `linear-gradient(150deg, ${nd.tile[0]}, ${nd.tile[1]})`
    }
  });
}
function CanvasShowcase() {
  const cases = window.USE_CASES;
  const keys = Object.keys(cases);
  const [active, setActive] = React.useState(keys[0]);
  const cfg = cases[active];
  const byId = Object.fromEntries(cfg.nodes.map(n => [n.id, n]));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 24px 96px",
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: keys,
    value: active,
    onChange: setActive
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--color-canvas-bg)",
      backgroundImage: "var(--dotgrid-dark)",
      backgroundSize: "var(--dotgrid-size)",
      borderRadius: "var(--radius-2xl)",
      padding: 24,
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: CV_W,
      height: CV_H,
      margin: "0 auto",
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: CV_W,
    height: CV_H,
    style: {
      position: "absolute",
      inset: 0,
      overflow: "visible",
      pointerEvents: "none"
    }
  }, cfg.edges.map(([f, t], i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: edgePath(byId[f], byId[t]),
    fill: "none",
    stroke: "var(--color-canvas-edge)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), cfg.nodes.map(nd => {
    const ports = [];
    if (cfg.edges.some(([f]) => f === nd.id)) ports.push("right");
    if (cfg.edges.some(([, t]) => t === nd.id)) ports.push("left");
    return /*#__PURE__*/React.createElement("div", {
      key: nd.id,
      style: {
        position: "absolute",
        left: nd.x,
        top: nd.y
      }
    }, /*#__PURE__*/React.createElement(CanvasNode, {
      role: nd.role,
      model: nd.model,
      type: nd.type,
      width: nd.w,
      ports: ports,
      media: tileMedia(nd)
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      bottom: 40,
      maxWidth: 380,
      background: "var(--color-dark-surface)",
      color: "var(--color-on-dark)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-float)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "orange",
    size: "sm",
    style: {
      marginBottom: 10
    }
  }, active), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.4,
      color: "var(--color-on-dark)"
    }
  }, cfg.prompt), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: 34,
      height: 34,
      borderRadius: 999,
      background: "var(--color-primary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mel-canvas)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })))))));
}
Object.assign(window, {
  CanvasShowcase
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CanvasShowcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — serif headline over a fanning media array + the "brief Mel" composer. */
const {
  PromptBar
} = window.MeliusDesignSystem_9f56c0;
const HERO_PROMPTS = ["Storyboard a 30-second trailer for a sci-fi short film…", "Design a product launch campaign for a new sneaker drop…", "Turn this pack shot into a lifestyle hero for the PDP…", "Generate 12 on-brand ad variants for the spring sale…"];
function useTypewriter(phrases, speed = 42, pause = 1600) {
  const [text, setText] = React.useState("");
  const [i, setI] = React.useState(0);
  const [del, setDel] = React.useState(false);
  React.useEffect(() => {
    const full = phrases[i % phrases.length];
    let t;
    if (!del && text === full) t = setTimeout(() => setDel(true), pause);else if (del && text === "") {
      setDel(false);
      setI(v => v + 1);
    } else {
      t = setTimeout(() => {
        setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }, del ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [text, del, i, phrases, speed, pause]);
  return text;
}
function HeroTile({
  tile,
  i,
  n
}) {
  const mid = (n - 1) / 2;
  const d = (i - mid) / mid; // -1 … 1
  const rot = d * 26;
  const lift = Math.abs(d) * 90;
  const scale = 0.82 + Math.abs(d) * 0.5;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: 150,
      height: 210,
      margin: "0 -6px",
      borderRadius: 14,
      overflow: "hidden",
      background: `linear-gradient(150deg, ${tile[0]}, ${tile[1]})`,
      transform: `translateY(${lift}px) rotateY(${-rot}deg) scale(${scale})`,
      transformOrigin: "center",
      boxShadow: "0 20px 50px -20px rgba(14,14,14,0.45)",
      opacity: 0.96
    }
  });
}
function Hero() {
  const typed = useTypewriter(HERO_PROMPTS);
  const tiles = window.HERO_TILES;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "96px 24px 120px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 210,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      perspective: 1400,
      pointerEvents: "none"
    }
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement(HeroTile, {
    key: i,
    tile: t,
    i: i,
    n: tiles.length
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "-0.02em",
      fontSize: "clamp(40px, 6vw, 64px)",
      lineHeight: 1.02,
      margin: 0,
      color: "var(--color-text)"
    }
  }, "One platform.", /*#__PURE__*/React.createElement("br", null), "Every creative outcome.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 620,
      margin: "300px auto 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--color-text)",
      margin: "0 0 28px"
    }
  }, "Be the creative director. Let agents be your team. Brief our agent Mel, watch the work assemble, and steer any prompt until the output lands exactly as you imagined."), /*#__PURE__*/React.createElement(PromptBar, {
    value: typed,
    onChange: () => {},
    onSend: () => {},
    size: "lg",
    placeholder: "Brief Mel\u2026"
  })));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PersonaShowcase.jsx
try { (() => {
/* PersonaShowcase — persona tabs, a central "magazine" card, floating polaroids. */
const {
  Tabs: PTabs,
  Card: PCard
} = window.MeliusDesignSystem_9f56c0;
function MagazineCard({
  persona
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      background: "var(--color-surface)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-float)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      fontSize: 11,
      letterSpacing: "0.24em",
      color: "var(--color-text-secondary)",
      fontWeight: 500
    }
  }, "MELIUS"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 340,
      margin: "18px 18px 0 40px",
      borderRadius: "var(--radius-lg)",
      background: `linear-gradient(155deg, ${persona.cover[0]}, ${persona.cover[1]})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 28px 30px 40px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "-0.02em",
      fontSize: 34,
      lineHeight: 1.04,
      margin: "0 0 12px",
      color: "var(--color-text)"
    }
  }, persona.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--color-text-secondary)"
    }
  }, persona.body)));
}
const POLAROID_POS = [{
  top: 20,
  left: 40,
  w: 190,
  rot: -3
}, {
  top: 380,
  left: 10,
  w: 210,
  rot: 2
}, {
  top: 0,
  right: 30,
  w: 180,
  rot: 3
}, {
  top: 360,
  right: 20,
  w: 220,
  rot: -2
}];
function PersonaShowcase() {
  const personas = window.PERSONAS;
  const keys = Object.keys(personas);
  const [active, setActive] = React.useState(keys[0]);
  const p = personas[active];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "60px 24px 90px",
      background: "var(--color-bg)",
      backgroundImage: "var(--dotgrid-light)",
      backgroundSize: "var(--dotgrid-size)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1080,
      height: 620,
      margin: "0 auto"
    }
  }, p.labels.map((l, i) => {
    const pos = POLAROID_POS[i % POLAROID_POS.length];
    return /*#__PURE__*/React.createElement("div", {
      key: l.name,
      style: {
        position: "absolute",
        top: pos.top,
        left: pos.left,
        right: pos.right,
        width: pos.w,
        transform: `rotate(${pos.rot}deg)`,
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement(PCard, {
      variant: "media",
      label: l.name,
      elevation: "float",
      media: /*#__PURE__*/React.createElement("div", {
        style: {
          aspectRatio: "4/3",
          background: `linear-gradient(150deg, ${l.tile[0]}, ${l.tile[1]})`
        }
      })
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 20,
      transform: "translateX(-50%)",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(MagazineCard, {
    persona: p
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(PTabs, {
    items: keys,
    value: active,
    onChange: setActive
  })));
}
Object.assign(window, {
  PersonaShowcase
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PersonaShowcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Website UI kit — assembles the Melius marketing page. */
const {
  AnnouncementBar,
  NavBar,
  Button
} = window.MeliusDesignSystem_9f56c0;
function Footer() {
  const cols = [["Product", ["Canvas", "Agents", "Models", "Pricing"]], ["Use cases", ["Advertising", "E-commerce", "Filmmaking", "Fashion"]], ["Company", ["About", "Careers", "Blog", "Contact"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-text)",
      color: "var(--color-on-dark)",
      padding: "64px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: 48,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 30,
      letterSpacing: "-0.02em"
    }
  }, "Melius"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--color-on-dark-muted)"
    }
  }, "One platform. Every creative outcome.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--color-on-dark-muted)",
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-on-dark)",
      textDecoration: "none",
      fontSize: 14
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--color-primary)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--color-on-dark)"
  }, it)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "48px auto 0",
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 13,
      color: "var(--color-on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Melius. Recreation for design-system use."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
function App() {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg)",
      backgroundImage: "var(--dotgrid-light)",
      backgroundSize: "var(--dotgrid-size)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(AnnouncementBar, {
    linkLabel: "Try it now"
  }, "Seedance 2.5 is live on Melius"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "16px 24px",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: "0 auto",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    menuOpen: menu,
    onMenu: () => setMenu(!menu),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Sign In"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Start for Free"))
  }))), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.CanvasShowcase, null), /*#__PURE__*/React.createElement(window.PersonaShowcase, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
/* Website UI kit — content model (use-case node graphs + personas).
   Media are on-brand gradient placeholder tiles; supply real imagery to replace. */

const HERO_TILES = [["#c2452a", "#7a1f12"], ["#2f5fa0", "#8a2a2a"], ["#4b8a3f", "#123018"], ["#e0b64a", "#8a5a1f"], ["#d94f8a", "#3a1030"], ["#5a4bd6", "#20124a"], ["#c96a4a", "#2a1f1a"], ["#e0762a", "#7a3410"], ["#3a6ea5", "#101820"], ["#6a8f3f", "#243010"]];

// Node graphs per use-case tab. Positions are on a 940×420 dark canvas.
const USE_CASES = {
  Advertising: {
    prompt: "Create a Melius Mints campaign from product packaging and a studio-shot reference",
    nodes: [{
      id: "a",
      role: "Product Ref",
      model: "GPT Image 2",
      type: "Image",
      x: 20,
      y: 150,
      w: 150,
      tile: ["#d94fd6", "#4b7bd6"]
    }, {
      id: "b",
      role: "Studio Shot",
      model: "Nano Banana Pro",
      type: "Image",
      x: 300,
      y: 30,
      w: 210,
      tile: ["#e05fa0", "#5a2a6a"]
    }, {
      id: "c",
      role: "Lifestyle Moment",
      model: "Seedance 2.0",
      type: "Video",
      x: 620,
      y: 150,
      w: 260,
      tile: ["#c94bd6", "#2a1050"]
    }],
    edges: [["a", "b"], ["a", "c"]]
  },
  "E-commerce": {
    prompt: "Create a PDP-ready product image from product, home environment, prop, and natural light",
    nodes: [{
      id: "a",
      role: "Pack Shot",
      model: "GPT Image 2",
      type: "Image",
      x: 20,
      y: 130,
      w: 170,
      tile: ["#b98a4a", "#5a3a1f"]
    }, {
      id: "b",
      role: "On-Model",
      model: "Nano Banana Pro",
      type: "Image",
      x: 340,
      y: 40,
      w: 210,
      tile: ["#8a6a4a", "#2a1f14"]
    }, {
      id: "c",
      role: "PDP Variant",
      model: "Seedance 2.0",
      type: "Video",
      x: 660,
      y: 160,
      w: 240,
      tile: ["#c98a5a", "#3a2010"]
    }],
    edges: [["a", "b"], ["b", "c"]]
  },
  Filmmaking: {
    prompt: "Create a cinematic trailer frame from character, environment, camera, lens, lighting",
    nodes: [{
      id: "a",
      role: "Character",
      model: "Nano Banana 2",
      type: "Image",
      x: 20,
      y: 140,
      w: 150,
      tile: ["#3a3f4a", "#0e0e12"]
    }, {
      id: "b",
      role: "Movie Cut 1",
      model: "Seedance 2.0",
      type: "Video",
      x: 290,
      y: 70,
      w: 280,
      tile: ["#a83a2a", "#101018"]
    }, {
      id: "c",
      role: "Movie Cut 2",
      model: "Kling 3.0 Omni",
      type: "Video",
      x: 680,
      y: 170,
      w: 220,
      tile: ["#b0402a", "#14161e"]
    }],
    edges: [["a", "b"], ["b", "c"]]
  },
  Fashion: {
    prompt: "Turn a fabric swatch and croquis into a technical flat and campaign-ready garment",
    nodes: [{
      id: "a",
      role: "Croquis",
      model: "Ideogram 4",
      type: "Image",
      x: 20,
      y: 30,
      w: 150,
      tile: ["#e8e6e0", "#cfc9bf"]
    }, {
      id: "b",
      role: "Fabric Swatch",
      model: "GPT Image 2",
      type: "Image",
      x: 20,
      y: 240,
      w: 150,
      tile: ["#e0b0b8", "#a86a72"]
    }, {
      id: "c",
      role: "Garment Mockup",
      model: "Nano Banana Pro",
      type: "Image",
      x: 320,
      y: 110,
      w: 220,
      tile: ["#d8c0c4", "#8a6a70"]
    }, {
      id: "d",
      role: "Campaign Garment",
      model: "Seedance 2.0",
      type: "Video",
      x: 650,
      y: 130,
      w: 240,
      tile: ["#4b7a4a", "#16281a"]
    }],
    edges: [["a", "c"], ["b", "c"], ["c", "d"]]
  },
  Branding: {
    prompt: "Turn icon variations into a selected mark, website mockup, and out-of-home billboard",
    nodes: [{
      id: "a",
      role: "Icon 01",
      model: "Ideogram 4",
      type: "Image",
      x: 20,
      y: 30,
      w: 130,
      tile: ["#e8e8e8", "#c8c8c8"],
      mark: true
    }, {
      id: "b",
      role: "Icon 02",
      model: "Ideogram 4",
      type: "Image",
      x: 20,
      y: 230,
      w: 130,
      tile: ["#e8e8e8", "#c8c8c8"],
      mark: true
    }, {
      id: "c",
      role: "Selected Mark",
      model: "Ideogram 4",
      type: "Image",
      x: 320,
      y: 120,
      w: 180,
      tile: ["#1a1616", "#000000"],
      mark: true,
      invert: true
    }, {
      id: "d",
      role: "Website Mockup",
      model: "Nano Banana Pro",
      type: "Image",
      x: 610,
      y: 130,
      w: 280,
      tile: ["#5a6a7a", "#1a2028"]
    }],
    edges: [["a", "c"], ["b", "c"], ["c", "d"]]
  }
};

// Persona showcase: central magazine card + floating labelled polaroids.
const PERSONAS = {
  Agencies: {
    title: "Agencies",
    body: "Concept work that wins the pitch. Variant work that runs the campaign. The same canvas does both — treatments and concept art at the brief's pace, ad variants and campaign creative at the campaign's volume.",
    cover: ["#4b6a3f", "#1a2810"],
    labels: [{
      name: "Concept Boards",
      tile: ["#8a6a4a", "#3a2a1a"]
    }, {
      name: "Treatment Decks",
      tile: ["#4b6a4a", "#182818"]
    }, {
      name: "Spec Ads",
      tile: ["#2a2a2a", "#0e0e0e"]
    }, {
      name: "AI Short",
      tile: ["#7a4a2a", "#241206"]
    }]
  },
  "CD/Filmmakers": {
    title: "CD/Filmmakers",
    body: "You can see the shot. You can describe it. Single-model tools can't make it. Work with tunable, multimodal nodes until the frame matches what you imagined.",
    cover: ["#e8e6e2", "#c4c0ba"],
    labels: [{
      name: "Storyboards",
      tile: ["#d8d8d8", "#a8a8a8"]
    }, {
      name: "Lookbooks",
      tile: ["#1a1a1a", "#000000"]
    }, {
      name: "Reference Boards",
      tile: ["#6a6a6a", "#2a2a2a"]
    }, {
      name: "Shot Lists",
      tile: ["#8a5a3a", "#2a1608"]
    }]
  },
  Marketers: {
    title: "Marketers",
    body: "Every channel, on brand, on time. Turn one campaign idea into a full set of sized, on-brand variants — social, display, email, and out-of-home — without waiting on a production queue.",
    cover: ["#c94f8a", "#3a1030"],
    labels: [{
      name: "Ad Variants",
      tile: ["#d94f6a", "#3a1020"]
    }, {
      name: "Social Cuts",
      tile: ["#5a4bd6", "#1a1240"]
    }, {
      name: "Email Heroes",
      tile: ["#e0a04a", "#7a4a10"]
    }, {
      name: "Landing Art",
      tile: ["#3a8a7a", "#0e2a24"]
    }]
  },
  "E-commerce": {
    title: "E-commerce",
    body: "The shoot that used to take three weeks, an afternoon on the canvas. Pack shots, on-model, hero imagery, all brand-consistent across every frame, at the pace of your ambitions.",
    cover: ["#b98a4a", "#4a3018"],
    labels: [{
      name: "Pack Shots",
      tile: ["#c9a05a", "#5a3a1a"]
    }, {
      name: "Lifestyle Heroes",
      tile: ["#8a6a4a", "#2a1f14"]
    }, {
      name: "On-Model Imagery",
      tile: ["#d8c8b8", "#a89880"]
    }, {
      name: "PDP Variants",
      tile: ["#a86a3a", "#3a1e0a"]
    }]
  },
  "GTM / Growth": {
    title: "GTM / Growth",
    body: "Test more, ship faster, learn sooner. Generate the volume of creative your experiments need — dozens of on-brand variants a day — so the winning idea surfaces at the speed of the market.",
    cover: ["#3a6ea5", "#0e1a2a"],
    labels: [{
      name: "Test Variants",
      tile: ["#3a6ea5", "#101820"]
    }, {
      name: "Hooks",
      tile: ["#e0762a", "#7a3410"]
    }, {
      name: "Thumbnails",
      tile: ["#c94bd6", "#2a1050"]
    }, {
      name: "Iterations",
      tile: ["#4b8a3f", "#123018"]
    }]
  }
};
Object.assign(window, {
  HERO_TILES,
  USE_CASES,
  PERSONAS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CanvasNode = __ds_scope.CanvasNode;

__ds_ns.PromptBar = __ds_scope.PromptBar;

})();
