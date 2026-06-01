// @ts-nocheck
// Static topic diagrams migrated from the PHP version.

// ===== FIGURES =====
var FIG_C = {
  ink:'#24201a', soft:'#6b6253', line:'#c9bda8',
  u4:'#c9707a', u4l:'#e0a5ae', u5:'#b8647a', u5l:'#d4a0ae',
  gold:'#c79a3c', paper:'#fbf8f1',
  blue:'#3d6e9e', blueL:'#7fa6c9', purple:'#7a5a9e', purpleL:'#a98fc4',
  red:'#c0504d', green:'#5a9367', pink:'#d98aa8', teal:'#2f8f8f'
};

function figVirus(){var C=FIG_C; return ''+
'<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
'<defs><radialGradient id="vcap" cx="50%" cy="42%" r="60%"><stop offset="0%" stop-color="'+C.u5l+'"/><stop offset="100%" stop-color="'+C.u5+'"/></radialGradient></defs>'+
'<circle cx="180" cy="150" r="108" fill="'+C.u5+'" opacity="0.10" stroke="'+C.u5+'" stroke-width="2" stroke-dasharray="5 5"/>'+
(function(){var s='';for(var i=0;i<14;i++){var a=i/14*2*Math.PI;var cx=180,cy=150;var x1=cx+Math.cos(a)*108,y1=cy+Math.sin(a)*108,x2=cx+Math.cos(a)*124,y2=cy+Math.sin(a)*124;s+='<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+C.gold+'" stroke-width="3"/><circle cx="'+x2+'" cy="'+y2+'" r="5" fill="'+C.gold+'"/>';}return s;})()+
'<polygon points="180,72 232,108 232,170 180,206 128,170 128,108" fill="url(#vcap)" stroke="'+C.ink+'" stroke-width="1.5"/>'+
'<polygon points="180,72 232,108 180,140 128,108" fill="'+C.u5l+'" opacity="0.5"/>'+
'<polygon points="232,108 232,170 180,140" fill="'+C.u5+'" opacity="0.3"/>'+
'<path d="M165,120 q10,-12 20,0 q10,12 20,0 q10,-12 18,0" fill="none" stroke="'+C.paper+'" stroke-width="3" stroke-linecap="round"/>'+
'<path d="M160,150 q10,-12 20,0 q10,12 20,0 q10,-12 22,0" fill="none" stroke="'+C.paper+'" stroke-width="3" stroke-linecap="round"/>'+
'<g font-size="13" fill="'+C.ink+'">'+
'<line x1="316" y1="60" x2="206" y2="120" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="320" y="58" font-weight="bold">Nucleic acid core</text>'+
'<text x="320" y="74" font-size="11" fill="'+C.soft+'">核酸核心 · DNA / RNA</text>'+
'<line x1="316" y1="120" x2="220" y2="150" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="320" y="118" font-weight="bold">Capsid</text>'+
'<text x="320" y="134" font-size="11" fill="'+C.soft+'">衣壳 · protein coat</text>'+
'<line x1="316" y1="190" x2="288" y2="150" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="320" y="188" font-weight="bold">Envelope</text>'+
'<text x="320" y="204" font-size="11" fill="'+C.soft+'">包膜 · lipid (some only)</text>'+
'<line x1="316" y1="248" x2="248" y2="222" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="320" y="246" font-weight="bold">Attachment proteins</text>'+
'<text x="320" y="262" font-size="11" fill="'+C.soft+'">附着蛋白 · binds host</text>'+
'</g></svg>';}

function figPhage(){var C=FIG_C; return ''+
'<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
'<defs><linearGradient id="phead" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+C.purpleL+'"/><stop offset="100%" stop-color="'+C.purple+'"/></linearGradient></defs>'+
'<g transform="translate(150,0)">'+
'<polygon points="0,30 52,60 52,118 0,148 -52,118 -52,60" fill="url(#phead)" stroke="'+C.ink+'" stroke-width="1.5"/>'+
'<polygon points="0,30 52,60 0,90 -52,60" fill="'+C.purpleL+'" opacity="0.6"/>'+
'<path d="M-20,70 q8,-10 16,0 q8,10 16,0 q8,-10 14,0" fill="none" stroke="'+C.paper+'" stroke-width="2.5" stroke-linecap="round"/>'+
'<path d="M-22,95 q8,-10 16,0 q8,10 16,0 q8,-10 16,0" fill="none" stroke="'+C.paper+'" stroke-width="2.5" stroke-linecap="round"/>'+
'<rect x="-12" y="148" width="24" height="10" rx="3" fill="'+C.purple+'"/>'+
'<rect x="-9" y="158" width="18" height="74" fill="'+C.teal+'" stroke="'+C.ink+'" stroke-width="1.2"/>'+
'<line x1="-9" y1="174" x2="9" y2="174" stroke="'+C.ink+'" stroke-width="0.6" opacity="0.5"/>'+
'<line x1="-9" y1="190" x2="9" y2="190" stroke="'+C.ink+'" stroke-width="0.6" opacity="0.5"/>'+
'<line x1="-9" y1="206" x2="9" y2="206" stroke="'+C.ink+'" stroke-width="0.6" opacity="0.5"/>'+
'<rect x="-26" y="232" width="52" height="9" rx="3" fill="'+C.gold+'" stroke="'+C.ink+'" stroke-width="1"/>'+
'<path d="M-24,241 q-20,18 -14,42" fill="none" stroke="'+C.gold+'" stroke-width="2.5" stroke-linecap="round"/>'+
'<path d="M-10,241 q-8,22 -16,40" fill="none" stroke="'+C.gold+'" stroke-width="2.5" stroke-linecap="round"/>'+
'<path d="M24,241 q20,18 14,42" fill="none" stroke="'+C.gold+'" stroke-width="2.5" stroke-linecap="round"/>'+
'<path d="M10,241 q8,22 16,40" fill="none" stroke="'+C.gold+'" stroke-width="2.5" stroke-linecap="round"/>'+
'</g>'+
'<g font-size="13" fill="'+C.ink+'">'+
'<line x1="300" y1="55" x2="200" y2="75" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="304" y="53" font-weight="bold">Icosahedral head</text><text x="304" y="69" font-size="11" fill="'+C.soft+'">头部 · capsid + DNA</text>'+
'<line x1="300" y1="120" x2="178" y2="95" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="304" y="118" font-weight="bold">Nucleic acid</text><text x="304" y="134" font-size="11" fill="'+C.soft+'">核酸核心</text>'+
'<line x1="300" y1="185" x2="170" y2="195" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="304" y="183" font-weight="bold">Tail</text><text x="304" y="199" font-size="11" fill="'+C.soft+'">尾部 · injects DNA</text>'+
'<line x1="300" y1="240" x2="186" y2="237" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="304" y="238" font-weight="bold">Base plate</text><text x="304" y="254" font-size="11" fill="'+C.soft+'">基板 · attaches</text>'+
'<line x1="300" y1="300" x2="180" y2="285" stroke="'+C.soft+'" stroke-width="1"/>'+
'<text x="304" y="298" font-weight="bold">Tail fibers</text><text x="304" y="314" font-size="11" fill="'+C.soft+'">尾纤维 · grip host</text>'+
'</g></svg>';}

function figCycles(){var C=FIG_C; return ''+
'<svg viewBox="0 0 480 430" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
'<defs>'+
'<marker id="ar5" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.u5+'"/></marker>'+
'<marker id="ar4" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.blue+'"/></marker>'+
'<marker id="arg" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.gold+'"/></marker>'+
'</defs>'+
'<circle cx="240" cy="120" r="40" fill="'+C.green+'" opacity="0.18" stroke="'+C.green+'" stroke-width="2"/>'+
'<path d="M222,115 q18,-14 36,0" fill="none" stroke="'+C.green+'" stroke-width="2.5"/>'+
'<text x="240" y="92" text-anchor="middle" font-size="11" fill="'+C.soft+'">1. Attachment + Entry 附着/进入</text>'+
'<text x="240" y="126" text-anchor="middle" font-size="10" fill="'+C.green+'" font-weight="bold">host cell 宿主</text>'+
'<line x1="240" y1="162" x2="240" y2="190" stroke="'+C.soft+'" stroke-width="1.5"/>'+
'<text x="248" y="182" font-size="10" fill="'+C.soft+'">viral DNA inside</text>'+
'<path d="M232,192 L120,210" stroke="'+C.u5+'" stroke-width="1.5" marker-end="url(#ar5)"/>'+
'<rect x="20" y="216" width="180" height="86" rx="10" fill="'+C.u5+'" opacity="0.10" stroke="'+C.u5+'" stroke-width="1.5"/>'+
'<text x="110" y="236" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.u5+'">LYTIC CYCLE 裂解</text>'+
'<text x="110" y="255" text-anchor="middle" font-size="10.5" fill="'+C.ink+'">2. Synthesis 合成 viral parts</text>'+
'<text x="110" y="271" text-anchor="middle" font-size="10.5" fill="'+C.ink+'">3. Assembly 组装 new viruses</text>'+
'<text x="110" y="287" text-anchor="middle" font-size="10.5" fill="'+C.ink+'">4. Release 释放 — cell bursts!</text>'+
'<g transform="translate(110,348)">'+
'<circle r="26" fill="'+C.u5+'" opacity="0.15" stroke="'+C.u5+'" stroke-width="1.5" stroke-dasharray="4 3"/>'+
(function(){var s='';for(var i=0;i<8;i++){var a=i/8*2*Math.PI;var x=Math.cos(a)*40,y=Math.sin(a)*40;s+='<polygon points="'+x+','+(y-5)+' '+(x+5)+','+y+' '+x+','+(y+5)+' '+(x-5)+','+y+'" fill="'+C.u5+'"/>';}return s;})()+
'</g>'+
'<text x="110" y="404" text-anchor="middle" font-size="10" fill="'+C.u5+'" font-weight="bold">host dies 细胞死亡</text>'+
'<path d="M248,192 L360,210" stroke="'+C.blue+'" stroke-width="1.5" marker-end="url(#ar4)"/>'+
'<rect x="280" y="216" width="184" height="86" rx="10" fill="'+C.blue+'" opacity="0.10" stroke="'+C.blue+'" stroke-width="1.5"/>'+
'<text x="372" y="236" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.blue+'">LYSOGENIC 溶原</text>'+
'<text x="372" y="255" text-anchor="middle" font-size="10.5" fill="'+C.ink+'">Viral DNA integrates 整合</text>'+
'<text x="372" y="271" text-anchor="middle" font-size="10.5" fill="'+C.ink+'">into host DNA, stays inactive</text>'+
'<text x="372" y="287" text-anchor="middle" font-size="10.5" fill="'+C.ink+'">copied when host divides 潜伏</text>'+
'<g transform="translate(372,350)">'+
'<circle cx="-16" r="22" fill="'+C.blue+'" opacity="0.15" stroke="'+C.blue+'" stroke-width="1.5"/>'+
'<circle cx="16" r="22" fill="'+C.blue+'" opacity="0.15" stroke="'+C.blue+'" stroke-width="1.5"/>'+
'<line x1="-16" y1="-14" x2="-16" y2="14" stroke="'+C.red+'" stroke-width="2.5"/>'+
'<line x1="16" y1="-14" x2="16" y2="14" stroke="'+C.red+'" stroke-width="2.5"/>'+
'</g>'+
'<text x="372" y="404" text-anchor="middle" font-size="10" fill="'+C.blue+'" font-weight="bold">host lives 细胞存活</text>'+
'<path d="M340,360 q-60,30 -180,20" fill="none" stroke="'+C.gold+'" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#arg)"/>'+
'<text x="240" y="424" text-anchor="middle" font-size="9.5" fill="'+C.gold+'" font-style="italic">may later switch to lytic 可能转裂解</text>'+
'</svg>';}

function figPyramid(){var C=FIG_C;
  var levels=[['Domain','域'],['Kingdom','界'],['Phylum','门'],['Class','纲'],['Order','目'],['Family','科'],['Genus','属'],['Species','种']];
  var rows='';
  levels.forEach(function(l,i){
    var w=110+i*36, x=240-w/2, y=20+i*40; var op=(0.30+i*0.085).toFixed(2);
    rows+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="32" rx="5" fill="'+C.u4+'" opacity="'+op+'" stroke="'+C.u4+'" stroke-width="1.3"/>';
    rows+='<text x="240" y="'+(y+21)+'" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.ink+'">'+l[0]+' <tspan font-size="11" font-weight="normal" fill="'+C.soft+'">'+l[1]+'</tspan></text>';
  });
  return '<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
    rows+
    '<line x1="455" y1="36" x2="455" y2="324" stroke="'+C.soft+'" stroke-width="1.5" marker-end="url(#arP)"/>'+
    '<text x="468" y="40" font-size="10" fill="'+C.soft+'">broad</text>'+
    '<text x="468" y="50" font-size="10" fill="'+C.soft+'">广</text>'+
    '<text x="468" y="318" font-size="10" fill="'+C.soft+'">specific</text>'+
    '<text x="468" y="328" font-size="10" fill="'+C.soft+'">细</text>'+
    '<text x="20" y="350" font-size="10.5" font-style="italic" fill="'+C.soft+'">Dear King Philip Came Over For Good Soup</text>'+
    '<defs><marker id="arP" markerWidth="9" markerHeight="9" refX="5" refY="6" orient="auto"><path d="M0,0 L3,6 L6,0" fill="'+C.soft+'"/></marker></defs>'+
    '</svg>';
}

function figCladogram(){var C=FIG_C; return ''+
'<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
'<path d="M20,290 L60,290" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<path d="M60,290 L60,60 L110,60" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<path d="M60,290 L110,290" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<circle cx="60" cy="290" r="5" fill="'+C.u4+'"/>'+
'<text x="118" y="64" font-size="11.5" fill="'+C.ink+'">Bacteria 细菌</text>'+
'<path d="M110,290 L110,110 L160,110" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<path d="M110,290 L160,290" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<circle cx="110" cy="290" r="5" fill="'+C.u4+'"/>'+
'<text x="168" y="114" font-size="11.5" fill="'+C.ink+'">Worm 蠕虫</text>'+
'<path d="M160,290 L160,160 L210,160" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<path d="M160,290 L210,290" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<circle cx="160" cy="290" r="5" fill="'+C.u4+'"/>'+
'<text x="218" y="164" font-size="11.5" fill="'+C.ink+'">Fish 鱼</text>'+
'<path d="M210,290 L210,210 L260,210" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<path d="M210,290 L260,290" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<circle cx="210" cy="290" r="5" fill="'+C.u4+'"/>'+
'<text x="268" y="214" font-size="11.5" fill="'+C.ink+'">Frog 蛙</text>'+
'<path d="M260,290 L260,255 L310,255" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<path d="M260,290 L310,290" stroke="'+C.ink+'" stroke-width="2.5" fill="none"/>'+
'<circle cx="260" cy="290" r="5" fill="'+C.u4+'"/>'+
'<text x="318" y="259" font-size="11.5" fill="'+C.ink+'">Cat 猫</text>'+
'<text x="318" y="294" font-size="11.5" fill="'+C.ink+'">Human 人</text>'+
'<text x="40" y="312" font-size="9.5" fill="'+C.soft+'">● node = common ancestor 共同祖先</text>'+
'<text x="270" y="312" font-size="9.5" fill="'+C.u5+'">→ derived traits: multicellular, backbone, limbs, fur</text>'+
'</svg>';}

function figBacteria(){var C=FIG_C; return ''+
'<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
'<defs><radialGradient id="bcyto" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#f0e4c8"/><stop offset="100%" stop-color="'+C.gold+'" stop-opacity="0.45"/></radialGradient></defs>'+
'<rect x="70" y="78" width="250" height="134" rx="67" fill="'+C.teal+'" opacity="0.13" stroke="'+C.teal+'" stroke-width="2" stroke-dasharray="6 4"/>'+
'<rect x="80" y="88" width="230" height="114" rx="57" fill="none" stroke="'+C.u5+'" stroke-width="4"/>'+
'<rect x="86" y="94" width="218" height="102" rx="51" fill="url(#bcyto)" stroke="'+C.ink+'" stroke-width="1.5"/>'+
'<path d="M150,135 q15,-18 30,0 q15,18 30,0 q15,-18 28,0" fill="none" stroke="'+C.blue+'" stroke-width="3.5" stroke-linecap="round"/>'+
'<circle cx="130" cy="160" r="9" fill="none" stroke="'+C.purple+'" stroke-width="2.5"/>'+
'<circle cx="250" cy="165" r="7" fill="none" stroke="'+C.purple+'" stroke-width="2.5"/>'+
(function(){var s='';for(var i=0;i<9;i++){var x=110+((i*37)%180),y=110+((i*53)%70);s+='<circle cx="'+x+'" cy="'+y+'" r="2.6" fill="'+C.red+'"/>';}return s;})()+
'<path d="M310,145 q34,-6 50,8 q14,14 36,6" fill="none" stroke="'+C.green+'" stroke-width="2.5"/>'+
(function(){var s='';for(var i=0;i<5;i++){var x=110+i*42;s+='<line x1="'+x+'" y1="92" x2="'+x+'" y2="74" stroke="'+C.ink+'" stroke-width="1.4"/>';}return s;})()+
'<g font-size="11.5" fill="'+C.ink+'">'+
'<text x="64" y="68">Pili 菌毛</text><line x1="100" y1="72" x2="110" y2="84" stroke="'+C.soft+'"/>'+
'<text x="14" y="120" fill="'+C.teal+'" font-weight="bold">Capsule 荚膜</text>'+
'<text x="10" y="150" fill="'+C.u5+'" font-weight="bold">Cell wall 细胞壁</text>'+
'<text x="14" y="180">Membrane 细胞膜</text>'+
'<text x="335" y="115" fill="'+C.blue+'" font-weight="bold">Nucleoid 拟核</text><line x1="333" y1="111" x2="200" y2="130" stroke="'+C.soft+'"/>'+
'<text x="335" y="160" fill="'+C.purple+'" font-weight="bold">Plasmid 质粒</text><line x1="333" y1="156" x2="258" y2="163" stroke="'+C.soft+'"/>'+
'<text x="335" y="240" fill="'+C.red+'">Ribosomes 核糖体</text><line x1="333" y1="236" x2="240" y2="145" stroke="'+C.soft+'"/>'+
'<text x="402" y="135" fill="'+C.green+'" font-weight="bold">Flagellum 鞭毛</text><line x1="400" y1="140" x2="394" y2="156" stroke="'+C.soft+'"/>'+
'</g></svg>';}

function figImmune(){var C=FIG_C; return ''+
'<svg viewBox="0 0 470 300" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
'<rect x="20" y="30" width="430" height="74" rx="12" fill="'+C.green+'" opacity="0.12" stroke="'+C.green+'" stroke-width="1.6"/>'+
'<rect x="20" y="116" width="430" height="74" rx="12" fill="'+C.blue+'" opacity="0.12" stroke="'+C.blue+'" stroke-width="1.6"/>'+
'<rect x="20" y="202" width="430" height="74" rx="12" fill="'+C.purple+'" opacity="0.12" stroke="'+C.purple+'" stroke-width="1.6"/>'+
'<text x="38" y="56" font-size="14" font-weight="bold" fill="'+C.green+'">1 · Innate (1st line) 先天免疫</text>'+
'<text x="38" y="76" font-size="11" fill="'+C.ink+'">Fast · non-specific · no memory 快·非特异·无记忆</text>'+
'<text x="38" y="93" font-size="10.5" fill="'+C.soft+'">skin · mucus · tears · stomach acid 皮肤/黏膜/胃酸</text>'+
'<circle cx="410" cy="67" r="20" fill="'+C.green+'" opacity="0.25"/>'+
'<path d="M410,55 L402,62 L402,72 L410,80 L418,72 L418,62 Z" fill="'+C.green+'" opacity="0.7"/>'+
'<text x="38" y="142" font-size="14" font-weight="bold" fill="'+C.blue+'">2 · Innate cells 巨噬细胞</text>'+
'<text x="38" y="162" font-size="11" fill="'+C.ink+'">Macrophages engulf &amp; digest pathogens</text>'+
'<text x="38" y="179" font-size="10.5" fill="'+C.soft+'">phagocytosis 吞噬 · still non-specific</text>'+
'<circle cx="410" cy="153" r="20" fill="'+C.blue+'" opacity="0.22"/>'+
'<circle cx="410" cy="153" r="13" fill="none" stroke="'+C.blue+'" stroke-width="2"/>'+
'<circle cx="406" cy="150" r="4" fill="'+C.red+'"/>'+
'<text x="38" y="228" font-size="14" font-weight="bold" fill="'+C.purple+'">3 · Adaptive 适应性免疫</text>'+
'<text x="38" y="248" font-size="11" fill="'+C.ink+'">Specific · has memory 特异·有记忆</text>'+
'<text x="38" y="265" font-size="10.5" fill="'+C.soft+'">B cells → antibodies · T cells kill infected cells</text>'+
'<g transform="translate(410,239)" stroke="'+C.purple+'" stroke-width="3" fill="none" stroke-linecap="round">'+
'<path d="M0,12 L0,0"/><path d="M0,0 L-9,-10"/><path d="M0,0 L9,-10"/>'+
'</g></svg>';}


function figCellCycle(){var C=FIG_C; var cx=160, cy=160, r=110;
  // 4 phases: G1 (40%), S (25%), G2 (15%), M (20%)
  var phases = [
    {label:'G1',  zh:'生长',  color:C.green,  start:0,    end:0.40},
    {label:'S',   zh:'合成',  color:C.blue,   start:0.40, end:0.65},
    {label:'G2',  zh:'生长',  color:C.gold,   start:0.65, end:0.80},
    {label:'M',   zh:'分裂',  color:C.u5,     start:0.80, end:1.00},
  ];
  function arc(s,e,col){
    var a1=s*2*Math.PI - Math.PI/2, a2=e*2*Math.PI - Math.PI/2;
    var x1=cx+Math.cos(a1)*r, y1=cy+Math.sin(a1)*r;
    var x2=cx+Math.cos(a2)*r, y2=cy+Math.sin(a2)*r;
    var large=(e-s)>0.5?1:0;
    return '<path d="M '+cx+','+cy+' L '+x1+','+y1+' A '+r+','+r+' 0 '+large+' 1 '+x2+','+y2+' Z" fill="'+col+'" opacity="0.78" stroke="#fff" stroke-width="2"/>';
  }
  var slices = phases.map(function(p){return arc(p.start,p.end,p.color);}).join('');
  // labels positioned outside circle
  function lbl(p){
    var mid=(p.start+p.end)/2;
    var a=mid*2*Math.PI - Math.PI/2;
    var lx=cx+Math.cos(a)*(r+30), ly=cy+Math.sin(a)*(r+30);
    return '<text x="'+lx+'" y="'+ly+'" text-anchor="middle" font-size="15" font-weight="bold" fill="'+p.color+'">'+p.label+'</text>'+
           '<text x="'+lx+'" y="'+(ly+15)+'" text-anchor="middle" font-size="10" fill="'+C.soft+'">'+p.zh+'</text>';
  }
  var lbls = phases.map(lbl).join('');
  // arrow for direction
  return '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'+
    slices + lbls +
    '<circle cx="'+cx+'" cy="'+cy+'" r="38" fill="'+C.paper+'" stroke="'+C.ink+'" stroke-width="1"/>'+
    '<text x="'+cx+'" y="'+(cy-6)+'" text-anchor="middle" font-size="11" fill="'+C.ink+'" font-weight="bold">Cell</text>'+
    '<text x="'+cx+'" y="'+(cy+8)+'" text-anchor="middle" font-size="11" fill="'+C.ink+'">Cycle</text>'+
    '<text x="'+cx+'" y="'+(cy+22)+'" text-anchor="middle" font-size="9" fill="'+C.soft+'">细胞周期</text>'+
    // Interphase bracket
    '<text x="335" y="100" font-size="12" font-weight="bold" fill="'+C.ink+'">Interphase 间期</text>'+
    '<text x="335" y="115" font-size="10" fill="'+C.soft+'">G1 + S + G2</text>'+
    '<path d="M325 130 Q 280 165 325 200" fill="none" stroke="'+C.soft+'" stroke-width="1.5"/>'+
    '<text x="335" y="250" font-size="12" font-weight="bold" fill="'+C.u5+'">M phase</text>'+
    '<text x="335" y="265" font-size="10" fill="'+C.soft+'">Mitosis 有丝分裂</text>'+
  '</svg>';
}

function figMitosis(){var C=FIG_C;
  // 5 stages in a row, each a mini-cell
  var stages = [
    {x:60,  name:'Prophase',     zh:'前期'},
    {x:155, name:'Prometaphase', zh:'前中期'},
    {x:250, name:'Metaphase',    zh:'中期'},
    {x:345, name:'Anaphase',     zh:'后期'},
    {x:440, name:'Telophase',    zh:'末期'},
  ];
  var s='<svg viewBox="0 0 510 240" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  stages.forEach(function(st,i){
    var cx=st.x, cy=100;
    // arrow between stages
    if(i>0){ s+='<path d="M '+(cx-44)+' '+cy+' L '+(cx-26)+' '+cy+'" stroke="'+C.soft+'" stroke-width="1.5" marker-end="url(#mArr)"/>'; }
    // cell circle
    s+='<circle cx="'+cx+'" cy="'+cy+'" r="36" fill="'+C.paper+'" stroke="'+C.ink+'" stroke-width="1.4"/>';
    // chromosome drawings per stage
    if(i===0){ // Prophase: blob chromosomes inside nucleus
      s+='<circle cx="'+cx+'" cy="'+cy+'" r="22" fill="none" stroke="'+C.soft+'" stroke-width="1" stroke-dasharray="2 2"/>';
      s+='<path d="M '+(cx-10)+' '+(cy-6)+' q 4 -8 8 0 q -4 8 -8 0" fill="'+C.u4+'" stroke="'+C.ink+'" stroke-width="1"/>';
      s+='<path d="M '+(cx+2)+' '+(cy+4)+' q 4 -8 8 0 q -4 8 -8 0" fill="'+C.u5+'" stroke="'+C.ink+'" stroke-width="1"/>';
    } else if(i===1){ // Prometaphase: nucleus gone, spindle starting
      s+='<line x1="'+(cx-32)+'" y1="'+cy+'" x2="'+(cx-12)+'" y2="'+cy+'" stroke="'+C.soft+'" stroke-width="0.8"/>';
      s+='<line x1="'+(cx+32)+'" y1="'+cy+'" x2="'+(cx+12)+'" y2="'+cy+'" stroke="'+C.soft+'" stroke-width="0.8"/>';
      s+='<rect x="'+(cx-10)+'" y="'+(cy-10)+'" width="6" height="14" fill="'+C.u4+'"/>';
      s+='<rect x="'+(cx+2)+'" y="'+(cy-4)+'" width="6" height="14" fill="'+C.u5+'"/>';
    } else if(i===2){ // Metaphase: lined up at equator
      s+='<line x1="'+cx+'" y1="'+(cy-30)+'" x2="'+cx+'" y2="'+(cy+30)+'" stroke="'+C.soft+'" stroke-width="0.6" stroke-dasharray="3 2"/>';
      s+='<line x1="'+(cx-32)+'" y1="'+cy+'" x2="'+(cx-6)+'" y2="'+cy+'" stroke="'+C.soft+'" stroke-width="0.7"/>';
      s+='<line x1="'+(cx+32)+'" y1="'+cy+'" x2="'+(cx+6)+'" y2="'+cy+'" stroke="'+C.soft+'" stroke-width="0.7"/>';
      s+='<rect x="'+(cx-3)+'" y="'+(cy-12)+'" width="6" height="10" fill="'+C.u4+'"/>';
      s+='<rect x="'+(cx-3)+'" y="'+(cy+2)+'" width="6" height="10" fill="'+C.u5+'"/>';
    } else if(i===3){ // Anaphase: chromatids pulled apart
      s+='<line x1="'+(cx-26)+'" y1="'+cy+'" x2="'+(cx-8)+'" y2="'+cy+'" stroke="'+C.soft+'" stroke-width="0.8"/>';
      s+='<line x1="'+(cx+26)+'" y1="'+cy+'" x2="'+(cx+8)+'" y2="'+cy+'" stroke="'+C.soft+'" stroke-width="0.8"/>';
      s+='<rect x="'+(cx-16)+'" y="'+(cy-5)+'" width="6" height="10" fill="'+C.u4+'"/>';
      s+='<rect x="'+(cx+10)+'" y="'+(cy-5)+'" width="6" height="10" fill="'+C.u5+'"/>';
    } else { // Telophase: two nuclei forming
      s+='<circle cx="'+(cx-12)+'" cy="'+cy+'" r="13" fill="none" stroke="'+C.soft+'" stroke-width="1" stroke-dasharray="2 2"/>';
      s+='<circle cx="'+(cx+12)+'" cy="'+cy+'" r="13" fill="none" stroke="'+C.soft+'" stroke-width="1" stroke-dasharray="2 2"/>';
      s+='<path d="M '+(cx-15)+' '+(cy-2)+' q 3 -5 6 0" fill="none" stroke="'+C.u4+'" stroke-width="2"/>';
      s+='<path d="M '+(cx+9)+' '+(cy-2)+' q 3 -5 6 0" fill="none" stroke="'+C.u5+'" stroke-width="2"/>';
    }
    // labels
    s+='<text x="'+cx+'" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="'+C.ink+'">'+st.name+'</text>';
    s+='<text x="'+cx+'" y="174" text-anchor="middle" font-size="10" fill="'+C.soft+'">'+st.zh+'</text>';
    s+='<text x="'+cx+'" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="'+C.u4+'">'+(i+1)+'</text>';
  });
  s+='<defs><marker id="mArr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.soft+'"/></marker></defs>';
  s+='<text x="255" y="220" text-anchor="middle" font-size="10.5" font-style="italic" fill="'+C.soft+'">P · Pro · M · A · T  →  Cytokinesis 细胞质分裂</text>';
  s+='</svg>';
  return s;
}

function figMeiosis(){var C=FIG_C;
  // Meiosis I + II flow showing crossing over and final 4 haploid
  var s='<svg viewBox="0 0 510 340" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  s+='<defs><marker id="mArr2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.soft+'"/></marker></defs>';
  // top: 1 diploid parent
  var px=255, py=40;
  s+='<circle cx="'+px+'" cy="'+py+'" r="28" fill="'+C.paper+'" stroke="'+C.ink+'" stroke-width="1.4"/>';
  s+='<rect x="'+(px-12)+'" y="'+(py-10)+'" width="6" height="14" fill="'+C.u4+'"/>';
  s+='<rect x="'+(px-8)+'" y="'+(py-10)+'" width="6" height="14" fill="'+C.u4l+'"/>';
  s+='<rect x="'+(px+4)+'" y="'+(py-10)+'" width="6" height="14" fill="'+C.u5+'"/>';
  s+='<rect x="'+(px+8)+'" y="'+(py-10)+'" width="6" height="14" fill="'+C.u5l+'"/>';
  s+='<text x="'+px+'" y="'+(py+45)+'" text-anchor="middle" font-size="11" font-weight="bold" fill="'+C.ink+'">2n (diploid)</text>';
  s+='<text x="'+px+'" y="'+(py+58)+'" text-anchor="middle" font-size="9" fill="'+C.soft+'">二倍体 — homologous pairs</text>';

  // Crossing over annotation
  s+='<text x="380" y="40" font-size="11" font-weight="bold" fill="'+C.gold+'">Prophase I:</text>';
  s+='<text x="380" y="55" font-size="10.5" fill="'+C.gold+'">Crossing over 交叉互换</text>';
  s+='<path d="M 374 47 Q 320 47 290 47" fill="none" stroke="'+C.gold+'" stroke-width="1.2" stroke-dasharray="3 2"/>';

  // arrow down — Meiosis I
  s+='<line x1="'+px+'" y1="115" x2="'+px+'" y2="145" stroke="'+C.soft+'" stroke-width="1.5" marker-end="url(#mArr2)"/>';
  s+='<text x="'+(px+8)+'" y="135" font-size="10" fill="'+C.u4+'" font-weight="bold">Meiosis I 减数分裂I</text>';
  s+='<text x="'+(px+8)+'" y="148" font-size="9" fill="'+C.soft+'">separates homologs 同源分离</text>';

  // 2 cells after meiosis I
  [180,330].forEach(function(x,i){
    s+='<circle cx="'+x+'" cy="180" r="22" fill="'+C.paper+'" stroke="'+C.ink+'" stroke-width="1.2"/>';
    var c1 = i===0 ? C.u4 : C.u5;
    var c2 = i===0 ? C.u5l : C.u4l;  // crossed over: each cell has mix
    s+='<rect x="'+(x-7)+'" y="170" width="5" height="14" fill="'+c1+'"/>';
    s+='<rect x="'+(x-2)+'" y="170" width="5" height="14" fill="'+c2+'"/>';
    s+='<text x="'+x+'" y="218" text-anchor="middle" font-size="10" fill="'+C.ink+'">n</text>';
  });

  // arrows down — Meiosis II
  s+='<line x1="180" y1="225" x2="180" y2="255" stroke="'+C.soft+'" stroke-width="1.5" marker-end="url(#mArr2)"/>';
  s+='<line x1="330" y1="225" x2="330" y2="255" stroke="'+C.soft+'" stroke-width="1.5" marker-end="url(#mArr2)"/>';
  s+='<text x="60" y="245" font-size="10" fill="'+C.u5+'" font-weight="bold">Meiosis II 减数分裂II</text>';
  s+='<text x="60" y="258" font-size="9" fill="'+C.soft+'">separates chromatids</text>';

  // 4 haploid cells
  [125, 235, 280, 390].forEach(function(x,i){
    s+='<circle cx="'+x+'" cy="285" r="18" fill="'+C.paper+'" stroke="'+C.ink+'" stroke-width="1.2"/>';
    var col = [C.u4, C.u5l, C.u5, C.u4l][i];
    s+='<rect x="'+(x-3)+'" y="278" width="6" height="12" fill="'+col+'"/>';
  });
  s+='<text x="255" y="320" text-anchor="middle" font-size="11" font-weight="bold" fill="'+C.ink+'">4 haploid cells (n) — all genetically different</text>';
  s+='<text x="255" y="334" text-anchor="middle" font-size="9.5" fill="'+C.soft+'">四个单倍体子细胞,遗传各不相同</text>';
  s+='</svg>';
  return s;
}

function figPunnett(){var C=FIG_C;
  // Bb × Bb Punnett square with phenotype ratio
  var s='<svg viewBox="0 0 470 320" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  // Title
  s+='<text x="160" y="28" font-size="14" font-weight="bold" fill="'+C.ink+'">Cross:  Bb × Bb</text>';
  s+='<text x="160" y="46" font-size="11" fill="'+C.soft+'">Heterozygous monohybrid cross 杂合子单因子杂交</text>';
  // header alleles (top: father)
  var gx=80, gy=70, cell=60;
  s+='<text x="'+(gx+cell/2)+'" y="62" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.u4+'">B</text>';
  s+='<text x="'+(gx+cell*1.5)+'" y="62" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.u5+'">b</text>';
  // header alleles (left: mother)
  s+='<text x="'+(gx-15)+'" y="'+(gy+cell/2+5)+'" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.u4+'">B</text>';
  s+='<text x="'+(gx-15)+'" y="'+(gy+cell*1.5+5)+'" text-anchor="middle" font-size="13" font-weight="bold" fill="'+C.u5+'">b</text>';
  // 4 cells
  var combos = [
    {gx:0,gy:0,txt:'BB',color:C.u4,    pheno:'dom'},
    {gx:1,gy:0,txt:'Bb',color:C.purple,pheno:'dom'},
    {gx:0,gy:1,txt:'Bb',color:C.purple,pheno:'dom'},
    {gx:1,gy:1,txt:'bb',color:C.u5,    pheno:'rec'},
  ];
  combos.forEach(function(c){
    var x=gx+c.gx*cell, y=gy+c.gy*cell;
    var fill = c.pheno==='dom' ? C.u4l : C.u5l;
    s+='<rect x="'+x+'" y="'+y+'" width="'+cell+'" height="'+cell+'" fill="'+fill+'" opacity="0.35" stroke="'+C.ink+'" stroke-width="1.2"/>';
    s+='<text x="'+(x+cell/2)+'" y="'+(y+cell/2+6)+'" text-anchor="middle" font-size="16" font-weight="bold" fill="'+c.color+'">'+c.txt+'</text>';
  });
  // ratio summary
  s+='<text x="260" y="100" font-size="12" font-weight="bold" fill="'+C.ink+'">Genotype ratio 基因型比</text>';
  s+='<text x="260" y="118" font-size="14" font-weight="bold" fill="'+C.purple+'">1 : 2 : 1</text>';
  s+='<text x="260" y="133" font-size="10" fill="'+C.soft+'">BB : Bb : bb</text>';
  s+='<text x="260" y="170" font-size="12" font-weight="bold" fill="'+C.ink+'">Phenotype ratio 表现型比</text>';
  s+='<text x="260" y="190" font-size="14" font-weight="bold" fill="'+C.u5+'">3 : 1</text>';
  s+='<text x="260" y="205" font-size="10" fill="'+C.soft+'">dominant : recessive 显性:隐性</text>';
  // dihybrid memory line
  s+='<line x1="40" y1="245" x2="430" y2="245" stroke="'+C.line+'" stroke-width="1"/>';
  s+='<text x="40" y="270" font-size="12" font-weight="bold" fill="'+C.ink+'">Dihybrid cross AaBb × AaBb:</text>';
  s+='<text x="40" y="289" font-size="11" fill="'+C.ink+'">F2 phenotype ratio = <tspan font-weight="bold" fill="'+C.u5+'">9 : 3 : 3 : 1</tspan>   (must memorise! 必背)</text>';
  s+='<text x="40" y="306" font-size="10" fill="'+C.soft+'">Gametes by FOIL: AaBb → AB, Ab, aB, ab</text>';
  s+='</svg>';
  return s;
}


function figDNAstruct(){var C=FIG_C;
  // DNA "ladder" style — two parallel backbones with base-pair rungs
  var s='<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  // Title
  s+='<text x="40" y="36" font-size="14" font-weight="bold" fill="'+C.ink+'">DNA Structure 结构</text>';
  s+='<text x="40" y="54" font-size="10.5" fill="'+C.soft+'">Two antiparallel strands · sugar-phosphate backbone · A-T, C-G base pairs</text>';

  // Backbones (two horizontal bars, blue + orange)
  var topY = 95, botY = 195;  // backbone y positions
  var x0 = 60, x1 = 330;
  s+='<rect x="'+x0+'" y="'+(topY-5)+'" width="'+(x1-x0)+'" height="10" rx="5" fill="'+C.u4+'"/>';
  s+='<rect x="'+x0+'" y="'+(botY-5)+'" width="'+(x1-x0)+'" height="10" rx="5" fill="'+C.u5+'"/>';
  // backbone labels (small sugar+P dots)
  for(var i=0;i<8;i++){
    var bx = x0+15+i*32;
    s+='<circle cx="'+bx+'" cy="'+topY+'" r="3" fill="'+C.paper+'"/>';
    s+='<circle cx="'+bx+'" cy="'+botY+'" r="3" fill="'+C.paper+'"/>';
  }

  // Base pairs as rungs
  var pairs = [
    {x:75,  top:'A', bot:'T', cTop:C.blue,   cBot:C.gold},
    {x:107, top:'C', bot:'G', cTop:C.green,  cBot:C.purple},
    {x:139, top:'T', bot:'A', cTop:C.gold,   cBot:C.blue},
    {x:171, top:'G', bot:'C', cTop:C.purple, cBot:C.green},
    {x:203, top:'A', bot:'T', cTop:C.blue,   cBot:C.gold},
    {x:235, top:'C', bot:'G', cTop:C.green,  cBot:C.purple},
    {x:267, top:'T', bot:'A', cTop:C.gold,   cBot:C.blue},
    {x:299, top:'G', bot:'C', cTop:C.purple, cBot:C.green},
  ];
  pairs.forEach(function(p){
    // top base box (attached under top backbone, going down)
    var tH = 35; // base height
    s+='<rect x="'+(p.x-11)+'" y="'+(topY+5)+'" width="22" height="'+tH+'" rx="4" fill="'+p.cTop+'" opacity="0.9"/>';
    s+='<text x="'+p.x+'" y="'+(topY+27)+'" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">'+p.top+'</text>';
    // hydrogen bonds (dotted)
    s+='<line x1="'+p.x+'" y1="'+(topY+45)+'" x2="'+p.x+'" y2="'+(botY-40)+'" stroke="'+C.soft+'" stroke-width="1" stroke-dasharray="2 2"/>';
    // bottom base box (attached above bottom backbone, going up)
    s+='<rect x="'+(p.x-11)+'" y="'+(botY-40)+'" width="22" height="'+tH+'" rx="4" fill="'+p.cBot+'" opacity="0.9"/>';
    s+='<text x="'+p.x+'" y="'+(botY-18)+'" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">'+p.bot+'</text>';
  });

  // Direction arrows
  s+='<defs>';
  s+='<marker id="arDNA1" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.u4+'"/></marker>';
  s+='<marker id="arDNA2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.u5+'"/></marker>';
  s+='</defs>';
  // top strand: 5' on left, 3' on right
  s+='<text x="46" y="'+(topY+4)+'" font-size="11" font-weight="bold" fill="'+C.u4+'">5\'</text>';
  s+='<text x="338" y="'+(topY+4)+'" font-size="11" font-weight="bold" fill="'+C.u4+'">3\'</text>';
  s+='<path d="M 50 '+(topY-15)+' L 90 '+(topY-15)+'" stroke="'+C.u4+'" stroke-width="2" marker-end="url(#arDNA1)"/>';
  // bottom strand: 3' on left, 5' on right (antiparallel)
  s+='<text x="46" y="'+(botY+4)+'" font-size="11" font-weight="bold" fill="'+C.u5+'">3\'</text>';
  s+='<text x="338" y="'+(botY+4)+'" font-size="11" font-weight="bold" fill="'+C.u5+'">5\'</text>';
  s+='<path d="M 340 '+(botY+15)+' L 300 '+(botY+15)+'" stroke="'+C.u5+'" stroke-width="2" marker-end="url(#arDNA2)"/>';

  // Right-side legend
  s+='<text x="356" y="86" font-size="11" font-weight="bold" fill="'+C.u4+'">Sugar-phosphate</text>';
  s+='<text x="356" y="100" font-size="10.5" fill="'+C.soft+'">backbone 骨架</text>';
  s+='<text x="356" y="126" font-size="11" font-weight="bold" fill="'+C.ink+'">Base pairs 碱基对</text>';
  s+='<text x="356" y="142" font-size="10" fill="'+C.soft+'">A — T (2 H-bonds)</text>';
  s+='<text x="356" y="156" font-size="10" fill="'+C.soft+'">C — G (3 H-bonds)</text>';
  s+='<text x="356" y="182" font-size="11" font-weight="bold" fill="'+C.gold+'">Antiparallel</text>';
  s+='<text x="356" y="198" font-size="10" fill="'+C.soft+'">strands run opposite</text>';
  s+='<text x="356" y="211" font-size="10" fill="'+C.soft+'">反向平行</text>';
  s+='<text x="356" y="240" font-size="11" font-weight="bold" fill="'+C.ink+'">Purines: A, G</text>';
  s+='<text x="356" y="254" font-size="10" fill="'+C.soft+'">嘌呤 — double ring</text>';
  s+='<text x="356" y="274" font-size="11" font-weight="bold" fill="'+C.ink+'">Pyrimidines: C, T</text>';
  s+='<text x="356" y="288" font-size="10" fill="'+C.soft+'">嘧啶 — single ring</text>';
  s+='</svg>';
  return s;
}

function figReplication(){var C=FIG_C;
  var s='<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  // Replication fork — Y shape
  // Original DNA on left
  s+='<line x1="40" y1="155" x2="180" y2="155" stroke="'+C.u4+'" stroke-width="4"/>';
  s+='<line x1="40" y1="165" x2="180" y2="165" stroke="'+C.u5+'" stroke-width="4"/>';
  // Base pair rungs on original
  for(var i=0;i<5;i++){
    s+='<line x1="'+(60+i*22)+'" y1="158" x2="'+(60+i*22)+'" y2="162" stroke="'+C.ink+'" stroke-width="1"/>';
  }
  // Helicase circle
  s+='<circle cx="195" cy="160" r="14" fill="'+C.gold+'" opacity="0.85" stroke="'+C.ink+'" stroke-width="1.2"/>';
  s+='<text x="195" y="164" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">H</text>';
  s+='<text x="195" y="195" text-anchor="middle" font-size="9.5" fill="'+C.gold+'" font-weight="bold">Helicase</text>';
  s+='<text x="195" y="208" text-anchor="middle" font-size="9" fill="'+C.soft+'">解旋酶</text>';
  // Split into Y — top and bottom strands diverge
  s+='<path d="M 210 153 Q 240 120 290 100 L 420 80" stroke="'+C.u4+'" stroke-width="4" fill="none"/>';
  s+='<path d="M 210 167 Q 240 200 290 220 L 420 240" stroke="'+C.u5+'" stroke-width="4" fill="none"/>';
  // Leading strand (top) - continuous new strand (purple) right under u4
  s+='<path d="M 230 130 Q 260 116 300 104 L 415 86" stroke="'+C.purple+'" stroke-width="3" fill="none" stroke-dasharray="0"/>';
  // Lagging strand (bottom) - fragmented Okazaki pieces (purple short segments)
  var fragPos = [[240,196],[268,208],[300,218],[340,225],[380,232]];
  fragPos.forEach(function(p,idx){
    s+='<line x1="'+p[0]+'" y1="'+p[1]+'" x2="'+(p[0]+18)+'" y2="'+(p[1]+4)+'" stroke="'+C.purple+'" stroke-width="3"/>';
  });
  // arrows showing direction
  s+='<text x="320" y="76" font-size="10.5" font-weight="bold" fill="'+C.purple+'">Leading strand 前导链</text>';
  s+='<text x="320" y="90" font-size="9.5" fill="'+C.soft+'">continuous, 5\' → 3\'</text>';
  s+='<text x="320" y="265" font-size="10.5" font-weight="bold" fill="'+C.purple+'">Lagging strand 滞后链</text>';
  s+='<text x="320" y="279" font-size="9.5" fill="'+C.soft+'">Okazaki fragments,</text>';
  s+='<text x="320" y="291" font-size="9.5" fill="'+C.soft+'">need ligase to join</text>';
  // Title + key points
  s+='<text x="40" y="36" font-size="14" font-weight="bold" fill="'+C.ink+'">DNA Replication 复制</text>';
  s+='<text x="40" y="56" font-size="11" fill="'+C.ink+'">Semi-conservative 半保留: each new molecule</text>';
  s+='<text x="40" y="70" font-size="11" fill="'+C.ink+'">has 1 old (blue/orange) + 1 new (purple) strand</text>';
  // legend
  s+='<rect x="40" y="265" width="14" height="3" fill="'+C.u4+'"/>';
  s+='<text x="60" y="270" font-size="10" fill="'+C.ink+'">old strand 旧链</text>';
  s+='<rect x="40" y="285" width="14" height="3" fill="'+C.purple+'"/>';
  s+='<text x="60" y="290" font-size="10" fill="'+C.ink+'">new strand 新链</text>';
  s+='</svg>';
  return s;
}

function figTranslation(){var C=FIG_C;
  var s='<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  // Ribosome as large blob
  s+='<ellipse cx="240" cy="170" rx="155" ry="60" fill="'+C.blueL+'" opacity="0.32" stroke="'+C.blue+'" stroke-width="1.5"/>';
  s+='<text x="105" y="166" text-anchor="end" font-size="11" font-weight="bold" fill="'+C.blue+'">Ribosome</text>';
  s+='<text x="105" y="180" text-anchor="end" font-size="10" fill="'+C.blue+'">核糖体</text>';
  // mRNA strand across bottom
  s+='<line x1="60" y1="200" x2="420" y2="200" stroke="'+C.ink+'" stroke-width="2.5"/>';
  // codon blocks on mRNA
  var codons = [
    {x:100, txt:'AUG', col:C.green, label:'start'},
    {x:170, txt:'CCG', col:C.gold,  label:''},
    {x:240, txt:'AAA', col:C.gold,  label:''},
    {x:310, txt:'UGA', col:C.u5,    label:'stop'},
  ];
  codons.forEach(function(c){
    s+='<rect x="'+(c.x-22)+'" y="194" width="44" height="14" fill="'+c.col+'" opacity="0.85"/>';
    s+='<text x="'+c.x+'" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">'+c.txt+'</text>';
    if(c.label){
      s+='<text x="'+c.x+'" y="227" text-anchor="middle" font-size="9" fill="'+c.col+'" font-weight="bold">'+c.label+'</text>';
    }
  });
  s+='<text x="40" y="205" font-size="10" font-weight="bold" fill="'+C.ink+'">mRNA</text>';
  s+='<text x="430" y="205" font-size="10" fill="'+C.soft+'">3\'</text>';
  s+='<text x="35" y="195" font-size="10" fill="'+C.soft+'">5\'</text>';
  // tRNAs (3 sites: E, P, A)
  var sites = [
    {x:170, label:'E', desc:'exit',    color:C.soft},
    {x:240, label:'P', desc:'peptide', color:C.purple},
    {x:310, label:'A', desc:'arrival', color:C.green},
  ];
  sites.forEach(function(t){
    // tRNA L-shape
    s+='<path d="M '+t.x+' 168 L '+t.x+' 188 L '+(t.x-6)+' 188" fill="none" stroke="'+t.color+'" stroke-width="2.5"/>';
    s+='<circle cx="'+t.x+'" cy="148" r="10" fill="'+t.color+'" opacity="0.65"/>';
    // site label
    s+='<text x="'+t.x+'" y="153" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">'+t.label+'</text>';
    s+='<text x="'+t.x+'" y="180" text-anchor="middle" font-size="8.5" fill="'+t.color+'">'+t.desc+'</text>';
  });
  // Growing peptide above P site
  s+='<circle cx="240" cy="118" r="8" fill="'+C.gold+'"/>';
  s+='<circle cx="228" cy="100" r="8" fill="'+C.u5+'"/>';
  s+='<circle cx="248" cy="88"  r="8" fill="'+C.green+'"/>';
  s+='<line x1="240" y1="110" x2="228" y2="108" stroke="'+C.ink+'" stroke-width="1.5"/>';
  s+='<line x1="228" y1="92"  x2="248" y2="96"  stroke="'+C.ink+'" stroke-width="1.5"/>';
  s+='<text x="380" y="95" font-size="11" font-weight="bold" fill="'+C.ink+'">Growing peptide</text>';
  s+='<text x="380" y="109" font-size="10" fill="'+C.soft+'">amino acids 氨基酸 +</text>';
  s+='<text x="380" y="122" font-size="10" fill="'+C.soft+'">peptide bonds 肽键</text>';
  s+='<line x1="378" y1="98" x2="252" y2="92" stroke="'+C.soft+'" stroke-width="0.8" stroke-dasharray="2 2"/>';
  // Title
  s+='<text x="240" y="36" text-anchor="middle" font-size="14" font-weight="bold" fill="'+C.ink+'">Translation 翻译 — mRNA → Protein</text>';
  s+='<text x="240" y="54" text-anchor="middle" font-size="10.5" fill="'+C.soft+'">Ribosome moves 5\' → 3\'; tRNAs flow A → P → E</text>';
  // bottom legend
  s+='<text x="60" y="260" font-size="11" font-weight="bold" fill="'+C.green+'">Initiation 起始:</text>';
  s+='<text x="60" y="275" font-size="10" fill="'+C.ink+'">mRNA binds ribosome; AUG (start) pairs with</text>';
  s+='<text x="60" y="288" font-size="10" fill="'+C.ink+'">initiator tRNA (anticodon UAC)</text>';
  s+='<text x="60" y="306" font-size="11" font-weight="bold" fill="'+C.purple+'">Elongation 延长:</text>';
  s+='<text x="60" y="320" font-size="10" fill="'+C.ink+'">tRNAs cycle A → P → E; peptide chain grows</text>';
  s+='<text x="280" y="260" font-size="11" font-weight="bold" fill="'+C.u5+'">Termination 终止:</text>';
  s+='<text x="280" y="275" font-size="10" fill="'+C.ink+'">Stop codon (UAA/UAG/UGA)</text>';
  s+='<text x="280" y="288" font-size="10" fill="'+C.ink+'">reached → polypeptide released</text>';
  s+='</svg>';
  return s;
}

function figEndosymbiosis(){var C=FIG_C;
  var s='<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  // 4 stages horizontally
  var stages = [
    {x:70,  title:'Host cell', zh:'宿主细胞'},
    {x:190, title:'Engulfment', zh:'吞入'},
    {x:310, title:'Symbiosis', zh:'共生'},
    {x:420, title:'Organelle', zh:'细胞器'},
  ];
  // arrows between
  s+='<defs><marker id="arEs" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.soft+'"/></marker></defs>';
  // Stage 1: large host with nucleus
  s+='<circle cx="70" cy="135" r="38" fill="'+C.green+'" opacity="0.18" stroke="'+C.green+'" stroke-width="1.5"/>';
  s+='<circle cx="70" cy="135" r="12" fill="'+C.purple+'" opacity="0.55"/>';
  s+='<text x="70" y="139" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">N</text>';
  // small free bacterium
  s+='<ellipse cx="115" cy="100" rx="9" ry="6" fill="'+C.u5+'" opacity="0.85"/>';
  s+='<text x="125" y="103" font-size="9" fill="'+C.u5+'">bacterium</text>';
  s+='<line x1="120" y1="178" x2="160" y2="178" stroke="'+C.soft+'" stroke-width="1.4" marker-end="url(#arEs)"/>';
  // Stage 2: bacterium being engulfed (with membrane pinching)
  s+='<circle cx="190" cy="135" r="38" fill="'+C.green+'" opacity="0.18" stroke="'+C.green+'" stroke-width="1.5"/>';
  s+='<circle cx="190" cy="135" r="12" fill="'+C.purple+'" opacity="0.55"/>';
  s+='<ellipse cx="210" cy="118" rx="8" ry="6" fill="'+C.u5+'" opacity="0.9"/>';
  s+='<path d="M 198 110 Q 205 105 218 108" fill="none" stroke="'+C.green+'" stroke-width="1.2" stroke-dasharray="3 2"/>';
  s+='<line x1="240" y1="178" x2="280" y2="178" stroke="'+C.soft+'" stroke-width="1.4" marker-end="url(#arEs)"/>';
  // Stage 3: bacterium inside, double membrane evident
  s+='<circle cx="310" cy="135" r="38" fill="'+C.green+'" opacity="0.18" stroke="'+C.green+'" stroke-width="1.5"/>';
  s+='<circle cx="310" cy="135" r="12" fill="'+C.purple+'" opacity="0.55"/>';
  // Bacterium inside with outer (host) + inner (bacterial) membrane
  s+='<ellipse cx="332" cy="118" rx="11" ry="8" fill="none" stroke="'+C.green+'" stroke-width="1.5" stroke-dasharray="2 1"/>';
  s+='<ellipse cx="332" cy="118" rx="8" ry="5.5" fill="'+C.u5+'" opacity="0.9"/>';
  s+='<line x1="360" y1="178" x2="395" y2="178" stroke="'+C.soft+'" stroke-width="1.4" marker-end="url(#arEs)"/>';
  // Stage 4: Modern eukaryote with mitochondrion-like organelle
  s+='<circle cx="420" cy="135" r="38" fill="'+C.green+'" opacity="0.18" stroke="'+C.green+'" stroke-width="1.5"/>';
  s+='<circle cx="420" cy="135" r="12" fill="'+C.purple+'" opacity="0.55"/>';
  // mitochondrion shape with cristae
  s+='<ellipse cx="442" cy="118" rx="13" ry="8" fill="'+C.u5+'" opacity="0.85" stroke="'+C.ink+'" stroke-width="1"/>';
  s+='<path d="M 433 116 Q 442 112 451 116 M 433 120 Q 442 124 451 120" fill="none" stroke="#fff" stroke-width="0.8"/>';
  // labels
  stages.forEach(function(st){
    s+='<text x="'+st.x+'" y="200" text-anchor="middle" font-size="11" font-weight="bold" fill="'+C.ink+'">'+st.title+'</text>';
    s+='<text x="'+st.x+'" y="214" text-anchor="middle" font-size="9.5" fill="'+C.soft+'">'+st.zh+'</text>';
  });
  // Title
  s+='<text x="240" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="'+C.ink+'">Endosymbiotic Theory 内共生理论</text>';
  s+='<text x="240" y="50" text-anchor="middle" font-size="10.5" fill="'+C.soft+'">A large cell engulfed a bacterium → mitochondria / chloroplasts</text>';
  // Evidence note
  s+='<text x="40" y="248" font-size="10.5" font-weight="bold" fill="'+C.gold+'">Evidence:</text>';
  s+='<text x="40" y="262" font-size="10" fill="'+C.ink+'">double membrane · own circular DNA · bacterial ribosomes · binary fission</text>';
  s+='<text x="40" y="274" font-size="9.5" fill="'+C.soft+'">证据:双膜、自有 DNA、类细菌核糖体、独立分裂</text>';
  s+='</svg>';
  return s;
}

function figNaturalSelection(){var C=FIG_C;
  var s='<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">';
  // 3 stages of peppered moths
  // Stage 1: Pre-pollution - many light, few dark, on light bark
  function bark(x, dark){
    var col = dark ? '#5a4a3a' : '#d9c9a8';
    return '<rect x="'+x+'" y="80" width="115" height="100" rx="6" fill="'+col+'"/>'+
           '<line x1="'+x+'" y1="105" x2="'+(x+115)+'" y2="105" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>'+
           '<line x1="'+x+'" y1="130" x2="'+(x+115)+'" y2="130" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>'+
           '<line x1="'+x+'" y1="155" x2="'+(x+115)+'" y2="155" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>';
  }
  function moth(cx,cy,dark){
    var col = dark ? '#2e2620' : '#f0e4ce';
    var stroke = dark ? '#1a1410' : '#a68855';
    return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="9" ry="5" fill="'+col+'" stroke="'+stroke+'" stroke-width="0.8"/>'+
           '<line x1="'+(cx-1)+'" y1="'+(cy-5)+'" x2="'+(cx-1)+'" y2="'+(cy+5)+'" stroke="'+stroke+'" stroke-width="0.6"/>';
  }
  // Stage 1
  s+=bark(20, false);
  s+=moth(40,100,false); s+=moth(70,135,false); s+=moth(100,115,false); s+=moth(55,160,false);
  s+=moth(85,95,true);  // 1 dark, camouflaged poorly
  s+='<text x="77" y="200" text-anchor="middle" font-size="10.5" font-weight="bold" fill="'+C.ink+'">Before pollution</text>';
  s+='<text x="77" y="214" text-anchor="middle" font-size="9.5" fill="'+C.soft+'">污染前 — light tree bark</text>';
  s+='<text x="77" y="234" text-anchor="middle" font-size="10" font-weight="bold" fill="'+C.green+'">Light moths thrive</text>';
  s+='<text x="77" y="247" text-anchor="middle" font-size="9" fill="'+C.green+'">better camouflage</text>';
  // arrow
  s+='<defs><marker id="arNS" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="'+C.soft+'"/></marker></defs>';
  s+='<path d="M 145 130 L 175 130" stroke="'+C.soft+'" stroke-width="1.6" marker-end="url(#arNS)"/>';
  s+='<text x="160" y="120" text-anchor="middle" font-size="9" fill="'+C.soft+'">pollution</text>';
  s+='<text x="160" y="148" text-anchor="middle" font-size="8" fill="'+C.soft+'">工业革命</text>';
  // Stage 2: During industrial revolution
  s+=bark(180, true);
  s+=moth(200,100,true); s+=moth(230,135,true); s+=moth(260,115,true); s+=moth(215,160,true);
  s+=moth(245,95,false); // 1 light, conspicuous now
  s+='<text x="237" y="200" text-anchor="middle" font-size="10.5" font-weight="bold" fill="'+C.ink+'">After pollution</text>';
  s+='<text x="237" y="214" text-anchor="middle" font-size="9.5" fill="'+C.soft+'">污染后 — dark tree bark</text>';
  s+='<text x="237" y="234" text-anchor="middle" font-size="10" font-weight="bold" fill="'+C.u5+'">Dark moths thrive</text>';
  s+='<text x="237" y="247" text-anchor="middle" font-size="9" fill="'+C.u5+'">light ones get eaten</text>';
  // arrow + explanation
  s+='<path d="M 305 130 L 335 130" stroke="'+C.soft+'" stroke-width="1.6" marker-end="url(#arNS)"/>';
  s+='<text x="320" y="120" text-anchor="middle" font-size="9" fill="'+C.soft+'">generations</text>';
  s+='<text x="320" y="148" text-anchor="middle" font-size="8" fill="'+C.soft+'">世代后</text>';
  // Stage 3: outcome (population frequencies)
  s+='<rect x="345" y="85" width="115" height="100" rx="6" fill="'+C.paper+'" stroke="'+C.line+'"/>';
  s+='<text x="403" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="'+C.ink+'">Population shift</text>';
  s+='<text x="403" y="118" text-anchor="middle" font-size="9" fill="'+C.soft+'">种群变化</text>';
  // bar chart
  s+='<rect x="358" y="155" width="20" height="22" fill="'+C.green+'" opacity="0.4"/>';
  s+='<text x="368" y="150" text-anchor="middle" font-size="9" fill="'+C.green+'">before</text>';
  s+='<rect x="358" y="135" width="20" height="42" fill="'+C.green+'" opacity="0.85"/>';
  s+='<text x="368" y="190" text-anchor="middle" font-size="8.5" fill="'+C.ink+'">light</text>';
  s+='<rect x="430" y="155" width="20" height="22" fill="'+C.u5+'" opacity="0.4"/>';
  s+='<text x="440" y="150" text-anchor="middle" font-size="9" fill="'+C.u5+'">→ after</text>';
  s+='<rect x="430" y="125" width="20" height="52" fill="'+C.u5+'" opacity="0.85"/>';
  s+='<text x="440" y="190" text-anchor="middle" font-size="8.5" fill="'+C.ink+'">dark</text>';
  s+='<text x="403" y="234" text-anchor="middle" font-size="10" font-weight="bold" fill="'+C.purple+'">Adaptation 适应</text>';
  s+='<text x="403" y="247" text-anchor="middle" font-size="9" fill="'+C.soft+'">favoured trait rises</text>';
  // Title
  s+='<text x="240" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="'+C.ink+'">Natural Selection: Peppered Moth 桦尺蛾</text>';
  s+='<text x="240" y="50" text-anchor="middle" font-size="10.5" fill="'+C.soft+'">Environmental change shifts which trait has higher fitness</text>';
  // bottom: 4 conditions
  s+='<line x1="20" y1="270" x2="460" y2="270" stroke="'+C.line+'"/>';
  s+='<text x="20" y="286" font-size="10.5" font-weight="bold" fill="'+C.ink+'">Natural selection requires:</text>';
  s+='<text x="20" y="302" font-size="10" fill="'+C.soft+'">① overproduction  ② heritable variation  ③ competition  ④ differential survival &amp; reproduction</text>';
  s+='</svg>';
  return s;
}

var FIGURES = {
  "u2-dna-struct":   {svg: figDNAstruct,       cap: "DNA double helix with antiparallel strands and base pairs. DNA 双螺旋:反向平行 + 碱基配对。"},
  "u2-replication":  {svg: figReplication,      cap: "Semi-conservative replication at the fork — leading vs lagging strand. 半保留复制 + 前导/滞后链。"},
  "u2-translation":  {svg: figTranslation,      cap: "Ribosome reads mRNA in codons; tRNAs deliver amino acids to A → P → E sites. 核糖体读 mRNA,tRNA 经 A→P→E 送氨基酸。"},
  "u3-endo":         {svg: figEndosymbiosis,    cap: "How a host cell engulfed a bacterium and turned it into a mitochondrion or chloroplast. 内共生四步:吞入 → 共生 → 演化为细胞器。"},
  "u3-selection":    {svg: figNaturalSelection, cap: "Peppered moths: when the environment changed, which colour was 'fitter' changed too. 桦尺蛾:环境改变 → 哪种颜色更适应也变了。"},
  "u1-cellcycle":  {svg: figCellCycle, cap: "Cell cycle = G1 + S + G2 (interphase) + M (mitosis). 细胞周期 = 间期(G1+S+G2) + M期。"},
  "u1-mitosis":    {svg: figMitosis,   cap: "Five stages of mitosis — P · Pro · M · A · T. 有丝分裂五个阶段。"},
  "u1-meiosis":    {svg: figMeiosis,   cap: "Meiosis: one diploid cell → two divisions → four genetically different haploid cells. 一个二倍体细胞经两次分裂,产生四个遗传不同的单倍体细胞。"},
  "u1-mendel":     {svg: figPunnett,   cap: "Punnett square for Bb × Bb, plus the dihybrid ratio you must memorise. 庞纳特方格示例 + 双因子杂交比例。"},
  "u4-levels":     {svg: figPyramid,   cap: "Eight levels, broad to specific. 八个等级,从广到细。"},
  "u4-cladistics": {svg: figCladogram, cap: "Each node is a common ancestor; species sharing a more recent node are more closely related. 节点 = 共同祖先,共享越靠近的节点 = 关系越近。"},
  "u5-virusstruct":{svg: figVirus,     cap: "Generic enveloped virus showing all main parts. 典型有包膜病毒,展示所有主要结构。"},
  "u5-phage":      {svg: figPhage,     cap: "T4-style bacteriophage. Tail fibers grip host first, then tail injects DNA. 噬菌体先用尾纤维抓住宿主,再由尾部注入DNA。"},
  "u5-lytic":      {svg: figCycles,    cap: "Both viral life cycles compared. 两种病毒周期对比。"},
  "u5-lysogenic":  {svg: figCycles,    cap: "Both viral life cycles compared. 两种病毒周期对比。"},
  "u5-bacteria":   {svg: figBacteria,  cap: "Generic rod-shaped bacterium with all key structures labelled. 典型杆菌结构标注图。"},
  "u5-immune":     {svg: figImmune,    cap: "Three layers of immune defence — outer to inner. 免疫三层防御 — 由外到内。"},
};

export function getTopicFigure(topicId: string) {
  const match = (FIGURES as Record<string, { svg: () => string; cap: string }>)[topicId]
  if (!match) return null
  return { svg: match.svg(), cap: match.cap }
}

export const TOPIC_FIGURE_IDS = Object.keys(FIGURES)
