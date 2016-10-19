export default class FetchHelper {

  static status(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  }


  static parseJSON(response) {
    return response.json();
  }

}
