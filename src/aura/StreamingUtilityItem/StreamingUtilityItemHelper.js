({
	notify : function(payload) {
        if(payload.ChangeEventHeader.changeType == 'CREATE' && payload.Rating == 'Hot'){
            console.log('@@@ success');
            $A.get("e.force:showToast").setParams({
                type: 'success',
                message: 'Hotな取引先 ' + payload.Name +' が作成されました！'
            }).fire();
        }
	}
})