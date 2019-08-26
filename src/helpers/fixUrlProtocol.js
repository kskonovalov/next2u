const fixUrlProtocol = url => {
  if (!/^https?:\/\//i.test(url)) {
    return `http://${url}`;
  }
  return url;
};
export default fixUrlProtocol;
