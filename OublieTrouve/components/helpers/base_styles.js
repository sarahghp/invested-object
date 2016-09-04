let base = {

  primarySeafoam: '#aefaea',
  lightestSeafoam:'#ebfffa',
  lightSeafoam:   '#c5fbf0',
  darkSeafoam:    '#163939',
  textSeafoam:    '#0cb691',

  primaryGray:    '#53535c',
  darkGray:       '#35353b',

  primaryShadow:  '#4d4d4d',

  bodyfontSize:    14,
  bodyFontFamily: 'Input Mono',
  bodyFontWeight: 'normal',

  padding:          (x) => x * 18,
  rowSpacing:       (y) => y * 22,

}

let groups = {
  bodyFontGroup : {
    fontSize: base.bodyfontSize,
    fontFamily: base.bodyFontFamily,
    fontWeight: base.bodyFontWeight,
    color: base.primaryGray,
    padding: base.padding(1)
  },
  bodyFontGroupUnpadded : {
    fontSize: base.bodyfontSize,
    fontFamily: base.bodyFontFamily,
    fontWeight: base.bodyFontWeight,
    color: base.primaryGray,
  }
}

export { base, groups };