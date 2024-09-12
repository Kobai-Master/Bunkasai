var Switch = document.getElementById("SW") ;
var Floor = 0 ;
var Blocks = [];
var BlockP = [];
var MapList = [];
var PlaceIn = [];
var PlaceP = "";
var InfoPlace = "";
var NowNum = -1;
for ( i=0 ; i < 52 ; i++ ) {
    PlaceIn.push([])
    Blocks.push(document.getElementById("B"+String( i )))
    BlockP.push("<span>")
};
var Corridor = [];
for ( i=0 ; i < 3 ; i++ ) {
    Corridor.push(document.getElementById("CO"+String( i+1 )))
};
var DNotE = [];
for ( i=0 ; i < 4 ; i++ ) {
    DNotE.push(document.getElementById("NE"+String( i+1 )))
};
function FSW() {
    Floor = ( Floor+1 )%2
    Switch.innerHTML = "<span>"+String( Floor+1 )+"F</span>"
    for ( i=0 ; i < Blocks.length ; i++ ) {
        if (Blocks[i].classList.contains("VV")) {
            Blocks[i].classList.remove("VV")
            Blocks[i].classList.add("HD")
        } else if (Blocks[i].classList.contains("HD")) {
            Blocks[i].classList.remove("HD")
            Blocks[i].classList.add("VV")
        }
    }
    for ( i=0 ; i < Corridor.length ; i++ ) {
        if (Corridor[i].classList.contains("VV")) {
            Corridor[i].classList.remove("VV")
            Corridor[i].classList.add("HD")
        } else if (Corridor[i].classList.contains("HD")) {
            Corridor[i].classList.remove("HD")
            Corridor[i].classList.add("VV")
        }
    }
    for ( i=0 ; i < DNotE.length ; i++ ) {
        if (DNotE[i].classList.contains("VV")) {
            DNotE[i].classList.remove("VV")
            DNotE[i].classList.add("HD")
        } else if (DNotE[i].classList.contains("HD")) {
            DNotE[i].classList.remove("HD")
            DNotE[i].classList.add("VV")
        }
    }
}
function Clicked(Num) {
    NowNum = Num
    document.getElementById("Place").innerHTML = "<span>"+Place[Num]+"</span>"
    PlaceP = ""
    for ( i=0 ; i < PlaceIn[Num].length ; i++ ) {
        PlaceP += '<div class="Links" onclick="InfoOp('+ String( PlaceIn[Num][i] ) +')"><span>'+MapList[PlaceIn[Num][i]][0]+'</span></div>'
    }
    document.getElementById("Link").innerHTML = '<div id="Place"><span>'+Place[Num]+'</span></div>'+PlaceP
}
function InfoOp(Num) {
    if ( Num == 0 ) {
        location.href = "../html/3_TTab.html"
    } else {
        document.getElementById("Info").classList.remove("HD")
        document.getElementById("InfoBG").classList.remove("HD05")
        document.getElementById("Info").classList.add("VV")
        document.getElementById("InfoBG").classList.add("VV05")
        document.getElementById("InfoGr").innerText = String( MapList[Num][0] );
        InfoPlace = "";
        for ( i=0 ; i<MapList[Num][1].length ; i++ ) {
            InfoPlace += Place[MapList[Num][1][i]] + " "
        }
        document.getElementById("InfoPl").innerText = String( InfoPlace );
        document.getElementById("InfoTi").innerText = String( MapList[Num][2] );
        document.getElementById("InfoEx").innerHTML = String( MapList[Num][3] );
    }
}
function InfoCl(){
    document.getElementById("Info").classList.remove("VV")
    document.getElementById("InfoBG").classList.remove("VV05")
    document.getElementById("Info").classList.add("HD")
    document.getElementById("InfoBG").classList.add("HD05")
}
(async function getData() {
    try {
        const url = "../js/database.json";
        const response = await fetch(url);
        const json = await response.json();
        MapList = json.MapList;
        Place = json.Place;
      for ( i=0 ; i < MapList.length ; i++ ) {
        for ( j=0 ; j < MapList[i][1].length ; j++ ) {
            if ( i != 0 ) {
                if ( BlockP[MapList[i][1][j]] == "<span>" ) {
                    Blocks[MapList[i][1][j]].classList.add("Exist")
                } else {
                    BlockP[MapList[i][1][j]] += "<br>"
                }
                BlockP[MapList[i][1][j]] += String( MapList[i][0] )
            }
            PlaceIn[MapList[i][1][j]].push( i )
        }
      }
      for ( i=0 ; i < Blocks.length ; i++ ) {
        console.log(BlockP[i])
        Blocks[i].innerHTML = BlockP[i] + "</span>"
      }
    } catch (error) {
      console.error(error.message);
    }
  })();
