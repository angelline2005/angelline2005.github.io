let SPECS = {
  MOBILE: { w: 0},
  TABLET:  { w: 834},
  DESKTOP:  { w: 1500},
}

export let device = {
  isMobile: false, 
  isTablet: false, 
  isDesktop: false, 
}

let innerW = window.innerWidth
if (innerW >= SPECS.DESKTOP.w) device.isDesktop = true
else if (innerW >= SPECS.TABLET.w) device.isTablet = true
else if (innerW >= SPECS.MOBILE.w) device.isMobile = true