import axios from 'axios';
import Cookies from 'js-cookie';

class APIService {
  static headers = {
    Authorization: Cookies.get('token') || '',
  }

  static async get(url: string) {
    try {
    const resp = await axios.get(url, { headers: this.headers });
    return resp?.data;
    } catch (e) {
      if (e instanceof Error) throw new Error(e?.message)
    }
  }

  static async post(url: string, data: any) {
    try {
      const resp = await axios.post(url, data, { headers: this.headers });
      return resp?.data;
    } catch (e) {
      if (e instanceof Error) throw new Error(e?.message)
    }
  }

  static async put(url: string, data: any) {
    try {
      const resp = await axios.put(url, data, { headers: this.headers });
      return resp?.data;
    } catch (e) {
      if (e instanceof Error) throw new Error(e?.message)
    }
  }

  static async delete(url: string) {
    try {
      const resp = await axios.delete(url, { headers: this.headers });
      return resp?.data;
    } catch (e) {
      if (e instanceof Error) throw new Error(e?.message)
    }
  }
}

export default APIService;

