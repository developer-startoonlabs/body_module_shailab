
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
if(a[i][1] == 'left')
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
                addImage(mapid[a[i][4]][2], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
            else if(leftSize>80)
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
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
                addImage(mapid[a[i][4]][6], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19])
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][6], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
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
                addImage(mapid[a[i][4]][2], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
                
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
            else if(leftSize == 100)
            {
                addImage(mapid[a[i][4]][2], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][3], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][14], mapid[a[i][4]][15]);
            }
        }
        else
        {
            dot_Visible(mapid[a[i][4]][11]);
            if(split ==0)
            {
                split =1;
                secondPage();
            }

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
                addImage(mapid[a[i][4]][6], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19]);
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][6], icon1(a[i][3], 2), 'left');
                addlower(mapid[a[i][4]][7], 'left', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][18], mapid[a[i][4]][19]);
            }
        }
    }
}
else  if(a[i][1] == 'right')
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
                addImage(mapid[a[i][4]][0], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
            else if(rightSize>80)
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
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
                addImage(mapid[a[i][4]][4], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
            }
            else if(a[i][4] !=a [i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][4], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
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
                addImage(mapid[a[i][4]][0], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13])
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][12], mapid[a[i][4]][13]);
            }
            else if(rightSize == 100)
            {
                addImage(mapid[a[i][4]][0], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][1], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
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
                addImage(mapid[a[i][4]][4], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
            }
            else if(a[i][4]!=a[i+1][0] || a[i][1] != a[i+1][1])
            {
                addImage(mapid[a[i][4]][4], icon1(a[i][3], 2), 'right');
                addlower(mapid[a[i][4]][5], 'right', '-1', 'Excellent', icon1(a[i][3], 3), a[i][4]);
                line_Visible(mapid[a[i][4]][16], mapid[a[i][4]][17]);
                
            }

            //  addlower('.p2box1b', 'left', '-1', 'Excellent', "icons/EMG ICon.png", a[i][4]);
        }
    }
}

}