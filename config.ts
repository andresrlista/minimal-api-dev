// API
// ----------------------------------------------------------------------

export const HOST_API =
  process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API
    : process.env.NEXT_PUBLIC_DEV_API;
