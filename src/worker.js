const _0x28c545=_0x4ed9;(function(_0x42e429,_0x2a231b){const _0x464ca0=_0x4ed9,_0x4853ca=_0x42e429();while(!![]){try{const _0x234cda=-parseInt(_0x464ca0(0x98))/0x1*(parseInt(_0x464ca0(0x97))/0x2)+parseInt(_0x464ca0(0xb1))/0x3*(parseInt(_0x464ca0(0xb0))/0x4)+parseInt(_0x464ca0(0x80))/0x5+parseInt(_0x464ca0(0x88))/0x6*(-parseInt(_0x464ca0(0x9b))/0x7)+parseInt(_0x464ca0(0xab))/0x8*(-parseInt(_0x464ca0(0x7b))/0x9)+parseInt(_0x464ca0(0xa0))/0xa*(parseInt(_0x464ca0(0xb2))/0xb)+parseInt(_0x464ca0(0xa5))/0xc;if(_0x234cda===_0x2a231b)break;else _0x4853ca['push'](_0x4853ca['shift']());}catch(_0x2eefa8){_0x4853ca['push'](_0x4853ca['shift']());}}}(_0x5b7f,0xe7726));import{connect}from'cloudflare:sockets';let sha224Password='08f32643dbdacf81d0d511f1ee24b06de759e90f8edf742bbdc57d88',proxyIP='';if(!isValidSHA224(sha224Password))throw new Error(_0x28c545(0x9c));const worker_default={async 'fetch'(_0x179e1c,_0xec8800,_0xb30d1d){const _0x35f5c7=_0x28c545;try{proxyIP=_0xec8800[_0x35f5c7(0x77)]||proxyIP,sha224Password=_0xec8800[_0x35f5c7(0x79)]||sha224Password;const _0x97d36a=_0x179e1c[_0x35f5c7(0x70)]['get'](_0x35f5c7(0x71));if(!_0x97d36a||_0x97d36a!==_0x35f5c7(0xac)){const _0xaf32a7=new URL(_0x179e1c['url']);switch(_0xaf32a7['pathname']){case'/link':const _0x42bc11=_0x179e1c[_0x35f5c7(0x70)][_0x35f5c7(0xa8)]('Host');return new Response(_0x35f5c7(0xa4)+_0x42bc11+':443/?type=ws&host='+_0x42bc11+_0x35f5c7(0x86),{'status':0xc8,'headers':{'Content-Type':_0x35f5c7(0x7c)}});default:return new Response(_0x35f5c7(0x8d),{'status':0x194});}}else return await trojanOverWSHandler(_0x179e1c);}catch(_0x4844cb){let _0xe410a8=_0x4844cb;return new Response(_0xe410a8['toString']());}}};async function trojanOverWSHandler(_0xd0ad06){const _0x151c5d=_0x28c545,_0x26edd3=new WebSocketPair(),[_0x323f9b,_0x34906a]=Object[_0x151c5d(0xa9)](_0x26edd3);_0x34906a[_0x151c5d(0x7f)]();let _0x1ce7c9='',_0x2f90fb='';const _0x55a113=(_0x373de8,_0x3fc407)=>{const _0x476a83=_0x151c5d;console[_0x476a83(0x91)]('['+_0x1ce7c9+':'+_0x2f90fb+']\x20'+_0x373de8,_0x3fc407||'');},_0xd0932e=_0xd0ad06[_0x151c5d(0x70)][_0x151c5d(0xa8)](_0x151c5d(0x8c))||'',_0x5e96b1=makeReadableWebSocketStream(_0x34906a,_0xd0932e,_0x55a113);let _0x4aa478={'value':null},_0x526864=null;return _0x5e96b1[_0x151c5d(0x81)](new WritableStream({async 'write'(_0x172133,_0x3afc03){const _0x3854ca=_0x151c5d;if(_0x526864)return _0x526864(_0x172133);if(_0x4aa478[_0x3854ca(0xaf)]){const _0x5bf5fe=_0x4aa478['value'][_0x3854ca(0x78)][_0x3854ca(0x7e)]();await _0x5bf5fe[_0x3854ca(0x87)](_0x172133),_0x5bf5fe[_0x3854ca(0xb7)]();return;}const {hasError:_0x40806d,message:_0x35e971,portRemote:portRemote=0x1bb,addressRemote:addressRemote='',rawClientData:_0x169845}=await parseTrojanHeader(_0x172133);_0x1ce7c9=addressRemote,_0x2f90fb=portRemote+'--'+Math[_0x3854ca(0xa2)]()+'\x20tcp';if(_0x40806d){throw new Error(_0x35e971);return;}handleTCPOutBound(_0x4aa478,addressRemote,portRemote,_0x169845,_0x34906a,_0x55a113);},'close'(){const _0x2dd0fb=_0x151c5d;_0x55a113(_0x2dd0fb(0x72));},'abort'(_0x58e0c9){const _0x59bd9f=_0x151c5d;_0x55a113(_0x59bd9f(0x84),JSON[_0x59bd9f(0xa7)](_0x58e0c9));}}))[_0x151c5d(0xb4)](_0x5c302f=>{const _0x3f75c4=_0x151c5d;_0x55a113(_0x3f75c4(0x9f),_0x5c302f);}),new Response(null,{'status':0x65,'webSocket':_0x323f9b});}async function parseTrojanHeader(_0x75867b){const _0x5df6a2=_0x28c545;if(_0x75867b[_0x5df6a2(0xad)]<0x38)return{'hasError':!![],'message':_0x5df6a2(0x96)};let _0x2c22f5=0x38;if(new Uint8Array(_0x75867b['slice'](0x38,0x39))[0x0]!==0xd||new Uint8Array(_0x75867b[_0x5df6a2(0x93)](0x39,0x3a))[0x0]!==0xa)return{'hasError':!![],'message':_0x5df6a2(0xb3)};const _0x2b6193=new TextDecoder()[_0x5df6a2(0xae)](_0x75867b['slice'](0x0,_0x2c22f5));if(_0x2b6193!==sha224Password)return{'hasError':!![],'message':'invalid\x20password'};const _0x3705cd=_0x75867b['slice'](_0x2c22f5+0x2);if(_0x3705cd[_0x5df6a2(0xad)]<0x6)return{'hasError':!![],'message':_0x5df6a2(0x90)};const _0x570864=new DataView(_0x3705cd),_0x2e83a5=_0x570864['getUint8'](0x0);if(_0x2e83a5!==0x1)return{'hasError':!![],'message':_0x5df6a2(0x94)};const _0x16c7b4=_0x570864['getUint8'](0x1);let _0x4fca80=0x0,_0x3817c8=0x2,_0x385658='';switch(_0x16c7b4){case 0x1:_0x4fca80=0x4,_0x385658=new Uint8Array(_0x3705cd[_0x5df6a2(0x93)](_0x3817c8,_0x3817c8+_0x4fca80))[_0x5df6a2(0x74)]('.');break;case 0x3:_0x4fca80=new Uint8Array(_0x3705cd[_0x5df6a2(0x93)](_0x3817c8,_0x3817c8+0x1))[0x0],_0x3817c8+=0x1,_0x385658=new TextDecoder()['decode'](_0x3705cd[_0x5df6a2(0x93)](_0x3817c8,_0x3817c8+_0x4fca80));break;case 0x4:_0x4fca80=0x10;const _0x520e94=new DataView(_0x3705cd[_0x5df6a2(0x93)](_0x3817c8,_0x3817c8+_0x4fca80)),_0xcad19c=[];for(let _0x4a6a63=0x0;_0x4a6a63<0x8;_0x4a6a63++){_0xcad19c[_0x5df6a2(0x9e)](_0x520e94[_0x5df6a2(0x8e)](_0x4a6a63*0x2)[_0x5df6a2(0x82)](0x10));}_0x385658=_0xcad19c['join'](':');break;default:return{'hasError':!![],'message':_0x5df6a2(0x75)+_0x16c7b4};}if(!_0x385658)return{'hasError':!![],'message':_0x5df6a2(0x7a)+_0x16c7b4};const _0x4d6291=_0x3817c8+_0x4fca80,_0xe7846b=_0x3705cd['slice'](_0x4d6291,_0x4d6291+0x2),_0x3b4cad=new DataView(_0xe7846b)[_0x5df6a2(0x8e)](0x0);return{'hasError':![],'addressRemote':_0x385658,'portRemote':_0x3b4cad,'rawClientData':_0x3705cd[_0x5df6a2(0x93)](_0x4d6291+0x4)};}async function handleTCPOutBound(_0x3ae624,_0x542c14,_0x7bb291,_0x457c88,_0x5c268c,_0x2afe7f){async function _0x493b7d(_0x590a9c,_0x4b20a1){const _0x494545=_0x4ed9,_0x354184=connect({'hostname':_0x590a9c,'port':_0x4b20a1});_0x3ae624[_0x494545(0xaf)]=_0x354184,_0x2afe7f(_0x494545(0x76)+_0x590a9c+':'+_0x4b20a1);const _0x226311=_0x354184['writable'][_0x494545(0x7e)]();return await _0x226311[_0x494545(0x87)](_0x457c88),_0x226311[_0x494545(0xb7)](),_0x354184;}async function _0x3f6bd0(){const _0x1c6c63=_0x4ed9,_0x3374a7=await _0x493b7d(proxyIP||_0x542c14,_0x7bb291);_0x3374a7['closed'][_0x1c6c63(0xb4)](_0x5b1345=>{const _0x3866f1=_0x1c6c63;console[_0x3866f1(0x91)]('retry\x20tcpSocket\x20closed\x20error',_0x5b1345);})['finally'](()=>{safeCloseWebSocket(_0x5c268c);}),remoteSocketToWS(_0x3374a7,_0x5c268c,null,_0x2afe7f);}const _0x1f7b30=await _0x493b7d(_0x542c14,_0x7bb291);remoteSocketToWS(_0x1f7b30,_0x5c268c,_0x3f6bd0,_0x2afe7f);}function makeReadableWebSocketStream(_0x4116a4,_0x1f434a,_0x52fe04){let _0x4a6dd6=![];const _0x5a756b=new ReadableStream({'start'(_0x58934a){const _0x544952=_0x4ed9;_0x4116a4[_0x544952(0xa1)](_0x544952(0xa3),_0xd1e87d=>{const _0x1c9391=_0x544952;if(_0x4a6dd6)return;const _0x3905bf=_0xd1e87d['data'];_0x58934a[_0x1c9391(0x83)](_0x3905bf);}),_0x4116a4[_0x544952(0xa1)]('close',()=>{const _0x464896=_0x544952;safeCloseWebSocket(_0x4116a4);if(_0x4a6dd6)return;_0x58934a[_0x464896(0x89)]();}),_0x4116a4['addEventListener'](_0x544952(0xb5),_0xd193=>{const _0x3392bb=_0x544952;_0x52fe04(_0x3392bb(0x8b)),_0x58934a[_0x3392bb(0xb5)](_0xd193);});const {earlyData:_0x39e7fe,error:_0x353a19}=base64ToArrayBuffer(_0x1f434a);if(_0x353a19)_0x58934a[_0x544952(0xb5)](_0x353a19);else _0x39e7fe&&_0x58934a[_0x544952(0x83)](_0x39e7fe);},'pull'(_0x7278d0){},'cancel'(_0x38c184){const _0xf710f4=_0x4ed9;if(_0x4a6dd6)return;_0x52fe04(_0xf710f4(0x85)+_0x38c184),_0x4a6dd6=!![],safeCloseWebSocket(_0x4116a4);}});return _0x5a756b;}async function remoteSocketToWS(_0x118143,_0x1709f6,_0x4b8de5,_0x5ab7d4){const _0x4c06fd=_0x28c545;let _0x4b1e11=![];await _0x118143[_0x4c06fd(0xaa)]['pipeTo'](new WritableStream({'start'(){},async 'write'(_0x9220ec,_0x444b82){const _0x5ae697=_0x4c06fd;_0x4b1e11=!![],_0x1709f6[_0x5ae697(0x8a)]!==WS_READY_STATE_OPEN&&_0x444b82[_0x5ae697(0xb5)](_0x5ae697(0x95)),_0x1709f6[_0x5ae697(0x9d)](_0x9220ec);},'close'(){const _0x3a05c4=_0x4c06fd;_0x5ab7d4(_0x3a05c4(0x73)+_0x4b1e11);},'abort'(_0xa167dc){const _0x3bd637=_0x4c06fd;console[_0x3bd637(0xb5)]('remoteSocket.readable\x20abort',_0xa167dc);}}))[_0x4c06fd(0xb4)](_0x156ac1=>{const _0x36d517=_0x4c06fd;console['error'](_0x36d517(0x9a),_0x156ac1['stack']||_0x156ac1),safeCloseWebSocket(_0x1709f6);}),_0x4b1e11===![]&&_0x4b8de5&&(_0x5ab7d4(_0x4c06fd(0xa6)),_0x4b8de5());}function _0x4ed9(_0x33cbbf,_0x54e649){const _0x5b7fa9=_0x5b7f();return _0x4ed9=function(_0x4ed92a,_0x38aadd){_0x4ed92a=_0x4ed92a-0x70;let _0x62d747=_0x5b7fa9[_0x4ed92a];return _0x62d747;},_0x4ed9(_0x33cbbf,_0x54e649);}function isValidSHA224(_0x5d1604){const _0x5618e9=_0x28c545,_0x5c7a8d=/^[0-9a-f]{56}$/i;return _0x5c7a8d[_0x5618e9(0x7d)](_0x5d1604);}function base64ToArrayBuffer(_0x518dab){const _0x50bae3=_0x28c545;if(!_0x518dab)return{'error':null};try{_0x518dab=_0x518dab[_0x50bae3(0x8f)](/-/g,'+')['replace'](/_/g,'/');const _0x57a528=atob(_0x518dab),_0x4df2dd=Uint8Array[_0x50bae3(0x99)](_0x57a528,_0x4d44da=>_0x4d44da[_0x50bae3(0x92)](0x0));return{'earlyData':_0x4df2dd[_0x50bae3(0xb6)],'error':null};}catch(_0x176e41){return{'error':_0x176e41};}}let WS_READY_STATE_OPEN=0x1,WS_READY_STATE_CLOSING=0x2;function safeCloseWebSocket(_0x74a5e6){const _0x4249a4=_0x28c545;try{(_0x74a5e6['readyState']===WS_READY_STATE_OPEN||_0x74a5e6['readyState']===WS_READY_STATE_CLOSING)&&_0x74a5e6[_0x4249a4(0x89)]();}catch(_0x2ebde5){console[_0x4249a4(0xb5)]('safeCloseWebSocket\x20error',_0x2ebde5);}}function _0x5b7f(){const _0x190a58=['invalid\x20addressType\x20is\x20','connected\x20to\x20','PROXYIP','writable','SHA224PASS','address\x20is\x20empty,\x20addressType\x20is\x20','467667lxbyWe','text/plain;charset=utf-8','test','getWriter','accept','8826925hCXXJr','pipeTo','toString','enqueue','readableWebSocketStream\x20is\x20aborted','readableStream\x20was\x20canceled,\x20due\x20to\x20','&security=tls','write','3606DghahR','close','readyState','webSocketServer\x20error','sec-websocket-protocol','404\x20Not\x20found','getUint16','replace','invalid\x20SOCKS5\x20request\x20data','log','charCodeAt','slice','unsupported\x20command,\x20only\x20TCP\x20(CONNECT)\x20is\x20allowed','webSocket\x20connection\x20is\x20not\x20open','invalid\x20data','470072CkIVUh','4FNydZj','from','remoteSocketToWS\x20error:','15407bsvfpg','Saeed89@','send','push','readableWebSocketStream\x20pipeTo\x20error','41290IDnbXi','addEventListener','random','message','trojan://ca110us@','25867464vBBfhv','retry','stringify','get','values','readable','272cHzEDK','websocket','byteLength','decode','value','4IhYYQL','382983nJaays','2475zlixgO','invalid\x20header\x20format\x20(missing\x20CR\x20LF)','catch','error','buffer','releaseLock','headers','Upgrade','readableWebSocketStream\x20is\x20closed','remoteSocket.readable\x20is\x20closed,\x20hasIncomingData:\x20','join'];_0x5b7f=function(){return _0x190a58;};return _0x5b7f();}export{worker_default as default};
