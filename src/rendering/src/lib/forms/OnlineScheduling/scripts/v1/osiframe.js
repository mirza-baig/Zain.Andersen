
function createIframe(elementId, data, isValidData) {
  const element = document.getElementById(elementId);
  if (element && element instanceof HTMLElement){
    const iframe = document.createElement('iframe');
    const queryString = isValidData ? '?isValidData=true' : '';
    iframe.src = `https://www.dev.os.renewalbyandersen.com/online-scheduling/${queryString}`; // make this dynamic
    iframe.width = '100%';
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('seamless', 'seamless');
    iframe.id = 'os-iframe';
    element.appendChild(iframe);

    if (window.iFrameResize) {
      window.iFrameResize(
        {
          log: false,
          onMessage: function (messageData) {
            console.log(messageData);
            if (messageData.message === 'ready'){ 
              iframe.iFrameResizer.sendMessage({ type: 'initializeLeadData', data: data});
            }
          },
        },
        '#os-iframe'
      );
    }
    return iframe;
  }
  else {
    console.error(`elementId: ${elementId} is not found in the DOM. Cannot create Online Scheduling Experience.`);
  }
  


}


class OnlineSchedulingExperience{
  #isValidData(data) {
    if (data instanceof Object) {
      if (data['firstName'] && data['lastName'] && data['emailAddress'] && data['phoneNumber'] && data['zipCode']) {
        return true;
      }
    }
    return false;
  }

  constructor(elementId, data) { // define data type
    this.elementId = elementId;
    this.data = data; // add some validation?
    this.iframe = createIframe(elementId, data, this.#isValidData(data));
  }

  sendMessage(message) { // define message type
    this.iframe.iFrameResizer.sendMessage.sendMessage(message);
  }
}

