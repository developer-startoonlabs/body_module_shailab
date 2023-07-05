
    // Get the HTML element with the class name "img_name"
    var imageElement = document.querySelector('.fit');
    // for dot
    const dot = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1'];
    const d = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1'];
    dot[1] = document.querySelector('.dot1');
    dot[2] = document.querySelector('.dot2');
    dot[3] = document.querySelector('.dot3');
    dot[4] = document.querySelector('.dot4');
    dot[5] = document.querySelector('.dot5');
    dot[6] = document.querySelector('.dot6');
    dot[7] = document.querySelector('.dot7');
    dot[8] = document.querySelector('.dot8');
    dot[9] = document.querySelector('.dot9');
    dot[10] = document.querySelector('.dot10');
    dot[11] = document.querySelector('.dot11');
    dot[12] = document.querySelector('.dot12');
    dot[13] = document.querySelector('.dot13');
    dot[14] = document.querySelector('.dot14');
    
    d[1] = document.querySelector('.d1');
    d[2] = document.querySelector('.d2');
    d[3] = document.querySelector('.d3');
    d[4] = document.querySelector('.d4');
    d[5] = document.querySelector('.d5');
    d[6] = document.querySelector('.d6');
    d[7] = document.querySelector('.d7');
    d[8] = document.querySelector('.d8');
    d[9] = document.querySelector('.d9');
    d[10] = document.querySelector('.d10');
    d[11] = document.querySelector('.d11');
    d[12] = document.querySelector('.d12');
    d[13] = document.querySelector('.d13');
    d[14] = document.querySelector('.d14');
    // for box
    const box = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1', '1', '1', '1','1', '1', '1'];
    box[1] = document.querySelector('.box-postion1');
    box[2] = document.querySelector('.box-postion2');
    box[3] = document.querySelector('.box-postion3');
    box[4] = document.querySelector('.box-postion4');
    box[5] = document.querySelector('.box-postion5');
    box[6] = document.querySelector('.box-postion6');
    box[7] = document.querySelector('.box-postion7');
    box[8] = document.querySelector('.box-postion8');
    box[9] = document.querySelector('.box-postion9');
    box[10] = document.querySelector('.box-postion10');
    box[11] = document.querySelector('.box-postion11');
    box[12] = document.querySelector('.box-postion12');
    box[13] = document.querySelector('.box-postion13');
    box[14] = document.querySelector('.box-postion14');
    box[15] = document.querySelector('.box-postion15');
    box[16] = document.querySelector('.box-postion16');
    box[17] = document.querySelector('.box-postion17');
    box[18] = document.querySelector('.box-postion18');
    box[19] = document.querySelector('.box-postion19');
    box[20] = document.querySelector('.box-postion20');
    
    // for the lines
    const line = ['1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1', '1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1','1', '1', '1', '1', '1', '1','1', '1', '1', '1', '1'] ;
    line[1] = document.querySelector('.line1a');
    line[21] = document.querySelector('.line1b');
    line[2] = document.querySelector('.line2a');
    line[22] = document.querySelector('.line2b');
    line[3] = document.querySelector('.line3a');
    line[23] = document.querySelector('.line3b');
    line[4] = document.querySelector('.line4a');
    line[24] = document.querySelector('.line4b');
    line[5] = document.querySelector('.line5a');
    line[25] = document.querySelector('.line5b');
    line[6] = document.querySelector('.line6a');
    line[26] = document.querySelector('.line6b');
    line[7] = document.querySelector('.line7a');
    line[27] = document.querySelector('.line7b');
    line[8] = document.querySelector('.line8a');
    line[28] = document.querySelector('.line8b');
    line[9] = document.querySelector('.line9a');
    line[29] = document.querySelector('.line9b');
    line[10] = document.querySelector('.line10a');
    line[30] = document.querySelector('.line10b');
    line[11] = document.querySelector('.line11a');
    line[31] = document.querySelector('.line11b');
    line[12] = document.querySelector('.line12a');
    line[32] = document.querySelector('.line12b');
    line[13] = document.querySelector('.line13a');
    line[33] = document.querySelector('.line13b');
    line[14] = document.querySelector('.line14a');
    line[34] = document.querySelector('.line14b');
    line[15] = document.querySelector('.line15a');
    line[35] = document.querySelector('.line15b');
    line[16] = document.querySelector('.line16a');
    line[36] = document.querySelector('.line16b');
    line[17] = document.querySelector('.line17a');
    line[37] = document.querySelector('.line17b');
    line[18] = document.querySelector('.line18a');
    line[38] = document.querySelector('.line18b');
    line[19] = document.querySelector('.line19a');
    line[39] = document.querySelector('.line19b');
    line[20] = document.querySelector('.line20a');
    line[40] = document.querySelector('.line20b');
    
    const patient_data = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    const box_to_dot_map = new Array(1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 7, 8, 7, 8, 9, 10, 11, 12, 13, 14);
    
    function dot_implement(injured)
    {
        if(injured == 'empty')
        {
            for(let i =1; i<=14;i++)
            {
                dot[i].style.background ='#DBF5D6';
                d[i].style.background ='#92E184'
                // var d1 = document.querySelector('.p2d'+i);
                // d1.style.background ='#DBF5D6';
                // var d2 = document.querySelector('.d'+i);
                // d2.style.background ='#92E184';
            }
        }
        else if(injured == 'bilateral')
        {
            for(let i =1; i<=14;i++)
            {
                // var d1 = document.querySelector('.p2d'+i);
                // d1.style.background ='#F7B9B5';
                dot[i].style.background ='#F7B9B5';
                d[i].style.background ='#CC2016';
            }
        }
        else if(injured == 'right')
        {
            for(let i =1; i<=14;i+=2)
            {
                dot[i].style.background ='#F7B9B5';
                d[i].style.background ='#CC2016';
                dot[i+1].style.background ='#DBF5D6';
                d[i+1].style.background ='#92E184';
    
                // var d1 = document.querySelector('.p2d'+i);
                // d1.style.background ='#F7B9B5';
            }
        }
        else if(injured = 'left'){
            for(let i =1; i<=14;i+=2)
            {
                dot[i+1].style.background ='#F7B9B5';
                d[i+1].style.background ='#CC2016';
                dot[i].style.background ='#DBF5D6';
                d[i].style.background ='#92E184';
            }
        }
    }
    var secondPageImage;
    function changeImage(gender, patient_data, injured)
    {
        dot_implement(injured);
    
        for(var i =0; i<20;i++)
        {
            if(patient_data[i]!=-1)
            {
                // dot[box_to_dot_map[i]].style.visibility = 'visible';
                // box[i+1].style.visibility ='visible';
            }
        }
    
        if(gender == 'female')
        {
            if(injured == 'bilateral')
            {
                imageElement.src = 'images/Female Bilateral body part.png';
                secondPageImage = 'images/Female Bilateral body part.png';
            }
            else if(injured == 'left')
            {
                imageElement.src = 'images/Female Left Side affected body part.png';
                secondPageImage ='images/Female Left Side affected body part.png';
            }
            else if(injured == 'right')
            {
                imageElement.src = 'images/Female Right Side affected body part.png';
                secondPageImage ='images/Female Right Side affected body part.png';
            }
            else
            {
                imageElement.src = 'images/Female Empty body part.png';
                secondPageImage ='images/Female Empty body part.png';
            }
            
            dot[1].style.top= '1046px';
            dot[1].style.left= '490px';
            dot[2].style.top= '1045px';
            dot[2].style.left= '548px';
            dot[3].style.top= '1120px';
            dot[3].style.left= '468px';
            dot[4].style.top= '1120px';
            dot[4].style.left= '568px';
            dot[5].style.top= '1160px';
            dot[5].style.left= '458px';
            dot[6].style.top= '1160px';
            dot[6].style.left= '578px';
            dot[7].style.top= '1125px';
            dot[7].style.left= '505px';
            dot[8].style.top= '1125px';
            dot[8].style.left= '530px';
            dot[9].style.top= '1170px';
            dot[9].style.left= '495px';
            dot[10].style.top= '1170px';
            dot[10].style.left= '545px';
            dot[11].style.top= '1270px';
            dot[11].style.left= '502px';
            dot[12].style.top= '1270px';
            dot[12].style.left= '534px';
            dot[13].style.top= '1365px';
            dot[13].style.left= '507px';
            dot[14].style.top= '1365px';
            dot[14].style.left= '530px';
            // imageElement.style.bottom = '210px'
            // box[1].style.right = '260px';
            // box[1].style.bottom = '540px';
            // line[1].style.visibility = 'visible';
            // line[21].style.visibility='visible';
            // line[1].style.top = '100px';
            // line[1].style.left = '100px';
            // line[21].style.top = '-125px';
            // line[21].style.left = '104px';
            // line[21].style.width = '170px';
            // line[21].style.transform = 'rotate(67deg)';
    
            // line[2].style.visibility = 'visible';
            // line[22].style.visibility='visible';
            // line[2].style.top = '100px';
            // line[2].style.left = '380px';
            // line[2].style.width = '70px';
            // line[22].style.top = '-134px';
            // line[22].style.left = '256px';
            // line[22].style.width = '180px';
            // line[22].style.transform = 'rotate(-67deg)';
    
            // line[3].style.visibility = 'visible';
            // line[23].style.visibility='visible';
            // line[3].style.top = '-70px';
            // line[3].style.left = '95px';
            // line[3].style.width = '30px';
            // line[23].style.top = '-9px';
            // line[23].style.left = '84px';
            // line[23].style.width = '140px';
            // line[23].style.transform = 'rotate(65deg)';
            
            // line[4].style.visibility = 'visible';
            // line[24].style.visibility='visible';
            // line[4].style.top = '-80px';
            // line[4].style.left = '380px';
            // line[4].style.width = '70px';
            // line[24].style.top = '-22px';
            // line[24].style.left = '292px';
            // line[24].style.width = '130px';
            // line[24].style.transform = 'rotate(-70deg)';
    
            // line[5].style.visibility = 'visible';
            // line[25].style.visibility='visible';
            // line[5].style.top = '-10px';
            // line[5].style.left = '100px';
            // line[5].style.width = '50px';
            // line[25].style.top = '18px';
            // line[25].style.left = '132px';
            // line[25].style.width = '70px';
            // line[25].style.transform = 'rotate(60deg)';
    
            // line[6].style.visibility = 'visible';
            // line[26].style.visibility='visible';
            // line[6].style.top = '-16px';
            // line[6].style.left = '380px';
            // line[6].style.width = '70px';
            // line[26].style.top = '8px';
            // line[26].style.left = '323px';
            // line[26].style.width = '70px';
            // line[26].style.transform = 'rotate(-50deg)';
    
            // line[7].style.visibility = 'visible';
            // line[27].style.visibility='visible';
            // line[7].style.top = '50px';
            // line[7].style.left = '100px';
            // line[7].style.width = '60px';
            // line[27].style.top = '70px';
            // line[27].style.left = '142px';
            // line[27].style.width = '50px';
            // line[27].style.transform = 'rotate(70deg)';
    
            // line[8].style.visibility = 'visible';
            // line[28].style.visibility='visible';
            // line[8].style.top = '45px';
            // line[8].style.left = '375px';
            // line[8].style.width = '80px';
            // line[28].style.top = '64px';
            // line[28].style.left = '336px';
            // line[28].style.width = '50px';
            // line[28].style.transform = 'rotate(-55deg)';
    
            // line[9].style.visibility = 'visible';
            // line[29].style.visibility='visible';
            // line[9].style.top = '135px';
            // line[9].style.left = '100px';
            // line[9].style.width = '105px';
            // line[29].style.top = '105px';
            // line[29].style.left = '188px';
            // line[29].style.width = '61px';
            // line[29].style.transform = 'rotate(-65deg)';
    
            // line[10].style.visibility = 'visible';
            // line[30].style.visibility='visible';
            // line[10].style.top = '130px';
            // line[10].style.left = '315px';
            // line[10].style.width = '140px';
            // line[30].style.top = '100px';
            // line[30].style.left = '272px';
            // line[30].style.width = '61px';
            // line[30].style.transform = 'rotate(65deg)';
    
            // line[11].style.visibility = 'visible';
            // line[31].style.visibility='visible';
            // line[11].style.top = '-135px';
            // line[11].style.left = '100px';
            // line[11].style.width = '105px';
            // line[31].style.top = '105px';
            // line[31].style.left = '188px';
            // line[31].style.width = '61px';
            // line[31].style.transform = 'rotate(-65deg)';
    
    
        }
        else 
        {
            if(injured == 'bilateral')
            {
                imageElement.src = 'images/Male Bilateral body part.png';
                secondPageImage ='images/Male Bilateral body part.png';
            }
            else if(injured == 'left')
            {
                imageElement.src = 'images/Male Left Side affected.png';
                secondPageImage ='images/Male Left Side affected.png';
            }
            else if(injured == 'right')
            {
                imageElement.src = 'images/Male Right Side affected.png';
                secondPageImage =   'images/Male Right Side affected.png';
            }
            else
            {
                imageElement.src = 'images/Male Empty Body part.png';
                secondPageImage ='images/Male Empty Body part.png';
            }
            dot[1].style.top= '1046px';
            dot[1].style.left= '490px';
            dot[2].style.top= '1045px';
            dot[2].style.left= '548px';
            dot[3].style.top= '1120px';
            dot[3].style.left= '468px';
            dot[4].style.top= '1120px';
            dot[4].style.left= '568px';
            dot[5].style.top= '1160px';
            dot[5].style.left= '458px';
            dot[6].style.top= '1160px';
            dot[6].style.left= '578px';
            dot[7].style.top= '1125px';
            dot[7].style.left= '505px';
            dot[8].style.top= '1125px';
            dot[8].style.left= '530px';
            dot[9].style.top= '1170px';
            dot[9].style.left= '495px';
            dot[10].style.top= '1170px';
            dot[10].style.left= '545px';
            dot[11].style.top= '1270px';
            dot[11].style.left= '502px';
            dot[12].style.top= '1270px';
            dot[12].style.left= '534px';
            dot[13].style.top= '1365px';
            dot[13].style.left= '507px';
            dot[14].style.top= '1365px';
            dot[14].style.left= '530px';
        }
    }
    
    
    
    
    
    // inner box function1
    var map1 = {};
    var map2 = {};
    var map3 = {};
    for(var i = 1;i<=14;i++)
    {
        var ID = ".box"+i+"a";
        map1[ID]=0;
        map2[ID]=0;
        map3[ID]=0; 
        ID = ".p2box" + i +"a";
        map1[ID]=0;
        map2[ID]=0;
        map3[ID]=0; 
    }
    
    function addtext(ID, data, testing, dir) {
        map1[ID]++;
        // Create element
        const el = document.createElement('text');
      
        // Add classes to element
        el.classList.add(dir);
      
        // Set ID attribute on the element
        // el.setAttribute('id', 'my-id');
        // var z=0
        // var z1=18;;
    
        // var  s=z+"°-"+z1 +"°";
        var Id1 = ID+'i';
        const box2 = document.querySelector(Id1); // Use querySelector instead of getElementByClass
    
        if(map1[ID]>1)
        {
            var el1 = document.createElement('br');
            box2.appendChild(el1);
        }
        el.innerHTML ="<b>" +data +"</b>" +" "+ testing;
        
        var s = '10px';
        el.style.padding = '0px 10px 0px 0px';
        box2.appendChild(el);
    
        // box.style.border = "solid blue";
        const box1 = document.querySelector(ID);
        box1.style.visibility = 'visible';
        box1.style.border = "solid red";
      }
      
    
      
    // function to add image
    
    
    // inner box function2
    function addImage (ID, path, dir)
    {
        const el = document.createElement('img');
        
        el.src = path;
        el.classList.add('icon1');
        const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
        // el.style.padding = '0px 10px 0px 10px';
        if(dir == 'right')el.style.margin = '0px 30px 0px 0px';
        else el.style.margin = '0px 35px 0px -15px';
        
        box.appendChild(el);
        
        if(map1[ID] == 1)
        {
            el.style.bottom = '1.5px';
        }
        if(map1[ID] == 2)
        {
            el.style.top= '10px';
        }
        else if(map1[ID] == 3)
        {
            el.style.top= '23px';
        }
        else if(map1[ID] == 4)
        {
            el.style.top= '35px';
        }
    
    
    }
    
    
    //   addtext('.box1a', )
      
    
    // inner box 2 implementation
    
    // // inner box function3
    function addlower(ID, dir,  firstImg, firsttext, secondImg, secondtext)
    {
        if(dir == 'right')
        {
            if(firstImg != '-1')
            {
                const el = document.createElement('img');
                el.src = firstImg;
                el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                box.appendChild(el);
                
            }
    
            if(firsttext != '-1')
            {
                const el = document.createElement('text');
                el.innerHTML = firsttext;
                // el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                el.style.padding = '0px 10px 0px 10px';
                box.appendChild(el);
                if(firstImg == '-1')box.style.left = '-12px';
                else box.style.left = '-20px'
                
            }
    
            if(secondImg != '-1')
            {
                const el = document.createElement('img');
                el.src = secondImg;
                el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                box.appendChild(el);
            }
    
            if(secondtext != '-1')
            {
                const el = document.createElement('text');
                el.innerHTML = secondtext;
                // el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                el.style.padding = '0px 10px 0px 10px';
                box.appendChild(el);
            }
        }
        else
        {
            if(secondtext != '-1')
            {
                const el = document.createElement('text');
                el.innerHTML = secondtext;
                // el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                el.style.padding = '0px 10px 0px 0px';
                box.appendChild(el);
            }
    
            if(secondImg != '-1')
            {
                const el = document.createElement('img');
                el.src = secondImg;
                el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                box.appendChild(el);
            }
    
            if(firsttext != '-1')
            {
                const el = document.createElement('text');
                el.innerHTML = firsttext;
                // el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                el.style.padding = '0px 10px 0px 10px';
                box.appendChild(el);
            }
    
            if(firstImg != '-1')
            {
                const el = document.createElement('img');
                el.src = firstImg;
                el.classList.add('icon2');
                const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
                box.appendChild(el);
                // box.style.left = '-20px'
            }
        }
    }
    // var ID = '.box1b';
    // var dir = 'right';
    // var firstImg ="icons/Poor Endurance Icon Red.png";
    // firstImg='-1'
    // firstImg = '-1';
    // var secondImg = "icons/EMG ICon.png";
    // var firsttext = "Excellent";
    // var secondtext = "Shoulder <br>& Neck" ;
    
    // var ID1 = '.box2b' 
    // var dir1 = 'l'
    // firstImg ='-1'
    
    // addtext('.box2a', "0°-18°", "Flexion");
    // addtext('.box2a', "0°-18°", "Extension");
    // addtext('.box2a', "0°-18°", "Abduction");
    // //   addtext('.box2a', "0°-18°", "Adduction");
    // addImage('.box2a', "icons/ROM Red.png");
    // addlower('.box2b ', dir, firstImg, firsttext, secondImg, secondtext);
    // addlower(ID1, dir1, firstImg, firsttext, secondImg, secondtext);
    
    //  addlower('.box2b', 'l', '-1', 'Excellent', "icons/EMG ICon.png", 'Shoulder');
    
    
    // Outer Box:-
    function addOuterLine_Head(ID, data)
    {
        const el = document.createElement('div');
        el.innerHTML ="<br>" + "<b style = 'font-size: 14.4px;'>" +data +"</b>";
        el.classList.add('hip');
        const box = document.querySelector(ID); // Use querySelector instead of getElementByClass
        box.appendChild(el);
    }
    
    // addOuterLine_Head('.b1', 'Shoulder');
    
    // s1 = "shailab";
    var shift = ['0px','10px', '20px', '30px', '40px', '50px', '60px', '70px', '80px', '90px', '100px']
    var count =1;
    function addOuterLine(ID, icon, Information, UV)
    {
        count++;
        var colr = '#44C02F' 
        if(icon == 'icons/Fair.png')
        {
            colr = '#E6A000'
        }
        else if(icon == 'icons/Needs Attention.png')
        {
            colr = '#CC2016'
        }
        var s1 = "<div style='display:inline-flex'; margin-left:7.2px>"
    +"<img style = 'height:16.2px;width:17.136px;margin-left:14.4px; margin-top:16.2px;' class = 'good'src ='"+ icon+"'/>"+
    "<p class = 'gluteus' style = 'color :"+ colr +";font-size: 14.4px;margin-top:8.1px'>"+Information+"</p>"
    + "</div>"
    +"<p class='uv'>("+UV+" uv)</p>";
        const el = document.createElement('div');
        el.innerHTML =s1;
        el.classList.add('info');
        const box = document.querySelector(ID); 
        box.appendChild(el);
    
        // const box1 = document.querySelector('#box1'); 
        // box1.style.bottom = shift[count];
        // const box2 = document.querySelector('#box2'); 
        // box2.style.bottom = shift[count];
        
        // const box2 = document.querySelector('.fit');
        // var s = 750 - count*10;
        // box2.style.top = s+'px';
    }
    
    // icon = 'icons/Fair.png';
    // Information = 'Gluteus Maximus';
    // ID = '.b1';
    // UV = 209;
    
    // addOuterLine(ID, icon, Information, UV);
    // addOuterLine(ID, 'icons/Good.png', Information, UV);
    // // addOuterLine(ID, icon, Information, UV);
    
    // addOuterLine(ID, 'icons/Needs Attention.png', Information, UV);
    
    // addOuterLine(ID, icon, Information, UV);
    // addOuterLine_Head('.b1', 'Hip');
    // addOuterLine('.b1', icon, Information, UV);
    // addOuterLine('.b1', icon, Information, UV);
    
    // addOuterLine_Head('.b2', 'Hip');
    // addOuterLine('.b2', icon, Information, UV);
    // addOuterLine('.b2', icon, Information, UV);
    
    // addOuterLine_Head('.b2', 'Hip');
    // addOuterLine('.b2', icon, Information, UV);
    // addOuterLine('.b2', 'icons/Needs Attention.png', Information, UV);
    // addOuterLine(ID, icon, Information, UV);
    // addOuterLine(ID, icon, Information, UV);
    // addOuterLine(ID, icon, Information, UV);
    
    // page Spliting
    
    function secondPage()
    {
        var pagem = document.querySelector(".secondPage");
        pagem.classList.add('page');
        var page = document.createElement("div");
            page.classList.add("subpage");
    
            var image = document.createElement("img");
            image.src = secondPageImage;
            image.classList.add('p2fit');
            page.appendChild(image);
            page.setAttribute('id', 'page2');
            pagem.appendChild(page);
            // document.body.appendChild(pagem);
    
            var dotposition= [
                ['0px', '0px'], ['490px', '582px'], ['545px', '582px'], ['470px', '650px'], ['568px', '650px'], ['460px', '700px'],['580px', '700px'], ['504px', '660px'], ['532px', '660px'], ['495px', '710px'], ['545px', '710px'], ['501px', '805px'], ['536px', '805px'], ['506px', '900px'], ['530px', '900px']
            ]
            for(var i =1;i<=14;i++)
            {
             
                var s1 = 'p2d'+i;
                var d1 = document.createElement("div");
                d1.classList.add('dot');
                d1.classList.add(s1);
                console.log(s1);
                // d1.setAttribute('id', s1);
                var d1i = document.createElement("div");
                d1i.classList.add('abc');
                d1.appendChild(d1i);
                page.appendChild(d1);
                s1 = '.p2d' + i;
                var id = document.querySelector(s1);
                id.style.left = dotposition[i][0];
                id.style.top = dotposition[i][1];
                id.style.visibility = 'hidden';
            }
    
            // line for page two
            for(var i = 1;i <=20;i++)
            {
                var s1 = 'p2line'+i+ 'a';
                var d1 = document.createElement("div");
                d1.classList.add('line');
                // d1.classList.add(s1);
                d1.setAttribute('id', s1);
                page.appendChild(d1);
                var s2 = 'p2line'+i+ 'b';
                var d2 = document.createElement("div");
                d2.classList.add('line');
                // d1.classList.add(s1);
                d2.setAttribute('id', s2);
                page.appendChild(d2);
            }
            
            // creating inner boxes on page 2
    
            for(var i = 1; i<=14; i++)
            {
                var s1 = 'p2box'+i;
                var d1 = document.createElement("div");
                var s11 = 'p2box-position'+i;
                d1.classList.add(s11);
                d1.setAttribute('id', s1);
                d1.classList.add('box');
                var d1i = document.createElement("div");
                d1i.classList.add('innerbox1');
                s11 = 'p2box'+i+'a';
                d1i.classList.add(s11);
                var s1i = s11 +'i';
                var d1i1 = document.createElement("div");
                d1i1.classList.add(s1i);
                if(i%2==1)d1i1.classList.add('left');
                else d1i1.classList.add('right');
                
                d1i.appendChild(d1i1);
                d1.appendChild(d1i);
                var d2i = document.createElement("div");
                d2i.classList.add('innerbox2');
                var sb = 'p2box'+i+'b';
                d2i.classList.add(sb);
                d2i.style.visibility = "visible";
                d1.appendChild(d2i);
                page.appendChild(d1);
                s1 = '#'+s1;
                // var db1 = document.querySelector(s1);
                
            }
            
            // const el1 = document.createElement('text');
            //     el1.innerHTML ="<br>" + "<b>" +"0°-18°" +"</b>" +" "+ "Adduction";
    
            //     const box1 = document.querySelector('.p2box1a'); // Use querySelector instead of getElementByClass
            //     box1.appendChild(el1);
    
        // implementing side Bar for second page
                var s1 = 'p2obox1';
                var d1 = document.createElement("div");
                d1.classList.add('p2boxr');
                // d1.setAttribute('id', s1);
                var hm1 = "<div class='muscles'>"+
                "<h4 style='text-align: center;font-size: 18px;'><b>Muscles</b>&ensp;(Right Side)</h4>"+
                "<text class = 'assited'><I>(Assited)</I></text>"+
            "</div>"+
            "<div class = 'p2b1'>" + "</div>";
            d1.innerHTML = hm1;
            // d1.style.position = relative;
            // d1.style.left = '100px'
            page.appendChild(d1);
            
    
            var s2 = 'p2obox2';
                var d2 = document.createElement("div");
                d2.classList.add('p2boxl');
                // d2.setAttribute('id', s2);
                // d2.style.float = "right";
                var hm2 = "<div class='muscles'>"+
                "<h4 style='text-align: center;font-size: 18px;'><b>Muscles</b>&ensp;(Left Side)</h4>"+
                "<text class = 'assited'><I>(Assited)</I></text>"+
            "</div>"+
            "<div class = 'p2b2'>" + "</div>";
            d2.innerHTML = hm2;
            page.appendChild(d2);
    
    }
    
    // secondPage();
    
    //         addtext('.p2box1a', "0°-18°", "Abduction");
    //         addtext('.p2box1a', "0°-18°", "Adduction");
    //         addImage('.p2box1a', 'icons/ROM Icon.png');
    //         addlower('.p2box1b', dir, firstImg, firsttext, secondImg, secondtext); 
    // icon
    function icon1(data, iconNumber)
    {
        if(iconNumber ==1)
        {
            if(data < 33)return 'icons/Needs Attention.png';
            else if(data <66)return 'icons/Fair.png';
            else return 'icons/Good.png';
        }
        else if(iconNumber == 2)
        {
            if(data < 33)return 'icons/ROM Red.png';
            else if(data <66)return 'icons/ROM Yellow.png';
            else return 'icons/ROM Green.png';
        }
        else if(iconNumber == 3)
        {
            if(data < 33)return 'icons/EMG icon Red.png';
            else if(data <66)return 'icons/EMG icon Yellow.png';
            else return 'icons/EMG icon Green.png';
        }
    }
    
    function lowerinnerdata(data)
    {
        return 'Excellent'
    }
    
    function data1(d1, d2)
    {
        var s1 = d1 +'°-'+d2+'°';
        return s1;
    }
    
    function dot_Visible(id)
    {
        var d = document.querySelector(id);
        d.style.visibility = 'visible';
    }
    
    function line_Visible(id1, id2)
    {
        var d1 = document.querySelector(id1);
        // d1.style.visibility = 'visible';
        var d2 = document.querySelector(id2);
        // d2.style.visibility = 'visible';
    }
    
    function lower_data(data1, data2)
    {
        var d = ['', '', '', '']
    
        if(data1 < 33)
        {
            d[2] = "icons/EMG icon Red.png";
            d[1] = "Attention";
            d[0] = "icons/Poor Endurance Icon Red.png";
            d[3] = data2;
        }
        else if(data1 < 66)
        {
            d[2] = "icons/EMG icon Yellow.png";
            d[1] = "Good";
            d[0] = "-1";
            d[3] = data2;
        }
        else
        {
            d[2] = "icons/EMG icon Green.png";
            d[1] = "Excellent";
            d[0] = "-1";
            d[3] = data2;
        }
    }
    function joint(joint1)
    {
        if(joint1 == 'Shoulder'|| joint1 == 'Elbow' || joint1 == 'Wrist' || joint1 == 'Knee' || joint1 == 'Hip' || joint1 == 'Ankle')return joint1;
        else if(joint1 == 'Neck')return 'Shoulder';
        else if(joint1 == 'Forearm') return 'Elbow';
        else return 'Trunk';
    }

        
    function jointNum(joint1)
    {
        if(joint1 == 'Shoulder')return 1;
        else if(joint1 == 'Trunk')return 2;
        else if(joint1 == 'Elbow')return 3;
        else if(joint1 == 'Wrist')return 4;
        else if(joint1 == 'Hip')return 4;
        else if(joint1 == 'Knee')return 5;
        else return 7;
    }

    function firstImg(data)
    {
        if(data<=33)return 'icons/Poor Endurance Icon Red.png';
        else if(data <= 66)return 'icons/Poor Endurance Icon.png';
        else return '-1';
    }

    function firsttext(data)
    {
        if(data <=33)return '1 of 3 Needs <br>Attention';
        else if(data <= 66)return '1 of 3 Needs <br>Attention';
        else return 'Excellent';
    }

    // addtext('.box2a', "0°-18°", "Abduction");
    // //   addtext('.box2a', "0°-18°", "Adduction");
    // addImage('.box2a', "icons/ROM Red.png");
    // addlower('.box2b ', 'right', firstImg(18), firsttext(18), 'icons/Poor Endurance Icon.png', 'Shoulder');
    function movement(arr3)
    {
        var i =0, j =0;
        var arr = [];
       
        while(i<arr3.length)
        {
            var arr1 = [0,'', '',0, '',1000];
            arr1[4]= joint(arr3[i][0]);
            console.log(joint[arr3[i][0]]);
            arr1[0] = jointNum(joint(arr3[i][0]));
            arr1[1]=arr3[i][2];
            arr1[2]=arr3[i][3];
            arr1[3]=arr3[i][4];
            arr1[5] = arr3[i][4];
            while(j<arr3.length && arr1[4] == joint(arr3[i][0]) && arr1[1] == arr3[j][2] &&  arr1[2]==arr3[j][3])
            {
                if(arr1[3]<arr3[j][4])arr1[3]=arr3[j][4];
                if(arr1[5]>arr3[j][4])arr1[5]=arr3[j][4];
                j++;
            }
            if(i!=j)i=j;
            else i++;
            arr.push(arr1);
        }

        i=0,j=0;
        while(i<arr.length)
        {
            var num=arr[i][5];
            while(j<arr.length && arr[i][4] == arr[j][4] && arr[i][1] == arr[j][1])
            {
                if(arr[j][5]<num)num=arr[j][5];
                j++;
            }
            var k =i;
            while(k<j)
            {
                arr[k][5]=num;
                k++;
            }
            if(i !=j)i=j;
            else i++;
        }

      
        arr.sort();
        return arr;
    }

    // id mapping
    var mapid ={};
    mapid['Shoulder'] = ['.box1a', '.box1b', '.box2a','.box2b', '.p2box1a','.p2box1b' , '.p2box2a', '.p2box2b', '.dot1', '.dot2', '.p2d1', '.p2d2', '.line1a', '.line1b', '.line2a', '.line2b', '.p2line1a', '.p2line1b', '.p2line2a', '.p2line2b'] 
    mapid['Elbow'] = ['.box3a', '.box3b', '.box4a','.box4b', '.p2box3a','.p2box3b' , '.p2box4a', '.p2box4b', '.dot3', '.dot4', '.p2d3', '.p2d4','.line3a', '.line3b', '.line4a', '.line4b', '.p2line3a', '.p2line3b', '.p2line4a', '.p2line4b'] 
    mapid['Wrist'] = ['.box5a', '.box5b', '.box6a','.box6b', '.p2box5a','.p2box5b' , '.p2box6a', '.p2box6b', '.dot5', '.dot6', '.p2d5', '.p2d6', '.line5a', '.line5b', '.line6a', '.line6b', '.p2line5a', '.p2line5b', '.p2line6a', '.p2line6b'] 
    mapid['Trunk'] = ['.box7a', '.box7b', '.box8a','.box8b', '.p2box7a','.p2box7b' , '.p2box8a', '.p2box8b', '.dot7', '.dot8', '.p2d7', '.p2d8', '.line7a', '.line7b', '.line8a', '.line8b', '.p2line7a', '.p2line7b', '.p2line8a', '.p2line8b'] 
    mapid['Hip'] = ['.box9a', '.box9b', '.box10a','.box10b', '.p2box9a','.p2box9b' , '.p2box10a', '.p2box10b', '.dot9', '.dot10', '.p2d9', '.p2d10', '.line9a', '.line9b', '.line10a', '.line10b', '.p2line9a', '.p2line9b', '.p2line10a', '.p2line10b'] 
    mapid['Knee'] = ['.box11a', '.box11b', '.box12a','.box12b', '.p2box11a','.p2box11b' , '.p2box12a', '.p2box12b', '.dot11', '.dot12', '.p2d11', '.p2d12', '.line11a', '.line11b', '.line12a', '.line12b', '.p2line11a', '.p2line11b', '.p2line12a', '.p2line12b'] 
    mapid['Ankle'] = ['.box13a', '.box13b', '.box14a','.box14b', '.p2box13a','.p2box13b' , '.p2box14a', '.p2box14b', '.dot13', '.dot14', '.p2d13', '.p2d14', '.line13a', '.line13b', '.line14a', '.line14b', '.p2line13a', '.p2line13b', '.p2line14a', '.p2line14b']  
    
    // secondPage();
    
    // addtext('.box14a', "0°-18°", "Flexion");
    // addtext('.box14a', "0°-18°", "Extension");
    // addtext('.p2box2a', "0°-18°", "Abduction");
    //   addtext('.box2a', "0°-18°", "Adduction");
    // addImage('.box14a', "icons/ROM Red.png");
    // addlower('.box14b ', dir, firstImg, firsttext, secondImg, secondtext);
    
    // var arr = [['joint'], ['muscle'], ['side'], ['movement'], ['movement data'], ['muscle data'] ];
   export function report(arr, gender, effectedSide)
    {
      changeImage(gender, patient_data, effectedSide);
        var split = 0;
        var leftSize =0;
        var rightSize =0;

        var a = movement(arr);

        console.log(a);



       
        // addtext('.box1a', "0°-18°", "Flexion");
        var mapjoint = {};
        mapjoint['Shoulder'] = [0, 0, 0, 0];
        mapjoint['Neck'] = [0, 0, 0, 0];
        mapjoint['Forearm'] = [0, 0, 0, 0];
        mapjoint['Elbow'] = [0, 0, 0, 0];
        mapjoint['Wrist'] = [0, 0, 0, 0];
        mapjoint['Thoracic'] = [0, 0, 0, 0];
        mapjoint['Lumbar'] = [0, 0, 0, 0];
        mapjoint['Abdomen'] = [0, 0, 0, 0];
        mapjoint['Hip'] = [0, 0, 0, 0];
        mapjoint['Knee'] = [0, 0, 0, 0];
        mapjoint['Ankle'] = [0, 0, 0, 0];
        // addlower
        var info1 = {}
        // info1['trial'] = ['id2', 'icon1', 'icon2', 'icon3', 'text1', 'text2', data1];
    
        // ###########################Positioning ####################
    
        // var mapPosition = {};
        // mapPosition['Shoulder'] = ['0px', '0px', '0px', '0px'];
        // mapPosition['Elbow'] = ['0px', '0px', '0px', '0px'];
        // mapPosition['Wrist'] = ['0px', '0px', '0px', '0px'];
        // mapPosition['Truck'] = ['0px', '0px', '0px', '0px'];
        // mapPosition['Hip'] = ['0px', '0px', '0px', '0px'];
        // mapPosition['Knee'] = ['0px', '0px', '0px', '0px'];
        // mapPosition['Ankle'] = ['0px', '0px', '0px', '0px'];
    
        // function positioning(id )
        // {
            
        // }
        //trial start
        
var mapjoint1 = {};
mapjoint1['Shoulder'] = [0, 0, 0, 0];
mapjoint1['Elbow'] = [0, 0, 0, 0];
mapjoint1['Wrist'] = [0, 0, 0, 0];
mapjoint1['Trunk'] = [0, 0, 0, 0];
mapjoint1['Hip'] = [0, 0, 0, 0];
mapjoint1['Knee'] = [0, 0, 0, 0];
mapjoint1['Ankle'] = [0, 0, 0, 0];

console.log(a.length);
for(var i =0;i <a.length;i++)
{
if(a[i][1] == 'Left')
{
    if(mapjoint1[a[i][4]][0] == 0)
    {
        
        leftSize += 40;
        if(leftSize<=100)
        {
            dot_Visible(mapid[a[i][4]][9]);
            mapjoint1[a[i][4]][0]=1;
            // addOuterLine_Head('.b2', a[i][4]);
            // addOuterLine('.b2',icon1(a[i][5],1) ,a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][2], data1(0,a[i][3]), a[i][2], 'left');
            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
            else if(leftSize>80)
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
        }
        else
        {
            if(split ==0)
            {
                split =1;
                secondPage();
            } 
            dot_Visible(mapid[a[i][4]][11]);


            
            if(mapjoint1[a[i][4]][1] == 0)
            {
                // addOuterLine_Head('.p2b2', a[i][4]);
                mapjoint1[a[i][4]][1] = 1;
            }
            
            // addOuterLine('.p2b2',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][6], data1(0,a[i][3]), a[i][2], 'left')

            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][6], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19])
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][6], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19]);
            }
        }
    }
    else
    {
        leftSize += 20;
        if(leftSize<=100)
        {
            dot_Visible(mapid[a[i][4]][9]);
            // addOuterLine('.b2',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][2], data1(0,a[i][3]), a[i][2], 'left')

            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
                
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
            else if(leftSize == 100)
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
        }
        else
        {
         

          console.log(mapid[a[i][4]][11])
          
            dot_Visible(mapid[a[i][4]][11]);
            if(split == 0)
            {
                split =1;
                secondPage();
            }
            console.log('helloShailab');

              
            if(mapjoint1[a[i][4]][1] == 0)
            {
                leftSize+=20;
                // addOuterLine_Head('.p2b2', a[i][4]);
                mapjoint1[a[i][4]][1] = 1;
            }

            // addOuterLine('.p2b2',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][6], data1(0,a[i][3]), a[i][2], 'left')

            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][6], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19]);
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][6], icon1(a[i][5], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19]);
            }

            
        }
    }
}
else  if(a[i][1] == 'Right')
{
    if(mapjoint1[a[i][4]][2] == 0)
    {
        
        rightSize += 40;
        if(rightSize<=100)
        {
            dot_Visible(mapid[a[i][4]][8]);
            mapjoint1[a[i][4]][2]=1;
            // addOuterLine_Head('.b1', a[i][4]);
            // addOuterLine('.b1',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][0], data1(0,a[i][3]), a[i][2], 'right')


            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
            else if(rightSize>80)
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
        }
        else
        {
            if(split ==0)
            {
                split =1;
                secondPage();
            }
            dot_Visible(mapid[a[i][4]][10]);
            if(mapjoint1[a[i][4]][3] == 0)
            {
                // addOuterLine_Head('.p2b1', a[i][4]);
                mapjoint1[a[i][4]][3] = 1;
            }
            
            // addOuterLine('.p2b1',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][4], data1(0,a[i][3]), a[i][2], 'right')

            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][4], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
            }
            else if(a[i][4] !=a [i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][4], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
            }
        }
    }
    else
    {
        rightSize += 20;
        if(rightSize<=100)
        {
            dot_Visible(mapid[a[i][4]][8]);
            // addOuterLine('.b1',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][0], data1(0,a[i][3]), a[i][2], 'right')

            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13])
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
            else if(rightSize == 100)
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
        }
        else
        {
            if(split ==0)
            {
                split =1;
                secondPage();
            }
            dot_Visible(mapid[a[i][4]][10]);
            if(mapjoint1[a[i][4]][3] == 0)
            {
                rightSize+=20;
                // addOuterLine_Head('.p2b1', a[i][4]);
                mapjoint1[a[i][4]][3] = 1;
            }

            // addOuterLine('.p2b1',icon1(a[i][5],1),a[i][1], a[i][5]);
            addtext(mapid[a[i][4]][4], data1(0,a[i][3]), a[i][2], 'right')


            if(i == a.length -1)
            {
                addImage(mapid[a[i][4]][4], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
            }
            else if(a[i][4]!=a[i+1][4] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][4], icon1(a[i][5], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', firstImg(a[i][5]), firsttext(a[i][5]), icon1(a[i][5], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
                
            }

            //  addlower('.p2box1b', 'left', '-1', 'Excellent', "icons/EMG ICon.png", a[i][4]);
        }
    }
}

}
        //trial end
    
        leftSize=0;
        rightSize=0;
        for(var i =0;i <arr.length;i++)
        {
            if(arr[i][2] == 'Left')
            {
                if(mapjoint[arr[i][0]][0] == 0)
                {
                    
                    leftSize += 40;
                    if(leftSize<=160)
                    {
                        // dot_Visible(mapid[arr[i][0]][9]);
                        mapjoint[arr[i][0]][0]=1;
                        addOuterLine_Head('.b2', arr[i][0]);
                        addOuterLine('.b2',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][2], data1(0,arr[i][4]), arr[i][3], 'left')
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][2], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][3], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][14], mapid[arr[i][0]][15]);
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][2], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][3], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][14], mapid[arr[i][0]][15]);
                        // }
                        // else if(leftSize>80)
                        // {
                        //     addImage(mapid[arr[i][0]][2], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][3], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][14], mapid[arr[i][0]][15]);
                        // }
                    }
                    else
                    {
                        if(split ==0)
                        {
                            split =1;
                            secondPage();
                        } 
                        // dot_Visible(mapid[arr[i][0]][11]);
    
    
                        
                        if(mapjoint[arr[i][0]][1] == 0)
                        {
                            addOuterLine_Head('.p2b2', arr[i][0]);
                            mapjoint[arr[i][0]][1] = 1;
                        }
                        
                        addOuterLine('.p2b2',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][6], data1(0,arr[i][4]), arr[i][3], 'left')
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][6], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][7], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][18], mapid[arr[i][0]][19])
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][6], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][7], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][18], mapid[arr[i][0]][19]);
                        // }
                    }
                }
                else
                {
                    leftSize += 20;
                    if(leftSize<=160)
                    {
                        // dot_Visible(mapid[arr[i][0]][9]);
                        addOuterLine('.b2',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][2], data1(0,arr[i][4]), arr[i][3], 'left')
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][2], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][3], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][14], mapid[arr[i][0]][15]);
                            
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][2], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][3], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][14], mapid[arr[i][0]][15]);
                        // }
                        // else if(leftSize == 160)
                        // {
                        //     addImage(mapid[arr[i][0]][2], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][3], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][14], mapid[arr[i][0]][15]);
                        // }
                    }
                    else
                    {
                        // dot_Visible(mapid[arr[i][0]][11]);
                        if(split ==0)
                        {
                            split =1;
                            secondPage();
                        }
    
                        if(mapjoint[arr[i][0]][1] == 0)
                        {
                            leftSize+=20;
                            addOuterLine_Head('.p2b2', arr[i][0]);
                            mapjoint[arr[i][0]][1] = 1;
                        }
    
                        addOuterLine('.p2b2',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][6], data1(0,arr[i][4]), arr[i][3], 'left')
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][6], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][7], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][18], mapid[arr[i][0]][19]);
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][6], icon1(arr[i][4], 2), 'left');
                        //     addlower(mapid[arr[i][0]][7], 'left', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][18], mapid[arr[i][0]][19]);
                        // }
                    }
                }
            }
            else  if(arr[i][2] == 'Right')
            {
                if(mapjoint[arr[i][0]][2] == 0)
                {
                    
                    rightSize += 40;
                    if(rightSize<=160)
                    {
                        // dot_Visible(mapid[arr[i][0]][8]);
                        mapjoint[arr[i][0]][2]=1;
                        addOuterLine_Head('.b1', arr[i][0]);
                        addOuterLine('.b1',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][0], data1(0,arr[i][4]), arr[i][3], 'right')
    
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][0], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][1], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][12], mapid[arr[i][0]][13]);
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][0], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][1], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][12], mapid[arr[i][0]][13]);
                        // }
                        // else if(rightSize>80)
                        // {
                        //     addImage(mapid[arr[i][0]][0], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][1], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][12], mapid[arr[i][0]][13]);
                        // }
                    }
                    else
                    {
                        if(split ==0)
                        {
                            split =1;
                            secondPage();
                        }
                        // dot_Visible(mapid[arr[i][0]][10]);
                        if(mapjoint[arr[i][0]][3] == 0)
                        {
                            addOuterLine_Head('.p2b1', arr[i][0]);
                            mapjoint[arr[i][0]][3] = 1;
                        }
                        
                        addOuterLine('.p2b1',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][4], data1(0,arr[i][4]), arr[i][3], 'right')
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][4], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][5], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][16], mapid[arr[i][0]][17]);
                        // }
                        // else if(arr[i][0] !=arr [i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][4], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][5], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][16], mapid[arr[i][0]][17]);
                        // }
                    }
                }
                else
                {
                    rightSize += 20;
                    if(rightSize<=160)
                    {
                        // dot_Visible(mapid[arr[i][0]][8]);
                        addOuterLine('.b1',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][0], data1(0,arr[i][4]), arr[i][3], 'right')
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][0], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][1], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][12], mapid[arr[i][0]][13])
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][0], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][1], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][12], mapid[arr[i][0]][13]);
                        // }
                        // else if(rightSize == 160)
                        // {
                        //     addImage(mapid[arr[i][0]][0], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][1], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][12], mapid[arr[i][0]][13]);
                        // }
                    }
                    else
                    {
                        if(split ==0)
                        {
                            split =1;
                            secondPage();
                        }
                        // dot_Visible(mapid[arr[i][0]][10]);
                        if(mapjoint[arr[i][0]][3] == 0)
                        {
                            rightSize+=20;
                            addOuterLine_Head('.p2b1', arr[i][0]);
                            mapjoint[arr[i][0]][3] = 1;
                        }
    
                        addOuterLine('.p2b1',icon1(arr[i][5],1),arr[i][1], arr[i][5]);
                        // addtext(mapid[arr[i][0]][4], data1(0,arr[i][4]), arr[i][3], 'right')
    
    
                        // if(i == arr.length -1)
                        // {
                        //     addImage(mapid[arr[i][0]][4], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][5], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][16], mapid[arr[i][0]][17]);
                        // }
                        // else if(arr[i][0]!=arr[i+1][0] || arr[i][2] != arr[i+1][2])
                        // {
                        //     addImage(mapid[arr[i][0]][4], icon1(arr[i][4], 2), 'right');
                        //     addlower(mapid[arr[i][0]][5], 'right', '-1', 'Excellent', icon1(arr[i][4], 3), arr[i][0]);
                        //     line_Visible(mapid[arr[i][0]][16], mapid[arr[i][0]][17]);
                            
                        // }
    
                        //  addlower('.p2box1b', 'left', '-1', 'Excellent', "icons/EMG ICon.png", arr[i][0]);
                    }
                }
            }
    
        }
    }
    
    
    
    
    //   addtext('.box5a', "0°-19°", "Flexion");
    var arr = [['joint'], ['muscle'], ['side'], ['movement'], ['movement data'], ['muscle data'] ];
    
    var arr3 =
    [
         
        // ['Trunk', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        // ['Trunk', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        ['Shoulder', 'Gluteus Maximus', 'Right', 'flexion', 80, 40],
        ['Shoulder', 'Gluteus Maximus', 'Right', 'flexion', 70, 40],
        ['Shoulder', 'Gluteus Maximus', 'Right', 'abduction', 70, 40],
        
        ['Shoulder', 'Gluteus Maximus', 'Left', 'abduction', 61, 40],
        ['Shoulder', 'Gluteus Maximus', 'Left', 'abduction', 61, 40],
        ['Neck', 'Gluteus Maximus', 'Left', 'flexion', 61, 40],
        ['Shoulder', 'Gluteus Maximus', 'Left', 'Lateral flexion', 60, 40],
        ['Neck', 'Gluteus Maximus', 'Left', 'Lateral flexion', 70, 40],
        // ['Shoulder', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Shoulder', 'Gluteus Maximus', 'left', 'Lateral flexion', 60, 40],
        ['Elbow', 'Gluteus Maximus', 'Right', 'lateral flexion', 60, 40],
        ['Elbow', 'Gluteus Maximus', 'Right', 'lateral flexion', 60, 40],
        ['Elbow', 'Gluteus Maximus', 'Right', 'lateral flexion', 60, 40],
    
        ['Elbow', 'Gluteus Maximus', 'Left', 'flexion', 60, 40],
        ['Elbow', 'Gluteus Maximus', 'Left', 'flexion', 60, 40],
        ['Elbow', 'Gluteus Maximus', 'Left', 'flexion', 60, 40],
        ['Elbow', 'Gluteus Maximus', 'Left', 'flexion', 60, 40],

    
        ['Wrist', 'Gluteus Maximus', 'Right', 'flexion', 60, 40],
        ['Wrist', 'Gluteus Maximus', 'Right', 'flexion', 60, 40],
        ['Wrist', 'Gluteus Maximus', 'Right', 'flexion', 60, 40],
        ['Wrist', 'Maximus', 'Right', 'flexion', 60, 40],
        ['Wrist', 'Maximus', 'Right', 'flexion', 60, 40],

        // ['Wrist', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Wrist', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'right', 'lateral flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'right', 'lateral flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'right', 'lateral flexion', 60, 40],
       
        // ['Elbow', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Elbow', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
    
        
        
        // ['Elbow', 'Gluteus Maximus', 'left', 'dorsal flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        // ['Hip', 'Gluteus Maximus', 'right', 'flexion', 60, 40],
        ['Hip', 'Gluteus Maximus', 'Right', 'flexion', 60, 40],
    
        // ['Knee', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Knee', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Knee', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        // ['Knee', 'Gluteus Maximus', 'left', 'flexion', 60, 40],
        
        // ['Knee', 'Gluteus Maximus', 'right', 'flexion', 63, 40],
    
        ['Knee', 'Gluteus Maximus', 'Right', 'flexion', 63, 40],
        ['Knee', 'Gluteus Maximus', 'Right', 'flexion', 63, 40],
        ['Knee', 'Gluteus Maximus', 'Left', 'flexion', 63, 40],
         ['Knee', 'Gluteus Maximus', 'Left', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'right', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'right', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'right', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'right', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'left', 'flexion', 63, 40],
         ['Ankle', 'Gluteus Maximus', 'Left', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'left', 'flexion', 63, 40],
        //  ['Ankle', 'Gluteus Maximus', 'left', 'flexion', 63, 40], 
        // ['Ankle', 'Gluteus Maximus', 'left', 'flexion', 63, 40],
    ]

    var s2 = "Shoulder,Rectus Femoris,Right,Flexion,121,266,Knee,Vastus Medialis,Right,Extension,122,610,Knee,Gastrocnemius,Left,Flexion,124,851,Knee,Vastus Medialis,Left,Extension,124,283,Knee,Biceps Femoris,Left,Extension,111,1587,Knee,Biceps Femoris,Right,Extension,104,286,Hip,Gluteus Maximus,Right,Extension,15,434,Hip,Adductor Longus,Right,Adduction,7,459,Hip,Adductor Longus,Left,Abduction,0,1595,Hip,Gluteus Maximus,Left,Extension,13,25"

    function stringTodata(data)
    {
       
       var i =0;
       var arr = []
       while(i<data.length)
       {
          var arr1 = ["", "", "","", 0,0]
          var s1 = ""
          var count = 0;
            while(count<6 && i<data.length)
            {
                if(data[i]==',')
                {
                  if(count< 4)
                  {
                    arr1[count] = s1;
                  }
                  else 
                  {
                    arr1[count] = parseInt(s1);
                  }
                  count++;
                  s1 = "";
                }
                else 
                {
                  s1 = s1+data[i];
                }

                i++;
            }
            arr.push(arr1);
       }
        return arr;
    }


    
    var arrd = 
    [
      ['Shoulder', 'Rectus Femoris', 'Right', 'Flexion', 121, 30],
      ['Knee', 'Vastus Medialis', 'Right', 'Extension', 122, 610],
      // ['Wrist', 'Gastrocnemius', 'Left', 'Flexion', 124, 851],
      // ['Wrist', 'Vastus Medialis', 'Left', 'Extension', 124, 283],
      // ['Knee', 'Biceps Femoris', 'Left', 'Extension', 111, 1587],
      // ['Knee', 'Biceps Femoris', 'Right', 'Extension', 104, 286],
      // ['Hip', 'Gluteus Maximus', 'Right', 'Extension', 15, 434],
      // ['Hip', 'Adductor Longus', 'Right', 'Adduction', 7, 459],
      // ['Wrist', 'Gluteus Maximus', 'Left', 'Extension', 13, 0],
      ['Hip', 'Adductor Longus', 'Left', 'Abduction', 0, 1595],
      ['Hip', 'Adductor Longus', 'Left', 'Extension', 0, 1595],

    ]

   var  arr1 = stringTodata(s2);
  //  console.log(arr1);
  console.log(arr1);
  console.log(arr3);
    // report(arrd, 'female', 'bilateral');


    //  const sh1 = (shailab)=>
    // {
    //     console.log(shailab);
    // }

    // module.exports = sh1;