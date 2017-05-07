import 'whatwg-fetch'

export default class SharedRideRequestAPI {
  // static get HOST() { return 'http://matchingaudit-scrum9.gett.qa' }
  static get HOST() { return 'http://10.80.4.198:8080' }
  static get GET_SHARED_RIDE_REQUEST() { return '/api/v1/ride?rider={:rider_phone}' }
  static get POST_SHARED_RIDE_REQUEST() { return '/api/v1/ride' }
  static get DELETE_SHARED_RIDE_REQUEST() { return '/api/v1/ride?id={:ride_id}' }
  static get PRICE_ESTIMATE() { return '/api/v1/estimations?origin_lat={:origin_lat}&origin_lon={origin_lon}&dest_lat={dest_lat}&dest_lon={dest_lon}' }

  contractor(){
  }

  runRequest ( { uri, requestParams, successCallback, failureCallback} ) {
    const request = fetch(SharedRideRequestAPI.HOST + uri, requestParams)
    request.then(response => response.json())
           .then(response => {
                            console.info('Splitter request success:')
                            console.info(response)
                            successCallback(response)
                          })
           .catch(e => {
                       console.info('Splitter request failed:')
                       console.info(e)
                       failureCallback(e)
                       })
  }

  create( {sharedRideRequest, failureCallback} ){
    let requestParams = {
      method:'POST',
      credentials: 'include',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sharedRideRequest)
    }

    this.runRequest({uri: SharedRideRequestAPI.POST_SHARED_RIDE_REQUEST, requestParams, failureCallback})
  }

  get( {id, successCallback, failureCallback} ){
    return this.runRequest({uri: SharedRideRequestAPI.GET_SHARED_RIDE_REQUEST.replace('{:rider_phone}', id),
                            successCallback, failureCallback })
  }
}
