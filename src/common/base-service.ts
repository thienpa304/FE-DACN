import httpRequest from './http-request';

class BaseService {
  endPoint: string;

  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  get = (params) => {
    return httpRequest.get(this.endPoint, params);
  };

  getById = (id, params) => {
    return httpRequest.get(`${this.endPoint}/${id}`, params);
  };

  create = (data) => {
    return httpRequest.post(this.endPoint, data);
  };

  update = (id, data) => {
    return httpRequest.put(`${this.endPoint}/${id}`, data);
  };

  remove = (id) => {
    return httpRequest.delete(`${this.endPoint}/${id}`);
  };
}

export default BaseService;
