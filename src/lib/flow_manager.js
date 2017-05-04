import SharedRideRequestAPI from '../api/shared_ride_request_api'

export default class FlowManager {
  constructor(){
    this.SharedRideRequestAPI = new SharedRideRequestAPI()
  }

  saveInStore({key, val, successMsg, failureMsg}){
    console.log({key:val});
    try {
      AsyncStorage.setItem(key, val);
      console.log(successMsg)
    } catch (error) {
      console.log(FailureMsg)
    }
  }

  load(){
    try {
      const phone_num = AsyncStorage.getItem('splitter:phone_num');
      if (phone_num !== null){
        // We have data!!
        console.log("FlowManager.load: phone number retrieved from local storage")
        console.log(phone_num);
      }
    } catch (error) {
      // Error retrieving data
      console.log("FlowManager.load: phone number retrieval error")
      console.log(phone_num);
    }

    return !!phone_num
  }

  register({ phone_num }){

    this.saveInStore({key: '@splitter:phone_num', val: phone_num,
                      successMsg: "FlowManager.register: phone number registered",
                      failureMsg: "FlowManager.register: could not regiester phone " + phone_num})
  }

  createSharedRide( ride ){
    this.SharedRideRequestAPI.create({sharedRideRequest:ride})
  }
}
