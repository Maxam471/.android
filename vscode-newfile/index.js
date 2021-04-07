const getUser = async () => {
  try {
    const res = await fetch("youtube.com");
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};

getUser();
