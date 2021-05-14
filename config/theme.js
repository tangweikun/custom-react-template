module.exports.themeColor = '#6A549E';

module.exports.getLessTheme = (themeColor) => {
  return {
    '@primary-color': themeColor,
    '@success-color': 'rgba(0, 183, 121, 1)',
    '@error-color': 'rgba(223, 52, 9, 1)',
    '@warning-color': 'rgba(254, 171, 0, 1)',
    '@link-color': themeColor,
    '@progress-remaining-color': '#E1E7FF',
    '@font-size-base': '14px',
    '@input-height-base': '32px',
    '@input-height-lg': '36px',
    '@input-height-sm': '28px',
    '@btn-height-base': '32px',
    '@btn-height-lg': '36px',
    '@btn-height-sm': '28px',
    '@btn-padding-sm': '0 11px;',
    '@border-radius-base': '3px;',
    '@font-family':
      '"Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif',
  };
};
