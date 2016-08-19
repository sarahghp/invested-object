let base = {

  primarySeafoam: '#aefaea',
  lightSeafoam:   '#c5fbf0',
  darkSeafoam:    '#163939',

  primaryGray:    '#53535c',

  primaryShadow:  '#4d4d4d',

  bodyfontSize:    14,
  bodyFontFamily: 'Input Mono',
  bodyFontWeight: 'normal',


}

let groups = {
  bodyFontGroup : {
    fontSize: base.bodyfontSize,
    fontFamily: base.bodyFontFamily,
    fontWeight: base.bodyFontWeight,
    color: base.primaryGray,
  }
}

export { base, groups };