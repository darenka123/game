gdjs.GameOverCode = {};
gdjs.GameOverCode.GDPlatformObjects1= [];
gdjs.GameOverCode.GDPlatformObjects2= [];
gdjs.GameOverCode.GDPlatformObjects3= [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDBackgroundObjects3= [];
gdjs.GameOverCode.GDDustParticlesObjects1= [];
gdjs.GameOverCode.GDDustParticlesObjects2= [];
gdjs.GameOverCode.GDDustParticlesObjects3= [];
gdjs.GameOverCode.GDRestartButtonObjects1= [];
gdjs.GameOverCode.GDRestartButtonObjects2= [];
gdjs.GameOverCode.GDRestartButtonObjects3= [];
gdjs.GameOverCode.GDOliObjects1= [];
gdjs.GameOverCode.GDOliObjects2= [];
gdjs.GameOverCode.GDOliObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDDustParticlesObjects1Objects = Hashtable.newFrom({"DustParticles": gdjs.GameOverCode.GDDustParticlesObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12373148);
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Oli"), gdjs.GameOverCode.GDOliObjects1);
gdjs.GameOverCode.GDDustParticlesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDDustParticlesObjects1Objects, (( gdjs.GameOverCode.GDOliObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDOliObjects1[0].getPointX("DustProjection")), (( gdjs.GameOverCode.GDOliObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDOliObjects1[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setZOrder(0);
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameOverCode.GDDustParticlesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Oli"), gdjs.GameOverCode.GDOliObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDOliObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDOliObjects2[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects2[i].setPosition((( gdjs.GameOverCode.GDOliObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDOliObjects2[0].getPointX("DustProjection")),(( gdjs.GameOverCode.GDOliObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDOliObjects2[0].getPointY("DustProjection")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oli"), gdjs.GameOverCode.GDOliObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDOliObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDOliObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDOliObjects1[k] = gdjs.GameOverCode.GDOliObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDOliObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDOliObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDOliObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDOliObjects1[i].setX(-((gdjs.GameOverCode.GDOliObjects1[i].getWidth())));
}
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartButtonObjects2Objects = Hashtable.newFrom({"RestartButton": gdjs.GameOverCode.GDRestartButtonObjects2});
gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOverCode.GDRestartButtonObjects2);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), true);
}}

}


{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), false);
}}

}


{


{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "d2798727-c248-431c-a071-27eebe400388", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 70, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), true);
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.eventsList1(runtimeScene);
}


{


gdjs.GameOverCode.eventsList3(runtimeScene);
}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDPlatformObjects1.length = 0;
gdjs.GameOverCode.GDPlatformObjects2.length = 0;
gdjs.GameOverCode.GDPlatformObjects3.length = 0;
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDBackgroundObjects3.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects1.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects2.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects3.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverCode.GDOliObjects1.length = 0;
gdjs.GameOverCode.GDOliObjects2.length = 0;
gdjs.GameOverCode.GDOliObjects3.length = 0;

gdjs.GameOverCode.eventsList4(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
