module.exports = {
  env: {
    ACCOUNT_SID: "AC38b3c9b5fa7a924bfaf3f0811fd4e5bb",
    API_KEY: "SKf4e40776608469c77f34c5dea0b84480",
    API_SECRET: "yVbLFZCysfxTxzBGlz8u0pkNNFMdHoy1"
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        net: "empty",
        fs: 'empty',
        tls: 'empty'
      };
    }
    return config;
  },
};
