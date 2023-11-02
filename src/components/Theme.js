const deviceSize = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
};

const device = {
  mobile: `screen and (max-width: ${deviceSize.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSize.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSize.laptop}px)`,
};

const theme = {
  device,
};

export default theme;
