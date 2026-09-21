const getToken = () => localStorage.getItem('token');

const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const payload = isJson ? await response.json() : null;

  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    const message = payload?.error || 'Request failed';
    const error = new Error(message);
    error.status = response.status;

    if (response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    throw error;
  }

  return payload;
};

export const http = {
  get: async (path) => {
    const response = await fetch(`/api${path.startsWith('/') ? path.slice(1) : path}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return handleResponse(response);
  },

  post: async (path, body) => {
    const response = await fetch(`/api${path.startsWith('/') ? path.slice(1) : path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(body || {}),
    });

    return handleResponse(response);
  },

  put: async (path, body) => {
    const response = await fetch(`/api${path.startsWith('/') ? path.slice(1) : path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(body || {}),
    });

    return handleResponse(response);
  },

  del: async (path) => {
    const response = await fetch(`/api${path.startsWith('/') ? path.slice(1) : path}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return handleResponse(response);
  },
};

export default http;
