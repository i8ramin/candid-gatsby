import appendQuery from 'append-query';

const IMGIX_HOST = 'https://candidco.imgix.net';

export const srcToCDN = (imageSrc) => {
  const srcWithParams = appendQuery(imageSrc, {
    auto: 'format,compress',
    ch: 'Width,DPR',
    dpr: 2,
  });

  const src = (process.env.NODE_ENV === 'production') ?
    `${IMGIX_HOST}${srcWithParams}` : `${srcWithParams}`;

  return decodeURIComponent(src);
};
