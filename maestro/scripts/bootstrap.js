if (!APP_ID) {
  throw new Error("Missing required env var: APP_ID");
}

if (!EMAIL) {
  throw new Error("Missing required env var: EMAIL");
}

if (!PASSWORD) {
  throw new Error("Missing required env var: PASSWORD");
}

const maskedEmail = EMAIL.replace(/(^.).*(@.*$)/, "$1***$2");

output.session = {
  maskedEmail,
  startedAt: new Date().toISOString(),
};

console.log(`Starting Android Me flow for ${output.session.maskedEmail}`);

