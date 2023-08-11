export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res) throw new Error(`${res.status}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};