import axios from 'axios';
import { toast } from 'react-toastify';
const baseUrl = process.env.REACT_APP_BACKEND_URL;
export const getApi = async (path) => {
  try {
    let response = await axios.get(baseUrl + path, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response.data.token);
    }
    // if (response && response.status === 200) {
    //     toast.success(response.data.message);
    // }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response && error.response.status === 400) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
          console.log(error);
        }
      }
    }
  }
};
export const getByPostApi = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response?.data?.token);
    }
    // if (response && response.status === 200) {
    //     toast.success(response.data.message);
    // }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response.data && error.response.status === 401) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
export const postApi = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    if (response && response.status === 200) {
      if (response.data.status == 1) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response.data && error.response.status === 401) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
export const editApi = async (path, data) => {
  try {
    const response = await axios.put(baseUrl + path, data, {
      headers: {
        token: localStorage?.getItem('token')
      }
    });
    if (response && response.status === 200) {
      if (response.data.status == 1) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response && error.response.status === 400) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
export const deleteApi = async (path) => {

  try {
    const response = await axios.delete(baseUrl + path, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    if (response && response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response && error.response.status === 400) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
export const deleteManyApi = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response?.data?.token);
    }
    if (response && response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response.data && error.response.status === 401) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
export const loginPostApi = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data, {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    console.log(response.data, 'response.data.data.status');
    if (response?.data?.status === 0) {
      toast.error(response?.data?.message);
    }
    if (response.data.data.status == 0) {
      // const userConfirmed = window.confirm(`You account is deactivated by Super Admin, So please contact them to login.`);
      toast.error(`You account is not activated by Super Admin, So please contact them to login.`);
      // if (userConfirmed) {
      // location.reload();
    //   navigate('/login');
      // }
    } else {
      if (response.data.token && response.data.token !== null) {
        localStorage.setItem('token', response?.data?.token);
      }
      if (response && response.status === 200) {
        toast.success(response.data.message);
      }
      return response;
    }
  } catch (error) {
    if (error && error.response) {
      if (error && error.response.data && error.response.status === 401) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
