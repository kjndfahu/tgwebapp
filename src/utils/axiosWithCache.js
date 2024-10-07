import axios from 'axios';

function getCachedData(key) {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, expiry } = JSON.parse(cached);

    if (Date.now() > expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return data;
}

function setCachedData(key, data, ttl) {
    const expiry = Date.now() + ttl;
    localStorage.setItem(key, JSON.stringify({ data, expiry }));
}

const axiosWithCache = async (method, url, data = {}, config = {}, ttl = 5 * 60 * 1000) => {
    const cacheKey = `${method}:${url}:${JSON.stringify(data)}:${JSON.stringify(config.params || {})}`;

    const cachedData = getCachedData(cacheKey);

    if (cachedData) {
        console.log('Из кеша:', cachedData);
        return Promise.resolve({ data: cachedData });
    }

    try {
        const response = await axios({ method, url, data, ...config });
        setCachedData(cacheKey, response.data, ttl);
        return response;
    } catch (error) {
        console.error('Ошибка при запросе:', error);
        throw error;
    }
};

export default axiosWithCache;
