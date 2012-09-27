//Assumes qunit has been loaded

function setupTest(){
	Synapse.hooks = [jQueryHook, ObjectHook];
}

function testBasicBinding(targetId, value){
	//Init synapse
	var obj = {};
	var objSynapse = new Synapse(obj);
	objSynapse.set("value", value);

	var target = $("#"+targetId);
	var fieldSynapse = new Synapse(target);

	//Do the test
	test("Test the visible interface", function() {
		equal(Synapse.hooks.length, 2);
		equal(target.length, 1);
		objSynapse.notify(fieldSynapse);
		//Test if the referenced ui item is hidden	
		equal(target.text(), value);
	});	
}

function testVisibleInterface(targetId, visibility){
	//Init synapse
	var obj = {};
	var objSynapse = new Synapse(obj);
	objSynapse.set("visibility", visibility);

	var target = $("#"+targetId);
	var fieldSynapse = new Synapse(target);

	//Do the test
	test("Test the visible interface", function() {
		equal(target.length, 1);
		objSynapse.notify(fieldSynapse, null,  "visible");
		//Test if the referenced ui item is hidden	
		equal(target.is(":visible"), visibility);
	});

}

function testHiddenClick(){
	
}