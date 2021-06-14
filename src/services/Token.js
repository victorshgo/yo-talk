const twilio = require("twilio");

const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const generateToken = () => {
  return new AccessToken(
    process.env.ACCOUNT_SID,
    process.env.API_KEY,
    process.env.API_SECRET
  );
};

export const videoToken = (identity, room) => {
  let videoGrant;

  if (room) {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }

  const token = generateToken();

  token.addGrant(videoGrant);
  token.identity = identity;
  
  return token;
};
