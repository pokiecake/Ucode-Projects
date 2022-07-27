'use strict';
var instruct = document.getElementById('instruct');
var intro = document.getElementById('intro');
var Ii = document.getElementById('Ii');
var Iii = document.getElementById('Iii');
var Host = document.getElementById('Host');
var IntH = document.getElementById('IntH');
var Htest = document.getElementById('Htest');
var Hp = document.getElementById('Hp');
var Hvic = document.getElementById('Hvic');
var Hvictestback = document.getElementById('Hvictestback');
var Hvicallback = document.getElementById('Hvicallback');
var Hother = document.getElementById('Hother');
var Hc1 = document.getElementById('Hc1');
var Hc2 = document.getElementById('Hc2');
var Hc3 = document.getElementById('Hc3');
var Hc4 = document.getElementById('Hc4');
var Hc5 = document.getElementById('Hc5');
var HcParty = document.getElementById('HcParty');
var HcPartytestback = document.getElementById('HcPartytestback');
var HcPartyallback = document.getElementById('HcPartyallback');
var HcIf = document.getElementById('HcIf');
var HcIftest = document.getElementById('HcIftest');
var HcIftestback = document.getElementById('HcIftestback');
var HcIfallback = document.getElementById('HcIfallback');
var HcPH5 = document.getElementById('HcPH5');
var HcPH5test = document.getElementById('HcPH5test');
var HcPH5testback = document.getElementById('HcPH5testback');
var HcPH5allback = document.getElementById('HcPH5allback');
var HcIrp = document.getElementById('HcIrp');
var HcIrptest = document.getElementById('HcIrptest');
var HcIrptestback = document.getElementById('HcIrptestback');
var HcIrpallback = document.getElementById('HcIrpallback');
var HcMP = document.getElementById('HcMP');
var HcMPtest = document.getElementById('HcMPtest');
var HcMPtestback = document.getElementById('HcMPtestback');
var HcMPallback = document.getElementById('HcMPallback');
var HcPNC = document.getElementById('HcPNC');
var HcPNCtest = document.getElementById('HcPNCtest');
var HcPNCtestback = document.getElementById('HcPNCtestback');
var HcPNCallback = document.getElementById('HcPNCallback');
var HcBE = document.getElementById('HcBE');
var HcBEtest = document.getElementById('HcBEtest');
var HcBEtestback = document.getElementById('HcBEtestback');
var HcBEallback = document.getElementById('HcBEallback');
var HcIfR = document.getElementById('HcIfR');
var HcIfRtest = document.getElementById('HcIfRtest');
var HcIfRtestback = document.getElementById('HcIfRtestback');
var HcIfRallback = document.getElementById('HcIfRallback');
var HcRd = document.getElementById('HcRd');
var HcRdtest = document.getElementById('HcRdtest');
var HcRdtestback = document.getElementById('HcRdtestback');
var HcRdallback = document.getElementById('HcRdallback');
var HcRSUs = document.getElementById('HcRSUs');
var HcRSUstest = document.getElementById('HcRSUstest');
var HcRSUstestback = document.getElementById('HcRSUstestback');
var HcRSUsallback = document.getElementById('HcRSUsallback');
var HcSE = document.getElementById('HcSE');
var HcSEtest = document.getElementById('HcSEtest');
var HcSEtestback = document.getElementById('HcSEtestback');
var HcSEallback = document.getElementById('HcSEallback');
var HcSMP = document.getElementById('HcSMP');
var HcSMPtest = document.getElementById('HcSMPtest');
var HcSMPtestback = document.getElementById('HcSMPtestback');
var HcSMPallback = document.getElementById('HcSMPallback');
var HcSC = document.getElementById('HcSC');
var HcSCtest = document.getElementById('HcSCtest');
var HcSCtestback = document.getElementById('HcSCtestback');
var HcSCallback = document.getElementById('HcSCallback');
var HcSurv = document.getElementById('HcSurv');
var HcSurvtest = document.getElementById('HcSurvtest');
var HcSurvtestback = document.getElementById('HcSurvtestback');
var HcSurvallback = document.getElementById('HcSurvallback');
var HcVS = document.getElementById('HcVS');
var HcVStest = document.getElementById('HcVStest');
var HcVStestback = document.getElementById('HcVStestback');
var HcVSallback = document.getElementById("HcVSallback");
var HcSV = document.getElementById('HcSV');
var HcSVtest = document.getElementById('HcSVtest');
var HcSVtestback = document.getElementById('HcSVtestback');
var HcSVallback = document.getElementById('HcSVallback');
var HcKB = document.getElementById('HcKB');
var HcKBtest = document.getElementById('HcKBtest');
var HcKBtestback = document.getElementById('HcKBtestback');
var HcKBallback = document.getElementById('HcKBallback');
var HcMF = document.getElementById('HcMF');
var HcMFtest = document.getElementById('HcMFtest');
var HcMFtestback = document.getElementById('HcMFtestback');
var HcMFallback = document.getElementById('HcMFallback');
var HcKI = document.getElementById('HcKI');
var HcKItest = document.getElementById('HcKItest');
var HcKItestback = document.getElementById('HcKItestback');
var HcKIallback = document.getElementById('HcKIallback');
var HcFR = document.getElementById('HcFR');
var HcFRtest = document.getElementById('HcFRtest');
var HcFRtestback = document.getElementById('HcFRtestback');
var HcFRallback = document.getElementById('HcFRallback');
var HcMVF = document.getElementById("HcMVF");
var HcMVFtest = document.getElementById('HcMVFtest');
var HcMVFtestback = document.getElementById('HcMVFtestback');
var HcMVFallback = document.getElementById('HcMVFallback');
var HcVV = document.getElementById('HcVV');
var HcVVtest = document.getElementById('HcVVtest');
var HcVVtestback = document.getElementById('HcVVtestback');
var HcVVallback = document.getElementById('HcVVallback');
var HcMY = document.getElementById('HcMY');
var HcMYtest = document.getElementById('HcMYtest');
var HcMYtestback = document.getElementById('HcMYtestback');
var HcMYallback = document.getElementById('HcMYallback');
var HcPLP = document.getElementById('HcPLP');
var HcPLPtest = document.getElementById('HcPLPtest');
var HcPLPtestback = document.getElementById('HcPLPtestback');
var HcPLPallback = document.getElementById('HcPLPallback');
var HcSM = document.getElementById('HcSM');
var HcSMtest = document.getElementById('HcSMtest');
var HcSMtestback = document.getElementById('HcSMtestback');
var HcSMallback = document.getElementById('HcSMallback');
var Hback = document.getElementById('Hback');
var IntvH = false;
var Hotherv = false;
var Hc1v = false;
var Hc4v = false;
var HcVVv = false;
var IntR = document.getElementById('IntR');
var Rp = document.getElementById('Rp');
var Rtest = document.getElementById('Rtest');
var Rvic = document.getElementById('Rvic');
var Rvictestback = document.getElementById('Rvictestback');
var Rvicallback = document.getElementById('Rvicallback');
var Rother = document.getElementById('Rother');
var Rc1 = document.getElementById('Rc1');
var Rc2 = document.getElementById('Rc2');
var Rc3 = document.getElementById('Rc3');
var Rc4 = document.getElementById('Rc4');
var Rc5 = document.getElementById('Rc5');
var RcParty = document.getElementById('RcParty');
var RcPartytestback = document.getElementById('RcPartytestback');
var RcPartyallback = document.getElementById('RcPartyallback');
var RcHIf = document.getElementById('RcHIf');
var RcHIftest = document.getElementById('RcHIftest');
var RcHIftestback = document.getElementById('RcHIftestback');
var RcHIfallback = document.getElementById('RcHIfallback');
var RcPH5 = document.getElementById('RcPH5');
var RcPH5test = document.getElementById('RcPH5test');
var RcPH5testback = document.getElementById('RcPH5testback');
var RcPH5allback = document.getElementById('RcPH5allback');
var RcHIrp = document.getElementById('RcHIrp');
var RcHIrptest = document.getElementById('RcHIrptest');
var RcHIrptestback = document.getElementById('RcHIrptestback');
var RcHIrpallback = document.getElementById('RcHIrpallback');
var RcMP = document.getElementById('RcMP');
var RcMPtest = document.getElementById('RcMPtest');
var RcMPtestback = document.getElementById('RcMPtestback');
var RcMPallback = document.getElementById('RcMPallback');
var RcNC = document.getElementById('RcNC');
var RcNCtest = document.getElementById('RcNCtest');
var RcNCtestback = document.getElementById('RcNCtestback');
var RcNCallback = document.getElementById('RcNCallback');
var RcBE = document.getElementById('RcBE');
var RcBEtest = document.getElementById('RcBEtest');
var RcBEtestback = document.getElementById('RcBEtestback');
var RcBEallback = document.getElementById('RcBEallback');
var RcIfR = document.getElementById('RcIfR');
var RcIfRtest = document.getElementById('RcIfRtest');
var RcIfRtestback = document.getElementById('RcIfRtestback');
var RcIfRallback = document.getElementById('RcIfRallback');
var Rcd = document.getElementById('Rcd');
var Rcdtest = document.getElementById('Rcdtest');
var Rcdtestback = document.getElementById('Rcdtestback');
var Rcdallback = document.getElementById('Rcdallback');
var RcRSUs = document.getElementById('RcRSUs');
var RcRSUstest = document.getElementById('RcRSUstest');
var RcRSUstestback = document.getElementById('RcRSUstestback');
var RcRSUsallback = document.getElementById('RcRSUsallback');
var RcSE = document.getElementById('RcSE');
var RcSEtest = document.getElementById('RcSEtest');
var RcSEtestback = document.getElementById('RcSEtestback');
var RcSEallback = document.getElementById('RcSEallback');
var RcSMP = document.getElementById('RcSMP');
var RcSMPtest = document.getElementById('RcSMPtest');
var RcSMPtestback = document.getElementById('RcSMPtestback');
var RcSMPallback = document.getElementById('RcSMPallback');
var RcSC = document.getElementById('RcSC');
var RcSCtest = document.getElementById('RcSCtest');
var RcSCtestback = document.getElementById('RcSCtestback');
var RcSCallback = document.getElementById('RcSCallback');
var RcSurv = document.getElementById('RcSurv');
var RcSurvtest = document.getElementById('RcSurvtest');
var RcSurvtestback = document.getElementById('RcSurvtestback');
var RcSurvallback = document.getElementById('RcSurvallback');
var RcVS = document.getElementById('RcVS');
var RcVStest = document.getElementById('RcVStest');
var RcVStestback = document.getElementById('RcVStestback');
var RcVSallback = document.getElementById("RcVSallback");
var RcSV = document.getElementById('RcSV');
var RcSVtest = document.getElementById('RcSVtest');
var RcSVtestback = document.getElementById('RcSVtestback');
var RcSVallback = document.getElementById('RcSVallback');
var RcKB = document.getElementById('RcKB');
var RcKBtest = document.getElementById('RcKBtest');
var RcKBtestback = document.getElementById('RcKBtestback');
var RcKBallback = document.getElementById('RcKBallback');
var RcMF = document.getElementById('RcMF');
var RcMFtest = document.getElementById('RcMFtest');
var RcMFtestback = document.getElementById('RcMFtestback');
var RcMFallback = document.getElementById('RcMFallback');
var RcKI = document.getElementById('RcKI');
var RcKItest = document.getElementById('RcKItest');
var RcKItestback = document.getElementById('RcKItestback');
var RcKIallback = document.getElementById('RcKIallback');
var RcFR = document.getElementById('RcFR');
var RcFRtest = document.getElementById('RcFRtest');
var RcFRtestback = document.getElementById('RcFRtestback');
var RcFRallback = document.getElementById('RcFRallback');
var RcMVF = document.getElementById("RcMVF");
var RcMVFtest = document.getElementById('RcMVFtest');
var RcMVFtestback = document.getElementById('RcMVFtestback');
var RcMVFallback = document.getElementById('RcMVFallback');
var RcVV = document.getElementById('RcVV');
var RcVVtest = document.getElementById('RcVVtest');
var RcVVtestback = document.getElementById('RcVVtestback');
var RcVVallback = document.getElementById('RcVVallback');
var RcMY = document.getElementById('RcMY');
var RcMYtest = document.getElementById('RcMYtest');
var RcMYtestback = document.getElementById('RcMYtestback');
var RcMYallback = document.getElementById('RcMYallback');
var RcPLP = document.getElementById('RcPLP');
var RcPLPtest = document.getElementById('RcPLPtest');
var RcPLPtestback = document.getElementById('RcPLPtestback');
var RcPLPallback = document.getElementById('RcPLPallback');
var RcSM = document.getElementById('RcSM');
var RcSMtest = document.getElementById('RcSMtest');
var RcSMtestback = document.getElementById('RcSMtestback');
var RcSMallback = document.getElementById('RcSMallback');
var Rback = document.getElementById('Rback');
var IntvR = false;
var Rvicv = false;
var RcHIfv = false;
var Rc5v = false;
var Rc3v = false;
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var cnext = 6;
var IntS = document.getElementById('IntS');
var Sp = document.getElementById('Sp');
var Stest = document.getElementById('Stest');
var Svic = document.getElementById('Svic');
var Svictest = document.getElementById('Svictest');
var Svictestback = document.getElementById('Svictestback');
var Svicallback = document.getElementById('Svicallback');
var Sother = document.getElementById('Sother');
var Sothertest = document.getElementById('Sothertest');
var Sothertestback = document.getElementById('Sothertestback');
var Sotherallback = document.getElementById('Sotherallback');
var Sc1 = document.getElementById('Sc1');
var Sc2 = document.getElementById('Sc2');
var Sc3 = document.getElementById('Sc3');
var Sc4 = document.getElementById('Sc4');
var Sc5 = document.getElementById('Sc5');
var ScParty = document.getElementById('ScParty');
var ScPartytestback = document.getElementById('ScPartytestback');
var ScPartyallback = document.getElementById('ScPartyallback');
var ScHIf = document.getElementById('ScHIf');
var ScHIftest = document.getElementById('ScHIftest');
var ScHIftestback = document.getElementById('ScHIftestback');
var ScHIfallback = document.getElementById('ScHIfallback');
var ScPH5 = document.getElementById('ScPH5');
var ScPH5test = document.getElementById('ScPH5test');
var ScPH5testback = document.getElementById('ScPH5testback');
var ScPH5allback = document.getElementById('ScPH5allback');
var ScHIrp = document.getElementById('ScHIrp');
var ScHIrptest = document.getElementById('ScHIrptest');
var ScHIrptestback = document.getElementById('ScHIrptestback');
var ScHIrpallback = document.getElementById('ScHIrpallback');
var ScMP = document.getElementById('ScMP');
var ScMPtest = document.getElementById('ScMPtest');
var ScMPtestback = document.getElementById('ScMPtestback');
var ScMPallback = document.getElementById('ScMPallback');
var ScPNC = document.getElementById('ScPNC');
var ScPNCtest = document.getElementById('ScPNCtest');
var ScPNCtestback = document.getElementById('ScPNCtestback');
var ScPNCallback = document.getElementById('ScPNCallback');
var ScBE = document.getElementById('ScBE');
var ScBEtest = document.getElementById('ScBEtest');
var ScBEtestback = document.getElementById('ScBEtestback');
var ScBEallback = document.getElementById('ScBEallback');
var ScIfR = document.getElementById('ScIfR');
var ScIfRtest = document.getElementById('ScIfRtest');
var ScIfRtestback = document.getElementById('ScIfRtestback');
var ScIfRallback = document.getElementById('ScIfRallback');
var ScRd = document.getElementById('ScRd');
var ScRdtest = document.getElementById('ScRdtest');
var ScRdtestback = document.getElementById('ScRdtestback');
var ScRdallback = document.getElementById('ScRdallback');
var ScRSUs = document.getElementById('ScRSUs');
var ScRSUstest = document.getElementById('ScRSUstest');
var ScRSUstestback = document.getElementById('ScRSUstestback');
var ScRSUsallback = document.getElementById('ScRSUsallback');
var ScSE = document.getElementById('ScSE');
var ScSEtest = document.getElementById('ScSEtest');
var ScSEtestback = document.getElementById('ScSEtestback');
var ScSEallback = document.getElementById('ScSEallback');
var ScSMP = document.getElementById('ScSMP');
var ScSMPtest = document.getElementById('ScSMPtest');
var ScSMPtestback = document.getElementById('ScSMPtestback');
var ScSMPallback = document.getElementById('ScSMPallback');
var ScSC = document.getElementById('ScSC');
var ScSCtest = document.getElementById('ScSCtest');
var ScSCtestback = document.getElementById('ScSCtestback');
var ScSCallback = document.getElementById('ScSCallback');
var ScSurv = document.getElementById('ScSurv');
var ScSurvtest = document.getElementById('ScSurvtest');
var ScSurvtestback = document.getElementById('ScSurvtestback');
var ScSurvallback = document.getElementById('ScSurvallback');
var ScVS = document.getElementById('ScVS');
var ScVStest = document.getElementById('ScVStest');
var ScVStestback = document.getElementById('ScVStestback');
var ScVSallback = document.getElementById("ScVSallback");
var ScSV = document.getElementById('ScSV');
var ScSVtest = document.getElementById('ScSVtest');
var ScSVtestback = document.getElementById('ScSVtestback');
var ScSVallback = document.getElementById('ScSVallback');
var ScKB = document.getElementById('ScKB');
var ScKBtest = document.getElementById('ScKBtest');
var ScKBtestback = document.getElementById('ScKBtestback');
var ScKBallback = document.getElementById('ScKBallback');
var ScMF = document.getElementById('ScMF');
var ScMFtest = document.getElementById('ScMFtest');
var ScMFtestback = document.getElementById('ScMFtestback');
var ScMFallback = document.getElementById('ScMFallback');
var ScKI = document.getElementById('ScKI');
var ScKItest = document.getElementById('ScKItest');
var ScKItestback = document.getElementById('ScKItestback');
var ScKIallback = document.getElementById('ScKIallback');
var ScFR = document.getElementById('ScFR');
var ScFRtest = document.getElementById('ScFRtest');
var ScFRtestback = document.getElementById('ScFRtestback');
var ScFRallback = document.getElementById('ScFRallback');
var ScMVF = document.getElementById("ScMVF");
var ScMVFtest = document.getElementById('ScMVFtest');
var ScMVFtestback = document.getElementById('ScMVFtestback');
var ScMVFallback = document.getElementById('ScMVFallback');
var ScVV = document.getElementById('ScVV');
var ScVVtest = document.getElementById('ScVVtest');
var ScVVtestback = document.getElementById('ScVVtestback');
var ScVVallback = document.getElementById('ScVVallback');
var ScMY = document.getElementById('ScMY');
var ScMYtest = document.getElementById('ScMYtest');
var ScMYtestback = document.getElementById('ScMYtestback');
var ScMYallback = document.getElementById('ScMYallback');
var ScPLP = document.getElementById('ScPLP');
var ScPLPtest = document.getElementById('ScPLPtest');
var ScPLPtestback = document.getElementById('ScPLPtestback');
var ScPLPallback = document.getElementById('ScPLPallback');
var ScSM = document.getElementById('ScSM');
var ScSMtest = document.getElementById('ScSMtest');
var ScSMtestback = document.getElementById('ScSMtestback');
var ScSMallback = document.getElementById('ScSMallback');
var Sback = document.getElementById('Sback');
var IntvS = false;
var ScSurvv = false;
var ScMPv = false;
var ScVSv = false;
var ScSVv = false;
var ScSMv = false;
var IntK = document.getElementById('IntK');
var Kp = document.getElementById('Kp');
var Ktest = document.getElementById('Ktest');
var Kvic = document.getElementById('Kvic');
var Kvictestback = document.getElementById('Kvictestback');
var Kvicallback = document.getElementById('Kvicallback');
var Kother = document.getElementById('Kother');
var Kc1 = document.getElementById('Kc1');
var Kc2 = document.getElementById('Kc2');
var Kc3 = document.getElementById('Kc3');
var Kc4 = document.getElementById('Kc4');
var Kc5 = document.getElementById('Kc5');
var KcParty = document.getElementById('KcParty');
var KcPartytestback = document.getElementById('KcPartytestback');
var KcPartyallback = document.getElementById('KcPartyallback');
var KcHIf = document.getElementById('KcHIf');
var KcHIftest = document.getElementById('KcHIftest');
var KcHIftestback = document.getElementById('KcHIftestback');
var KcHIfallback = document.getElementById('KcHIfallback');
var KcPH5 = document.getElementById('KcPH5');
var KcPH5test = document.getElementById('KcPH5test');
var KcPH5testback = document.getElementById('KcPH5testback');
var KcPH5allback = document.getElementById('KcPH5allback');
var KcHIrp = document.getElementById('KcHIrp');
var KcHIrptest = document.getElementById('KcHIrptest');
var KcHIrptestback = document.getElementById('KcHIrptestback');
var KcHIrpallback = document.getElementById('KcHIrpallback');
var KcMP = document.getElementById('KcMP');
var KcMPtest = document.getElementById('KcMPtest');
var KcMPtestback = document.getElementById('KcMPtestback');
var KcMPallback = document.getElementById('KcMPallback');
var KcNC = document.getElementById('KcNC');
var KcNCtest = document.getElementById('KcNCtest');
var KcNCtestback = document.getElementById('KcNCtestback');
var KcNCallback = document.getElementById('KcNCallback');
var KcBE = document.getElementById('KcBE');
var KcBEtest = document.getElementById('KcBEtest');
var KcBEtestback = document.getElementById('KcBEtestback');
var KcBEallback = document.getElementById('KcBEallback');
var KcIfR = document.getElementById('KcIfR');
var KcIfRtest = document.getElementById('KcIfRtest');
var KcIfRtestback = document.getElementById('KcIfRtestback');
var KcIfRallback = document.getElementById('KcIfRallback');
var Kcd = document.getElementById('Kcd');
var Kcdtest = document.getElementById('Kcdtest');
var Kcdtestback = document.getElementById('Kcdtestback');
var Kcdallback = document.getElementById('Kcdallback');
var KcRSUs = document.getElementById('KcRSUs');
var KcRSUstest = document.getElementById('KcRSUstest');
var KcRSUstestback = document.getElementById('KcRSUstestback');
var KcRSUsallback = document.getElementById('KcRSUsallback');
var KcSE = document.getElementById('KcSE');
var KcSEtest = document.getElementById('KcSEtest');
var KcSEtestback = document.getElementById('KcSEtestback');
var KcSEallback = document.getElementById('KcSEallback');
var KcSMP = document.getElementById('KcSMP');
var KcSMPtest = document.getElementById('KcSMPtest');
var KcSMPtestback = document.getElementById('KcSMPtestback');
var KcSMPallback = document.getElementById('KcSMPallback');
var KcSC = document.getElementById('KcSC');
var KcSCtest = document.getElementById('KcSCtest');
var KcSCtestback = document.getElementById('KcSCtestback');
var KcSCallback = document.getElementById('KcSCallback');
var KcSurv = document.getElementById('KcSurv');
var KcSurvtest = document.getElementById('KcSurvtest');
var KcSurvtestback = document.getElementById('KcSurvtestback');
var KcSurvallback = document.getElementById('KcSurvallback');
var KcVS = document.getElementById('KcVS');
var KcVStest = document.getElementById('KcVStest');
var KcVStestback = document.getElementById('KcVStestback');
var KcVSallback = document.getElementById("KcVSallback");
var KcSV = document.getElementById('KcSV');
var KcSVtest = document.getElementById('KcSVtest');
var KcSVtestback = document.getElementById('KcSVtestback');
var KcSVallback = document.getElementById('KcSVallback');
var KcKB = document.getElementById('KcKB');
var KcKBtest = document.getElementById('KcKBtest');
var KcKBtestback = document.getElementById('KcKBtestback');
var KcKBallback = document.getElementById('KcKBallback');
var KcMF = document.getElementById('KcMF');
var KcMFtest = document.getElementById('KcMFtest');
var KcMFtestback = document.getElementById('KcMFtestback');
var KcMFallback = document.getElementById('KcMFallback');
var KcKI = document.getElementById('KcKI');
var KcKItest = document.getElementById('KcKItest');
var KcKItestback = document.getElementById('KcKItestback');
var KcKIallback = document.getElementById('KcKIallback');
var KcFR = document.getElementById('KcFR');
var KcFRtest = document.getElementById('KcFRtest');
var KcFRtestback = document.getElementById('KcFRtestback');
var KcFRallback = document.getElementById('KcFRallback');
var KcMVF = document.getElementById("KcMVF");
var KcMVFtest = document.getElementById('KcMVFtest');
var KcMVFtestback = document.getElementById('KcMVFtestback');
var KcMVFallback = document.getElementById('KcMVFallback');
var KcVV = document.getElementById('KcVV');
var KcVVtest = document.getElementById('KcVVtest');
var KcVVtestback = document.getElementById('KcVVtestback');
var KcVVallback = document.getElementById('KcVVallback');
var KcMY = document.getElementById('KcMY');
var KcMYtest = document.getElementById('KcMYtest');
var KcMYtestback = document.getElementById('KcMYtestback');
var KcMYallback = document.getElementById('KcMYallback');
var KcPLP = document.getElementById('KcPLP');
var KcPLPtest = document.getElementById('KcPLPtest');
var KcPLPtestback = document.getElementById('KcPLPtestback');
var KcPLPallback = document.getElementById('KcPLPallback');
var KcSM = document.getElementById('KcSM');
var KcSMtest = document.getElementById('KcSMtest');
var KcSMtestback = document.getElementById('KcSMtestback');
var KcSMallback = document.getElementById('KcSMallback');
var Kback = document.getElementById('Kback');
var IntvK = false;
var Kvicv = false;
var Kc1v = false;
var Kc2v = false;
var Kc3v = false;
var KcVSv = false;
var IntM = document.getElementById('IntM');
var Mp = document.getElementById('Mp');
var Mtest = document.getElementById('Mtest');
var Mvic = document.getElementById('Mvic');
var Mvictestback = document.getElementById('Mvictestback');
var Mvicallback = document.getElementById('Mvicallback');
var Mother = document.getElementById('Mother');
var Mc1 = document.getElementById('Mc1');
var Mc2 = document.getElementById('Mc2');
var Mc3 = document.getElementById('Mc3');
var Mc4 = document.getElementById('Mc4');
var Mc5 = document.getElementById('Mc5');
var McParty = document.getElementById('McParty');
var McPartytestback = document.getElementById('McPartytestback');
var McPartyallback = document.getElementById('McPartyallback');
var McHIf = document.getElementById('McHIf');
var McHIftest = document.getElementById('McHIftest');
var McHIftestback = document.getElementById('McHIftestback');
var McHIfallback = document.getElementById('McHIfallback');
var McPH5 = document.getElementById('McPH5');
var McPH5test = document.getElementById('McPH5test');
var McPH5testback = document.getElementById('McPH5testback');
var McPH5allback = document.getElementById('McPH5allback');
var McHIrp = document.getElementById('McHIrp');
var McHIrptest = document.getElementById('McHIrptest');
var McHIrptestback = document.getElementById('McHIrptestback');
var McHIrpallback = document.getElementById('McHIrpallback');
var McMP = document.getElementById('McMP');
var McMPtest = document.getElementById('McMPtest');
var McMPtestback = document.getElementById('McMPtestback');
var McMPallback = document.getElementById('McMPallback');
var McNC = document.getElementById('McNC');
var McNCtest = document.getElementById('McNCtest');
var McNCtestback = document.getElementById('McNCtestback');
var McNCallback = document.getElementById('McNCallback');
var McBE = document.getElementById('McBE');
var McBEtest = document.getElementById('McBEtest');
var McBEtestback = document.getElementById('McBEtestback');
var McBEallback = document.getElementById('McBEallback');
var McIfR = document.getElementById('McIfR');
var McIfRtest = document.getElementById('McIfRtest');
var McIfRtestback = document.getElementById('McIfRtestback');
var McIfRallback = document.getElementById('McIfRallback');
var Mcd = document.getElementById('Mcd');
var Mcdtest = document.getElementById('Mcdtest');
var Mcdtestback = document.getElementById('Mcdtestback');
var Mcdallback = document.getElementById('Mcdallback');
var McRSUs = document.getElementById('McRSUs');
var McRSUstest = document.getElementById('McRSUstest');
var McRSUstestback = document.getElementById('McRSUstestback');
var McRSUsallback = document.getElementById('McRSUsallback');
var McSE = document.getElementById('McSE');
var McSEtest = document.getElementById('McSEtest');
var McSEtestback = document.getElementById('McSEtestback');
var McSEallback = document.getElementById('McSEallback');
var McSMP = document.getElementById('McSMP');
var McSMPtest = document.getElementById('McSMPtest');
var McSMPtestback = document.getElementById('McSMPtestback');
var McSMPallback = document.getElementById('McSMPallback');
var McSC = document.getElementById('McSC');
var McSCtest = document.getElementById('McSCtest');
var McSCtestback = document.getElementById('McSCtestback');
var McSCallback = document.getElementById('McSCallback');
var McSurv = document.getElementById('McSurv');
var McSurvtest = document.getElementById('McSurvtest');
var McSurvtestback = document.getElementById('McSurvtestback');
var McSurvallback = document.getElementById('McSurvallback');
var McVS = document.getElementById('McVS');
var McVStest = document.getElementById('McVStest');
var McVStestback = document.getElementById('McVStestback');
var McVSallback = document.getElementById("McVSallback");
var McSV = document.getElementById('McSV');
var McSVtest = document.getElementById('McSVtest');
var McSVtestback = document.getElementById('McSVtestback');
var McSVallback = document.getElementById('McSVallback');
var McKB = document.getElementById('McKB');
var McKBtest = document.getElementById('McKBtest');
var McKBtestback = document.getElementById('McKBtestback');
var McKBallback = document.getElementById('McKBallback');
var McMF = document.getElementById('McMF');
var McMFtest = document.getElementById('McMFtest');
var McMFtestback = document.getElementById('McMFtestback');
var McMFallback = document.getElementById('McMFallback');
var McKI = document.getElementById('McKI');
var McKItest = document.getElementById('McKItest');
var McKItestback = document.getElementById('McKItestback');
var McKIallback = document.getElementById('McKIallback');
var McFR = document.getElementById('McFR');
var McFRtest = document.getElementById('McFRtest');
var McFRtestback = document.getElementById('McFRtestback');
var McFRallback = document.getElementById('McFRallback');
var McMVF = document.getElementById("McMVF");
var McMVFtest = document.getElementById('McMVFtest');
var McMVFtestback = document.getElementById('McMVFtestback');
var McMVFallback = document.getElementById('McMVFallback');
var McVV = document.getElementById('McVV');
var McVVtest = document.getElementById('McVVtest');
var McVVtestback = document.getElementById('McVVtestback');
var McVVallback = document.getElementById('McVVallback');
var McMY = document.getElementById('McMY');
var McMYtest = document.getElementById('McMYtest');
var McMYtestback = document.getElementById('McMYtestback');
var McMYallback = document.getElementById('McMYallback');
var McPLP = document.getElementById('McPLP');
var McPLPtest = document.getElementById('McPLPtest');
var McPLPtestback = document.getElementById('McPLPtestback');
var McPLPallback = document.getElementById('McPLPallback');
var McSM = document.getElementById('McSM');
var McSMtest = document.getElementById('McSMtest');
var McSMtestback = document.getElementById('McSMtestback');
var McSMallback = document.getElementById('McSMallback');
var Mback = document.getElementById('Mback');
var IntvM = false;
var Mvicv = false;
var Mc2v = false;
var Mc3v = false;
var McPartyv = false;
var McPNCv = false;
var GTK = document.getElementById('GTK');
var epilogue = document.getElementById('epilogue');
var GH = document.getElementById('GH');
var GR = document.getElementById('GR');
var GS = document.getElementById('GS');
var GK = document.getElementById('GK');
var GM = document.getElementById('GM');
var Arrested = document.getElementById('Arrested');
var Arrestedreact = document.getElementById('Arrested-react');
var Arrestedotherreact = document.getElementById('Arrested-other-react');
// var IntvM = false;
// var Mvicv = false;
// var MVSv = false;
// var Mc2v = false;
// var Mc3v = false;
// var McPartyv = false;
// var McPNCv = false;
// var IntvK = false;
// var Kvicv = false;
// var Kc1v = false;
// var Kc2v = false;
// var Kc3v = false;
// var KcVSv = false;
// var IntvS = false;
// var ScSurvv = false;
// var ScMPv = false;
// var ScVSv = false;
// var ScSVv = false;
// var ScSMv = false;
// var IntvR = false;
// var Rvicv = false;
// var RcHIfv = false;
// var Rc5v = false;
// var Rcdv = false;
// var IntvH = false;
// var Hotherv = false;
// var Hc1v = false;
// var Hc4v = false;
// var HcVVv = false;
console.dir(instruct);
console.dir(intro);
console.dir(Ii);
console.dir(Iii);
console.dir(IntH);
instruct.onsubmit = function(event){
  event.preventDefault();
  instruct.style.display = "none";
  intro.style.display = "block";
};
intro.onsubmit = function(event){
  event.preventDefault();
  Ii.style.display = "block";
  intro.style.display = "none";
};
Ii.onsubmit = function(event){
  event.preventDefault();
  c1.innerHTML = "The place is messy but the walls seem wellkept.";
  c2.innerHTML = "Torn decorations are all over the place.";
  c3.innerHTML = "There are food and drinks on the kitchen table. Drinks include beer and a little vodka.";
  c4.innerHTML = "The party has lit illegal fireworks. There are a lot of shrapnel and dust on the grass.";
  c5.innerHTML = "There are burn marks on the body.";
  Ii.style.display = "none";
  Iii.style.display = "block";
};
IntH.onsubmit = function(event){
  event.preventDefault();
  Iii.style.display = "none";
  Htest.style.display = "block";
  Hvic.style.display = "block";
  Hother.style.display = "block";
  Hc1.style.display = "block";
  Hc2.style.display = "block";
  Hc3.style.display = "block";
  Hc4.style.display = "block";
  Hc5.style.display = "block";
  HcParty.style.display = 'block';
  Hback.style.display = "block";
  new Hostquestions();
  if (IntvH === false && IntvM === false){
  nextclue('The party was for Person 5 who got a job employment.');
  }
  IntvH = true;
  function Hostquestions(){
  if (IntvH === true || IntvM === true){
    HcParty.style.display = 'block';
    }
  if (Hotherv === true){
    HcIrp.style.display = 'block';
    }
  if (Hc1v === true){
    HcPH5.style.display = 'block';
    }
  if (Hc4v === true){
    HcIf.style.display = 'block';
    }
  if (HcVVv === true){
    HcSV.style.display = 'block';
  }
  if (IntvR === true){
    HcPNC.style.display = 'block';
  }
  if (Rc3v === true){
    HcRd.style.display = 'block';
  }
  if (RcHIfv === true){
    HcIfR.style.display = 'block';
  }
  if (Mvicv === true){
    HcMVF.style.display = 'block';
  }
  if (Mc2v === true){
    HcSM.style.display = 'block';
  }
  if (Mc3v === true){
    HcVV.style.display = 'block';
    HcMF.style.display = 'block';
  }
  if (McPartyv === true){
    HcKI.style.display = 'block';
  }
  if (McPNCv === true){
    HcPLP.style.display = 'block';
  }
  if (Kvicv === true){
    HcVS.style.display = 'block';
  }
  if (Kc2v === true){
    HcMP.style.display = 'block';
  }
  if (KcVSv === true){
    HcSurv.style.display = 'block';
  }
  if (IntvS === true){
    HcSE.style.display = 'block';
  }
  if (ScSurvv === true){
    HcMY.style.display = 'block';
  }
  if (ScMPv === true){
    HcSMP.style.display = 'block';
  }
  if (ScVSv === true){
    HcSC.style.display = 'block';
  }
  if (ScSMv === true){
    HcFR.style.display = 'block';
  }
  if (Rvicv === true){
    HcRSUs.style.display = 'block';
  }
  if (Rc5v === true){
    HcBE.style.display = 'block';
  }
  if (IntvH === true){
    Hp.innerHTML = 'Hello Detective. What do you want to ask me?';
    }
  }
  // var IntvM = false;
// var Mvicv = false;
// var Mc2v = false;
// var Mc3v = false;
// var McPartyv = false;
// var McPNCv = false;
// var IntvK = false;
// var Kvicv = false;
// var Kc1v = false;
// var Kc2v = false;
// var Kc3v = false;
// var KcVSv = false;
// var IntvS = false;
// var ScSurvv = false;
// var ScMPv = false;
// var ScVSv = false;
// var ScSMv = false;
// var Rvicv = false;
// var RcHIfv = false;
// var Rc5v = false;
// var IntvH = false;
// var Hotherv = false;
// var Hc1v = false;
// var Hc4v = false;
// var HcVVv = false;
  Hvic.onsubmit = function(event){
    event.preventDefault();
    Htest.style.display = "none";
    Hvictest.style.display = "block";
    Hvictestback.onsubmit = function(event){
      event.preventDefault();
      Hvictest.style.display = "none";
      Htest.style.display = "block";
      new Hostquestions();
    };
    Hvicallback.onsubmit = function(event){
      event.preventDefault();
      Hvictest.style.display = "none";
      Iii.style.display = "block";
    };
  };
  Hother.onsubmit = function(event){
    event.preventDefault();
  Htest.style.display = "none";
  Hothertest.style.display = "block";
  if (Hotherv === false){
    nextclue('The party host was told to invite random people on behalf of Person 5.');
    Hotherv = true;
  }
    Hothertestback.onsubmit = function(event){
      event.preventDefault();
      Htest.style.display = "block";
      Hothertest.style.display = "none";
      new Hostquestions();
    };
    Hotherallback.onsubmit = function(event){
      event.preventDefault();
      Hothertest.style.display = "none";
      Iii.style.display = "block";
    };
  };
  Hc1.onsubmit = function(event){
    event.preventDefault();
    Htest.style.display = "none";
    Hc1test.style.display = "block";
  if (Hc1v === false){
    nextclue('The party was hosted at person 5\'s house.');
    Hc1v = true;
  }
    Hc1testback.onsubmit = function(event){
      event.preventDefault();
      Hc1test.style.display = "none";
      Htest.style.display = "block";
      new Hostquestions();
    };
    Hc1allback.onsubmit = function(event){
      event.preventDefault();
      Hc1test.style.display = "none";
      Iii.style.display = "block";
    };
  };
  Hc2.onsubmit = function(event){
    event.preventDefault();
    Htest.style.display = "none";
    Hc2test.style.display = "block";
    Hc2testback.onsubmit = function(event){
      event.preventDefault();
      Hc2test.style.display = "none";
      Htest.style.display = "block";
      new Hostquestions();
    };
    Hc2allback.onsubmit = function(event){
      event.preventDefault();
      Hc2test.style.display = "none";
      Iii.style.display = "block";
    };
  };
    Hc3.onsubmit = function(event){
      event.preventDefault();
      Hc3test.style.display = 'block';
      Htest.style.display = "none";
      Hc3testback.onsubmit = function(event){
        event.preventDefault();
        Hc3test.style.display = "none";
        Htest.style.display = "block";
        new Hostquestions();
      };
      Hc3allback.onsubmit = function(event){
        event.preventDefault();
        Hc3test.style.display = "none";
        Iii.style.display = "block";
      };
};
    Hc4.onsubmit = function(event){
      event.preventDefault();
      Hc4test.style.display = 'block';
      Htest.style.display = "none";
      if (Hc4v === false){
        nextclue('The host claims to not have and involvement with the fireworks');
        Hc4v = true;
      }
      Hc4testback.onsubmit = function(event){
        event.preventDefault();
        Hc4test.style.display = "none";
        Htest.style.display = "block";
        new Hostquestions();
      };
      Hc4allback.onsubmit = function(event){
        event.preventDefault();
        Hc4test.style.display = "none";
        Iii.style.display = "block";
      };
    };
      Hc4.onsubmit = function(event){
      event.preventDefault();
      Hc4test.style.display = 'block';
      Htest.style.display = "none";
      if (Hc4v === false){
        nextclue('The host claims to not have any involvement with the fireworks');
        Hc4v = true;
      }
      Hc4testback.onsubmit = function(event){
        event.preventDefault();
        Hc4test.style.display = "none";
        Htest.style.display = "block";
        new Hostquestions();
      };
      Hc4allback.onsubmit = function(event){
        event.preventDefault();
        Hc4test.style.display = "none";
        Iii.style.display = "block";
      };
    };
      Hc5.onsubmit = function(event){
      event.preventDefault();
      Hc5test.style.display = 'block';
      Htest.style.display = 'none';
      Hc5testback.onsubmit = function(event){
        event.preventDefault();
        Hc5test.style.display = "none";
        Htest.style.display = "block";
        new Hostquestions();
      };
      Hc5allback.onsubmit = function(event){
        event.preventDefault();
        Hc5test.style.display = "none";
        Iii.style.display = "block";
      };
    };
      HcParty.onsubmit = function(event){
        event.preventDefault();
        HcPartytest.style.display = "block";
        Htest.style.display = "none";
        HcPartytestback.onsubmit = function(event){
          event.preventDefault();
          HcPartytest.style.display = "none";
          Htest.style.display = "block";
          new Hostquestions();
        };
        HcPartyallback.onsubmit = function(event){
          event.preventDefault();
          HcPartytest.style.display = "none";
          Iii.style.display = "block";
        };
      };
      HcIrp.onsubmit = function(event){
        event.preventDefault();
        HcIrptest.style.display = "block";
        Htest.style.display = "none";
        HcIrptestback.onsubmit = function(event){
          event.preventDefault();
          HcIrptest.style.display = "none";
          Htest.style.display = "block";
          new Hostquestions();
        };
      HcIrpallback.onsubmit = function(event){
        event.preventDefault();
        HcIrptest.style.display = "none";
        Iii.style.display = "block";
        };
      };
      HcPH5.onsubmit = function(event){
        event.preventDefault();
        HcPH5test.style.display = "block";
        Htest.style.display = "none";
        HcPH5testback.onsubmit = function(event){
          event.preventDefault();
          HcPH5test.style.display = "none";
          Htest.style.display = "block";
          new Hostquestions();
        };
        HcPH5allback.onsubmit = function(event){
          event.preventDefault();
          HcPH5test.style.display = "none";
          Iii.style.display = "block";
        };
      };
      HcIf.onsubmit = function(event){
        event.preventDefault();
        HcIftest.style.display = "block";
        Htest.style.display = "none";
        HcIftestback.onsubmit = function(event){
          event.preventDefault();
          HcIftest.style.display = "none";
          Htest.style.display = "block";
          new Hostquestions();
        };
        HcIfallback.onsubmit = function(event){
          event.preventDefault();
          HcIftest.style.display = "none";
          Iii.style.display = "block";
        };
      };
      HcMP.onsubmit = function(event){
        event.preventDefault();
        Htest.style.display = 'none';
        HcMPtest.style.display = "block";
        HcMPtestback.onsubmit = function(event){
          event.preventDefault();
          Htest.style.display = "block";
          HcMPtest.style.display = "none";
          new Hostquestions();
        };
        HcMPallback.onsubmit = function(event){
          event.preventDefault();
          HcMPtest.style.display = "none";
          Iii.style.display = 'block';
        };
      };
      HcPNC.onsubmit = function(event){
        event.preventDefault();
        HcPNCtest.style.display = 'block';
        Htest.style.display = 'none';
        HcPNCtestback.onsubmit = function(event){
          event.preventDefault();
          HcPNCtest.style.display = 'None';
          Htest.style.display = "block";
          new Hostquestions();
        };
        HcPNCallback.onsubmit = function(event){
          event.preventDefault();
          HcPNCtest.style.display = "None";
          Iii.style.display = 'block';
        };
      };
      HcBE.onsubmit = function(event){
        event.preventDefault();
        HcBEtest.style.display = "block";
        Htest.style.display = "none";
        HcBEtestback.onsubmit = function(event){
          event.preventDefault();
          HcBEtest.style.display = "none";
          Htest.style.display = 'block';
          new Hostquestions();
        };
        HcBEallback.onsubmit = function(event){
          event.preventDefault();
          HcBEtest.style.display = 'none';
          Iii.style.display = 'block';
        };
      };
      HcIfR.onsubmit = function(event){
        event.preventDefault();
        HcIfRtest.style.display = 'block';
        Htest.style.display = 'none';
        HcIfRtestback.onsubmit = function(event){
          event.preventDefault();
          HcIfRtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
        }
        HcIfRallback.onsubmit = function(event){
          event.preventDefault();
          HcIfRtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      HcRd.onsubmit = function(event){
        event.preventDefault();
        HcRdtest.style.display = 'block';
        Htest.style.display = 'none';
        HcRdtestback.onsubmit = function(event){
          event.preventDefault();
          HcRdtest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
        };
        HcRdallback.onsubmit = function(event){
          event.preventDefault();
          HcRdtest.style.display = 'none';
          Iii.style.display = 'block';
        };
      };
      HcRSUs.onsubmit = function(event){
        event.preventDefault();
        HcRSUstest.style.display = 'block';
        Htest.style.display = 'none';
        HcRSUstestback.onsubmit = function(event){
          event.preventDefault();
          HcRSUstest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcRSUsallback.onsubmit = function(event){
        event.preventDefault();
        HcRSUstest.style.display = 'none';
        Iii.style.display = 'block';
      };
    };
    HcSE.onsubmit = function(event){
        event.preventDefault();
        HcSEtest.style.display = 'block';
        Htest.style.display = 'none';
        HcSEtestback.onsubmit = function(event){
          event.preventDefault();
          HcSEtest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcSEallback.onsubmit = function(event){
        event.preventDefault();
        HcSEtest.style.display = 'none';
        Iii.style.display = 'block';
      };
    };
    HcSMP.onsubmit = function(event){
        event.preventDefault();
        HcSMPtest.style.display = 'block';
        Htest.style.display = 'none';
        HcSMPtestback.onsubmit = function(event){
          event.preventDefault();
          HcSMPtest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcSMPallback.onsubmit = function(event){
        event.preventDefault();
        HcSMPtest.style.display = 'none';
        Iii.style.display = 'block';
      };
    };
    HcSC.onsubmit = function(event){
        event.preventDefault();
        HcSCtest.style.display = 'block';
        Htest.style.display = 'none';
        HcSCtestback.onsubmit = function(event){
          event.preventDefault();
          HcSCtest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcSCallback.onsubmit = function(event){
        event.preventDefault();
        test.style.display = 'none';
        Iii.style.display = 'block';
      };
    };
    HcSurv.onsubmit = function(event){
        event.preventDefault();
        HcSurvtest.style.display = 'block';
        Htest.style.display = 'none';
        HcSurvtestback.onsubmit = function(event){
          event.preventDefault();
          HcSurvtest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcSurvallback.onsubmit = function(event){
          event.preventDefault();
          HcSurvtest.style.display = 'none';
          Iii.style.display = 'block';
      };
    };
    HcVS.onsubmit = function(event){
        event.preventDefault();
        HcVStest.style.display = 'block';
        Htest.style.display = 'none';
        HcVStestback.onsubmit = function(event){
          event.preventDefault();
          HcVStest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcVSallback.onsubmit = function(event){
          event.preventDefault();
          HcVStest.style.display = 'none';
          Iii.style.display = 'block';
      };
    };
    HcSV.onsubmit = function(event){
        event.preventDefault();
        HcSVtest.style.display = 'block';
        Htest.style.display = 'none';
        HcSVtestback.onsubmit = function(event){
          event.preventDefault();
          HcSVtest.style.display = 'none';
          Htest.style.display = 'block';
          new Hostquestions();
      };
        HcSVallback.onsubmit = function(event){
          event.preventDefault();
          HcSVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcKB.onsubmit = function(event){
        event.preventDefault();
        HcKBtest.style.display = 'block';
        Htest.style.display = 'none';
        HcKBtestback.onsubmit = function(event){
          event.preventDefault();
          HcKBtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcKBallback.onsubmit = function(event){
          event.preventDefault();
          HcKBtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcMF.onsubmit = function(event){
        event.preventDefault();
        HcMFtest.style.display = 'block';
        Htest.style.display = 'none';
        HcMFtestback.onsubmit = function(event){
          event.preventDefault();
          HcMFtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcMFallback.onsubmit = function(event){
          event.preventDefault();
          HcMFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcKI.onsubmit = function(event){
        event.preventDefault();
        HcKItest.style.display = 'block';
        Htest.style.display = 'none';
        HcKItestback.onsubmit = function(event){
          event.preventDefault();
          HcKItest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcKIallback.onsubmit = function(event){
          event.preventDefault();
          HcKItest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcFR.onsubmit = function(event){
        event.preventDefault();
        HcFRtest.style.display = 'block';
        Htest.style.display = 'none';
        HcFRtestback.onsubmit = function(event){
          event.preventDefault();
          HcFRtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcFRallback.onsubmit = function(event){
          event.preventDefault();
          HcSBtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcMVF.onsubmit = function(event){
        event.preventDefault();
        HcMVFtest.style.display = 'block';
        Htest.style.display = 'none';
        HcMVFtestback.onsubmit = function(event){
          event.preventDefault();
          HcMVFtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcMVFallback.onsubmit = function(event){
          event.preventDefault();
          HcMVFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcVV.onsubmit = function(event){
        event.preventDefault();
        HcVVtest.style.display = 'block';
        Htest.style.display = 'none';
        if (HcVVv === false){
          nextclue('Suspect 3 handled the vodka');
          HcVVv = true;
        }
        HcVVtestback.onsubmit = function(event){
          event.preventDefault();
          HcVVtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcVVallback.onsubmit = function(event){
          event.preventDefault();
          HcVVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcMY.onsubmit = function(event){
        event.preventDefault();
        HcMYtest.style.display = 'block';
        Htest.style.display = 'none';
        HcMYtestback.onsubmit = function(event){
          event.preventDefault();
          HcMYtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcMYallback.onsubmit = function(event){
          event.preventDefault();
          HcMYtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcPLP.onsubmit = function(event){
        event.preventDefault();
        HcPLPtest.style.display = 'block';
        Htest.style.display = 'none';
        HcPLPtestback.onsubmit = function(event){
          event.preventDefault();
          HcPLPtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcPLPallback.onsubmit = function(event){
          event.preventDefault();
          HcPLPtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    HcSM.onsubmit = function(event){
        event.preventDefault();
        HcSMtest.style.display = 'block';
        Htest.style.display = 'none';
        HcSMtestback.onsubmit = function(event){
          event.preventDefault();
          HcSMtest.style.display = 'none';
          Htest.style.display = 'block';
          Hostquestions();
      }
        HcSMallback.onsubmit = function(event){
          event.preventDefault();
          HcSMtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
      //.onsubmit = function(event){
        //event.preventDefault();
        //test.style.display = 'block';
        //Htest.style.display = 'none';
        //testback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Htest.style.display = 'block';
      //}
        //allback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Iii.style.display = 'block';
      //}
    //}
  Hback.onsubmit = function(event){
    event.preventDefault();
    Htest.style.display = "none";
    Iii.style.display = "block";
  }
};
IntR.onsubmit = function(event){
  event.preventDefault();
  Iii.style.display = "none";
  Rtest.style.display = "block";
  Rvic.style.display = "block";
  Rother.style.display = "block";
  Rc1.style.display = "block";
  Rc2.style.display = "block";
  Rc3.style.display = "block";
  Rc4.style.display = "block";
  Rc5.style.display = "block";
  Rback.style.display = "block";
  Rquestions();
  IntvR = true;
  function Rquestions(){
  if (IntvH === true || IntvM === true){
    RcParty.style.display = 'block';
    }
  if (Hotherv === true){
    RcHIrp.style.display = 'block';
    }
  if (Hc1v === true){
    RcPH5.style.display = 'block';
    }
  if (Hc4v === true){
    RcHIf.style.display = 'block';
    }
  if (HcVVv === true){
    RcSV.style.display = 'block';
  }
  if (IntvR === true){
    RcNC.style.display = 'block';
  }
  if (Rc3v === true){
    Rcd.style.display = 'block';
  }
  if (RcHIfv === true){
    RcIfR.style.display = 'block';
  }
  if (Mvicv === true){
    RcMVF.style.display = 'block';
  }
  if (Mc2v === true){
    RcSM.style.display = 'block';
  }
  if (Mc3v === true){
    RcVV.style.display = 'block';
    RcMF.style.display = 'block';
  }
  if (McPartyv === true){
    RcKI.style.display = 'block';
  }
  if (McPNCv === true){
    RcPLP.style.display = 'block';
  }
  if (Kvicv === true){
    RcVS.style.display = 'block';
  }
  if (Kc2v === true){
    RcMP.style.display = 'block';
  }
  if (KcVSv === true){
    RcSurv.style.display = 'block';
  }
  if (IntvS === true){
    RcSE.style.display = 'block';
  }
  if (ScSurvv === true){
    RcMY.style.display = 'block';
  }
  if (ScMPv === true){
    RcSMP.style.display = 'block';
  }
  if (ScVSv === true){
    RcSC.style.display = 'block';
  }
  if (ScSMv === true){
    RcFR.style.display = 'block';
  }
  if (Rvicv === true){
    RcRSUs.style.display = 'block';
  }
  if (Rc5v === true){
    RcBE.style.display = 'block';
  }
  if (IntvR === true){
    Rp.innerHTML = 'When will this investigation end? Whatever, ask me away.'
    }
  }
  Rvic.onsubmit = function(event){
    event.preventDefault();
    Rtest.style.display = "none";
    Rvictest.style.display = "block";
    if (Rvicv === false){
      Rvicv = true;
      nextclue('Suspect 2 claims that he and Suspect 3 were upstairs most of the time.')
    };
    Rvictestback.onsubmit = function(event){
      event.preventDefault();
      Rvictest.style.display = "none";
      Rtest.style.display = "block";
      Rquestions();
    }
    Rvicallback.onsubmit = function(event){
      event.preventDefault();
      Rvictest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Rother.onsubmit = function(event){
    event.preventDefault();
    Rtest.style.display = "none";
    Rothertest.style.display = "block";
    Rothertestback.onsubmit = function(event){
      event.preventDefault();
      Rtest.style.display = "block";
      Rothertest.style.display = "none";
      Rquestions();
    }
    Rotherallback.onsubmit = function(event){
      event.preventDefault();
      Rothertest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Rc1.onsubmit = function(event){
    event.preventDefault();
    Rtest.style.display = "none";
    Rc1test.style.display = "block";
    Rc1testback.onsubmit = function(event){
      event.preventDefault();
      Rc1test.style.display = "none";
      Rtest.style.display = "block";
      Rquestions();
    }
    Rc1allback.onsubmit = function(event){
      event.preventDefault();
      Rc1test.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Rc2.onsubmit = function(event){
    event.preventDefault();
    Rtest.style.display = "none";
    Rc2test.style.display = "block";
    Rc2testback.onsubmit = function(event){
      event.preventDefault();
      Rc2test.style.display = "none";
      Rtest.style.display = "block";
      Rquestions()
    }
    Rc2allback.onsubmit = function(event){
      event.preventDefault();
      Rc2test.style.display = "none";
      Iii.style.display = "block";
    }
  }
    Rc3.onsubmit = function(event){
      event.preventDefault();
      Rc3test.style.display = 'block';
      Rtest.style.display = "none";
      if (Rc3v === false){
        nextclue('(Suspect 2) didn\'t get drunk');
        Rc3v = true;
      }
      Rc3testback.onsubmit = function(event){
        event.preventDefault();
        Rc3test.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
      }
      Rc3allback.onsubmit = function(event){
        event.preventDefault();
        Rc3test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Rc4.onsubmit = function(event){
      event.preventDefault();
      Rc4test.style.display = 'block';
      Rtest.style.display = "none";
      Rc4testback.onsubmit = function(event){
        event.preventDefault();
        Rc4test.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
      }
      Rc4allback.onsubmit = function(event){
        event.preventDefault();
        Rc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Rc4.onsubmit = function(event){
      event.preventDefault();
      Rc4test.style.display = 'block';
      Rtest.style.display = "none";
      Rc4testback.onsubmit = function(event){
        event.preventDefault();
        Rc4test.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
      }
      Rc4allback.onsubmit = function(event){
        event.preventDefault();
        Rc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Rc5.onsubmit = function(event){
      event.preventDefault();
      Rc5test.style.display = 'block';
      Rtest.style.display = 'none';
      if (Rc5v === false){
        Rc5v = true;
        nextclue('The body may have been electrocuted');
      }
      Rc5testback.onsubmit = function(event){
        event.preventDefault();
        Rc5test.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
      }
      Rc5allback.onsubmit = function(event){
        event.preventDefault();
        Rc5test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    RcParty.onsubmit = function(event){
      event.preventDefault();
      RcPartytest.style.display = "block";
      Rtest.style.display = "none";
      RcPartytestback.onsubmit = function(event){
        event.preventDefault();
        RcPartytest.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
      }
      RcPartyallback.onsubmit = function(event){
          event.preventDefault();
          RcPartytest.style.display = "none";
          Iii.style.display = "block"
      }
    }
    RcHIrp.onsubmit = function(event){
      event.preventDefault();
      RcHIrptest.style.display = "block";
      Rtest.style.display = "none";
      RcHIrptestback.onsubmit = function(event){
        event.preventDefault();
        RcHIrptest.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
      }
      RcHIrpallback.onsubmit = function(event){
        event.preventDefault();
        RcHIrptest.style.display = "none";
        Iii.style.display = "block"
      }
    }
    RcPH5.onsubmit = function(event){
      event.preventDefault();
      RcPH5test.style.display = "block";
      Rtest.style.display = "none";
      RcPH5testback.onsubmit = function(event){
        event.preventDefault();
        RcPH5test.style.display = "none";
        Rtest.style.display = "block";
        Rquestions();
        }
      RcPH5allback.onsubmit = function(event){
        event.preventDefault();
        RcPH5test.style.display = "none";
        Iii.style.display = "block"
        }
    }
      RcHIf.onsubmit = function(event){
        event.preventDefault();
        RcHIftest.style.display = "block";
        Rtest.style.display = "none";
        if (RcHIfv === false){
          nextclue('Suspect 2 claims that Suspect 1 lit the fireworks.')
          RcHIfv = true;
        }
        RcHIftestback.onsubmit = function(event){
          event.preventDefault();
          RcHIftest.style.display = "none";
          Rtest.style.display = "block";
          Rquestions();
        }
        RcHIfallback.onsubmit = function(event){
          event.preventDefault();
          RcHIftest.style.display = "none";
          Iii.style.display = "block";
        }
      }
      RcMP.onsubmit = function(event){
        event.preventDefault();
        Rtest.style.display = 'none';
        RcMPtest.style.display = "block";
        RcMPtestback.onsubmit = function(event){
          event.preventDefault();
          Rtest.style.display = "block";
          RcMPtest.style.display = "none";
          Rquestions();
        }
        RcMPallback.onsubmit = function(event){
          event.preventDefault();
          RcMPtest.style.display = "none";
          Iii.style.display = 'block'
        }
      }
      RcNC.onsubmit = function(event){
        event.preventDefault();
        RcNCtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcPNCtestback.onsubmit = function(event){
          event.preventDefault();
          RcNCtest.style.display = 'None';
          Rtest.style.display = "block";
          Rquestions();
        }
        RcNCallback.onsubmit = function(event){
          event.preventDefault();
          RcNCtest.style.display = "None";
          Iii.style.display = 'block';
        }
      }
      RcBE.onsubmit = function(event){
        event.preventDefault();
        RcBEtest.style.display = "block";
        Rtest.style.display = "none";
        RcBEtestback.onsubmit = function(event){
          event.preventDefault();
          RcBEtest.style.display = "none";
          Rtest.style.display = 'block';
          Rquestions();
        }
        RcBEallback.onsubmit = function(event){
          event.preventDefault();
          RcBEtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      RcIfR.onsubmit = function(event){
        event.preventDefault();
        RcIfRtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcIfRtestback.onsubmit = function(event){
          event.preventDefault();
          RcIfRtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
        }
        RcIfRallback.onsubmit = function(event){
          event.preventDefault();
          RcIfRtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      Rcd.onsubmit = function(event){
        event.preventDefault();
        Rcdtest.style.display = 'block';
        Rtest.style.display = 'none';
        Rcdtestback.onsubmit = function(event){
          event.preventDefault();
          Rcdtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
        }
        Rcdallback.onsubmit = function(event){
          event.preventDefault();
          Rcdtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      RcRSUs.onsubmit = function(event){
        event.preventDefault();
        RcRSUstest.style.display = 'block';
        Rtest.style.display = 'none';
        RcRSUstestback.onsubmit = function(event){
          event.preventDefault();
          RcRSUstest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcRSUsallback.onsubmit = function(event){
        event.preventDefault();
        RcRSUstest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    RcSE.onsubmit = function(event){
        event.preventDefault();
        RcSEtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcSEtestback.onsubmit = function(event){
          event.preventDefault();
          RcSEtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcSEallback.onsubmit = function(event){
        event.preventDefault();
        RcSEtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    RcSMP.onsubmit = function(event){
        event.preventDefault();
        RcSMPtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcSMPtestback.onsubmit = function(event){
          event.preventDefault();
          RcSMPtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcSMPallback.onsubmit = function(event){
        event.preventDefault();
        RcSMPtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    RcSC.onsubmit = function(event){
        event.preventDefault();
        RcSCtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcSCtestback.onsubmit = function(event){
          event.preventDefault();
          RcSCtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcSCallback.onsubmit = function(event){
        event.preventDefault();
        test.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    RcSurv.onsubmit = function(event){
        event.preventDefault();
        RcSurvtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcSurvtestback.onsubmit = function(event){
          event.preventDefault();
          RcSurvtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcSurvallback.onsubmit = function(event){
          event.preventDefault();
          RcSurvtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcVS.onsubmit = function(event){
        event.preventDefault();
        RcVStest.style.display = 'block';
        Rtest.style.display = 'none';
        RcVStestback.onsubmit = function(event){
          event.preventDefault();
          RcVStest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcVSallback.onsubmit = function(event){
          event.preventDefault();
          RcVStest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcSV.onsubmit = function(event){
        event.preventDefault();
        RcSVtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcSVtestback.onsubmit = function(event){
          event.preventDefault();
          RcSVtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcSVallback.onsubmit = function(event){
          event.preventDefault();
          RcSVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcKB.onsubmit = function(event){
        event.preventDefault();
        RcKBtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcKBtestback.onsubmit = function(event){
          event.preventDefault();
          RcKBtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcKBallback.onsubmit = function(event){
          event.preventDefault();
          RcKBtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcMF.onsubmit = function(event){
        event.preventDefault();
        RcMFtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcMFtestback.onsubmit = function(event){
          event.preventDefault();
          RcMFtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcMFallback.onsubmit = function(event){
          event.preventDefault();
          RcMFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcKI.onsubmit = function(event){
        event.preventDefault();
        RcKItest.style.display = 'block';
        Rtest.style.display = 'none';
        RcKItestback.onsubmit = function(event){
          event.preventDefault();
          RcKItest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcKIallback.onsubmit = function(event){
          event.preventDefault();
          RcKItest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcFR.onsubmit = function(event){
        event.preventDefault();
        RcFRtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcFRtestback.onsubmit = function(event){
          event.preventDefault();
          RcFRtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcFRallback.onsubmit = function(event){
          event.preventDefault();
          RcFRtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcMVF.onsubmit = function(event){
        event.preventDefault();
        RcMVFtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcMVFtestback.onsubmit = function(event){
          event.preventDefault();
          RcMVFtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcMVFallback.onsubmit = function(event){
          event.preventDefault();
          RcMVFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcVV.onsubmit = function(event){
        RcVVevent.preventDefault();
        test.style.display = 'block';
        Rtest.style.display = 'none';
        RcVVtestback.onsubmit = function(event){
          event.preventDefault();
          RcVVtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcVVallback.onsubmit = function(event){
          event.preventDefault();
          RcVVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcMY.onsubmit = function(event){
        event.preventDefault();
        RcMYtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcMYtestback.onsubmit = function(event){
          event.preventDefault();
          RcMYtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcMYallback.onsubmit = function(event){
          event.preventDefault();
          RcMYtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcPLP.onsubmit = function(event){
        event.preventDefault();
        RcPLPtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcPLPtestback.onsubmit = function(event){
          event.preventDefault();
          RcPLPtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcPLPallback.onsubmit = function(event){
          event.preventDefault();
          RcPLPtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    RcSM.onsubmit = function(event){
        event.preventDefault();
        RcSMtest.style.display = 'block';
        Rtest.style.display = 'none';
        RcSMtestback.onsubmit = function(event){
          event.preventDefault();
          RcSMtest.style.display = 'none';
          Rtest.style.display = 'block';
          Rquestions();
      }
        RcSMallback.onsubmit = function(event){
          event.preventDefault();
          RcSMtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }

      //.onsubmit = function(event){
        //event.preventDefault();
        //test.style.display = 'block';
        //Htest.style.display = 'none';
        //testback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Htest.style.display = 'block';
      //}
        //allback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Iii.style.display = 'block';
      //}
    //}
  Rback.onsubmit = function(event){
    event.preventDefault();
    Rtest.style.display = "none";
    Iii.style.display = "block";
  }
};
IntS.onsubmit = function(event){
  event.preventDefault();
  Iii.style.display = "none";
  Stest.style.display = "block";
  Svic.style.display = "block";
  Sother.style.display = "block";
  Sc1.style.display = "block";
  Sc2.style.display = "block";
  Sc3.style.display = "block";
  Sc4.style.display = "block";
  Sc5.style.display = "block";
  ScParty.style.display = 'block';
  Sback.style.display = "block";
  Squestions();
  if (IntvS === false){
    nextclue('(Suspect 3) was at the party early')
  }
  IntvS = true;
  function Squestions(){
  if (IntvH === true || IntvM === true){
    ScParty.style.display = 'block';
    }
  if (Hotherv === true){
    ScHIrp.style.display = 'block';
    }
  if (Hc1v === true){
    ScPH5.style.display = 'block';
    }
  if (Hc4v === true){
    ScHIf.style.display = 'block';
    }
  if (HcVVv === true){
    ScSV.style.display = 'block';
  }
  if (Rc3v === true){
    ScRd.style.display = 'block';
  }
  if (RcHIfv === true){
    ScIfR.style.display = 'block';
  }
  if (Mvicv === true){
    ScMVF.style.display = 'block';
  }
  if (Mc2v === true){
    ScSM.style.display = 'block';
  }
  if (Mc3v === true){
    ScVV.style.display = 'block';
    ScMF.style.display = 'block';
  }
  if (McPartyv === true){
    ScKI.style.display = 'block';
  }
  if (McPNCv === true){
    ScPLP.style.display = 'block';
  }
  if (Kvicv === true){
    ScVS.style.display = 'block';
  }
  if (Kc2v === true){
    ScMP.style.display = 'block';
  }
  if (KcVSv === true){
    ScSurv.style.display = 'block';
  }
  if (IntvS === true){
    ScSE.style.display = 'block';
  }
  if (ScSurvv === true){
    ScMY.style.display = 'block';
  }
  if (ScMPv === true){
    ScSMP.style.display = 'block';
  }
  if (ScVSv === true){
    ScSC.style.display = 'block';
  }
  if (ScSMv === true){
    ScFR.style.display = 'block';
  }
  if (Rvicv === true){
    ScRSUs.style.display = 'block';
  }
  if (Rc5v === true){
    ScBE.style.display = 'block';
  }
  if (IntvS === true){
    Sp.innerHTML = 'Do you need something?'
    }
  }
  Svic.onsubmit = function(event){
    event.preventDefault();
    Stest.style.display = "none";
    Svictest.style.display = "block";
    Svictestback.onsubmit = function(event){
      event.preventDefault();
      Svictest.style.display = "none";
      Stest.style.display = "block";
      Squestions();
    }
    Svicallback.onsubmit = function(event){
      event.preventDefault();
      Svictest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Sother.onsubmit = function(event){
    event.preventDefault();
    Stest.style.display = "none";
    Sothertest.style.display = "block";
    Sothertestback.onsubmit = function(event){
      event.preventDefault();
      Stest.style.display = "block";
      Sothertest.style.display = "none";
      Squestions();
    }
    Sotherallback.onsubmit = function(event){
      event.preventDefault();
      Sothertest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Sc1.onsubmit = function(event){
    event.preventDefault();
    Stest.style.display = "none";
    Sc1test.style.display = "block";
    Sc1testback.onsubmit = function(event){
      event.preventDefault();
      Sc1test.style.display = "none";
      Stest.style.display = "block";
      Squestions();
    };
    Sc1allback.onsubmit = function(event){
      event.preventDefault();
      Sc1test.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Sc2.onsubmit = function(event){
    event.preventDefault();
    Stest.style.display = "none";
    Sc2test.style.display = "block";
    Sc2testback.onsubmit = function(event){
      event.preventDefault();
      Sc2test.style.display = "none";
      Stest.style.display = "block";
      Squestions()
    }
    Sc2allback.onsubmit = function(event){
      event.preventDefault();
      Sc2test.style.display = "none";
      Iii.style.display = "block";
    }
  }
    Sc3.onsubmit = function(event){
      event.preventDefault();
      Sc3test.style.display = 'block';
      Stest.style.display = "none";
      Sc3testback.onsubmit = function(event){
        event.preventDefault();
        Sc3test.style.display = "none";
        Stest.style.display = "block";
        Squestions();
      }
      Sc3allback.onsubmit = function(event){
        event.preventDefault();
        Sc3test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Sc4.onsubmit = function(event){
      event.preventDefault();
      Sc4test.style.display = 'block';
      Stest.style.display = "none";
      Sc4testback.onsubmit = function(event){
        event.preventDefault();
        Sc4test.style.display = "none";
        Stest.style.display = "block";
        Squestions();
      }
      Sc4allback.onsubmit = function(event){
        event.preventDefault();
        Sc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Sc4.onsubmit = function(event){
      event.preventDefault();
      Sc4test.style.display = 'block';
      Stest.style.display = "none";
      Sc4testback.onsubmit = function(event){
        event.preventDefault();
        Sc4test.style.display = "none";
        Stest.style.display = "block";
        Squestions();
      }
      Sc4allback.onsubmit = function(event){
        event.preventDefault();
        Sc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Sc5.onsubmit = function(event){
      event.preventDefault();
      Sc5test.style.display = 'block';
      Stest.style.display = 'none';
      Sc5testback.onsubmit = function(event){
        event.preventDefault();
        Sc5test.style.display = "none";
        Stest.style.display = "block";
        Squestions();
      }
      Sc5allback.onsubmit = function(event){
        event.preventDefault();
        Sc5test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    ScParty.onsubmit = function(event){
      event.preventDefault();
      ScPartytest.style.display = "block";
      Stest.style.display = "none";
      ScPartytestback.onsubmit = function(event){
        event.preventDefault();
        ScPartytest.style.display = "none";
        Stest.style.display = "block";
        Squestions();
      }
      ScPartyallback.onsubmit = function(event){
          event.preventDefault();
          ScPartytest.style.display = "none";
          Iii.style.display = "block"
      }
    }
    ScHIrp.onsubmit = function(event){
      event.preventDefault();
      ScHIrptest.style.display = "block";
      Stest.style.display = "none";
      ScHIrptestback.onsubmit = function(event){
        event.preventDefault();
        ScHIrptest.style.display = "none";
        Stest.style.display = "block";
        Squestions();
      }
      ScHIrpallback.onsubmit = function(event){
        event.preventDefault();
        ScHIrptest.style.display = "none";
        Iii.style.display = "block"
      }
    }
    ScPH5.onsubmit = function(event){
      event.preventDefault();
      ScPH5test.style.display = "block";
      Stest.style.display = "none";
      ScPH5testback.onsubmit = function(event){
        event.preventDefault();
        ScPH5test.style.display = "none";
        Stest.style.display = "block";
        Squestions();
        }
      ScPH5allback.onsubmit = function(event){
        event.preventDefault();
        ScPH5test.style.display = "none";
        Iii.style.display = "block"
        }
    }
      ScHIf.onsubmit = function(event){
        event.preventDefault();
        ScHIftest.style.display = "block";
        Stest.style.display = "none";
        ScHIftestback.onsubmit = function(event){
          event.preventDefault();
          ScHIftest.style.display = "none";
          Stest.style.display = "block";
          Squestions();
        }
        ScHIfallback.onsubmit = function(event){
          event.preventDefault();
          ScHIftest.style.display = "none";
          Iii.style.display = "block";
        }
      }
      ScMP.onsubmit = function(event){
        event.preventDefault();
        Stest.style.display = 'none';
        ScMPtest.style.display = "block";
        if (ScMPv === false){
          nextclue('(Person 3) made the mess on purpose');
          ScMPv = true;
        }
        ScMPtestback.onsubmit = function(event){
          event.preventDefault();
          Stest.style.display = "block";
          ScMPtest.style.display = "none";
          Squestions();
        }
        ScMPallback.onsubmit = function(event){
          event.preventDefault();
          ScMPtest.style.display = "none";
          Iii.style.display = 'block'
        }
      }
      ScPNC.onsubmit = function(event){
        event.preventDefault();
        ScPNCtest.style.display = 'block';
        Stest.style.display = 'none';
        ScPNCtestback.onsubmit = function(event){
          event.preventDefault();
          ScPNCtest.style.display = 'None';
          Stest.style.display = "block";
          Squestions();
        }
        ScPNCallback.onsubmit = function(event){
          event.preventDefault();
          ScPNCtest.style.display = "None";
          Iii.style.display = 'block';
        }
      }
      ScBE.onsubmit = function(event){
        event.preventDefault();
        ScBEtest.style.display = "block";
        Stest.style.display = "none";
        ScBEtestback.onsubmit = function(event){
          event.preventDefault();
          ScBEtest.style.display = "none";
          Stest.style.display = 'block';
          Squestions();
        }
        ScBEallback.onsubmit = function(event){
          event.preventDefault();
          ScBEtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      ScIfR.onsubmit = function(event){
        event.preventDefault();
        ScIfStest.style.display = 'block';
        Stest.style.display = 'none';
        ScIfStestback.onsubmit = function(event){
          event.preventDefault();
          ScIfStest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
        }
        ScIfRallback.onsubmit = function(event){
          event.preventDefault();
          ScIfStest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      ScRd.onsubmit = function(event){
        event.preventDefault();
        ScRdtest.style.display = 'block';
        Stest.style.display = 'none';
        ScRdtestback.onsubmit = function(event){
          event.preventDefault();
          ScRdtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
        }
        ScRdallback.onsubmit = function(event){
          event.preventDefault();
          ScRdtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      ScRSUs.onsubmit = function(event){
        event.preventDefault();
        ScRSUstest.style.display = 'block';
        Stest.style.display = 'none';
        ScRSUstestback.onsubmit = function(event){
          event.preventDefault();
          ScRSUstest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScRSUsallback.onsubmit = function(event){
        event.preventDefault();
        ScRSUstest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    ScSE.onsubmit = function(event){
        event.preventDefault();
        ScSEtest.style.display = 'block';
        Stest.style.display = 'none';
        ScSEtestback.onsubmit = function(event){
          event.preventDefault();
          ScSEtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScSEallback.onsubmit = function(event){
        event.preventDefault();
        ScSEtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    ScSMP.onsubmit = function(event){
        event.preventDefault();
        ScSMPtest.style.display = 'block';
        Stest.style.display = 'none';
        }
        ScSMPtestback.onsubmit = function(event){
          event.preventDefault();
          ScSMPtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScSMPallback.onsubmit = function(event){
        event.preventDefault();
        ScSMPtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    ScSC.onsubmit = function(event){
        event.preventDefault();
        ScSCtest.style.display = 'block';
        Stest.style.display = 'none';
        ScSCtestback.onsubmit = function(event){
          event.preventDefault();
          ScSCtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScSCallback.onsubmit = function(event){
        event.preventDefault();
        test.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    ScSurv.onsubmit = function(event){
        event.preventDefault();
        ScSurvtest.style.display = 'block';
        Stest.style.display = 'none';
        if (ScSurvv === false){
          nextclue('Suspect 5 wasn\'t in the yard during the party')
          ScSurvv = true;
        }
        ScSurvtestback.onsubmit = function(event){
          event.preventDefault();
          ScSurvtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScSurvallback.onsubmit = function(event){
          event.preventDefault();
          ScSurvtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScVS.onsubmit = function(event){
        event.preventDefault();
        ScVStest.style.display = 'block';
        Stest.style.display = 'none';
        if (ScVSv === false){
          nextclue('(Suspect 3) was here to find the guy who robbed him.');
          for (var ccount = 6; ccount < 31; ccount ++){
            if (document.getElementById('c' + ccount).innerHTML == 'The victim stole from someone'){
              document.getElementById('c' + ccount).innerHTML = 'The victim stole from person 3.';
            }
          }
          ScVSv = true;
        }
        ScVStestback.onsubmit = function(event){
          event.preventDefault();
          ScVStest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScVSallback.onsubmit = function(event){
          event.preventDefault();
          ScVStest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScSV.onsubmit = function(event){
        event.preventDefault();
        ScSVtest.style.display = 'block';
        Stest.style.display = 'none';
        if (ScSVv === false && ScVSv === true){
          for (var ccount = 6;ccount < 31; ccount ++){
            if (document.getElementById('c' + ccount).innerHTML == 'Suspect 3 handled the vodka'){
              document.getElementById('c' + ccount).innerHTML = 'Suspect 3 heavily intoxicated the vodka';
            }
          }
          ScSVv = true;
        }
        ScSVtestback.onsubmit = function(event){
          event.preventDefault();
          ScSVtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScSVallback.onsubmit = function(event){
          event.preventDefault();
          ScSVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScKB.onsubmit = function(event){
        event.preventDefault();
        ScKBtest.style.display = 'block';
        Stest.style.display = 'none';
        ScKBtestback.onsubmit = function(event){
          event.preventDefault();
          ScKBtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScKBallback.onsubmit = function(event){
          event.preventDefault();
          ScKBtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScMF.onsubmit = function(event){
        event.preventDefault();
        ScMFtest.style.display = 'block';
        Stest.style.display = 'none';
        ScMFtestback.onsubmit = function(event){
          event.preventDefault();
          ScMFtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScMFallback.onsubmit = function(event){
          event.preventDefault();
          ScMFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScKI.onsubmit = function(event){
        event.preventDefault();
        ScKItest.style.display = 'block';
        Stest.style.display = 'none';
        ScKItestback.onsubmit = function(event){
          event.preventDefault();
          ScKItest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScKIallback.onsubmit = function(event){
          event.preventDefault();
          ScKItest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScFR.onsubmit = function(event){
        event.preventDefault();
        ScFRtest.style.display = 'block';
        Stest.style.display = 'none';
        ScFRtestback.onsubmit = function(event){
          event.preventDefault();
          ScFRtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScFRallback.onsubmit = function(event){
          event.preventDefault();
          ScFRtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScMVF.onsubmit = function(event){
        event.preventDefault();
        ScMVFtest.style.display = 'block';
        Stest.style.display = 'none';
        ScMVFtestback.onsubmit = function(event){
          event.preventDefault();
          ScMVFtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScMVFallback.onsubmit = function(event){
          event.preventDefault();
          ScMVFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScVV.onsubmit = function(event){
        ScVVevent.preventDefault();
        test.style.display = 'block';
        Stest.style.display = 'none';
        ScVVtestback.onsubmit = function(event){
          event.preventDefault();
          ScVVtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScVVallback.onsubmit = function(event){
          event.preventDefault();
          ScVVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScMY.onsubmit = function(event){
        event.preventDefault();
        ScMYtest.style.display = 'block';
        Stest.style.display = 'none';
        ScMYtestback.onsubmit = function(event){
          event.preventDefault();
          ScMYtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScMYallback.onsubmit = function(event){
          event.preventDefault();
          ScMYtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScPLP.onsubmit = function(event){
        event.preventDefault();
        ScPLPtest.style.display = 'block';
        Stest.style.display = 'none';
        ScPLPtestback.onsubmit = function(event){
          event.preventDefault();
          ScPLPtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScPLPallback.onsubmit = function(event){
          event.preventDefault();
          ScPLPtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    ScSM.onsubmit = function(event){
        event.preventDefault();
        ScSMtest.style.display = 'block';
        Stest.style.display = 'none';
        if (ScSMv === false && ScSurvv === true){
          nextclue('Suspect 3\'s cameras showed the fight that happened');
          ScSMv = true;
        }
        ScSMtestback.onsubmit = function(event){
          event.preventDefault();
          ScSMtest.style.display = 'none';
          Stest.style.display = 'block';
          Squestions();
      }
        ScSMallback.onsubmit = function(event){
          event.preventDefault();
          ScSMtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }

      //.onsubmit = function(event){
        //event.preventDefault();
        //test.style.display = 'block';
        //Htest.style.display = 'none';
        //testback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Htest.style.display = 'block';
      //}
        //allback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Iii.style.display = 'block';
      //}
    //}
  Sback.onsubmit = function(event){
    event.preventDefault();
    Stest.style.display = "none";
    Iii.style.display = "block";
    }
}
IntK.onsubmit = function(event){
  event.preventDefault();
  Iii.style.display = "none";
  Ktest.style.display = "block";
  Kvic.style.display = "block";
  Kother.style.display = "block";
  Kc1.style.display = "block";
  Kc2.style.display = "block";
  Kc3.style.display = "block";
  Kc4.style.display = "block";
  Kc5.style.display = "block";
  KcParty.style.display = 'block';
  Kback.style.display = "block";
  Kquestions();
  IntvK = true;
  function Kquestions(){
  if (IntvH === true || IntvM === true){
    KcParty.style.display = 'block';
    }
  if (Hotherv === true){
    KcHIrp.style.display = 'block';
    }
  if (Hc1v === true){
    KcPH5.style.display = 'block';
    }
  if (Hc4v === true){
    KcHIf.style.display = 'block';
    }
  if (HcVVv === true){
    KcSV.style.display = 'block';
  }
  if (Rc3v === true){
    KcRd.style.display = 'block';
  }
  if (RcHIfv === true){
    KcIfR.style.display = 'block';
  }
  if (Mvicv === true){
    KcMVF.style.display = 'block';
  }
  if (Mc2v === true){
    KcSM.style.display = 'block';
  }
  if (Mc3v === true){
    KcVV.style.display = 'block';
    KcMF.style.display = 'block';
  }
  if (McPartyv === true){
    KcKI.style.display = 'block';
  }
  if (McPNCv === true){
    KcPLP.style.display = 'block';
  }
  if (Kvicv === true){
    KcVS.style.display = 'block';
  }
  if (Kc2v === true){
    KcMP.style.display = 'block';
  }
  if (KcVSv === true){
    KcSurv.style.display = 'block';
  }
  if (IntvS === true){
    KcSE.style.display = 'block';
  }
  if (ScSurvv === true){
    KcMY.style.display = 'block';
  }
  if (ScMPv === true){
    KcSMP.style.display = 'block';
  }
  if (ScVSv === true){
    KcSC.style.display = 'block';
  }
  if (ScSMv === true){
    KcFR.style.display = 'block';
  }
  if (Rvicv === true){
    KcRSUs.style.display = 'block';
  }
  if (Rc5v === true){
    KcBE.style.display = 'block';
  }
  if (IntvK === true){
    Kp.innerHTML = 'What else do you need to ask me?'
    }
  }
  Kvic.onsubmit = function(event){
    event.preventDefault();
    Ktest.style.display = "none";
    Kvictest.style.display = "block";
    if (Kvicv === false){
      nextclue('The victim stole from someone');
      Kvicv = true;
    }
    Kvictestback.onsubmit = function(event){
      event.preventDefault();
      Kvictest.style.display = "none";
      Ktest.style.display = "block";
      Kquestions();
    }
    Kvicallback.onsubmit = function(event){
      event.preventDefault();
      Kvictest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Kother.onsubmit = function(event){
    event.preventDefault();
    Ktest.style.display = "none";
    Kothertest.style.display = "block";
    Kothertestback.onsubmit = function(event){
      event.preventDefault();
      Ktest.style.display = "block";
      Kothertest.style.display = "none";
      Kquestions();
    }
    Kotherallback.onsubmit = function(event){
      event.preventDefault();
      Kothertest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Kc1.onsubmit = function(event){
    event.preventDefault();
    Ktest.style.display = "none";
    Kc1test.style.display = "block";
    Kc1testback.onsubmit = function(event){
      event.preventDefault();
      Kc1test.style.display = "none";
      Ktest.style.display = "block";
      Kquestions();
    }
    Kc1allback.onsubmit = function(event){
      event.preventDefault();
      Kc1test.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Kc2.onsubmit = function(event){
    event.preventDefault();
    Ktest.style.display = "none";
    Kc2test.style.display = "block";
    if (Kc2v === false){
      Kc2v = true;
      nextclue('Suspect 4 thinks that the mess was done on purpose')
    };
    Kc2testback.onsubmit = function(event){
      event.preventDefault();
      Kc2test.style.display = "none";
      Ktest.style.display = "block";
      Kquestions()
    }
    Kc2allback.onsubmit = function(event){
      event.preventDefault();
      Kc2test.style.display = "none";
      Iii.style.display = "block";
    }
  }
    Kc3.onsubmit = function(event){
      event.preventDefault();
      Kc3test.style.display = 'block';
      Ktest.style.display = "none";
      if (Kc3v === false){
        nextclue('Suspect 4 handled the drinks');
        Kc3v = true;
      }
      Kc3testback.onsubmit = function(event){
        event.preventDefault();
        Kc3test.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
      }
      Kc3allback.onsubmit = function(event){
        event.preventDefault();
        Kc3test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Kc4.onsubmit = function(event){
      event.preventDefault();
      Kc4test.style.display = 'block';
      Ktest.style.display = "none";
      Kc4testback.onsubmit = function(event){
        event.preventDefault();
        Kc4test.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
      }
      Kc4allback.onsubmit = function(event){
        event.preventDefault();
        Kc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Kc4.onsubmit = function(event){
      event.preventDefault();
      Kc4test.style.display = 'block';
      Ktest.style.display = "none";
      Kc4testback.onsubmit = function(event){
        event.preventDefault();
        Kc4test.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
      }
      Kc4allback.onsubmit = function(event){
        event.preventDefault();
        Kc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Kc5.onsubmit = function(event){
      event.preventDefault();
      Kc5test.style.display = 'block';
      Ktest.style.display = 'none';
      Kc5testback.onsubmit = function(event){
        event.preventDefault();
        Kc5test.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
      }
      Kc5allback.onsubmit = function(event){
        event.preventDefault();
        Kc5test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    KcParty.onsubmit = function(event){
      event.preventDefault();
      KcPartytest.style.display = "block";
      Ktest.style.display = "none";
      KcPartytestback.onsubmit = function(event){
        event.preventDefault();
        KcPartytest.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
      }
      KcPartyallback.onsubmit = function(event){
          event.preventDefault();
          KcPartytest.style.display = "none";
          Iii.style.display = "block"
      }
    }
    KcHIrp.onsubmit = function(event){
      event.preventDefault();
      KcHIrptest.style.display = "block";
      Ktest.style.display = "none";
      KcHIrptestback.onsubmit = function(event){
        event.preventDefault();
        KcHIrptest.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
      }
      KcHIrpallback.onsubmit = function(event){
        event.preventDefault();
        KcHIrptest.style.display = "none";
        Iii.style.display = "block"
      }
    }
    KcPH5.onsubmit = function(event){
      event.preventDefault();
      KcPH5test.style.display = "block";
      Ktest.style.display = "none";
      KcPH5testback.onsubmit = function(event){
        event.preventDefault();
        KcPH5test.style.display = "none";
        Ktest.style.display = "block";
        Kquestions();
        }
      KcPH5allback.onsubmit = function(event){
        event.preventDefault();
        KcPH5test.style.display = "none";
        Iii.style.display = "block"
        }
    }
      KcHIf.onsubmit = function(event){
        event.preventDefault();
        KcHIftest.style.display = "block";
        Ktest.style.display = "none";
        if (KcHIfv === false){
          nextclue('Suspect 2 claims that Suspect 1 lit the fireworks.')
          KcHIfv = true;
        }
        KcHIftestback.onsubmit = function(event){
          event.preventDefault();
          KcHIftest.style.display = "none";
          Ktest.style.display = "block";
          Kquestions();
        }
        KcHIfallback.onsubmit = function(event){
          event.preventDefault();
          KcHIftest.style.display = "none";
          Iii.style.display = "block";
        }
      }
      KcMP.onsubmit = function(event){
        event.preventDefault();
        Ktest.style.display = 'none';
        KcMPtest.style.display = "block";
        KcMPtestback.onsubmit = function(event){
          event.preventDefault();
          Ktest.style.display = "block";
          KcMPtest.style.display = "none";
          Kquestions();
        }
        KcMPallback.onsubmit = function(event){
          event.preventDefault();
          KcMPtest.style.display = "none";
          Iii.style.display = 'block'
        }
      }
      KcPNC.onsubmit = function(event){
        event.preventDefault();
        KcPNCtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcPNCtestback.onsubmit = function(event){
          event.preventDefault();
          KcPNCtest.style.display = 'None';
          Ktest.style.display = "block";
          Kquestions();
        }
        KcPNCallback.onsubmit = function(event){
          event.preventDefault();
          KcPNCtest.style.display = "None";
          Iii.style.display = 'block';
        }
      }
      KcBE.onsubmit = function(event){
        event.preventDefault();
        KcBEtest.style.display = "block";
        Ktest.style.display = "none";
        KcBEtestback.onsubmit = function(event){
          event.preventDefault();
          KcBEtest.style.display = "none";
          Ktest.style.display = 'block';
          Kquestions();
        }
        KcBEallback.onsubmit = function(event){
          event.preventDefault();
          KcBEtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      KcIfR.onsubmit = function(event){
        event.preventDefault();
        KcIfKtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcIfKtestback.onsubmit = function(event){
          event.preventDefault();
          KcIfKtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
        }
        KcIfRallback.onsubmit = function(event){
          event.preventDefault();
          KcIfKtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      KcRd.onsubmit = function(event){
        event.preventDefault();
        KcRdtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcRdtestback.onsubmit = function(event){
          event.preventDefault();
          KcRdtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
        }
        KcRdallback.onsubmit = function(event){
          event.preventDefault();
          KcRdtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      KcRSUs.onsubmit = function(event){
        event.preventDefault();
        KcRSUstest.style.display = 'block';
        Ktest.style.display = 'none';
        KcRSUstestback.onsubmit = function(event){
          event.preventDefault();
          KcRSUstest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcRSUsallback.onsubmit = function(event){
        event.preventDefault();
        KcRSUstest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    KcSE.onsubmit = function(event){
        event.preventDefault();
        KcSEtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcSEtestback.onsubmit = function(event){
          event.preventDefault();
          KcSEtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcSEallback.onsubmit = function(event){
        event.preventDefault();
        KcSEtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    KcSMP.onsubmit = function(event){
        event.preventDefault();
        KcSMPtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcSMPtestback.onsubmit = function(event){
          event.preventDefault();
          KcSMPtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcSMPallback.onsubmit = function(event){
        event.preventDefault();
        KcSMPtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    KcSC.onsubmit = function(event){
        event.preventDefault();
        KcSCtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcSCtestback.onsubmit = function(event){
          event.preventDefault();
          KcSCtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcSCallback.onsubmit = function(event){
        event.preventDefault();
        test.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    KcSurv.onsubmit = function(event){
        event.preventDefault();
        KcSurvtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcSurvtestback.onsubmit = function(event){
          event.preventDefault();
          KcSurvtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcSurvallback.onsubmit = function(event){
          event.preventDefault();
          KcSurvtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcVS.onsubmit = function(event){
        event.preventDefault();
        KcVStest.style.display = 'block';
        Ktest.style.display = 'none';
        if (KcVSv === false){
          nextclue('There is a security system');
          KcVSv = true;
        }
        KcVStestback.onsubmit = function(event){
          event.preventDefault();
          KcVStest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcVSallback.onsubmit = function(event){
          event.preventDefault();
          KcVStest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcSV.onsubmit = function(event){
        event.preventDefault();
        KcSVtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcSVtestback.onsubmit = function(event){
          event.preventDefault();
          KcSVtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcSVallback.onsubmit = function(event){
          event.preventDefault();
          KcSVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcKB.onsubmit = function(event){
        event.preventDefault();
        KcKBtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcKBtestback.onsubmit = function(event){
          event.preventDefault();
          KcKBtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcKBallback.onsubmit = function(event){
          event.preventDefault();
          KcKBtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcMF.onsubmit = function(event){
        event.preventDefault();
        KcMFtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcMFtestback.onsubmit = function(event){
          event.preventDefault();
          KcMFtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcMFallback.onsubmit = function(event){
          event.preventDefault();
          KcMFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcKI.onsubmit = function(event){
        event.preventDefault();
        KcKItest.style.display = 'block';
        Ktest.style.display = 'none';
        KcKItestback.onsubmit = function(event){
          event.preventDefault();
          KcKItest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcKIallback.onsubmit = function(event){
          event.preventDefault();
          KcKItest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcFR.onsubmit = function(event){
        event.preventDefault();
        KcFRtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcFRtestback.onsubmit = function(event){
          event.preventDefault();
          KcFRtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcFRallback.onsubmit = function(event){
          event.preventDefault();
          KcFRtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcMVF.onsubmit = function(event){
        event.preventDefault();
        KcMVFtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcMVFtestback.onsubmit = function(event){
          event.preventDefault();
          KcMVFtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcMVFallback.onsubmit = function(event){
          event.preventDefault();
          KcMVFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcVV.onsubmit = function(event){
        KcVVevent.preventDefault();
        test.style.display = 'block';
        Ktest.style.display = 'none';
        KcVVtestback.onsubmit = function(event){
          event.preventDefault();
          KcVVtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcVVallback.onsubmit = function(event){
          event.preventDefault();
          KcVVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcMY.onsubmit = function(event){
        event.preventDefault();
        KcMYtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcMYtestback.onsubmit = function(event){
          event.preventDefault();
          KcMYtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcMYallback.onsubmit = function(event){
          event.preventDefault();
          KcMYtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcPLP.onsubmit = function(event){
        event.preventDefault();
        KcPLPtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcPLPtestback.onsubmit = function(event){
          event.preventDefault();
          KcPLPtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcPLPallback.onsubmit = function(event){
          event.preventDefault();
          KcPLPtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    KcSM.onsubmit = function(event){
        event.preventDefault();
        KcSMtest.style.display = 'block';
        Ktest.style.display = 'none';
        KcSMtestback.onsubmit = function(event){
          event.preventDefault();
          KcSMtest.style.display = 'none';
          Ktest.style.display = 'block';
          Kquestions();
      }
        KcSMallback.onsubmit = function(event){
          event.preventDefault();
          KcSMtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    Kback.onsubmit = function(event){
      event.preventDefault();
      Ktest.style.display = 'none';
      Iii.style.display = 'block';
    }
  }
IntM.onsubmit = function(event){
  event.preventDefault();
  Iii.style.display = "none";
  Mtest.style.display = "block";
  Mvic.style.display = "block";
  Mother.style.display = "block";
  Mc1.style.display = "block";
  Mc2.style.display = "block";
  Mc3.style.display = "block";
  Mc4.style.display = "block";
  Mc5.style.display = "block";
  McParty.style.display = 'block';
  Mback.style.display = "block";
  Mquestions();
  if (IntvM === false && IntvH === false){
    nextclue('The party was for Person 5 who got a job employment.')
  }
  IntvM = true;
  function Mquestions(){
  if (IntvH === true || IntvM === true){
    McParty.style.display = 'block';
    }
  if (Hotherv === true){
    McHIrp.style.display = 'block';
    }
  if (Hc1v === true){
    McPH5.style.display = 'block';
    }
  if (Hc4v === true){
    McHIf.style.display = 'block';
    }
  if (HcVVv === true){
    McSV.style.display = 'block';
  }
  if (Rc3v === true){
    McRd.style.display = 'block';
  }
  if (RcHIfv === true){
    McIfR.style.display = 'block';
  }
  if (Mvicv === true){
    McMVF.style.display = 'block';
  }
  if (Mc2v === true){
    McSM.style.display = 'block';
  }
  if (Mc3v === true){
    McVV.style.display = 'block';
    McMF.style.display = 'block';
  }
  if (McPartyv === true){
    McKI.style.display = 'block';
  }
  if (McPNCv === true){
    McPLP.style.display = 'block';
  }
  if (Kvicv === true){
    McVS.style.display = 'block';
  }
  if (Kc2v === true){
    McMP.style.display = 'block';
  }
  if (KcVSv === true){
    McSurv.style.display = 'block';
  }
  if (IntvS === true){
    McSE.style.display = 'block';
  }
  if (ScSurvv === true){
    McMY.style.display = 'block';
  }
  if (ScMPv === true){
    McSMP.style.display = 'block';
  }
  if (ScVSv === true){
    McSC.style.display = 'block';
  }
  if (ScSMv === true){
    McFR.style.display = 'block';
  }
  if (Rvicv === true){
    McRSUs.style.display = 'block';
  }
  if (Rc5v === true){
    McBE.style.display = 'block';
  }
  if (IntvK === true){
    Mp.innerHTML = 'What else do you need to ask me?'
    }
  }
  Mvic.onsubmit = function(event){
    event.preventDefault();
    Mtest.style.display = "none";
    Mvictest.style.display = "block";
    if (Mvicv === false){
      nextclue('Suspect 5 and the victim were friends');
      Mvicv = true;
    }
    Mvictestback.onsubmit = function(event){
      event.preventDefault();
      Mvictest.style.display = "none";
      Mtest.style.display = "block";
      Mquestions();
    }
    Mvicallback.onsubmit = function(event){
      event.preventDefault();
      Mvictest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Mother.onsubmit = function(event){
    event.preventDefault();
    Mtest.style.display = "none";
    Mothertest.style.display = "block";
    Mothertestback.onsubmit = function(event){
      event.preventDefault();
      Mtest.style.display = "block";
      Mothertest.style.display = "none";
      Mquestions();
    }
    Motherallback.onsubmit = function(event){
      event.preventDefault();
      Mothertest.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Mc1.onsubmit = function(event){
    event.preventDefault();
    Mtest.style.display = "none";
    Mc1test.style.display = "block";
    Mc1testback.onsubmit = function(event){
      event.preventDefault();
      Mc1test.style.display = "none";
      Mtest.style.display = "block";
      Mquestions();
    }
    Mc1allback.onsubmit = function(event){
      event.preventDefault();
      Mc1test.style.display = "none";
      Iii.style.display = "block";
    }
  }
  Mc2.onsubmit = function(event){
    event.preventDefault();
    Mtest.style.display = "none";
    Mc2test.style.display = "block";
    if (Mc2v === false){
      nextclue('Suspect 5 noticed struggle marks around the body');
      Mc2v = true;
    }
    Mc2testback.onsubmit = function(event){
      event.preventDefault();
      Mc2test.style.display = "none";
      Mtest.style.display = "block";
      Mquestions()
    }
    Mc2allback.onsubmit = function(event){
      event.preventDefault();
      Mc2test.style.display = "none";
      Iii.style.display = "block";
    }
  }
    Mc3.onsubmit = function(event){
      event.preventDefault();
      Mc3test.style.display = 'block';
      Mtest.style.display = "none";
      if (Mc3v === false){
        nextclue('The victim liked vodka');
        nextclue('Suspect 5 handled the food');
        Mc3v = true;
      }
      Mc3testback.onsubmit = function(event){
        event.preventDefault();
        Mc3test.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
      }
      Mc3allback.onsubmit = function(event){
        event.preventDefault();
        Mc3test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Mc4.onsubmit = function(event){
      event.preventDefault();
      Mc4test.style.display = 'block';
      Mtest.style.display = "none";
      Mc4testback.onsubmit = function(event){
        event.preventDefault();
        Mc4test.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
      }
      Mc4allback.onsubmit = function(event){
        event.preventDefault();
        Mc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Mc4.onsubmit = function(event){
      event.preventDefault();
      Mc4test.style.display = 'block';
      Mtest.style.display = "none";
      Mc4testback.onsubmit = function(event){
        event.preventDefault();
        Mc4test.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
      }
      Mc4allback.onsubmit = function(event){
        event.preventDefault();
        Mc4test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    Mc5.onsubmit = function(event){
      event.preventDefault();
      Mc5test.style.display = 'block';
      Mtest.style.display = 'none';
      Mc5testback.onsubmit = function(event){
        event.preventDefault();
        Mc5test.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
      }
      Mc5allback.onsubmit = function(event){
        event.preventDefault();
        Mc5test.style.display = "none";
        Iii.style.display = "block";
      }
    }
    McParty.onsubmit = function(event){
      event.preventDefault();
      McPartytest.style.display = "block";
      Mtest.style.display = "none";
      if (McPartyv === false){
        nextclue('Suspect 4 had the idea for the party');
        McPartyv = true;
      }
      McPartytestback.onsubmit = function(event){
        event.preventDefault();
        McPartytest.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
      }
      McPartyallback.onsubmit = function(event){
          event.preventDefault();
          McPartytest.style.display = "none";
          Iii.style.display = "block"
      }
    }
    McHIrp.onsubmit = function(event){
      event.preventDefault();
      McHIrptest.style.display = "block";
      Mtest.style.display = "none";
      McHIrptestback.onsubmit = function(event){
        event.preventDefault();
        McHIrptest.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
      }
      McHIrpallback.onsubmit = function(event){
        event.preventDefault();
        McHIrptest.style.display = "none";
        Iii.style.display = "block"
      }
    }
    McPH5.onsubmit = function(event){
      event.preventDefault();
      McPH5test.style.display = "block";
      Mtest.style.display = "none";
      McPH5testback.onsubmit = function(event){
        event.preventDefault();
        McPH5test.style.display = "none";
        Mtest.style.display = "block";
        Mquestions();
        }
      McPH5allback.onsubmit = function(event){
        event.preventDefault();
        McPH5test.style.display = "none";
        Iii.style.display = "block"
        }
    }
      McHIf.onsubmit = function(event){
        event.preventDefault();
        McHIftest.style.display = "block";
        Mtest.style.display = "none";
        if (McHIfv === false){
          nextclue('Suspect 2 claims that Suspect 1 lit the fireworks.')
          McHIfv = true;
        }
        McHIftestback.onsubmit = function(event){
          event.preventDefault();
          McHIftest.style.display = "none";
          Mtest.style.display = "block";
          Mquestions();
        }
        McHIfallback.onsubmit = function(event){
          event.preventDefault();
          McHIftest.style.display = "none";
          Iii.style.display = "block";
        }
      }
      McMP.onsubmit = function(event){
        event.preventDefault();
        Mtest.style.display = 'none';
        McMPtest.style.display = "block";
        McMPtestback.onsubmit = function(event){
          event.preventDefault();
          Mtest.style.display = "block";
          McMPtest.style.display = "none";
          Mquestions();
        }
        McMPallback.onsubmit = function(event){
          event.preventDefault();
          McMPtest.style.display = "none";
          Iii.style.display = 'block'
        }
      }
      McPNC.onsubmit = function(event){
        event.preventDefault();
        McPNCtest.style.display = 'block';
        Mtest.style.display = 'none';
        if (McPNCv === false){
          nextclue("Suspect 5 doesn't care about the party");
          McPNCv = true;
        }
        McPNCtestback.onsubmit = function(event){
          event.preventDefault();
          McPNCtest.style.display = 'None';
          Mtest.style.display = "block";
          Mquestions();
        }
        McPNCallback.onsubmit = function(event){
          event.preventDefault();
          McPNCtest.style.display = "None";
          Iii.style.display = 'block';
        }
      }
      McBE.onsubmit = function(event){
        event.preventDefault();
        McBEtest.style.display = "block";
        Mtest.style.display = "none";
        McBEtestback.onsubmit = function(event){
          event.preventDefault();
          McBEtest.style.display = "none";
          Mtest.style.display = 'block';
          Mquestions();
        }
        McBEallback.onsubmit = function(event){
          event.preventDefault();
          McBEtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      McIfR.onsubmit = function(event){
        event.preventDefault();
        McIfMtest.style.display = 'block';
        Mtest.style.display = 'none';
        McIfMtestback.onsubmit = function(event){
          event.preventDefault();
          McIfMtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
        }
        McIfRallback.onsubmit = function(event){
          event.preventDefault();
          McIfMtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      McRd.onsubmit = function(event){
        event.preventDefault();
        McRdtest.style.display = 'block';
        Mtest.style.display = 'none';
        McRdtestback.onsubmit = function(event){
          event.preventDefault();
          McRdtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
        }
        McRdallback.onsubmit = function(event){
          event.preventDefault();
          McRdtest.style.display = 'none';
          Iii.style.display = 'block';
        }
      }
      McRSUs.onsubmit = function(event){
        event.preventDefault();
        McRSUstest.style.display = 'block';
        Mtest.style.display = 'none';
        McRSUstestback.onsubmit = function(event){
          event.preventDefault();
          McRSUstest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McRSUsallback.onsubmit = function(event){
        event.preventDefault();
        McRSUstest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    McSE.onsubmit = function(event){
        event.preventDefault();
        McSEtest.style.display = 'block';
        Mtest.style.display = 'none';
        McSEtestback.onsubmit = function(event){
          event.preventDefault();
          McSEtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McSEallback.onsubmit = function(event){
        event.preventDefault();
        McSEtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    McSMP.onsubmit = function(event){
        event.preventDefault();
        McSMPtest.style.display = 'block';
        Mtest.style.display = 'none';
        McSMPtestback.onsubmit = function(event){
          event.preventDefault();
          McSMPtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McSMPallback.onsubmit = function(event){
        event.preventDefault();
        McSMPtest.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    McSC.onsubmit = function(event){
        event.preventDefault();
        McSCtest.style.display = 'block';
        Mtest.style.display = 'none';
        McSCtestback.onsubmit = function(event){
          event.preventDefault();
          McSCtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McSCallback.onsubmit = function(event){
        event.preventDefault();
        test.style.display = 'none';
        Iii.style.display = 'block';
      }
    }
    McSurv.onsubmit = function(event){
        event.preventDefault();
        McSurvtest.style.display = 'block';
        Mtest.style.display = 'none';
        McSurvtestback.onsubmit = function(event){
          event.preventDefault();
          McSurvtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McSurvallback.onsubmit = function(event){
          event.preventDefault();
          McSurvtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McVS.onsubmit = function(event){
        event.preventDefault();
        McVStest.style.display = 'block';
        Mtest.style.display = 'none';
        McVStestback.onsubmit = function(event){
          event.preventDefault();
          McVStest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McVSallback.onsubmit = function(event){
          event.preventDefault();
          McVStest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McSV.onsubmit = function(event){
        event.preventDefault();
        McSVtest.style.display = 'block';
        Mtest.style.display = 'none';
        McSVtestback.onsubmit = function(event){
          event.preventDefault();
          McSVtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McSVallback.onsubmit = function(event){
          event.preventDefault();
          McSVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McKB.onsubmit = function(event){
        event.preventDefault();
        McKBtest.style.display = 'block';
        Mtest.style.display = 'none';
        McKBtestback.onsubmit = function(event){
          event.preventDefault();
          McKBtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McKBallback.onsubmit = function(event){
          event.preventDefault();
          McKBtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McMF.onsubmit = function(event){
        event.preventDefault();
        McMFtest.style.display = 'block';
        Mtest.style.display = 'none';
        McMFtestback.onsubmit = function(event){
          event.preventDefault();
          McMFtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McMFallback.onsubmit = function(event){
          event.preventDefault();
          McMFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McKI.onsubmit = function(event){
        event.preventDefault();
        McKItest.style.display = 'block';
        Mtest.style.display = 'none';
        McKItestback.onsubmit = function(event){
          event.preventDefault();
          McKItest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McKIallback.onsubmit = function(event){
          event.preventDefault();
          McKItest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McFR.onsubmit = function(event){
        event.preventDefault();
        McFRtest.style.display = 'block';
        Mtest.style.display = 'none';
        McFRtestback.onsubmit = function(event){
          event.preventDefault();
          McFRtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McFRallback.onsubmit = function(event){
          event.preventDefault();
          McFRtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McMVF.onsubmit = function(event){
        event.preventDefault();
        McMVFtest.style.display = 'block';
        Mtest.style.display = 'none';
        McMVFtestback.onsubmit = function(event){
          event.preventDefault();
          McMVFtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McMVFallback.onsubmit = function(event){
          event.preventDefault();
          McMVFtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McVV.onsubmit = function(event){
        McVVevent.preventDefault();
        test.style.display = 'block';
        Mtest.style.display = 'none';
        McVVtestback.onsubmit = function(event){
          event.preventDefault();
          McVVtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McVVallback.onsubmit = function(event){
          event.preventDefault();
          McVVtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McMY.onsubmit = function(event){
        event.preventDefault();
        McMYtest.style.display = 'block';
        Mtest.style.display = 'none';
        McMYtestback.onsubmit = function(event){
          event.preventDefault();
          McMYtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McMYallback.onsubmit = function(event){
          event.preventDefault();
          McMYtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McPLP.onsubmit = function(event){
        event.preventDefault();
        McPLPtest.style.display = 'block';
        Mtest.style.display = 'none';
        McPLPtestback.onsubmit = function(event){
          event.preventDefault();
          McPLPtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McPLPallback.onsubmit = function(event){
          event.preventDefault();
          McPLPtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }
    McSM.onsubmit = function(event){
        event.preventDefault();
        McSMtest.style.display = 'block';
        Mtest.style.display = 'none';
        McSMtestback.onsubmit = function(event){
          event.preventDefault();
          McSMtest.style.display = 'none';
          Mtest.style.display = 'block';
          Mquestions();
      }
        McSMallback.onsubmit = function(event){
          event.preventDefault();
          McSMtest.style.display = 'none';
          Iii.style.display = 'block';
      }
    }

      //.onsubmit = function(event){
        //event.preventDefault();
        //test.style.display = 'block';
        //Htest.style.display = 'none';
        //testback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Htest.style.display = 'block';
      //}
        //allback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Iii.style.display = 'block';
      //}
    //}
  Mback.onsubmit = function(event){
    event.preventDefault();
    Mtest.style.display = "none";
    Iii.style.display = "block";
  }
}

      //.onsubmit = function(event){
        //event.preventDefault();
        //test.style.display = 'block';
        //Htest.style.display = 'none';
        //testback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Htest.style.display = 'block';
      //}
        //allback.onsubmit = function(event){
          //event.preventDefault();
          //test.style.display = 'none';
          //Iii.style.display = 'block';
      //}
    //}

function nextclue(clue){
  if (cnext == 6){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 7){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 8){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 9){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 10){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 11){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 12){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 13){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 14){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 15){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 16){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 17){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 18){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 19){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 20){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 21){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 22){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 23){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 24){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 25){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 26){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 27){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 28){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 29){
    document.getElementById('c' + cnext).innerHTML = clue;
  } else if (cnext == 30){
    document.getElementById('c' + cnext).innerHTML = clue;
  }
  cnext = cnext + 1
}
GTK.style.display = 'none';
epilogue.style.display = 'none';
if(cnext === 31){
  GTK.style.display = 'block';
}
GK.onsubmit = function(event){
  event.preventDefault();
  Maintag.style.display = 'none'
  GTK.style.display = 'none';
  epilogue.style.display = 'block';
  Arrested = '(Suspect 4)'
  Arrestedreact.innerHTML = '(Suspect 4) is in shock. He tries to resist, but cooperates in the end';
  Arrestedotherreact.innerHTML = 'a letter along with a package. You decide to read the letter first. It reads, "Hello. It is me, (Person 3). I\'d like to inform you that I spent the rest of yesterday trying to figure out who the killer was in case you got it wrong. I investigated the footage frame by frame. I thought that it was hopeless since the killer\'s face was not on the screen at all. I decided to take a picture of a frame, crop it, then ask the others if they have seen the clothing. When I asked (Suspect 1), they said, \'That is (Suspect 4)\'s jacket. I remember he wore it when I invited him.\' When I heard that, I went back and reviewed some more surveillence footage, and (Suspect 1) is correct. I told (Suspect 5) that the police has arrested the killer and told him my proof. After some explaining, he was glad that the killer was arrested. Good job solving the case! Also, (Suspect 5) has given you something. <br>Sincerely <br> (Suspect 3)"<br> After reading the letter, you open the box. Inside, you find a bag of money and various items. There is a note at the top of the stack. It reads, "Hello detective. After my friend died, he had a will that states 10% of his property goes to me. The rest is given to other friends and family. However, after learning about what he did, I didn\'t feel that it was right to take his property. I felt that the best decision was to give it back to the police. All of this is the stuff he had stolen ((Suspect 3) helped me find the stolen items. He also got back his stuff). Thank you for solving the murder. <br>Sincerely <br> (Suspect 5)." After getting the stuff, you aren\'t too sure what to do. You decide to bring it back to the police station. After that, you go back home and read the rest of the newspaper. It has you on one of the pictures. One section has declared that you have solved the murder. The newspaper makes you act like a hero. After you are done, you decide to just relax and wait for another case to appear.'
}
