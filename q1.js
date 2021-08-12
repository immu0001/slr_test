const person = {
    firstname: 'Juan',
    lastname: 'Dela Cruz',
    birthday: '01/01/2000',
    }

const ToInitials = (str)=>{return str.charAt(0).toUpperCase()};

const AgeCalculator = (str)=> {return new Date().getFullYear() - new Date(str).getFullYear()};

const AgeClassifier = (age)=> {
    if (age >=0 && age<=12){return 'Young'}
    else if (age >=13 && age<=19){return 'Teen'}
    else if (age >=20 && age<=59){return 'Adult'}
    else if (age >=60){return 'Senior'}
}

console.log("Initials: " + ToInitials(person.firstname) + ToInitials(person.lastname) + " " + 
            "Age: "+ AgeCalculator(person.birthday) + " " + 
            AgeClassifier(AgeCalculator(person.birthday))
)