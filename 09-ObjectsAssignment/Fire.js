float[][] fire = new float [100000][15];
float currentflamef,nextflamef;
int currentflame=0,nextflame;
void setup(){
  size(400,400);
  rectMode(CENTER);
  smooth();
  noStroke();
  frameRate(60);
}
void draw(){
  background(200);
  if(mousePressed==true){
    create_fire();
  }
  update_fire(); 
  draw_fire();
}
void update_fire(){
  for(int flame=0 ; flame<100000 ; flame++){
    if(fire[flame][0]==1){

      if(get(int(fire[flame][1]),int(fire[flame][2]))>200){
        fire[flame][0]=0;
      }
      fire[flame][1]=fire[flame][1]+fire[flame][5]*cos(fire[flame][3]);
      fire[flame][2]=fire[flame][2]+fire[flame][5]*sin(fire[flame][3]);
    }
    fire[flame][7]+=1;
    if(fire[flame][7]>fire[flame][6]){
      fire[flame][0]=0;
    }
  }
}
void draw_fire(){
  for(int flame=0 ; flame<currentflame ; flame++){
    if(fire[flame][0]==1){
      fill(fire[flame][9],fire[flame][10],0,40);
      pushMatrix();
      translate(fire[flame][1],fire[flame][2]);
      rotate(fire[flame][8]);
      rect(0,0,fire[flame][4],fire[flame][4]);
      popMatrix();
    }
  }
}
void create_fire(){
  nextflame=currentflame+10;
  for(int flame=currentflame ; flame<nextflame ; flame++){
    fire[flame][0]=1;
    fire[flame][1]=mouseX;
    fire[flame][2]=mouseY;
    fire[flame][3]=random(0,PI*2);//angle
    fire[flame][4]=random(5,15);//size
    fire[flame][5]=random(.5,1);//speed
    fire[flame][6]=random(5,20)/fire[flame][5];//maxlife
    fire[flame][7]=0;//currentlife
    fire[flame][8]=random(0,TWO_PI);
    fire[flame][9]=random(200,255);//red
    fire[flame][10]=random(50,150);//green
  }
  currentflame=nextflame;
}