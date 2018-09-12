({
    doInit : function(component, event, helper) {
        const empApi = component.find("empApi");
        const channel = "/data/AccountChangeEvent";
        const replayId = -1; //登録後に発生したすべての新規イベントを受信
        
        // イベント受信時の処理
        const onMessageCallback = (message) => {
            console.log("Received [" + message.channel +
            " : " + message.data.event.replayId + "] payload=" +
            JSON.stringify(message.data.payload));
            helper.notify(message.data.payload);
        };
            
        // Subscribeの開始(valueはSubscribeしたオブジェクト)
        empApi.subscribe(channel, replayId, onMessageCallback).then((value) => {
            console.log("Subscribed to channel " + channel);
        });    
            
        // エラー処理
        empApi.onError((message) => {
            console.log("Received error ", message);
        });  
    }
 })