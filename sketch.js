navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat = 39.74626161164781 ;
let userLon = 140.66790444431405;

let mousePos;


// coordonnées de l'edna

let edna_lat = 47.2040006;
let edna_lng = -1.5630606;

// coordonnées de notre 1e zone
let zone1_lat = 39.67761529223321;
let zone1_lng =  140.56612837553843;

let zone2_lat = 39.95431033556089;
let zone2_lng = 140.85425338400591;

let zone3_lat = 39.761395213197865;
let zone3_lng =  140.79897853243753;

let zone4_lat = 39.73960033359239;
let zone4_lng = 140.7231977801459;

let zone5_lat = 39.608347224697035;
let zone5_lng = 140.65140961461194;

let zone6_lat = 39.59566565082562;
let zone6_lng =  140.56626292522392;

let zone7_lat = 39.76045234961047;
let zone7_lng = 140.6495727578544;

let zone8_lat = 39.58482977903669;
let zone8_lng =  140.61570285478157;

let zone9_lat = 39.60116089971906;
let zone9_lng = 140.561648;

let initial_lat =39.74626161164781 ;// latitude de départ
let initial_lng = 140.66790444431405;// longitude de départ

//son et autre

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;

// Toutes nos images
let img1; // image de l'épingle
let zone1_img1; // Ohkhuninusi Shrine
let zone2_img2; // Hachimantai Dragon Eye
let zone3_img3; //  Mont Akita Komagatake
let img3; // Mont Akita Komagatake
let zone4_img4; // Tazawako Konjiki Daikannon
let zone5_img5; // Dakigaeri Valley
let zone6_img6; // Tennei-ji Temple
let zone7_img7; //  Gozanoishi Shrine 
let zone8_img8; // Unganji Temple
let zone9_img9; // Ishiguro Samourai House




// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;
let avatar;


// Calcul des distances
let distance_edna_avatar;
let distance_source1_avatar;
let distance_zone1_avatar;
let distance_source2_avatar;
let distance_zone2_avatar;
let distance_source3_avatar;
let distance_zone3_avatar;
let distance_source4_avatar;
let distance_zone4_avatar;
let distance_source5_avatar;
let distance_zone5_avatar;
let distance_source6_avatar;
let distance_zone6_avatar;
let distance_source7_avatar;
let distance_zone7_avatar;
let distance_source8_avatar;
let distance_zone8_avatar;
let distance_source9_avatar;
let distance_zone9_avatar;

// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 
// 


function preload() {
  
avatar = loadImage('avatar.png')
img1 = loadImage('epingle.png'); // on charge un fichier png dans la variable
zone1_img1 = loadImage('assets/zone1.png'); 
sound1 = loadSound('voix1.mp3'); 
sound1bis = loadSound('Fontaine de temple japonais .mp3');
sound2 = loadSound('voix2.mp3');
  zone2_img2 = loadImage('lacbleu.png'); // image du dragon eye
  sound2bis = loadSound('Pas dans la neige.mp3');
sound3 = loadSound('voix3.mp3');
sound3bis = loadSound('Ruisseau de montagne .mp3');
  zone3_img3 = loadImage('assets/zone3.png');
  sound4 = loadSound('voix4.mp3');
  sound4bis = loadSound('Satsuma Biwa.mp3');
  zone4_img4 = loadImage('assets/zone4.png');
sound5 = loadSound('voix5.mp3');
sound5bis = loadSound('forêt.mp3');
  zone5_img5 = loadImage('assets/zone 5.png');
sound6 = loadSound('voix6.mp3');
sound6bis = loadSound('Pas rapides sur beton.mp3');
  zone6_img6 = loadImage('assets/Z6.png');
  sound7 = loadSound('voix7.mp3');
  sound7bis = loadSound('Velo vtt sur graviers .mp3');
 zone7_img7 = loadImage('assets/Z7.png');
sound8 = loadSound('voix8.mp3');
sound8bis = loadSound('Satsuma Biwa.mp3');
zone8_img8 = loadImage('Z8.png'); 
sound9 = loadSound('yooooooooooo.mp3');
sound9bis = loadSound('Satsuma Biwa.mp3');
 zone9_img9 = loadImage('assets/Z9.png'); 
  
}


// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 10,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
} // fin de la fonction setup


function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude
}

function draw(){
    
   // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let edna = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  let Zone1Pos = myMap.latLngToPixel(zone1_lat,zone1_lng); // on converti la position avec xy 

  let Zone2Pos = myMap.latLngToPixel(zone2_lat,zone2_lng); 
 
  let Zone3Pos = myMap.latLngToPixel(zone3_lat,zone3_lng); 

  let Zone4Pos = myMap.latLngToPixel(zone4_lat,zone4_lng); 

  let Zone5Pos = myMap.latLngToPixel(zone5_lat,zone5_lng); 
  let Zone6Pos = myMap.latLngToPixel(zone6_lat,zone6_lng); 
  let Zone7Pos = myMap.latLngToPixel(zone7_lat,zone7_lng); 
  let Zone8Pos = myMap.latLngToPixel(zone8_lat,zone8_lng); 
  let Zone9Pos = myMap.latLngToPixel(zone9_lat,zone9_lng); 
  
  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    //print("mousePos.lat = " + mousePos.lat);    
    //print("mousePos.lng = " + mousePos.lng);
    distance_edna_avatar = abs(edna_lat-avatarLat)+abs(edna_lng-avatarLng);
    print("distance_edna_avatar = " + distance_edna_avatar);
    
    distance_zone1_avatar = abs(zone1_lat-avatarLat)+abs(zone1_lng-avatarLng);
    //print("distance_zone1_avatar = " + distance_zone1_avatar);
    
     distance_zone2_avatar = abs(zone2_lat-avatarLat)+abs(zone2_lng-avatarLng);
    //print("distance_zone2_avatar = " + distance_zone2_avatar);
    
    distance_zone3_avatar = abs(zone3_lat-avatarLat)+abs(zone3_lng-avatarLng);
    //print("distance_zone3_avatar = " + distance_zone3_avatar);
    
    distance_zone4_avatar = abs(zone4_lat-avatarLat)+abs(zone4_lng-avatarLng);
    //print("distance_zone4_avatar = " + distance_zone4_avatar);
    
    distance_zone5_avatar = abs(zone5_lat-avatarLat)+abs(zone5_lng-avatarLng);
    //print("distance_zone5_avatar = " + distance_zone5_avatar);
    
    distance_zone6_avatar = abs(zone6_lat-avatarLat)+abs(zone6_lng-avatarLng);
    //print("distance_zone6_avatar = " + distance_zone6_avatar);
    
    distance_zone7_avatar = abs(zone7_lat-avatarLat)+abs(zone7_lng-avatarLng);
    print("distance_zone7_avatar = " + distance_zone7_avatar);
    
    distance_zone8_avatar = abs(zone8_lat-avatarLat)+abs(zone8_lng-avatarLng);
    print("distance_zone8_avatar = " + distance_zone8_avatar);
    
    distance_zone9_avatar = abs(zone9_lat-avatarLat)+abs(zone9_lng-avatarLng);
    print("distance_zone9_avatar = " + distance_zone9_avatar);
    
    
  }//fin de mousse pressed
  
  /*
  if(abs(edna_lat-mousePos.lat)<0.005 && abs(edna_lng-mousePos.lng)<0.005){
    print("l'utilisateur est entré dans la zone de l'EDNA")
  }
  */

  /////////////////////////////
  // EDNA /////////////////////
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_edna_avatar<0.005){
    //print("l'avatar est entré dans la zone de l'EDNA")
  }
  // si on sort de la zone
  if(distance_edna_avatar>0.005){
   // print("l'avatar est sorti de la zone de l'EDNA")
  }
  
  /////////////////////////////
  // ZONE 1 ///////////////////
  /////////////////////////////
   if(distance_zone1_avatar<  0.025028590525003835   
    
&& ! sound1.isPlaying()){    print("l'avatar est entré dans la zone1")
  sound1.play();
  }
  // si on sort de la zone
  if(distance_zone1_avatar>  0.025028590525003835   
    ){
    //print("l'avatar est sorti de la zone1")
     sound1.stop();
  }
  
  
  /////////////////////////////
  // ZONE 1 BIS ///////////////////
  /////////////////////////////
   if(distance_zone1_avatar<  0.025028590525003835   
    
&& ! sound1bis.isPlaying()){    print("l'avatar est entré dans la zone1")
  sound1bis.play();                       
  }
  // si on sort de la zone
  if(distance_zone1_avatar>  0.025028590525003835   
    ){
    //print("l'avatar est sorti de la zone1")
     sound1bis.stop();
  }
  
  /////////////////////////////
  // ZONE 2 ///////////////////
  /////////////////////////////
   if(distance_zone2_avatar<  0.014472380478729008
&& ! sound2.isPlaying()){    print("l'avatar est entré dans la zone2")
  sound2.play();
  }
  // si on sort de la zone
  if(distance_zone2_avatar>  0.014472380478729008 
    ){
    //print("l'avatar est sorti de la zone2")
     sound2.stop();
  }
  
   /////////////////////////////
  // ZONE 2 BIS ///////////////////
  /////////////////////////////
   if(distance_zone2_avatar<  0.014472380478729008
&& ! sound2bis.isPlaying()){    print("l'avatar est entré dans la zone2")
  sound2bis.play();
  }
  // si on sort de la zone
  if(distance_zone2_avatar>  0.014472380478729008 
    ){
    //print("l'avatar est sorti de la zone2")
     sound2bis.stop();
  }

  
  /////////////////////////////
  // ZONE 3 ///////////////////
  /////////////////////////////
   if(distance_zone3_avatar<  0.022100343848720172 
&& ! sound3.isPlaying()){    print("l'avatar est entré dans la zone3")
  sound3.play();
  }
  // si on sort de la zone
  if(distance_zone3_avatar>  0.022100343848720172  
    ){
    //print("l'avatar est sorti de la zone3")
     sound3.stop();
  }
  
  /////////////////////////////
  // ZONE 3 BIS ///////////////////
  /////////////////////////////
   if(distance_zone3_avatar<  0.022100343848720172 
&& ! sound3bis.isPlaying()){    print("l'avatar est entré dans la zone3")
  sound3bis.play();
  }
  // si on sort de la zone
  if(distance_zone3_avatar>  0.022100343848720172  
    ){
    //print("l'avatar est sorti de la zone3")
     sound3bis.stop();
  }

  /////////////////////////////
  // ZONE 4 ///////////////////
  /////////////////////////////
   if(distance_zone4_avatar<  0.013474774269774059  
&& ! sound4.isPlaying()){    print("l'avatar est entré dans la zone4")
  sound4.play();
  }
  // si on sort de la zone
  if(distance_zone4_avatar>  0.013474774269774059  
    ){
    //print("l'avatar est sorti de la zone4")
     sound4.stop();
  }
  
  /////////////////////////////
  // ZONE 4 BIS ///////////////////
  /////////////////////////////
   if(distance_zone4_avatar<  0.013474774269774059  
&& ! sound4bis.isPlaying()){    print("l'avatar est entré dans la zone4")
  sound4bis.play();
  }
  // si on sort de la zone
  if(distance_zone4_avatar>  0.013474774269774059  
    ){
    //print("l'avatar est sorti de la zone4")
     sound4bis.stop();
  }
  
  /////////////////////////////
  // ZONE 5 ///////////////////
  /////////////////////////////
   if(distance_zone5_avatar<  0.0172150576894623
&& ! sound5.isPlaying()){    print("l'avatar est entré dans la zone5")
  sound5.play();
  }
  // si on sort de la zone
  if(distance_zone5_avatar>  0.0172150576894623 
    ){
    //print("l'avatar est sorti de la zone5")
     sound5.stop();
  }
  
   /////////////////////////////
  // ZONE 5 BIS ///////////////////
  /////////////////////////////
   if(distance_zone5_avatar<  0.0172150576894623
&& ! sound5bis.isPlaying()){    print("l'avatar est entré dans la zone5")
  sound5bis.play();
  }
  // si on sort de la zone
  if(distance_zone5_avatar>  0.0172150576894623 
    ){
    //print("l'avatar est sorti de la zone5")
     sound5bis.stop();
  }
  
  /////////////////////////////
  // ZONE 6 ///////////////////
  /////////////////////////////
   if(distance_zone6_avatar<  0.004793392190464374 
&& ! sound6.isPlaying()){    print("l'avatar est entré dans la zone6")
  sound6.play();
  }
  // si on sort de la zone
  if(distance_zone6_avatar>  0.004793392190464374 
    ){
    //print("l'avatar est sorti de la zone6")
     sound6.stop();
  }
  
  /////////////////////////////
  // ZONE 6 BIS ///////////////////
  /////////////////////////////
   if(distance_zone6_avatar<  0.004793392190464374 
&& ! sound6bis.isPlaying()){    print("l'avatar est entré dans la zone6")
  sound6bis.play();
  }
  // si on sort de la zone
  if(distance_zone6_avatar>  0.004793392190464374 
    ){
    //print("l'avatar est sorti de la zone6")
     sound6bis.stop();
  }
  
  /////////////////////////////
  // ZONE 7 ///////////////////
  /////////////////////////////
   if(distance_zone7_avatar<  0.029907854911300547 
&& ! sound7.isPlaying()){    print("l'avatar est entré dans la zone7")
  sound7.play();
  }
  // si on sort de la zone
  if(distance_zone7_avatar>  0.029907854911300547 
    ){
    print("l'avatar est sorti de la zone2")
     sound7.stop();
  }
  
  /////////////////////////////
  // ZONE 7 BIS ///////////////////
  /////////////////////////////
   if(distance_zone7_avatar<  0.029907854911300547 
&& ! sound7bis.isPlaying()){    print("l'avatar est entré dans la zone7")
  sound7bis.play();
  }
  // si on sort de la zone
  if(distance_zone7_avatar>  0.029907854911300547 
    ){
    print("l'avatar est sorti de la zone2")
     sound7bis.stop();
  }

  /////////////////////////////
  // ZONE 8 ///////////////////
  /////////////////////////////
   if(distance_zone8_avatar<  0.015031016870246106 
&& ! sound8.isPlaying()){    print("l'avatar est entré dans la zone8")
  sound8.play();
  }
  // si on sort de la zone
  if(distance_zone8_avatar>  0.015031016870246106 
    ){
    //print("l'avatar est sorti de la zone8")
     sound8.stop();
  }
  
  /////////////////////////////
  // ZONE 8 BIS ///////////////////
  /////////////////////////////
   if(distance_zone8_avatar<  0.015031016870246106 
&& ! sound8bis.isPlaying()){    print("l'avatar est entré dans la zone8")
  sound8bis.play();
  }
  // si on sort de la zone
  if(distance_zone8_avatar>  0.015031016870246106 
    ){
    //print("l'avatar est sorti de la zone8")
     sound8bis.stop();
  }
  
  /////////////////////////////
  // ZONE 9 ///////////////////
  /////////////////////////////
   if(distance_zone9_avatar<  0.0032771592039608777
&& ! sound9.isPlaying()){    print("l'avatar est entré dans la zone9")
  sound9.play();
  }
  // si on sort de la zone
  if(distance_zone9_avatar>  0.0032771592039608777
    ){
    //print("l'avatar est sorti de la zone9")
     sound9.stop();
  }
  
   /////////////////////////////
  // ZONE 9 BIS ///////////////////
  /////////////////////////////
   if(distance_zone9_avatar<  0.0032771592039608777
&& ! sound9bis.isPlaying()){    print("l'avatar est entré dans la zone9")
  sound9bis.play();
  }
  // si on sort de la zone
  if(distance_zone9_avatar>  0.0032771592039608777
    ){
    //print("l'avatar est sorti de la zone9")
     sound9bis.stop();
  }
  
  // Images des 9 épingles dans les zones
  image(img1,Zone1Pos.x ,Zone1Pos.y,30,200);
  imageMode(CENTER);
  image(img1,Zone2Pos.x ,Zone2Pos.y,30,200 );
  imageMode(CENTER);
  image(img1,Zone3Pos.x ,Zone3Pos.y, 30,200  );
  imageMode(CENTER);
  image(img1,Zone4Pos.x ,Zone4Pos.y, 30,200);
  imageMode(CENTER);
  image(img1,Zone5Pos.x ,Zone5Pos.y, 30,200);
  imageMode(CENTER);
  image(img1,Zone6Pos.x ,Zone6Pos.y,30,200 );
  imageMode(CENTER);
  image(img1,Zone7Pos.x ,Zone7Pos.y,30,200);
  imageMode(CENTER);
  image(img1,Zone8Pos.x ,Zone8Pos.y, 30,200);
  imageMode(CENTER);
  image(img1,Zone9Pos.x ,Zone9Pos.y, 30,200);
  imageMode(CENTER);
  
  image(avatar,avatarPosX ,avatarPosY,20,50 );
  imageMode(CENTER);
  
 

  
  //fill("red");
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  //circle(Zone1Pos.x,Zone1Pos.y,25);
  //fill(0);
   // Images des lieux dans chaque zone
    text("Ohkhuninusi Shrine",Zone1Pos.x, Zone1Pos.y);
   image(zone1_img1,Zone1Pos.x ,Zone1Pos.y,50,50);
  imageMode(LEFT);
  
    text("Hachimantai Dragon Eye",Zone2Pos.x, Zone2Pos.y);
  image(zone2_img2,Zone2Pos.x ,Zone2Pos.y,50,50);
  
    text("Mont Akita Komagatake",Zone3Pos.x, Zone3Pos.y);
 image(zone3_img3,Zone3Pos.x ,Zone3Pos.y,50,50);
   
    text("Tazawako Konjiki Daikannon",Zone4Pos.x, Zone4Pos.y);
  image(zone4_img4,Zone4Pos.x ,Zone4Pos.y,50,50);
    
    text("Dakigaeri Valley",Zone5Pos.x, Zone5Pos.y);
image(zone5_img5,Zone5Pos.x ,Zone5Pos.y,50,50);
  
    text("Tennei-ji Temple",Zone6Pos.x, Zone6Pos.y);
  image(zone6_img6,Zone6Pos.x ,Zone6Pos.y,50,50);
     
    text(" Gozanoishi Shrine ",Zone7Pos.x, Zone7Pos.y);
  image(zone7_img7,Zone7Pos.x ,Zone7Pos.y,50,50);
  
    text("Unganji Temple",Zone8Pos.x, Zone8Pos.y);
  image(zone8_img8,Zone8Pos.x ,Zone8Pos.y,50,50);
  
    text("Ishiguro Samourai House",Zone9Pos.x, Zone9Pos.y);
image(zone9_img9,Zone9Pos.x ,Zone9Pos.y,50,50);
} // fin de la fonction draw

function keyPressed(){
  
  if(key == 'i'){
    print("distance lat edna-souris = " + abs(edna_lat-mousePos.lat)); 
    print("distance lng edna-souris = " + abs(edna_lng-mousePos.lng));
  }
  
}






