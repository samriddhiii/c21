function isTouching(MovingObject, fixedObject)
{
  if ((MovingObject.x-fixedObject.x)<=(MovingObject.width+fixedObject.width)/2 
    && (fixedObject.x- MovingObject.x)<= (MovingObject.width+fixedObject.width)/2
    && (MovingObject.y-fixedObject.y)<=(MovingObject.height+fixedObject.height)/2
    && (fixedObject.y- MovingObject.y)<=(MovingObject.height+fixedObject.height)/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function bounceoff(myrect, urrect){

  if(myrect.x-urrect.x <= (myrect.width + urrect.width)/2 
  &&urrect.x-myrect.x <= (myrect.width + urrect.width)/2 ){
    myrect.velocityX= -1 * myrect.velocityX;

}
}