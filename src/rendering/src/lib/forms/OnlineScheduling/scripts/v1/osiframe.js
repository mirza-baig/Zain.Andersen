
function createIframe(elementId, data, isValidData, events) {
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
            if (messageData?.message?.type === 'ready'){ 
              iframe.iFrameResizer.sendMessage({ type: 'initializeLeadData', leadData: data});
            }
            else if (events instanceof Object && events[messageData?.message?.type] instanceof Function) {
                events[messageData?.message?.type](messageData.message);
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

  constructor(elementId, data, events) { // define data type
    this.elementId = elementId;
    this.data = data; // add some validation?
    this.events = events;
    this.iframe = createIframe(elementId, data, this.#isValidData(data), events);
  }

  sendMessage(message) { // define message type
    this.iframe.iFrameResizer.sendMessage.sendMessage(message);
  }
}

