/**
 * if url doesn't have http:// or https:// prepend,
 * this func will add it
 *
 * @param url
 * @returns {string|*}
 */
const fixUrlProtocol = url => {
  if (!/^https?:\/\//i.test(url)) {
    return `http://${url}`;
  }
  return url;
};

export default fixUrlProtocol;
