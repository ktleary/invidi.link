export default async function copyToClipboard(text) {
  return navigator.clipboard
    ? await navigator.clipboard
        .writeText(text)
        .then((_) => true)
        .catch((e) => {
          return false;
        })
    : false;
}

