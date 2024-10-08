import axios from "axios"

type useRequestProps = {
  method: string,
  url: string,
  data?: any
}

export const requestUrl = ({ method, url, data }: useRequestProps) => {
  return axios({
    method: method,
    url: url,
    data: data,
  })
}
