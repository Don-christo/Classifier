let data = [
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1879-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1867-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1885-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1858-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1887-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1884-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1901-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', 
      dob: '1892-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1879-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1871-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1866-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1868-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ];

const maxAge = (arr) => {
    let max = 0;
    for(let i of arr){
        if(i.age > max){
            max = i.age
        }
    }
    return max
}

const sumAge = (arr) => {
    let sum = 0;
    for(let i of arr){
        sum += i.age
    }
    return sum
}

const sortRegNo = (arr) => {
    let regs = []
    for(let i of arr){
        regs.push(+i.regNo)
    }
    regs.sort((a,b) => a - b)
    return regs
}


function classifier(input) {

    let newInput = input.slice();

    let output = {}

    for(let i =0; i<newInput.length; i++){
        let Dob = new Date(newInput[i].dob).getFullYear()
        newInput[i].age = 2019 - Dob
    }

    newInput.sort((a,b) => a.age - b.age);


    //console.log(newInput);

    let groupedStudents = []

    for(let i of newInput){
        if (groupedStudents.length === 0){
            groupedStudents.push([i])
        }
    }


    for(let i = 1; i<newInput.length; i++){

        let subArr = groupedStudents[groupedStudents.length - 1]
        let user = subArr[subArr.length - 1]

        if(newInput[i].age - user.age > 5 || subArr.length === 3){
            groupedStudents.push([newInput[i]])
        } else{
            subArr.push(newInput[i])
        }
    }

//console.log(groupedStudents)
  
        output.noOfGroups = groupedStudents.length


    for(let i = 0; i<groupedStudents.length; i++){
        output[`group${i+1}`] = {
            members: groupedStudents[i],
            oldest: maxAge(groupedStudents[i]),
            sum: sumAge(groupedStudents[i]),
            regNos: sortRegNo(groupedStudents[i])
        }
    }
        
 return output

}

console.log(classifier(data))

export default classifier;
