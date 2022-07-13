export function setErrorTruthy(objectToBeIteratedThrough: any, objectHoldingErrorStateThatIsReturned: any) {
  if(objectToBeIteratedThrough){
    Object.keys(objectHoldingErrorStateThatIsReturned).forEach((key: string) => {
      objectHoldingErrorStateThatIsReturned[key as keyof typeof objectHoldingErrorStateThatIsReturned] = false;
    })
    objectToBeIteratedThrough.forEach((element: any) => {
      objectHoldingErrorStateThatIsReturned[element.path as keyof typeof objectHoldingErrorStateThatIsReturned] = true;
    });
  }
  return objectHoldingErrorStateThatIsReturned;
}