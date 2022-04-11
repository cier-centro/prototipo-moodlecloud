var scormData={
    //children values has been excluded

    //user id in the LMS database
    studentId : 0,

    // "Lastname, Name" values registered in the LMS db
    studentName:"",

    // last user location in the lesson
    lessonLocation:"",

    //"no-credit" means the data will not be used to grade the students, "credit" means it will /// just use these both values
    credit:"no-credit",

    //use this possible values: "passed": user completed every activity and approved all of them -- "completed": user completed every activity. This value doesn't imply approvation
    //"failed": the user failed the content. This value doesn't imply the course has been completed -- "incomplete": user has not been completed the course activities. This value doesn't imply approvation
    //"browsed": the user loaded the content in the LMS -- "not attempted": the course has not been loaded in the LMS
    lessonStatus:"not attempted",

    // use this possible values: "ab-initio": first time using the content, "resume": the content has been used previously, "":other
    entry : "",

    //value between 0 to 100, that store the score in this attempt
    scoreRaw:0,

    //the best score
    scoreMax:0,

    //the worst score
    scoreMin:0,

    //accumulated sessions time
    totalTime:0,

    //current session time
    sessionTime:0,

    //language
    language:"Spanish",
    
    //customData
    suspendData:"default"

}

