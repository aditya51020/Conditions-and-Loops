let studentMarks = 33

if(studentMarks > 90){
    console.log(`student have ${studentMarks} and recived A grade`);
}
else if(studentMarks >= 70 && studentMarks <= 90 ){
    console.log(`student have ${studentMarks} and recived B grade`);
}

else if(studentMarks >= 50 && studentMarks <= 70 ){
    console.log(`student have ${studentMarks} and recived C grade`);
}

else{
    console.log(`student have ${studentMarks} and recived F grade`);
}