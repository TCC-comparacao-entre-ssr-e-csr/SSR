export const getData = async (inputUrl, options) => {
  if (!inputUrl) {
    throw new Error("Url is required!");
  }

  let isMounted = true;
  const startTime = performance.now();
  let result = {
    isLoading: true,
    data: null,
    error: null,
    time: null,
  };

  const fetchSingleUrl = async (url) => {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (isMounted) {
        result.data = Array.isArray(inputUrl)
          ? [...(result.data || []), json]
          : json;
      }
    } catch (err) {
      if (isMounted) {
        result.error = err;
      }
    } finally {
      if (isMounted) {
        result.isLoading = false;
        result.time = performance.now() - startTime;
      }
    }
  };

  if (Array.isArray(inputUrl)) {
    await Promise.all(inputUrl.map((url) => fetchSingleUrl(url)));
  } else {
    await fetchSingleUrl(inputUrl);
  }

  isMounted = false;
  return result;
};
