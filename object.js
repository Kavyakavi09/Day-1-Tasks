/*2) Write a blog about objects and its internal representation in Javascript

JAVASCRIPT OBJECT

* A JavaScript object is a collection of named values.

* JavaScript variables can also contain many values.

* Objects are variables too. But objects can contain many values.

* Object values are written as name : value pairs (name and value separated by a colon).

* Let's create an example for employee status using the object.

* Syntax: var <object-name> = {key1: value1, key2: value2,... keyN: valueN};*/

/*let Employee = {
      Name : "Kavya K",
      Age  : 23,
      DOB: "14.5.1998",
      Empid: 9783,
      Designation: "Online Tutor",
      Department: "Math",
      Company: "Focus Edumatics PVT Ltd",
      DOJ: "April 2021",
      Experience: "8 months",
      Rating: "Good"
}/*

/* OBJECT PROPERTIES
  * The named values, in JavaScript objects, are called properties.

  * Properties are the values associated with a JavaScript object.

  * For Example: " Name" is a property and " Kavya K" is a value.

  * Properties can usually be changed, added, and deleted, but some are read only.

  The syntax to access a property from an object is: objectName.property  or 
objectName["property"]  or objectName[expression] */

    // For Example
     
    //  console.log(Employee);
       //console.log(Employee.DOB);

      /* JavaScript for in Loop

      Syntax: 
      for (let variable in object) {
         code to be executed
          }*/

    // for(let i in Employee){
    //     console.log(i,Employee[i])
    // }


    /*Adding New Properties:
    You can add new properties to an existing object by simply giving it a value.
    
    Assume that the Employee object already exists - you can then give it new properties.*/
       
    //   Employee.Nationality = "Indian";
    //   console.log(Employee)

      /*Deleting Properties:
         The delete keyword deletes a property from an object.*/

        //  delete Employee.Age;
        //  console.log(Employee)

         //Nested Objects 
        // Values in an object can be another object.

        let Employee = {
            Name : "Kavya K",
            Age  : 23,
            DOB: "14.5.1998",
            Empid: 9783,
            Designation: "Online Tutor",
            Department: "Math",
            Company: "Focus Edumatics PVT Ltd",
            DOJ: "April 2021",
            Experience: "8 months",
            Rating: "Good",
            Address:{
                dno:'123',
                appartment:'Tellus Avenue',
                city:'Coimbatore',
                 zipcode:'5646546'
            }
      }
                console.log(Employee.Address)