module.exports = {
  env: {
    ACCOUNT_SID: "",
    API_KEY: "",
    API_SECRET: ""
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
