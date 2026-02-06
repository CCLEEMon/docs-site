import nextra from 'nextra'

export default nextra({
  search: false,
})({
  reactStrictMode: true,
  transpilePackages: ['nextra', 'nextra-theme-docs']
})
