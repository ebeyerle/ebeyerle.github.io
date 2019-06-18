var store = false;
var trouble = false;
var textArr = [];
var global_index = "";
var storeText = ["Caller: ", "Store#: "];
var troubleArr = [["Appliance Not Working","n/a","cx refused troubleshooting, have advised the customer there will be charges if no defect is found","Service Order"],
                  ["Appliance not working","n/a","cx has EPP","transfer to EPP"],
                  ["Repair Status","","the cx wants to know what's going with a service that was scheduled", "gave cx asc phone number"],
                  ["Accommodation Status", "", "","educated cx"],
                  ["Product Question", "Samsung.com", "cx planning on buying a Samsung appliance, cx wanted to more about the features of the appliance", "educated cx"],
                  ["Wrong Department", "n/a", "caller called into the wrong department", "call ended"],
                  ["Rebate Question", "n/a", "calling in about a rebate", "transfer to Samsung Promotions"],
                  ["Product Registration", "n/a", "cx wants to register thier product(s)", "told cx to register products at Samsung.com"],
                  ["Ice Maker Not Working", "DTree Article-Not Enough Ice", "Ice Maker Off icon is not on, cx can dispense water, the water filter was changed less than 6 months ago, told cx to reset ice maker", " cx will wait 24 hours to see if ice production resumes"],
                  ["No Cool", "DTree Article-No Cool", "the fridge section is not getting below a certain temperature, door was not left open for a long period of time, door seals are not damaged or dirty, told cx to power cycle fridge for 3 minutes", "cx will wait 3 hours for fridge to cool"],
                  ["No Cool", "DTree Article-No Cool", "the freezer section is not getting below a certain temperature, door was not left open for a long period of time, door seals are not damaged or dirty, told cx to power cycle fridge for 3 minutes", "cx will wait 3 hours for fridge to cool"],
                  ["Ice Maker Frozen Over", "DTree Article-Ice Maker Frozen Over", "if the ice maker is frozen over then fridge will require service", "Service Order"],
                  ["Water/Frost in drawers", "DTree Article-Water/Ice in Vegetable Drawers", "front wheels are in contact with the floor, told cx that it's a leveling issue", "cx will level fridge"],
                  ["Handle Is Coming Off", "DTree Article-Handle Loose/Fell Off", "cx's handle on fridge is coming off", "emailed cx a troubleshooting guide on how to put handle back on"],
                  ["Making Humming Sounds", "DTree Article-Normal Sounds And Operational Noises", "water lines are connected to the fridge, told cx to move fridge up about 2 inches, verified with cx whether the water pressure is too high, had cx activate and then deactivate cooling off mode, told cx that noise is normal if it is the same humming noise", "educated cx"],
                  ["Making Rattling Noise", "DTree Article-Making Rattling Noise", "told cx to move the fridge forward an inch, verified with the cx whether the fridge was leveled, told cx to check to see if front wheels are not in contact with the floor", "cx will need to level fridge"],
                  ["Doors Not Aligned", "n/a", "one of the fridge doors is higher than the other", "emailed a guide on how to level doors"],
                  ["Installation Issues", "FES", "Fridge was not installed properly, contacted GE to set up an install check", "Install Check Set up"],
                  ["Damaged Fridge", "n/a", "fridge was delivered recently and is damaged", "Service Order"],
                  ["No Heat", "DTree Article-No Heat", "cx's oven is not getting to the desired temperature, oven will not heat up even with one of the burners ignited", "Service Order"],
                  ["Burner Not Igniting", "DTree Article-Flame Operation on Cooktop", "the burner on the cooktop is not igniting, burner head and cap are clean and positioned correctly", "NCP Order for burner head and cap"],
                  ["Gas Smell", "DTree Article-Gas Smell", "cx noticing a gas smell from range, notified cx to not use the gas range and contact the gas company", "told cx to contact gas company"],
                  ["Cracked Cooktop", "DTree Article-Cracked Cooktop", "the cooktop cracked while cx was using the cooktop, cx did not do anything unusual to damage cooktop", "Service Order"],
                  ["Error Code", "DTree Article-Error Codes", "cx did reset the range, cx power cycled the range and code still came back on", "Service Order"],
                  ["Oven Door is Locked", "DTree Article-Oven Door is Locked", "cx allowed the range to cool down, cx power cycled the range for 60 seconds and door is still locked", "Service Order"],
                  ["Residue in Glass Panes of Door", "DTree Article-How to Remove Residue from Between the Door's Glass Panes", "told cx to run a steam clean cycle to remove residue, advised cx that it may take several steam clean cycles to remove residue", "cx will run steam clean cycle, OOW service will be required to remove residue if steam clean cycle does not remove residue"],
                  ["Fan is Loud", "DTree Article-Convection Fan Makes Loud Noise", "If the fan begins to make grinding, rattling, squealing, or other abnormal noises when it operates, particularly when it starts or stops, service is required", "Service Order"],
                  ["Cooktop Burner Not Heating", "DTree Article-One Burner Does Not Get Hot", "If a single burner (or part of a burner for multi-zone burners) does not get hot, but all the others work fine, service is required", "Service Order"],
                  ["Error Code", "DTree Article-Unbalanced Load Error", "had cx verify that washer is not overloaded, washer is level", "Service Order"],
                  ["No Drain", "told cx to clean the drain filter, drain hose is not kinked or bent and is inserted no more than 6 inches in the drain pipe, drain pipes are not damaged, told cx to run an empty cycle", "Service Order"],
                  ["Not Filling With Water", "DTree Article-Not Filling Error", "had cx verify that both hot and cold water supply valves are open, verified that both hot and cold water supply hoses are not kinked, hot water supply is connected to hot inlet and cold water supply is connected to cold inlet, drain hose is inserted no more than 6 inches in standpipe, inlet hose filters are clean, flood safety hoses are not in use, issue it still happening after verifying all troubleshooting steps", "Service Order"],
                  ["Excessive Suds", "DTree Article-Excessive Suds Error", "cx is using HE detergent, asked cx if a normal amount of detergent is being used,This is not an issue with the washer, and service is not required", "educated cx"],
                  ["Washer Leaking", "DTree Article-Water Leaks", "no leak is found on the drain hose or the water connections, is using the correct of amount of HE detergent, rubber gasket around door is not damaged and is clean, drain hose is inserted no more than 6 inches in the standpipe, debris filter is clean", "Service Order"],
                  ["Washer Leaking", "DTree Article-Water Leaks", "no leak is found on the drain hose or the water connections, is using the correct of amount of HE detergent, rubber gasket around door is damaged and needs to be replaced", "Service Order"],
                  ["Not Spinning Enough", "DTree Article-Washer Does Not Spin Enough to Get Water Out of Clothes", "cx has a normal load inside washer, washer is level, drain hose is inserted no more than 6 inches inside the standpipe, had cx power cycle the washer for 30 seconds, had cx clean the debris filter", "Service Order"],
                  ["Clothes Getting Stained", "DTree Article-New Stains Appear on Clothes After Wash Cycle", "cx didn't see any pens, markers, crayons, or any kind of ink/dye in the tub, detergent drawer is being filled with proper contents and not filled past the MAX line, told cx to clean the washer thoroughly and clean the detergent drawer thoroughly as well, the washer is level, had cx run an empty cycle with no additives, advised cx that in the vast majority of cases, routine maintenance and cleaning and the proper use of additives will correct and prevent the issue, and service is not required", "educated cx"],
                  ["No Heat", "DTree Article-No Heat", "told cx to check the circuit breaker and make sure it is not tripped, cx checked the lint filter, had cx diconnect the exhuast vent and then run a quick dry cycle for 3 minutes, cx feels warm air blowing from dryer", "cx will clean exhaust vents"],
                  ["No Spin", "DTree Article-The Dryer Drum Does Not Spin", "had cx run a time dryer cycle and check to see if the timer counts down, timer did count down but drum is not spinning", "Service Order"],
                  ["Dryer Smokes", "DTree Article-The Dryer Smokes or Smells(Electric)", "had cx verify that the lint trap and exhuast vent are clean and clear, told cx to check to make sure a small animal didn't climb into the exhaust vent, cx verified that dryer is the cause of the smell not the laundry", "Service Order"],
                  ["Dishes Not Getting Dry", "DTree Article-Dishes Not Dry", "told cx to use liquid rinse aid, told cx to crack the door open within an hour of the cycle's completion by 1 inch, verify that dishwasher is connected to a hot water line, verified with cx if dishes were loaded correctly, told cx they should add as many dishes as possible, without overfilling", "educated cx-service is not required"],
                  ["Leakage Error", "DTree Article-Leakage Error", "cx checked for leaks, no leaks were found around the door, leaks were not found on the visible portion of the drain hose, dishwasher was not recently installed", "Service Order"],
                  ["Not Draining", "DTree Article-Water Will Not Drain", "garbage disposal is cleared out, filters drain and sump are clean and clear, drain hose is not kinked or bent, water drains in sink connected to dishwaher, checked with cx to see if dishwasher was recently installed(if it was recently installed it's more likely an installaiton issue)", "Service Order"],
                  ["Dishes Not Getting Clean", "DTree Article-Dishes Are Not Clean", "advised cx to pre-rinse dishes, told cx that auto and heavy cycles have better cleaning performances, advised cx to use rinse aids such as Cascade or Jet Dry, checked cx to make sure that the dishes are loaded properly, asked cx if they were using the manufacturer's recommended amount of dishwashing detergent, advised cx to make nozzles are not clogged and make sure inside of dishwasher is clean", "educated cx, service not needed"],
                  ["Dishwasher Making Noises", "DTree Article-Buzzing and/or Grinding Sounds", "had cx check to make sure the water supply valve is fully open, green felt was not removed from the dishwasher", "Service Order"],
                  ["No Power", "DTree Article-Dishwasher Does Not Power On", "power button is not being pressed too quickly, circuit in the breaker box has not been tripped, checked with cx to see if dishwasher is connected to a light switch, asked cx if this issue has been happening since installation-if it is then it's an installaiton issue", "Service Order"]
                 ];

   function myFunction1(){
      var copyText= document.getElementById("textInput");
      copyText.select();
      document.execCommand("copy");
      alert("Copied");
      /*location.reload();*/
    }

    function reset(){
      var textInput = document.getElementById("textInput");
      textInput.innerHTML = document.getElementById("original").value;
      store = false;
      trouble = false;
      changeColor();
      storeText = ["Caller: ", "Store#: "];
      var x = document.getElementById("ncp");
      var y = document.getElementById("issues");
      x.style.display = "none";
      y.style.height = "160px";
    }

    function move(){
      var textInput = document.getElementById("textInput-right");
      var spaceArea = document.getElementById("space-area").value;
      textInput.innerHTML += document.getElementById("textInput").value + spaceArea;
      reset();
    }

    function troubleshoot(val){
      if(!trouble){
        var textInput = document.getElementById("textInput");
        var lines = textInput.value.split("\n");
        //console.log(lines[0]);
        var issue = "";
      
        for(var i = 0; i < lines.length; i++){
          if(lines[i][0] == "1"){
            if(lines[i].length < 14){
              lines[i] += troubleArr[val][0];
              issue += troubleArr[val][0];
            }else{
              issue += lines[i].slice(12, lines[i].length);
              //issue = "it changed";
            }
          }else if(lines[i][0] == "2"){
            if(lines[i].length < 20){
               lines[i] += troubleArr[val][1];
            }
            //lines[i] += "n/a";
          }else if(lines[i][0] == "3"){
            lines[i] += troubleArr[val][2];
          }else if(lines[i][0] == "5"){
            lines[i] += troubleArr[val][3];
          }else if(lines[i][0] == "I"){
            lines[i] += issue;
            //console.log(issue);
          }else if(lines[i][1] == "c"){
            if(troubleArr[val][3] == "Service Order"){
              lines[i] += "service";
            }else{
              lines[i] += "none";
            }
          }else if(lines[i][9] == "P"){
            if(lines[i].length < 14){
               lines[i] += "n/a";
            }
          }else if(lines[i][0] == "P"){
            if(troubleArr[val][3] == "Service Order"){
              lines[i] += "NP";
            }else{
              lines[i] += "n/a";
            }
          }
          lines[i] += "\n";
        }
        textInput.innerHTML = lines.join("");
        //textInput.innerHTML = document.getElementById("textInput2").value;
        trouble = true;
      }            
    }

    function extended(){
      var textInput = document.getElementById("textInput");
      textInput.innerHTML = document.getElementById("textInput2").value;
    }

    function service(){
      var textInput = document.getElementById("textInput");
      textInput.innerHTML = document.getElementById("asc").value;
    }

  function changeColor(){
    var cus_btn = document.getElementById("cus");
    var store_btn = document.getElementById("store");

    if(store){
      store_btn.style.backgroundColor = "white";
      cus_btn.style.backgroundColor = "grey";
    }else{
      store_btn.style.backgroundColor = "grey";
      cus_btn.style.backgroundColor = "white";
    }  
  }

  function isStore(){
    if(!store){
      store = true;
      
      changeColor();
      
      var textInput = document.getElementById("textInput");
      var lines = textInput.value.split('\n');

      lines.unshift(storeText[1]);
      lines.unshift(storeText[0]);

      for(var i = 0; i < lines.length-1; i++){
        lines[i] += '\n';
       }
      textInput.innerHTML = lines.join("");
    }
  }

  function isCustomer(){  
    if(store){
      store = false;
      changeColor();

      var textInput = document.getElementById("textInput");
      var lines = textInput.value.split("\n");
      storeText[0] = lines[0];
      storeText[1] = lines[1];

      var lines2 = lines.slice(2, lines.length);

      for(var i = 0; i < lines2.length-1; i++){
        lines2[i] += "\n";
      }    
      textInput.innerHTML = lines2.join("");
      }
  }

  var show = false;

  var arrParts = [["Diary Compartment","Door Bins","Tempered glass shelves", "Can Rack", "Veg Drawers-L", "Veg Drawers-R", "Cool Select Pantry", "Super extended drawer", "Freezer Drawer Bin", "Foldable Shelf", "Quick Space Glass Shelf", "Dispenser Guard", "Ice Bucket", "Ice Tray(In Freezer)"],
                 ["Cooktop Burner Cap", "Cooktop Burner Head", "Left Burner Grate", "Center Burner Grate", "Right Burner Grate", "Plate Griddle", "Wire Rack", "Bulb Lamp", "Anti-Tip Bracket", "Knob Dial", "Leveling Leg", "LP Kit", "Work Grate", "Smart Divider", "Filler Kit", "Temp Probe", "Gliding Rack", "Cerama Bryte", "Partition", "Recessed Rack", "Reservoir"],
                 ["Wrench", "Bolt Hole Covers", "Water Supply Hose(Hot)", "Water Supply Hose(Cold)", "Hose Guide", "Filter Cover", "Drain Cap", "Debris Filter Cap", "Assy Drawer", "Assy Detergent", "Cap Rinse", "Assy Case Detergetnt"],
                 ["Y-connector", "Short Inlet Hose", "Long Inlet Hose", "Rubber Washer", "DIE RACK DRY", "Assy Case Filter", "Flexible Rack", "Dry Sheet Case"],
                  ["Kick Plate", "ROLLER Low Basket", "Upper Basket", "Fuse", "Installation Kit", "Lower Nozzle"],
                 ["Glass Tray", "Roller Guide Ring", "Grease Filter", "Charcoal Filter", "Exhaust Adaptor", "Hardware Kit", "High Rack", "Low Rack", "Medium Rack", "Shelf", "Grille", "Stirrer Cover", "Cooktop Lamp-Incandescent", "Cooktop Lamp-Halogen", "Cooktop Lamp-LED", "Lamp Cover", "Holder Rack"]];
  var partName = [["ASSY GUARD-DAIRY","ASSY GUARD-REF","ASSY SHELF-SLIDE REF", "ASSY GUARD-CAN CARRY", "ASSY CASE VEG-LEFT", "ASSY CASE-RIGHT", "ASSY CASE PANTRY", "ASSY GUARD FRE", "ASSY TRAY-DRAWER BOX", "ASSY SHELF-INSERT REF", "ASSY SHELF-QUICK SPACE", "ASSY GUARD-DISPENSER", "ASSY TRAY-ICE BUCKET", "CASE-ICE CUBE"],
                  ["Burner Cap", "Burner Head", "Assy Grate Left Coating", "Assy Grate Center Coating", "Assy Grate Right Coating", "Plate Griddle", "Rack Flat", "Assy Lamp Bulb", "Assy Bracket-Anti Tip", "Knob Dial", "Leg-Leveling", "Assy LP Kit", "Assy Grate", "Assy Partition Flex", "Assy Filler Kit", "Sensor Probe", "Assy Wire Rack", "Assy Split Rack", "Assy Cleaning Kit", "Assy Partition Flex", "Rack Wire Bottom", "Reservoir"],
                 ["Wrench", "Bolt Hole Covers", "Water Supply Hose(Hot)", "Water Supply Hose(Cold)", "Hose Guide", "Filter Cover", "Drain Cap", "Debris Filter Cap", "Assy Drawer", "Assy Detergent", "Cap Rinse", "Assy Case Detergetnt"],
                 ["Y-connector", "Short Inlet Hose", "Long Inlet Hose", "Rubber Washer", "DIE RACK DRY", "Assy Case Filter", "Flexible Rack", "Dry Sheet Case"],
                  ["COVER-FRONT LOWER", "ROLLER-BASKET", "ASSY-BASKET", "FUSE-CARTRIDGE", "ASSY-INSTALL KIT", "ASSY-NOZZLE"],
                 ["Tray Cooking", "Assy Guide Roller", "Filter Air", "Filter Charcoal", "Assy Hood Damper", "Assy Hard Ware", "Assy Wire Rack-High", "Assy Wire Rack-Low", "Assy Wire Rack-Medium", "Shelf", "Grille", "Cover Stirrer", "Lamp Incandescent", "Lamp Halogen", "Lamp LED", "Glass Cooktop Lamp", "Holder Rack"]];
  var ncpArr = [["Fridge Part Needed", "NCP List", "the cx is needing a replacement part for the fridge", "NCP Order"],
               ["Range Part Needed", "NCP List", "a replacement part is needed for the range", "NCP Order"],
               ["Washer Part Needed", "NCP List", "a replacement part is needed for the washer", "NCP Order"],
               ["Dryer Part Needed", "NCP List", "a replacement part is needed for the dryer", "NCP Order"],
                ["Dishwasher Part Needed", "NCP List", "a replacement part is needed for the dishwasher", "NCP Order"],
               ["Microwave Part Needed", "NCP List", "a replacement part is needed for the microwave", "NCP Order"]];
  var copyArr = [];

  function noChargeParts(index){
    var x = document.getElementById("ncp");
    var y = document.getElementById("issues");
    x.style.display = "block";
    y.style.height = "250px";
    var n = document.getElementById("partList");
    //console.log(index);
    var len = copyArr.length;
    
    if(copyArr.length > 0){
      for(var i = 0; i < len; i++){
        n.remove("<option>"+copyArr[i]+"</option>");
        //console.log(copyArr[i]);
        copyArr.pop();
      }
      //copyArr = "";
    }
    
    for(var i = 0; i < arrParts[index].length; i++){
      console.log(arrParts[index].length);
      var option = document.createElement("option");
      option.text = arrParts[index][i];
      console.log(option.text);
      copyArr.push(option.text);
      n.add(option);
    }
    //console.log(option);
    //n.remove("<option>Dispenser Guard</option>");
  }

  function selected(){
    var n = document.getElementById("case");
    var choice = n.options[n.selectedIndex].value;
    var index = choice.slice(3,4);
    global_index = index-1;
    
    if(choice.slice(0,3) == "NCP"){
      //console.log(index-1);
      noChargeParts(index-1);
    }else{
      troubleshoot(choice);
    }    
    //alert(n.options[n.selectedIndex].text+" Issue added to text");
  }

  function addPart(choice, val, reason, name){
    var textInput = document.getElementById("textInput");
    var lines = textInput.value.split("\n");
    var issue = "";
    var ncp = choice + ", " + val;
    var sentence = ", the " + name + "(s) is " + reason;
    
    if(!trouble){
        for(var i = 0; i < lines.length; i++){
          if(lines[i][0] == "1"){
            if(lines[i].length < 14){
              lines[i] += ncpArr[global_index][0];
              issue += ncpArr[global_index][0];
            }else{
              issue += lines[i].slice(12, lines[i].length);
              //issue = "it changed";
            }
          }else if(lines[i][0] == "2"){
            if(lines[i].length < 20){
               lines[i] += ncpArr[global_index][1];
            }
            //lines[i] += "n/a";
          }else if(lines[i][0] == "3"){
            lines[i] += ncpArr[global_index][2] + sentence;
          }else if(lines[i][0] == "5"){
            lines[i] += ncpArr[global_index][3];
          }else if(lines[i][0] == "8"){
            //lines[i] += ncp;
            lines[i] = lines[i].slice(0,21) + ncp;
          }else if(lines[i][0] == "I"){
            lines[i] += issue;
            //console.log(issue);
          }else if(lines[i][1] == "c"){
            if(ncpArr[global_index][3] == "Service Order"){
              lines[i] += "service";
            }else{
              lines[i] += "none";
            }
          }else if(lines[i][9] == "P"){
            if(lines[i].length < 14){
               lines[i] += "n/a";
            }
          }else if(lines[i][0] == "P"){
            if(ncpArr[global_index][3] == "Service Order"){
              lines[i] += "NP";
            }else{
              lines[i] += "n/a";
            }
          }
          lines[i] += "\n";
        }
      //trouble = true;
    }
    if(trouble){
       for(var i = 0; i < lines.length; i++){
         if(lines[i][0] == "3"){
            lines[i] += sentence;
          }else if(lines[i][0] == "8"){
            //lines[i] += ncp;
            lines[i] += "\n" + ncp;
          }
         lines[i] += "\n";
       }
    }
    trouble = true;
    textInput.innerHTML = lines.join("");
  }

  function showPart(){
    var n = document.getElementById("partList");
    var count = document.getElementById("count");
    var m = document.getElementById("reason");
    var name = n.options[n.selectedIndex].value;
    var reason = m.options[m.selectedIndex].text;
    var choice = partName[global_index][n.selectedIndex];
    
    addPart(choice, count.value, reason, name);
  }